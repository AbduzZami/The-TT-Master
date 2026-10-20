/* ---------- stroke motions ----------
   Every stroke is authored as whole-body key poses in the player's own frame
   (r = to their right, u = up, f = toward the net) for a right-handed shakehand player.
   wR / wL: wrist positions · H: finger direction · P: palm normal (the forehand rubber faces the palm side)
   pel: [r, height, f] of the pelvis · yaw: shoulder turn (+ = turned right) · lean: forward bend in radians
   fR / fL: feet on the floor · turn: whole-stance rotation (serves are played side-on). */
// Ready: hinge forward from the hips (back straight, ~30°), knees soft, weight on the balls of the feet,
// racket and free hand relaxed about an arm's length in front of the chest, feet wider than the shoulders.
const READY = { pel: [0, 0.86, -0.09], yaw: 0, pyaw: 0, lean: 0.5, wR: [0.1, 0.95, 0.5], H: [-0.4, 0.35, 0.85], P: [-0.85, 0, 0.45], wL: [-0.24, 0.97, 0.44], fR: [0.3, 0, -0.08], fL: [-0.3, 0, 0.06] };
const MOTIONS = {
  fhDrive: {
    back: { pel: [0.06, 0.8, -0.02], yaw: 0.55, lean: 0.38, wR: [0.5, 0.88, 0.0], H: [0.7, -0.3, -0.4], P: [0.3, -0.2, 0.9], wL: [0.02, 1.02, 0.35], fR: [0.3, 0, -0.12], fL: [-0.24, 0, 0.1] },
    hit: { pel: [0.02, 0.8, 0.02], yaw: 0.1, lean: 0.35, wR: [0.34, 0.98, 0.4], H: [0.85, -0.15, 0.25], P: [-0.2, -0.2, 1], wL: [-0.25, 1.02, 0.2], fR: [0.3, 0, -0.1], fL: [-0.24, 0, 0.1] },
    fol: { pel: [-0.04, 0.82, 0.03], yaw: -0.5, lean: 0.3, wR: [-0.02, 1.35, 0.4], H: [0.4, 0.6, 0.6], P: [-0.7, -0.2, 0.6], wL: [-0.33, 0.98, -0.02], fR: [0.3, 0, -0.06], fL: [-0.24, 0, 0.08] },
  },
  fhLoop: {
    back: { pel: [0.08, 0.74, -0.03], yaw: 0.8, lean: 0.55, wR: [0.52, 0.62, -0.06], H: [0.6, -0.7, -0.2], P: [0.2, -0.3, 0.95], wL: [0.05, 1.0, 0.4], fR: [0.32, 0, -0.15], fL: [-0.26, 0, 0.12] },
    hit: { pel: [0.03, 0.78, 0.0], yaw: 0.15, lean: 0.42, wR: [0.36, 0.98, 0.38], H: [0.85, -0.1, 0.3], P: [-0.15, -0.45, 0.9], wL: [-0.25, 1.0, 0.25], fR: [0.32, 0, -0.13], fL: [-0.26, 0, 0.12] },
    fol: { pel: [-0.05, 0.86, 0.03], yaw: -0.6, lean: 0.22, wR: [-0.05, 1.5, 0.3], H: [0.3, 0.8, 0.5], P: [-0.7, -0.3, 0.6], wL: [-0.36, 1.0, -0.05], fR: [0.3, 0, -0.08], fL: [-0.26, 0, 0.1] },
  },
  smash: {
    back: { pel: [0.06, 0.88, -0.03], yaw: 0.7, lean: 0.12, wR: [0.42, 1.55, -0.15], H: [0.5, 0.75, -0.3], P: [0.2, -0.2, 0.95], wL: [-0.1, 1.45, 0.4], fR: [0.3, 0, -0.2], fL: [-0.25, 0, 0.15] },
    hit: { pel: [0.02, 0.86, 0.02], yaw: 0.1, lean: 0.3, wR: [0.28, 1.6, 0.38], H: [0.6, 0.65, 0.3], P: [-0.1, -0.4, 0.9], wL: [-0.3, 1.2, 0.25], fR: [0.3, 0, -0.18], fL: [-0.25, 0, 0.16] },
    fol: { pel: [-0.06, 0.8, 0.08], yaw: -0.6, lean: 0.55, wR: [-0.18, 1.0, 0.42], H: [-0.1, -0.5, 0.85], P: [-0.6, -0.6, 0.4], wL: [-0.35, 0.95, -0.05], fR: [0.3, 0, -0.05], fL: [-0.25, 0, 0.18] },
  },
  lob: {
    back: { pel: [0.08, 0.72, -0.04], yaw: 0.75, lean: 0.55, wR: [0.5, 0.48, -0.02], H: [0.55, -0.75, -0.2], P: [0.1, -0.1, 1], wL: [0.0, 0.95, 0.38], fR: [0.32, 0, -0.15], fL: [-0.26, 0, 0.12] },
    hit: { pel: [0.03, 0.74, 0.0], yaw: 0.2, lean: 0.45, wR: [0.38, 0.8, 0.36], H: [0.8, -0.2, 0.35], P: [-0.1, -0.3, 0.95], wL: [-0.25, 0.98, 0.25], fR: [0.32, 0, -0.13], fL: [-0.26, 0, 0.12] },
    fol: { pel: [-0.03, 0.9, 0.02], yaw: -0.4, lean: 0.18, wR: [0.05, 1.62, 0.25], H: [0.2, 0.9, 0.3], P: [-0.6, -0.3, 0.6], wL: [-0.35, 1.05, 0.0], fR: [0.3, 0, -0.08], fL: [-0.26, 0, 0.1] },
  },
  fhChop: {
    back: { pel: [0.06, 0.84, -0.02], yaw: 0.7, lean: 0.25, wR: [0.42, 1.42, 0.05], H: [0.6, 0.6, 0.4], P: [0.1, 0.55, 0.8], wL: [0.0, 1.1, 0.35], fR: [0.32, 0, -0.15], fL: [-0.25, 0, 0.12] },
    hit: { pel: [0.03, 0.74, 0.02], yaw: 0.2, lean: 0.45, wR: [0.34, 0.86, 0.36], H: [0.85, 0.05, 0.4], P: [-0.1, 0.75, 0.6], wL: [-0.25, 1.0, 0.25], fR: [0.32, 0, -0.12], fL: [-0.25, 0, 0.14] },
    fol: { pel: [0.0, 0.72, 0.05], yaw: -0.1, lean: 0.55, wR: [0.05, 0.6, 0.55], H: [0.6, -0.3, 0.7], P: [-0.3, 0.8, 0.4], wL: [-0.32, 0.95, 0.05], fR: [0.3, 0, -0.08], fL: [-0.25, 0, 0.16] },
  },
  fhShort: {
    back: { pel: [0.05, 0.78, 0.1], yaw: 0.25, lean: 0.6, wR: [0.3, 0.9, 0.5], H: [0.75, 0.05, 0.6], P: [-0.2, 0.75, 0.6], wL: [-0.2, 0.95, 0.3], fR: [0.25, 0, 0.42], fL: [-0.22, 0, -0.08] },
    hit: { pel: [0.05, 0.74, 0.16], yaw: 0.15, lean: 0.8, wR: [0.26, 0.84, 0.74], H: [0.75, 0.05, 0.6], P: [-0.2, 0.7, 0.6], wL: [-0.22, 0.95, 0.3], fR: [0.25, 0, 0.45], fL: [-0.22, 0, -0.08] },
    fol: { pel: [0.05, 0.74, 0.17], yaw: 0.05, lean: 0.8, wR: [0.22, 0.84, 0.88], H: [0.6, 0.1, 0.8], P: [-0.3, 0.7, 0.5], wL: [-0.24, 0.95, 0.28], fR: [0.25, 0, 0.45], fL: [-0.22, 0, -0.08] },
  },
  fhFlick: {
    back: { pel: [0.05, 0.78, 0.12], yaw: 0.3, lean: 0.65, wR: [0.3, 0.84, 0.52], H: [0.5, -0.6, 0.6], P: [0.0, 0.3, 1], wL: [-0.2, 0.95, 0.3], fR: [0.25, 0, 0.45], fL: [-0.22, 0, -0.08] },
    hit: { pel: [0.05, 0.78, 0.14], yaw: 0.15, lean: 0.65, wR: [0.26, 0.9, 0.64], H: [0.7, 0.1, 0.7], P: [-0.2, -0.2, 1], wL: [-0.24, 0.95, 0.26], fR: [0.25, 0, 0.45], fL: [-0.22, 0, -0.08] },
    fol: { pel: [0.0, 0.8, 0.12], yaw: -0.2, lean: 0.55, wR: [0.12, 1.12, 0.72], H: [0.3, 0.8, 0.5], P: [-0.5, -0.4, 0.7], wL: [-0.3, 0.95, 0.15], fR: [0.25, 0, 0.45], fL: [-0.22, 0, -0.08] },
  },
  bhBlock: {
    back: { pel: [0, 0.8, 0.02], yaw: -0.1, lean: 0.35, wR: [-0.08, 1.0, 0.36], H: [-0.85, 0.35, 0.3], P: [0.1, 0.3, -0.95], wL: [-0.28, 0.98, 0.18] },
    hit: { pel: [0, 0.8, 0.03], yaw: -0.05, lean: 0.36, wR: [-0.05, 1.0, 0.44], H: [-0.85, 0.35, 0.3], P: [0.1, 0.3, -0.95], wL: [-0.28, 0.98, 0.18] },
    fol: { pel: [0, 0.8, 0.04], yaw: 0, lean: 0.37, wR: [0.0, 1.02, 0.52], H: [-0.8, 0.35, 0.45], P: [0.1, 0.3, -0.95], wL: [-0.28, 0.98, 0.18] },
  },
  bhPush: {
    back: { pel: [0, 0.78, 0.08], yaw: -0.15, lean: 0.5, wR: [-0.02, 0.92, 0.38], H: [-0.8, 0.25, 0.5], P: [0.1, -0.6, -0.8], wL: [-0.3, 0.95, 0.15], fR: [0.22, 0, 0.3], fL: [-0.24, 0, -0.05] },
    hit: { pel: [0, 0.75, 0.15], yaw: -0.1, lean: 0.75, wR: [-0.02, 0.86, 0.68], H: [-0.7, 0.15, 0.7], P: [0.1, -0.65, -0.75], wL: [-0.3, 0.95, 0.15], fR: [0.22, 0, 0.32], fL: [-0.24, 0, -0.05] },
    fol: { pel: [0, 0.75, 0.16], yaw: 0, lean: 0.75, wR: [0.05, 0.85, 0.84], H: [-0.5, 0.1, 0.85], P: [0.1, -0.65, -0.75], wL: [-0.3, 0.95, 0.15], fR: [0.22, 0, 0.32], fL: [-0.24, 0, -0.05] },
  },
  bhDrive: {
    back: { pel: [0, 0.8, 0.02], yaw: -0.3, lean: 0.38, wR: [-0.15, 0.92, 0.22], H: [-0.8, 0.0, 0.55], P: [0, 0.25, -1], wL: [-0.3, 0.98, 0.12] },
    hit: { pel: [0, 0.8, 0.04], yaw: 0, lean: 0.36, wR: [-0.02, 0.98, 0.45], H: [-0.6, 0.2, 0.75], P: [0.1, 0.3, -1], wL: [-0.3, 0.98, 0.12] },
    fol: { pel: [0, 0.82, 0.05], yaw: 0.15, lean: 0.33, wR: [0.18, 1.15, 0.5], H: [0.1, 0.6, 0.8], P: [-0.3, 0.3, -0.9], wL: [-0.32, 0.98, 0.08] },
  },
  bhFlick: {
    back: { pel: [0, 0.76, 0.13], yaw: -0.2, lean: 0.7, wR: [-0.05, 0.86, 0.5], H: [-0.3, -0.75, -0.5], P: [0, 0.4, -0.9], wL: [-0.3, 0.95, 0.15], fR: [0.2, 0, 0.45], fL: [-0.24, 0, -0.05] },
    hit: { pel: [0, 0.76, 0.14], yaw: -0.05, lean: 0.68, wR: [0.0, 0.9, 0.62], H: [-0.6, 0.3, 0.7], P: [0.1, 0.2, -1], wL: [-0.3, 0.95, 0.15], fR: [0.2, 0, 0.45], fL: [-0.24, 0, -0.05] },
    fol: { pel: [0, 0.78, 0.14], yaw: 0.15, lean: 0.6, wR: [0.12, 1.06, 0.72], H: [0.1, 0.8, 0.6], P: [0.4, 0.2, -0.9], wL: [-0.3, 0.95, 0.12], fR: [0.2, 0, 0.45], fL: [-0.24, 0, -0.05] },
  },
  fhServe: { turn: 0.7,
    back: { pel: [0, 0.82, 0], lean: 0.35, wR: [0.3, 1.25, 0.05], H: [0.2, -0.85, 0.45], P: [-0.8, 0.1, 0.5], wL: [-0.3, 1.0, 0.1], fR: [0.22, 0, -0.2], fL: [-0.22, 0, 0.2] },
    hit: { pel: [0, 0.82, 0.02], lean: 0.38, wR: [0.18, 1.12, 0.32], H: [0.0, -0.9, 0.4], P: [-0.8, 0.2, 0.5], wL: [-0.3, 1.0, 0.1], fR: [0.22, 0, -0.2], fL: [-0.22, 0, 0.2] },
    fol: { pel: [-0.02, 0.82, 0.03], lean: 0.36, wR: [-0.12, 1.08, 0.36], H: [-0.3, -0.8, 0.4], P: [-0.7, 0.3, 0.6], wL: [-0.3, 1.0, 0.05], fR: [0.22, 0, -0.2], fL: [-0.22, 0, 0.2] },
  },
  tomahawk: { turn: 0.3,
    back: { pel: [0, 0.82, 0], lean: 0.35, wR: [-0.05, 1.15, 0.32], H: [0.0, 0.95, 0.3], P: [0.8, 0, 0.5], wL: [-0.3, 1.0, 0.1], fR: [0.24, 0, -0.12], fL: [-0.24, 0, 0.12] },
    hit: { pel: [0, 0.82, 0.02], lean: 0.36, wR: [0.08, 1.02, 0.36], H: [0.1, 0.9, 0.4], P: [0.8, 0, 0.5], wL: [-0.3, 1.0, 0.1], fR: [0.24, 0, -0.12], fL: [-0.24, 0, 0.12] },
    fol: { pel: [0.02, 0.82, 0.02], lean: 0.36, wR: [0.32, 0.96, 0.32], H: [0.3, 0.8, 0.4], P: [0.8, 0, 0.5], wL: [-0.3, 1.0, 0.08], fR: [0.24, 0, -0.12], fL: [-0.24, 0, 0.12] },
  },
  bhServe: { turn: -0.1,
    back: { pel: [0, 0.8, 0], lean: 0.4, wR: [-0.32, 1.0, 0.25], H: [-0.6, -0.4, 0.6], P: [-0.8, 0.2, -0.4], wL: [-0.3, 1.0, 0.15] },
    hit: { pel: [0, 0.8, 0.02], lean: 0.42, wR: [-0.1, 0.98, 0.32], H: [-0.5, -0.5, 0.7], P: [-0.8, 0.2, -0.4], wL: [-0.3, 1.0, 0.15] },
    fol: { pel: [0, 0.8, 0.03], lean: 0.42, wR: [0.2, 1.0, 0.35], H: [-0.2, -0.4, 0.9], P: [-0.8, 0.2, -0.4], wL: [-0.3, 1.0, 0.15] },
  },
};
MOTIONS.fhCounter = MOTIONS.fhLoop;
MOTIONS.fhTouch = MOTIONS.fhShort;
function motionName(spec, S) {
  const ty = swingType(spec);
  if (spec.toss) return ty === 'tomahawk' ? 'tomahawk' : ty === 'bhserve' ? 'bhServe' : 'fhServe';
  if (S.hand > 0) return ({ drive: 'fhDrive', loop: 'fhLoop', counter: 'fhCounter', smash: 'smash', lob: 'lob', chop: 'fhChop', push: 'fhShort', touch: 'fhTouch', flick: 'fhFlick', block: 'fhDrive' })[ty] || 'fhDrive';
  return ({ block: 'bhBlock', push: 'bhPush', drive: 'bhDrive', flick: 'bhFlick', touch: 'bhPush', chop: 'bhPush' })[ty] || 'bhDrive';
}

/* ---------- grip: the racket is fixed in the hand ----------
   Shakehand: the handle lies across the palm, the blade leans toward the thumb side,
   and the forehand rubber faces the same way as the palm. */
const GRIP_ANGLE = 0.5;
const _th = new THREE.Vector3(), _tip = new THREE.Vector3(), _fz = new THREE.Vector3(), _fx = new THREE.Vector3();
function racketFromHand(w, H, P, outPos, outQuat) {
  _th.crossVectors(H, P);
  _tip.copy(H).multiplyScalar(Math.cos(GRIP_ANGLE)).addScaledVector(_th, Math.sin(GRIP_ANGLE)).normalize();
  outPos.copy(w).addScaledVector(H, 0.075).addScaledVector(P, 0.028).addScaledVector(_tip, 0.12);
  if (outQuat) {
    _fz.copy(P).addScaledVector(_tip, -P.dot(_tip)).normalize();
    _fx.crossVectors(_tip, _fz);
    outQuat.setFromRotationMatrix(_m4.makeBasis(_fx, _tip, _fz));
  }
  return outPos;
}
function handQuat(H, P) {
  const y = H.clone().normalize(), z = P.clone().addScaledVector(y, -P.dot(y)).normalize(), x = new THREE.Vector3().crossVectors(y, z);
  return new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z));
}
const _hx = new THREE.Vector3(), _hy = new THREE.Vector3(), _hz = new THREE.Vector3();
function handAxes(q) { _hy.set(0, 1, 0).applyQuaternion(q); _hz.set(0, 0, 1).applyQuaternion(q); return [_hy, _hz]; }

/* ---------- planning a stroke ----------
   The ball fixes three things: where the player stands (so the stroke reaches the contact point),
   the racket's direction and speed at contact (brush up for topspin, under for backspin, across for
   sidespin; faster for faster, spinnier balls), and the racket face angle (a small wrist correction). */
const hermite = (p0, m0, p1, m1, T, s, out) => {
  const s2 = s * s, s3 = s2 * s;
  return out.copy(p0).multiplyScalar(2 * s3 - 3 * s2 + 1).addScaledVector(m0, T * (s3 - 2 * s2 + s))
    .addScaledVector(p1, -2 * s3 + 3 * s2).addScaledVector(m1, T * (s3 - s2));
};
function keyOf(M, k) {
  const src = M[k] || {}, o = Object.assign({}, READY, src);
  if (src.pel) o.pel = [src.pel[0], src.pel[1] + 0.03, src.pel[2] - 0.1];
  if (src.lean !== undefined) o.lean = Math.min(src.lean + 0.16, 1.05);
  if (src.pyaw === undefined) o.pyaw = (o.yaw || 0) * 0.55;
  return o;
}
function planStroke(t, S, side) {
  const name = motionName(t.spec, S), M = MOTIONS[name];
  const f0 = new THREE.Vector3(-side, 0, 0);
  const dirH = new THREE.Vector3(t.v0[0], 0, t.v0[2]).normalize();
  const ang = Math.atan2(new THREE.Vector3().crossVectors(f0, dirH).y, f0.dot(dirH));
  const F = f0.clone().applyAxisAngle(UP, clamp(ang, -0.6, 0.6) * 0.6 - (M.turn || 0));
  const R = new THREE.Vector3().crossVectors(F, UP);
  const toW = a => R.clone().multiplyScalar(a[0]).addScaledVector(UP, a[1]).addScaledVector(F, a[2]);
  const keys = { ready: READY, back: keyOf(M, 'back'), hit: keyOf(M, 'hit'), fol: keyOf(M, 'fol') };
  const q = {};
  for (const k in keys) q[k] = handQuat(toW(keys[k].H), toW(keys[k].P));
  // face correction: turn the hand so the rubber that hits faces the way the shot needs
  const Preq = S.n.clone().multiplyScalar(S.hand);
  const Pc = new THREE.Vector3(0, 0, 1).applyQuaternion(q.hit);
  const corr = new THREE.Quaternion().setFromUnitVectors(Pc, Preq);
  const cAng = 2 * Math.acos(clamp(Math.abs(corr.w), 0, 1));
  if (cAng > 1.05) corr.slerp(new THREE.Quaternion(), 1 - 1.05 / cAng);
  ['back', 'hit', 'fol'].forEach(k => q[k].premultiply(corr));
  // wrist position at contact puts the racket centre exactly on the ball
  const [Hc, Pc2] = handAxes(q.hit);
  const off = racketFromHand(new THREE.Vector3(), Hc.clone(), Pc2.clone(), new THREE.Vector3());
  const wC = S.C0.clone().sub(off);
  const root = wC.clone().sub(toW(keys.hit.wR)); root.y = 0;
  const bodyDh = clamp(wC.y - keys.hit.wR[1], -0.24, 0.1);
  // the pelvis cannot go over the table
  const pelX = root.x + toW([keys.hit.pel[0], 0, keys.hit.pel[2]]).x, lim = 1.4;
  if (side < 0 && pelX > -lim) root.x -= pelX + lim;
  if (side > 0 && pelX < lim) root.x += lim - pelX;
  root.z = clamp(root.z, -2.2, 2.2);
  const at = (k, field, dh = bodyDh) => root.clone().add(toW(keys[k][field])).addScaledVector(UP, dh);
  const vC = S.V.clone(), spd = Math.max(vC.length(), 1.2);
  const w = { ready: at('ready', 'wR'), back: at('back', 'wR'), hit: wC, fol: at('fol', 'wR') };
  const Tfw = clamp(w.back.distanceTo(wC) / (spd * 0.55), 0.07, 0.3);
  const Tfol = clamp(w.fol.distanceTo(wC) / (spd * 0.5), 0.1, 0.32);
  const body = {};
  for (const k in keys) body[k] = {
    pel: root.clone().add(toW([keys[k].pel[0], 0, keys[k].pel[2]])).addScaledVector(UP, keys[k].pel[1] + bodyDh),
    yaw: keys[k].yaw, pyaw: keys[k].pyaw || 0, lean: keys[k].lean, wL: at(k, 'wL'),
    fR: root.clone().add(toW(keys[k].fR)), fL: root.clone().add(toW(keys[k].fL)),
  };
  return { t, S, name, F, R, root, bodyDh, w, q, body, vC, spd, Tfw, Tfol, Tprep: 0.34, Trec: 0.45, hit: t.hitT };
}
// ready pose at any root and facing (used while moving between strokes)
function readyState(root, F) {
  const R = new THREE.Vector3().crossVectors(F, UP);
  const toW = a => R.clone().multiplyScalar(a[0]).addScaledVector(UP, a[1]).addScaledVector(F, a[2]);
  return {
    F, wR: root.clone().add(toW(READY.wR)), qR: handQuat(toW(READY.H), toW(READY.P)),
    pel: root.clone().add(toW([READY.pel[0], 0, READY.pel[2]])).addScaledVector(UP, READY.pel[1]),
    yaw: 0, pyaw: 0, lean: READY.lean, wL: root.clone().add(toW(READY.wL)),
    fR: root.clone().add(toW(READY.fR)), fL: root.clone().add(toW(READY.fL)), liftR: 0, liftL: 0,
  };
}
const smooth = x => x * x * (3 - 2 * x);
function lerpBody(a, b, k, out) {
  out.pel = a.pel.clone().lerp(b.pel, k); out.yaw = a.yaw + (b.yaw - a.yaw) * k; out.lean = a.lean + (b.lean - a.lean) * k;
  out.pyaw = (a.pyaw || 0) + ((b.pyaw || 0) - (a.pyaw || 0)) * k;
  out.wL = a.wL.clone().lerp(b.wL, k);
  out.fR = a.fR.clone().lerp(b.fR, k); out.fL = a.fL.clone().lerp(b.fL, k);
  out.liftR = a.fR.distanceTo(b.fR) > 0.04 ? Math.sin(Math.PI * k) * 0.07 : 0;
  out.liftL = a.fL.distanceTo(b.fL) > 0.04 ? Math.sin(Math.PI * k) * 0.07 : 0;
  return out;
}
function bodyAt(p, tt) {
  const st = {}, B = p.body;
  if (tt < -p.Tfw - p.Tprep || tt > p.Tfol + p.Trec) lerpBody(B.ready, B.ready, 0, st);
  else if (tt < -p.Tfw) lerpBody(B.ready, B.back, smooth((tt + p.Tfw + p.Tprep) / p.Tprep), st);
  else if (tt < 0) lerpBody(B.back, B.hit, smooth((tt + p.Tfw) / p.Tfw), st);
  else if (tt < p.Tfol) lerpBody(B.hit, B.fol, smooth(tt / p.Tfol), st);
  else lerpBody(B.fol, B.ready, smooth((tt - p.Tfol) / p.Trec), st);
  return st;
}
function armAt(p, tt, st) {
  if (tt < -p.Tfw - p.Tprep || tt > p.Tfol + p.Trec) { st.wR = p.w.ready.clone(); st.qR = p.q.ready.clone(); }
  else if (tt < -p.Tfw) { const k = smooth((tt + p.Tfw + p.Tprep) / p.Tprep); st.wR = p.w.ready.clone().lerp(p.w.back, k); st.qR = p.q.ready.clone().slerp(p.q.back, k); }
  else if (tt < 0) { const s = (tt + p.Tfw) / p.Tfw; st.wR = hermite(p.w.back, new THREE.Vector3(), p.w.hit, p.vC, p.Tfw, s, new THREE.Vector3()); st.qR = p.q.back.clone().slerp(p.q.hit, s); }
  else if (tt < p.Tfol) { const s = tt / p.Tfol; st.wR = hermite(p.w.hit, p.vC, p.w.fol, new THREE.Vector3(), p.Tfol, s, new THREE.Vector3()); st.qR = p.q.hit.clone().slerp(p.q.fol, smooth(s)); }
  else { const k = smooth((tt - p.Tfol) / p.Trec); st.wR = p.w.fol.clone().lerp(p.w.ready, k); st.qR = p.q.fol.clone().slerp(p.q.ready, k); }
  return st;
}
// Kinetic chain: legs and hips start the stroke, the shoulders follow, the racket arm comes last.
const LAG_HIPS = 0.07, LAG_TORSO = 0.035, LAG_FREE = 0.02;
function evalStroke(p, tt) {
  const hips = bodyAt(p, tt + LAG_HIPS), torso = bodyAt(p, tt + LAG_TORSO), free = bodyAt(p, tt + LAG_FREE);
  const st = { F: p.F, pel: hips.pel, pyaw: hips.pyaw, fR: hips.fR, fL: hips.fL, liftR: hips.liftR, liftL: hips.liftL,
    yaw: torso.yaw, lean: torso.lean, wL: free.wL };
  armAt(p, tt, st);
  // keep the racket arm within its natural length (it may only stretch slightly right at contact,
  // where the ball fixes the racket position)
  const sh = shoulderR(st), d = st.wR.clone().sub(sh), L = d.length(), maxL = 0.477 * 0.97;
  if (L > maxL) {
    const keep = smooth(clamp((Math.abs(tt) - 0.015) / 0.07, 0, 1));
    st.wR = sh.clone().addScaledVector(d, (L - (L - maxL) * keep) / L);
  }
  return st;
}
function shoulderR(st) {
  const tf = st.F.clone().applyAxisAngle(UP, -st.yaw), tr = new THREE.Vector3().crossVectors(tf, UP);
  const spine = UP.clone().multiplyScalar(Math.cos(st.lean)).addScaledVector(tf, Math.sin(st.lean));
  return st.pel.clone().addScaledVector(spine, 0.49).addScaledVector(tr, 0.18).addScaledVector(tf, -0.025);
}

/* ---------- posing the skinned athlete from a body state ---------- */
function posePlayer(P, st, look) {
  const F = st.F, R = new THREE.Vector3().crossVectors(F, UP);
  const tf = F.clone().applyAxisAngle(UP, -st.yaw), tr = new THREE.Vector3().crossVectors(tf, UP);
  const pf = F.clone().applyAxisAngle(UP, -(st.pyaw || 0)), pr = new THREE.Vector3().crossVectors(pf, UP);
  const spine = UP.clone().multiplyScalar(Math.cos(st.lean)).addScaledVector(tf, Math.sin(st.lean));
  const hipC = st.pel;
  const at = k => hipC.clone().addScaledVector(spine, k);
  setBone(P, 'hips', hipC.clone().addScaledVector(UP, -0.05), at(0.12), pf);
  setBone(P, 'spine', at(0.12), at(0.35), pf.clone().add(tf).normalize());
  const neck0 = at(0.54);
  setBone(P, 'chest', at(0.35), neck0, tf);
  const lookDir = look.clone().sub(neck0).normalize();
  const hd = UP.clone().multiplyScalar(0.85).addScaledVector(spine, 0.35).addScaledVector(lookDir, 0.2).normalize();
  const head0 = neck0.clone().addScaledVector(hd, 0.11);
  setBone(P, 'neck', neck0, head0, lookDir);
  setBone(P, 'head', head0, head0.clone().addScaledVector(hd, 0.18), lookDir);
  // racket arm: elbow drops and points out on the forehand, forward on the backhand
  const shR = neck0.clone().addScaledVector(spine, -0.05).addScaledVector(tr, 0.18).addScaledVector(tf, -0.025);
  const shL = neck0.clone().addScaledVector(spine, -0.05).addScaledVector(tr, -0.18).addScaledVector(tf, -0.025);
  const lat = st.wR.clone().sub(neck0).dot(tr);
  const bh = clamp((0.12 - lat) / 0.25, 0, 1);
  // forehand: elbow hangs down a hand's width from the ribs · backhand: elbow points forward and out
  const poleR = UP.clone().multiplyScalar(-1 + bh * 0.45).addScaledVector(tr, 0.35 + bh * 0.1).addScaledVector(tf, -0.25 + bh * 0.85);
  const el = new THREE.Vector3();
  ik2(shR, st.wR, 0.255, 0.222, poleR, el);
  const [H, Pm] = handAxes(st.qR);
  setBone(P, 'upperR', shR, el, tf); setBone(P, 'foreR', el, st.wR, Pm.clone().add(tf));
  setBone(P, 'handR', st.wR, st.wR.clone().addScaledVector(H, 0.125), Pm); // shortened: fingers closed round the handle
  // free arm
  const elL = new THREE.Vector3();
  ik2(shL, st.wL, 0.255, 0.222, UP.clone().multiplyScalar(-1).addScaledVector(tr, -0.7), elL);
  const fdir = st.wL.clone().sub(elL).normalize();
  const hdirL = st.freeW ? fdir.clone().lerp(F, st.freeW).normalize() : fdir;
  const palmL = st.freeW ? tr.clone().lerp(UP, st.freeW).normalize() : tr;
  setBone(P, 'upperL', shL, elL, tf); setBone(P, 'foreL', elL, st.wL, tf); setBone(P, 'handL', st.wL, st.wL.clone().addScaledVector(hdirL, 0.15), palmL);
  // legs
  // legs: the back heel lifts and the foot pivots as the hips turn through the shot
  const py = st.pyaw || 0;
  const heel = { R: clamp((-py - 0.12) * 0.16, 0, 0.05), L: clamp((py - 0.28) * 0.14, 0, 0.035) };
  [['R', 1, st.fR, st.liftR], ['L', -1, st.fL, st.liftL]].forEach(([s, sg, foot, lift]) => {
    const hip = hipC.clone().addScaledVector(pr, 0.09 * sg);
    const toeDir = F.clone().applyAxisAngle(UP, -py * 0.5).addScaledVector(R, 0.3 * sg).normalize();
    const toe = foot.clone().addScaledVector(toeDir, 0.21).addScaledVector(UP, 0.02 + (lift || 0));
    const ankle = foot.clone().addScaledVector(UP, 0.085 + (lift || 0) + heel[s]);
    const knee = new THREE.Vector3();
    ik2(hip, ankle, 0.43, 0.425, pf.clone().addScaledVector(pr, 0.2 * sg), knee);
    setBone(P, 'thigh' + s, hip, knee, pf); setBone(P, 'shin' + s, knee, ankle, pf);
    setBone(P, 'foot' + s, ankle, toe, UP);
  });
  P.shadow.position.set(st.pel.x, 0.006, st.pel.z);
}

/* ---------- each side's player ---------- */
function buildPlayers() {
  world.players = []; world.extent = 0;
  [-1, 1].forEach(side => {
    const f = new THREE.Vector3(-side, 0, 0);
    const mine = tracks.map((t, i) => ({ t, i })).filter(o => Math.sign(o.t.from[0]) === side);
    const prim = [];
    mine.forEach(o => {
      if (prim.some(p => Math.abs(p.t.hitT - o.t.hitT) < 0.05)) {
        o.ghost = true;
        visuals[o.i].paddle.traverse(n => { if (n.material) { n.material.transparent = true; n.material.opacity = 0.35; } });
      } else prim.push(o);
    });
    prim.sort((a, b) => a.t.hitT - b.t.hitT);
    prim.forEach(o => {
      o.plan = planStroke(o.t, visuals[o.i].paddle.userData, side);
      // swing path line follows the racket centre through the real stroke
      const pts = [];
      for (let k = 0; k <= 40; k++) {
        const tt = -o.plan.Tfw - 0.12 + (o.plan.Tfw + 0.12 + o.plan.Tfol) * k / 40, s = evalStroke(o.plan, tt), [H, Pm] = handAxes(s.qR);
        pts.push(racketFromHand(s.wR, H.clone(), Pm.clone(), new THREE.Vector3()));
      }
      visuals[o.i].swingPath.geometry.dispose();
      visuals[o.i].swingPath.geometry = new THREE.BufferGeometry().setFromPoints(pts);
    });
    const P = makePlayer(side < 0 ? '#e8742a' : '#2a7fd4');
    world.lesson.add(P.g);
    const home = new THREE.Vector3(side * 2.05, 0, 0);
    if (prim.length && (prim[0].t.spec.toss || prim[0].t.hitT < 0.45)) home.copy(prim[0].plan.root);
    let idle = null;
    if (!prim.length) { idle = makePaddle('#c8262e'); world.lesson.add(idle); }
    const pl = { P, f, side, prim, idle, home };
    world.players.push(pl);
    world.extent = Math.max(world.extent, ...prim.map(o => Math.abs(o.plan.root.x) + 0.6), 2.0);
  });
}
// where the player stands at time t, with a shuffle-step progress for the feet
function rootAt(pl, t) {
  let p = pl.home, F = pl.f;
  for (const o of pl.prim) {
    const P = o.plan, b = P.hit - P.Tfw - P.Tprep + 0.02, a = b - 0.42;
    if (t <= a) return { pos: p.clone(), F, k: 0, from: p, to: p };
    if (t < b) {
      const k = (t - a) / (b - a);
      return { pos: p.clone().lerp(P.root, smooth(k)), F: F.clone().lerp(P.F, smooth(k)).normalize(), k, from: p, to: P.root };
    }
    p = P.root; F = P.F;
  }
  const L = pl.prim[pl.prim.length - 1];
  if (!L) return { pos: p.clone(), F, k: 0, from: p, to: p };
  const a = L.plan.hit + L.plan.Tfol + 0.15, b = a + 0.6;
  if (t <= a) return { pos: p.clone(), F, k: 0, from: p, to: p };
  const k = clamp((t - a) / (b - a), 0, 1);
  return { pos: p.clone().lerp(pl.home, smooth(k)), F: F.clone().lerp(pl.f, smooth(k)).normalize(), k, from: p, to: pl.home };
}
const _rc = new THREE.Vector3(), _rq = new THREE.Quaternion(), _lastRC = new Map();
function updatePlayer(pl, look) {
  let st, active = null;
  if (pl.prim.length) {
    let j = pl.prim.findIndex(o => simT < o.plan.hit + o.plan.Tfol + o.plan.Trec);
    if (j < 0) j = pl.prim.length - 1;
    const o = pl.prim[j], tt = simT - o.plan.hit;
    if (tt >= -o.plan.Tfw - o.plan.Tprep && tt <= o.plan.Tfol + o.plan.Trec) { st = evalStroke(o.plan, tt); active = o; }
    pl.prim.forEach((p, k) => { visuals[p.i].paddle.visible = k === j; });
    pl.pad = visuals[o.i].paddle;
  } else pl.pad = pl.idle;
  if (!st) {
    const r = rootAt(pl, simT);
    st = readyState(r.pos, r.F);
    // shuffle step: each foot lifts in turn while the body travels
    if (r.k > 0 && r.k < 1 && r.from.distanceTo(r.to) > 0.05) {
      const kR = clamp(r.k * 1.4, 0, 1), kL = clamp(r.k * 1.4 - 0.4, 0, 1);
      const R = new THREE.Vector3().crossVectors(r.F, UP);
      const toW = a => R.clone().multiplyScalar(a[0]).addScaledVector(r.F, a[2]);
      st.fR = r.from.clone().lerp(r.to, smooth(kR)).add(toW(READY.fR)); st.liftR = Math.sin(Math.PI * kR) * 0.07;
      st.fL = r.from.clone().lerp(r.to, smooth(kL)).add(toW(READY.fL)); st.liftL = Math.sin(Math.PI * kL) * 0.07;
    }
  }
  // free hand holds the ball on the open palm, then tosses it (serves) or feeds it (other opening shots)
  const srv = pl.prim.find(o => (o.t.spec.toss || o.t.drop) && simT < o.plan.hit + 0.6);
  if (srv) {
    const s0 = srv.t.start, rise = clamp((simT - s0) / 0.12, 0, 1);
    const ball = new THREE.Vector3(srv.t.from[0], srv.t.from[1] - 0.05 + rise * 0.08, srv.t.from[2]);
    // palm surface just under the ball; the wrist sits a hand's width behind it
    const wTarget = ball.addScaledVector(UP, -(TT.R * BALL_SCALE + 0.016)).addScaledVector(st.F, -0.13);
    const fw = simT < s0 + 0.12 ? 1 : 1 - smooth(clamp((simT - s0 - 0.12) / 0.4, 0, 1));
    st.wL = st.wL.clone().lerp(wTarget, fw); st.freeW = fw;
  }
  posePlayer(pl.P, st, look);
  // the racket is rigidly held in the hand
  const [H, Pm] = handAxes(st.qR);
  racketFromHand(st.wR, H.clone(), Pm.clone(), pl.pad.position, pl.pad.quaternion);
  // racket speed readout
  const prev = _lastRC.get(pl);
  pl.racketSpeed = prev && simT > prev.t ? pl.pad.position.distanceTo(prev.p) / (simT - prev.t) : pl.racketSpeed || 0;
  _lastRC.set(pl, { p: pl.pad.position.clone(), t: simT });
  pl.active = active;
  // fade the body when the camera is right behind it, so the ball stays visible
  const behind = Math.sign(camera.position.x) === pl.side && Math.abs(camera.position.x) > Math.abs(st.pel.x) && Math.abs(camera.position.z - st.pel.z) < 2.2;
  const op = behind ? 0.4 : 1;
  pl.P.mats.forEach(m => { m.opacity = op; m.depthWrite = op === 1; });
}
