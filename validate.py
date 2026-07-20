from pathlib import Path
import json,re
root=Path(__file__).resolve().parents[1]
pkg=root/'Veil of Empires'
html=(pkg/'veil-of-empires.html').read_text()
css=(pkg/'veil-of-empires.css').read_text()
meta=json.loads((pkg/'sheet.json').read_text())
required=['veil-of-empires.html','veil-of-empires.css','sheet.json','translation.json','preview.png','assets/voe-character-sheet-banner.png']
assert not [f for f in required if not (pkg/f).exists()]
for marker in ['<script type="text/worker">','const VOE_DATA = Object.freeze','voe-banner-image','voe-character-portrait','Agent Summary','voe-page-agent','voe-page-protocols','voe-page-gear','voe-page-notes','voe-page-rules']:
    assert marker in html, marker
for marker in ['.voe-banner','.voe-header','.voe-portrait-frame','.voe-page-agent','.voe-round-counter']:
    assert marker in css, marker
assert html.count('class="voe-skill-base"') == 18
assert len(re.findall(r'class="voe-skill-base"[^>]+value="15"',html)) == 18
for marker in ['attr_actions_current','attr_attacks_remaining','attr_attacks_made','act_move_action','act_close_attack','act_ranged_attack','act_reset_round']:
    assert marker in html, marker
assert 'attacks_remaining:Math.max(0,2-attacks)' in html
assert 'attacks_remaining:3' in html
print('Veil of Empires v2.4.2 static validation passed.')
