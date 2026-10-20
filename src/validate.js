global.TT=require('./sim.js');const build=require('./build.js');const {LESSONS}=require('./lessons.js');const S=require('./solved.json');
let bad=0;
for(const L of LESSONS){const tr=build(L.shots.map((s,i)=>({...s,v0:S[L.id][i]})));
 tr.forEach((t,i)=>{const dir=Math.sign(t.v0[0]);const bs=t.events.filter(e=>e.type==='bounce');const net=t.events.some(e=>e.type==='net');
  const errs=[];
  if(net&&L.id!=='lets')errs.push('net');
  if(t.spec.toss){ if(!bs[0]||Math.sign(bs[0].p[0])===dir)errs.push('b1'); if(L.id!=='lets'&&(!bs[1]||Math.sign(bs[1].p[0])!==dir))errs.push('b2'); }
  else if(!bs[0]||Math.sign(bs[0].p[0])!==dir)errs.push('nobounce');
  const hit=tr.find(o=>o.spec.after===i); if(hit&&hit.from[1]<0.3)errs.push('lowcontact');
  if(errs.length){bad++;console.log(L.id,i,t.label,errs.join(','))}})}
console.log('problems',bad, 'lessons', LESSONS.length);
