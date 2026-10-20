"""Builds the single-file site (../index.html) from the template and the source modules."""
import os, re
d = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(d)
rd = lambda *p: open(os.path.join(*p), encoding='utf-8').read()
strip = lambda s: re.sub(r"if \(typeof module !== 'undefined'\).*\n?", "", s)
t = rd(d, 'template.html').replace('/*PLAYERS*/', rd(d, 'players.js'))
t = (t.replace('/*SIM*/', strip(rd(d, 'sim.js'))).replace('/*BUILD*/', strip(rd(d, 'build.js')))
      .replace('/*LESSONS*/', strip(rd(d, 'lessons.js'))).replace('/*SOLVED*/', rd(d, 'solved.json'))
      .replace('/*ATHLETE*/', rd(root, 'model', 'athlete.json')))
open(os.path.join(root, 'index.html'), 'w', encoding='utf-8').write(t)
print('wrote index.html', len(t) // 1024, 'KB')
