from pathlib import Path
import json, re, hashlib
root = Path(__file__).resolve().parents[1]
pkg = root / "Veil of Empires"
html=(pkg/"veil-of-empires.html").read_text()
css=(pkg/"veil-of-empires.css").read_text()
meta=json.loads((pkg/"sheet.json").read_text())
required=["veil-of-empires.html","veil-of-empires.css","sheet.json","translation.json","preview.png","assets/voe-character-sheet-banner.png"]
assert not [f for f in required if not (pkg/f).exists()]
assert '<script type="text/worker">' in html
assert 'const VOE_DATA = Object.freeze' in html
assert 'heritages: HERITAGES' in html
assert 'specialties: SPECIALTIES' in html
assert 'protocols: PROTOCOLS' in html
assert 'attr_voe_schema_version' in html
assert 'attr_voe_sheet_version' in html
assert meta["version"] == "2.4.0 Data Engine Foundation"
# Preservation markers for the mature UI
for marker in ["voe-banner-image","voe-character-portrait","Agent Summary","voe-page-agent","voe-page-protocols","voe-page-gear","voe-page-notes","voe-page-rules"]:
    assert marker in html, marker
for marker in [".voe-banner",".voe-header",".voe-portrait-frame",".voe-page-agent"]:
    assert marker in css, marker
# The pre-worker visual HTML must only differ by the two hidden version inputs.
visual=html.split('<script type="text/worker">',1)[0]
normalized=re.sub(r'\n  <input type="hidden" name="attr_voe_(?:schema|sheet)_version"[^>]+>','',visual)
baseline=(root/"tests"/"baseline-preworker.html").read_text()
assert normalized == baseline, "Visible HTML changed from v2.3.3"
baseline_css=(root/"tests"/"baseline.css").read_text()
assert css == baseline_css, "CSS changed from v2.3.3"
print("Veil of Empires v2.4.0 validation passed: UI preserved and data facade present.")
