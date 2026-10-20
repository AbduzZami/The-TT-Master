# Builds model/athlete.json: a skinned, region-coloured athlete from the CC BY 4.0
# "HUMAN_BODY" base mesh (model/source/human_body.glb). Run: python3 model/rig.py
import os, json, struct, base64, numpy as np
HERE = os.path.dirname(os.path.abspath(__file__))

def load_glb(path):
    d = open(path, 'rb').read()
    jl = struct.unpack('<I', d[12:16])[0]; j = json.loads(d[20:20 + jl])
    off = 20 + jl; bl = struct.unpack('<I', d[off:off + 4])[0]; b = d[off + 8:off + 8 + bl]
    def acc(i):
        a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]
        comp = {5126: np.float32, 5125: np.uint32, 5123: np.uint16}[a['componentType']]
        n = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[a['type']]
        start = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
        arr = np.frombuffer(b, dtype=comp, count=a['count'] * n, offset=start)
        return arr.reshape(a['count'], n) if n > 1 else arr
    p = j['meshes'][0]['primitives'][0]
    return (acc(p['attributes']['POSITION']).astype(np.float64), acc(p['attributes']['NORMAL']).astype(np.float64),
            acc(p['indices']).astype(np.int64))

P0, N0, I = load_glb(os.path.join(HERE, 'source', 'human_body.glb'))
# source is Z-down/Y-forward: convert to Y-up, facing +Z, feet on the floor, 1.75 m tall
V = np.stack([P0[:, 0], -P0[:, 2], P0[:, 1]], 1); V[:, 1] -= V[:, 1].min(); V *= 1.75 / V[:, 1].max()
F = I.reshape(-1, 3)
N = np.stack([N0[:, 0], -N0[:, 2], N0[:, 1]], 1); N /= np.linalg.norm(N, axis=1)[:, None] + 1e-9

def mirror(p): return [-p[0], p[1], p[2]]
J = {  # rest joints (model faces +Z, its right side is -X)
 'hipC': [0, 0.93, 0], 'spine0': [0, 1.05, -0.01], 'chest0': [0, 1.28, -0.02], 'neck0': [0, 1.47, -0.05], 'head0': [0, 1.58, -0.01], 'headTop': [0, 1.76, 0],
 'shR': [-0.18, 1.42, -0.075], 'elR': [-0.35, 1.25, -0.085], 'wrR': [-0.535, 1.125, -0.078], 'tipR': [-0.70, 0.99, -0.05],
 'hpR': [-0.09, 0.93, 0.0], 'knR': [-0.12, 0.50, -0.01], 'anR': [-0.155, 0.085, -0.04], 'toR': [-0.165, 0.02, 0.17],
}
for k in ['sh', 'el', 'wr', 'tip', 'hp', 'kn', 'an', 'to']: J[k + 'L'] = mirror(J[k + 'R'])
J['hips0'] = [0, 0.88, 0]
BONES = [  # name, start, end, parent
 ('hips', 'hips0', 'spine0', None), ('spine', 'spine0', 'chest0', 'hips'), ('chest', 'chest0', 'neck0', 'spine'),
 ('neck', 'neck0', 'head0', 'chest'), ('head', 'head0', 'headTop', 'neck'),
 ('upperR', 'shR', 'elR', 'chest'), ('foreR', 'elR', 'wrR', 'upperR'), ('handR', 'wrR', 'tipR', 'foreR'),
 ('upperL', 'shL', 'elL', 'chest'), ('foreL', 'elL', 'wrL', 'upperL'), ('handL', 'wrL', 'tipL', 'foreL'),
 ('thighR', 'hpR', 'knR', 'hips'), ('shinR', 'knR', 'anR', 'thighR'), ('footR', 'anR', 'toR', 'shinR'),
 ('thighL', 'hpL', 'knL', 'hips'), ('shinL', 'knL', 'anL', 'thighL'), ('footL', 'anL', 'toL', 'shinL'),
]
names = [b[0] for b in BONES]
A = np.array([J[b[1]] for b in BONES], float); B = np.array([J[b[2]] for b in BONES], float)
adj = {i: {i} for i in range(len(BONES))}
for i, b in enumerate(BONES):
    if b[3]: p = names.index(b[3]); adj[i].add(p); adj[p].add(i)
# distance from every vertex to every bone segment
d = B - A; L2 = (d * d).sum(1)
t = np.clip(((V[:, None, :] - A[None]) * d[None]).sum(2) / L2[None], 0, 1)
proj = A[None] + t[..., None] * d[None]
dist = np.linalg.norm(V[:, None, :] - proj, axis=2)
# region guards: arms only bind to arm/chest bones, legs only to their side, etc.
for i, n in enumerate(names):
    if n.endswith('R'): dist[V[:, 0] > 0.04, i] += 1
    if n.endswith('L'): dist[V[:, 0] < -0.04, i] += 1
    if n in ('neck', 'head'): dist[(V[:, 1] < 1.47) | (np.abs(V[:, 0]) > 0.1), i] += 1
prim = dist.argmin(1)
W = np.zeros_like(dist)
sig = 0.022
for v in range(len(V)):
    cand = list(adj[prim[v]])
    dd = dist[v, cand]; w = np.exp(-(dd - dd.min()) / sig)
    W[v, cand] = w
# keep top 4
idx = np.argsort(-W, 1)[:, :4]; w4 = np.take_along_axis(W, idx, 1); w4 /= w4.sum(1, keepdims=True)
tp = t[np.arange(len(V)), prim]
# colour regions: 0 skin, 1 shirt, 2 shorts, 3 shoes, 4 socks, 5 hair
R = np.zeros(len(V), np.uint8)
pn = np.array(names)[prim]
y, z, x = V[:, 1], V[:, 2], V[:, 0]
torso = np.isin(pn, ['spine', 'chest', 'hips'])
shirt = ((torso | np.isin(pn, ['thighR', 'thighL'])) & (y >= 0.985)) | (np.isin(pn, ['upperR', 'upperL']) & (tp < 0.5))
neckline = (y > 1.43) & (np.abs(x) < 0.085) & (z > -0.02)
R[shirt & ~neckline & (y < 1.49)] = 1
shorts = ((torso | np.isin(pn, ['thighR', 'thighL'])) & (y < 0.985) & (y > 0.66))
R[shorts] = 2
R[(y < 0.2) & np.isin(pn, ['shinR', 'shinL', 'footR', 'footL'])] = 4
R[(y < 0.115) | np.isin(pn, ['footR', 'footL'])] = 3
hair = np.isin(pn, ['head', 'neck']) & (((y > 1.665) & (z < 0.055)) | (y > 1.725) | ((y > 1.58) & (z < -0.045)))
R[hair] = 5
# pack
lo, hi = V.min(0), V.max(0); sc = (hi - lo) / 65535
q = np.round((V - lo) / sc - 32768).astype(np.int16)
nq = np.round(N * 127).astype(np.int8)
si = idx.astype(np.uint8); sw = np.round(w4 * 255).astype(np.uint8)
fix = 255 - sw.sum(1).astype(int); sw[:, 0] = (sw[:, 0].astype(int) + fix).astype(np.uint8)
b64 = lambda a: base64.b64encode(np.ascontiguousarray(a).tobytes()).decode()
out = {
 'n': int(len(V)), 'lo': lo.round(6).tolist(), 'sc': sc.tolist(),
 'pos': b64(q), 'nrm': b64(nq), 'idx': b64(F.astype(np.uint16)), 'si': b64(si), 'sw': b64(sw), 'reg': b64(R),
 'bones': [{'n': b[0], 'a': J[b[1]], 'b': J[b[2]]} for b in BONES],
}
json.dump(out, open(os.path.join(HERE, 'athlete.json'), 'w'))
print('verts', len(V), 'tris', len(F), 'regions', np.bincount(R, minlength=6).tolist(), 'json KB', len(json.dumps(out)) // 1024)
print('bone vert counts', dict(zip(names, np.bincount(prim, minlength=len(names)).tolist())))
