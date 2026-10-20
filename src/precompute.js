global.TT = require('./sim.js');
const build = require('./build.js');
const { LESSONS } = require('./lessons.js');
function netClear(r) {
  const f = r.frames;
  for (let k = 1; k < f.length; k++) if (Math.sign(f[k-1].p[0]) !== Math.sign(f[k].p[0])) return f[k].p[1] - TT.R - 0.76 - 0.1525;
  return -1;
}
function solveServe(p0, spin, b1, b2, ghost, mu) {
  let best = null;
  const dir = Math.sign(-p0[0]);
  for (let ax = 0.45; ax <= 1.25; ax += 0.05) {
    const bx = -dir * ax;
    for (let T = 0.04; T <= 0.42; T += (ghost ? 0.001 : 0.006)) {
      const v = TT.solve(p0, spin, [bx, b1[1]], T, mu);
      const r = TT.simulate(p0, v, TT.spinVector(spin, v), 3, true, mu);
      const bs = r.events.filter(e => e.type === 'bounce');
      if (bs.length < 2 || r.events.some(e => e.type === 'net')) continue;
      if (Math.abs(bs[0].p[0] - bx) > 0.02 || Math.sign(bs[1].p[0]) !== dir) continue;
      const nc = netClear({ frames: r.frames.filter(f => f.t > bs[0].t) });
      let score = Math.hypot(bs[1].p[0] - b2[0], bs[1].p[2] - b2[1]) + Math.max(0, 0.05 - nc) * 6 + Math.abs(bx - b1[0]) * 0.15;
      if (ghost) {
        if (nc < 0.006) continue;
        const after = r.frames.find(f => f.t > bs[1].t + 0.01);
        score = (after ? Math.abs(after.v[0] * dir + 0.5) : 9) + Math.abs(bs[1].p[0] * dir - 0.45) * 0.5;
      }
      if (!best || score < best.score) best = { score, v, bx, T, nc, b2got: bs[1].p };
    }
  }
  if (!best) return best;
  // steer sideways: shift first-bounce z until second bounce z matches
  let bz = p0[2] + (b2[1] - p0[2]) * (best.bx - p0[0]) / (b2[0] - p0[0]);
  for (let it = 0; it < 8; it++) {
    const v = TT.solve(p0, spin, [best.bx, bz], best.T, mu);
    const r = TT.simulate(p0, v, TT.spinVector(spin, v), 3, true, mu);
    const bs = r.events.filter(e => e.type === 'bounce');
    if (bs.length < 2) break;
    best.v = v; best.b2got = bs[1].p; best.nc = netClear({ frames: r.frames.filter(f => f.t > bs[0].t) });
    const err = bs[1].p[2] - b2[1];
    bz -= err * (best.bx - p0[0]) / (bs[1].p[0] - p0[0]);
    if (Math.abs(err) < 0.01) break;
  }
  return best;
}
const out = {};
for (const L of LESSONS) {
  const shots = L.shots.map(s => ({ ...s }));
  // solve sequentially since chained shots depend on parents
  const v0s = [];
  for (let i = 0; i < shots.length; i++) {
    const s = shots[i];
    if (s.bounce2) {
      const b = solveServe(s.from, s.spin, s.bounce, s.bounce2, s.ghost, s.mu);
      s.v0 = b.v;
      console.error(L.id, i, 'serve b1x', b.bx.toFixed(2), 'net', (b.nc*100).toFixed(1), 'b2', b.b2got.map(x=>x.toFixed(2)).join(','), 'score', b.score.toFixed(3));
    }
    if (L.sameLaunch && i !== 1) s.v0 = build([shots[1]])[0].v0;
    const tr = build(shots.slice(0, i + 1));
    s.v0 = tr[i].v0;
    v0s.push(tr[i].v0.map(x => +x.toFixed(5)));
  }
  out[L.id] = v0s;
}
require('fs').writeFileSync(require('path').join(__dirname, 'solved.json'), JSON.stringify(out));
