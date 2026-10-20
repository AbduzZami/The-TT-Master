// Turns lesson shot specs into timed ball tracks (chains returns onto earlier balls).
function buildTracks(shots) {
  const tracks = [];
  shots.forEach((s, i) => {
    let from = s.from, delay = s.delay || 0;
    if (s.after !== undefined) {
      const par = tracks[s.after];
      const dir = Math.sign(par.v0[0]);
      const firstB = par.events.find(e => e.type === 'bounce' && Math.sign(e.p[0]) === dir);
      const fr = par.frames;
      let k = fr.findIndex(f => f.t > (firstB ? firstB.t : 0) && (dir > 0 ? f.p[0] >= s.at : f.p[0] <= s.at));
      if (s.atZ) k = fr.findIndex(f => f.t > (firstB ? firstB.t : 0) && Math.abs(f.p[2]) >= s.atZ);
      if (k < 0) k = fr.length - 1;
      if (s.atPeak) { // contact at top of bounce instead
        const k2 = fr.findIndex(f => f.t > firstB.t + 0.02 && f.v[1] <= 0);
        if (k2 > 0) k = k2;
      }
      from = fr[k].p.slice();
      delay = fr[k].t;
      par.frames = fr.slice(0, k + 1);
      par.events = par.events.filter(e => e.t <= delay);
      par.end = delay;
    }
    const v0 = s.v0 || TT.solve(from, s.spin, s.bounce, s.T, s.mu);
    const w0 = TT.spinVector(s.spin, v0);
    const sim = TT.simulate(from, v0, w0, s.maxT || 2.4, true, s.mu);
    let frames = sim.frames.map(f => ({ ...f, t: f.t + delay }));
    let events = sim.events.map(e => ({ ...e, t: e.t + delay }));
    if (s.ghost) { // stop as the ball drifts back to the net
      const b2 = events.filter(e => e.type === 'bounce')[1];
      const k = frames.findIndex(f => b2 && f.t > b2.t && f.p[0] < 0.06);
      if (k > 0) { frames = frames.slice(0, k); events = events.filter(e => e.t <= frames[k - 1].t); }
    }
    let hitT = delay;
    // The first ball of every lesson starts in someone's hand: serves are tossed,
    // and any other opening shot is fed by a small toss from the free hand.
    const drop = !s.toss && s.after === undefined;
    if (s.toss || drop) {
      const palm = from[1] - 0.05, h = s.tossH || (drop ? 0.24 : 0.34), vy = Math.sqrt(2 * 9.81 * h);
      const tUp = vy / 9.81, tDown = Math.sqrt(2 * (h - 0.05) / 9.81), tt = tUp + tDown;
      const pre = [];
      for (let t = 0; t <= tt; t += 1 / 240) {
        const y = palm + vy * t - 0.5 * 9.81 * t * t;
        pre.push({ t: delay + t, p: [from[0], y, from[2]], v: [0, vy - 9.81 * t, 0], w: [0, 0, 0], toss: true });
      }
      frames = frames.map(f => ({ ...f, t: f.t + tt }));
      events = events.map(e => ({ ...e, t: e.t + tt }));
      events.unshift({ type: 'toss', drop, t: delay, p: [from[0], palm, from[2]] });
      frames = pre.concat(frames);
      hitT = delay + tt;
    }
    tracks.push({
      spec: s, frames, events, hitT, start: delay, end: frames[frames.length - 1].t, drop,
      color: s.color, label: s.label, v0, w0, from,
    });
  });
  tracks.forEach((t, i) => { if (t.drop && tracks.slice(0, i).some(o => o.drop && Math.abs(o.hitT - t.hitT) < 0.05)) t.start = t.hitT; });
  return tracks;
}
if (typeof module !== 'undefined') module.exports = buildTracks;
