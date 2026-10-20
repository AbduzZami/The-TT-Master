const base = require('./lessons.base.js');
const { LEVELS7, ORDER, DRILLS, NEW_LESSONS } = require('./more.js');
const all = [...base.LESSONS, ...NEW_LESSONS];
const out = [];
for (const lv of LEVELS7) for (const id of ORDER[lv.id]) {
  const l = all.find(x => x.id === id);
  if (!l) throw new Error('missing ' + id);
  out.push({ ...l, level: lv.id, drill: DRILLS[id] });
}
const missing = all.filter(l => !out.includes(out.find(o => o.id === l.id)));
if (missing.length) throw new Error('unplaced ' + missing.map(m => m.id));
require('fs').writeFileSync(require('path').join(__dirname, 'lessons.js'),
  `const LEVELS = ${JSON.stringify(LEVELS7, null, 1)};\nconst LESSONS = ${JSON.stringify(out, null, 1)};\nif (typeof module !== 'undefined') module.exports = { LESSONS, LEVELS };\n`);
console.log(out.length, 'lessons');
