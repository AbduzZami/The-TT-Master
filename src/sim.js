// TT ball physics: gravity, drag, Magnus, table bounce with spin transfer, net contact.
const TT = (() => {
  const G = 9.81, R = 0.02, TABLE_Y = 0.76, HALF_L = 1.37, HALF_W = 0.7625;
  const NET_H = 0.1525, NET_HALF = 0.915, KD = 0.14, KM = 0.0026, E = 0.89, MU = 0.4;
  const RPM = Math.PI / 30;
  const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const len = a => Math.hypot(a[0], a[1], a[2]);

  // spin {top, side} in rpm, relative to horizontal travel direction
  function spinVector(spin, v) {
    const h = Math.hypot(v[0], v[2]) || 1, d = [v[0] / h, 0, v[2] / h];
    const topAxis = cross([0, 1, 0], d);
    return add(mul(topAxis, (spin.top || 0) * RPM), [0, (spin.side || 0) * RPM, 0]);
  }

  function accel(v, w) {
    const s = len(v);
    return add(add([0, -G, 0], mul(v, -KD * s)), mul(cross(w, v), KM));
  }

  function onTable(p) { return Math.abs(p[0]) <= HALF_L && Math.abs(p[2]) <= HALF_W; }

  // returns frames every 1/240 s with events
  function simulate(p0, v0, w0, maxT = 2.6, stopAtFloor = true, mu = MU) {
    let p = p0.slice(), v = v0.slice(), w = w0.slice(), t = 0;
    const dt = 1 / 1200, frames = [{ t, p: p.slice(), v: v.slice(), w: w.slice() }], events = [];
    let step = 0, netDone = false;
    while (t < maxT) {
      const a = accel(v, w);
      const vm = add(v, mul(a, dt / 2));
      const a2 = accel(vm, w);
      const np = add(p, mul(vm, dt));
      v = add(v, mul(a2, dt));
      // net
      if (!netDone && Math.sign(np[0]) !== Math.sign(p[0]) && p[0] !== 0 && Math.abs(np[2]) < NET_HALF && np[1] - R < TABLE_Y + NET_H && np[1] > TABLE_Y) {
        netDone = true;
        events.push({ type: 'net', t, p: np.slice() });
        v = [v[0] * 0.45, Math.abs(v[1]) * 0.4 + 0.5, v[2] * 0.6];
        w = mul(w, 0.5);
      }
      p = np;
      // table bounce
      if (p[1] - R <= TABLE_Y && v[1] < 0 && onTable(p)) {
        p[1] = TABLE_Y + R;
        const vy = v[1];
        const u = [v[0] + R * w[2], 0, v[2] - R * w[0]];
        const ul = Math.hypot(u[0], u[2]);
        let alpha = 0.4;
        if (ul > 1e-6) alpha = Math.min(0.4, mu * (1 + E) * Math.abs(vy) / ul);
        const dv = [-alpha * u[0], 0, -alpha * u[2]];
        v = [v[0] + dv[0], -E * vy, v[2] + dv[2]];
        const k = 3 / (2 * R);
        w = [w[0] - k * dv[2], w[1], w[2] + k * dv[0]];
        events.push({ type: 'bounce', t, p: p.slice(), side: p[0] < 0 ? 'near' : 'far' });
        if (v[1] < 0.45) { frames.push({ t, p: p.slice(), v: v.slice(), w: w.slice() }); events.push({ type: 'roll', t, p: p.slice() }); break; }
      }
      t += dt; step++;
      if (step % 5 === 0) frames.push({ t, p: p.slice(), v: v.slice(), w: w.slice() });
      if (stopAtFloor && p[1] < R) { events.push({ type: 'floor', t, p: p.slice() }); break; }
      if (Math.abs(p[0]) > 3.6 || Math.abs(p[2]) > 2.6) break;
    }
    return { frames, events };
  }

  // find v0 that lands first bounce at target [x,z] after ~T seconds
  function solve(p0, spin, target, T, mu = MU) {
    const yb = TABLE_Y + R;
    let v = [(target[0] - p0[0]) / T, (yb - p0[1] + 0.5 * G * T * T) / T, (target[1] - p0[2]) / T];
    for (let i = 0; i < 40; i++) {
      const w = spinVector(spin, v);
      const r = simulate(p0, v, w, T * 3 + 0.5, true, mu);
      const b = r.events.find(e => e.type === 'bounce' || e.type === 'floor');
      if (!b) { v[1] -= 0.3; continue; }
      const ex = target[0] - b.p[0], ez = target[1] - b.p[2], et = T - b.t;
      v = [v[0] + ex / T * 0.9, v[1] + et * G * 0.55, v[2] + ez / T * 0.9];
      if (Math.abs(ex) < 0.004 && Math.abs(ez) < 0.004 && Math.abs(et) < 0.004) break;
    }
    return v;
  }

  return { simulate, solve, spinVector, R, TABLE_Y, HALF_L, HALF_W, NET_H, NET_HALF, RPM, len };
})();
if (typeof module !== 'undefined') module.exports = TT;
