"""Builds the site from the template and the source modules.

  python3 assemble.py                    -> ../index.html (complete page, works on GitHub Pages and phones)
  python3 assemble.py --fragment out.html -> page body only (for hosts that add their own <html>/<head>)
"""
import os, re, sys
d = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(d)
rd = lambda *p: open(os.path.join(*p), encoding='utf-8').read()
strip = lambda s: re.sub(r"if \(typeof module !== 'undefined'\).*\n?", "", s)
t = rd(d, 'template.html').replace('/*PLAYERS*/', rd(d, 'players.js'))
t = (t.replace('/*SIM*/', strip(rd(d, 'sim.js'))).replace('/*BUILD*/', strip(rd(d, 'build.js')))
      .replace('/*LESSONS*/', strip(rd(d, 'lessons.js'))).replace('/*SOLVED*/', rd(d, 'solved.json'))
      .replace('/*ATHLETE*/', rd(root, 'model', 'athlete.json')))
if '--fragment' in sys.argv:
    out = sys.argv[sys.argv.index('--fragment') + 1]
    open(out, 'w', encoding='utf-8').write(t)
    print('wrote fragment', out, len(t) // 1024, 'KB')
else:
    split = t.index('<div class="wrap">')
    head, body = t[:split], t[split:]
    page = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            '<meta name="description" content="Learn table tennis from the basic rules to pro-level tricks, with physics-driven 3D lessons.">\n'
            '<meta name="theme-color" content="#0a1422">\n'
            + head + '</head>\n<body>\n' + body + '\n</body>\n</html>\n')
    open(os.path.join(root, 'index.html'), 'w', encoding='utf-8').write(page)
    print('wrote index.html', len(page) // 1024, 'KB')
