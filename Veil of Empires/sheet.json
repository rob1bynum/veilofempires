from pathlib import Path
import json, re
root = Path(__file__).resolve().parents[1] / "Veil of Empires"
required = [
    "veil-of-empires.html", "veil-of-empires.css", "sheet.json",
    "translation.json", "preview.png", "assets/voe-character-sheet-banner.png"
]
missing = [f for f in required if not (root / f).exists()]
assert not missing, f"Missing files: {missing}"
meta = json.loads((root / "sheet.json").read_text())
for key in ("html", "css", "authors", "preview", "instructions", "legacy"):
    assert key in meta, f"sheet.json missing {key}"
json.loads((root / "translation.json").read_text())
html = (root / "veil-of-empires.html").read_text()
css = (root / "veil-of-empires.css").read_text()
assert '<script type="text/worker">' in html
assert '60sxqiivmv.preview.c38.airoapp.ai' not in html + css
assert 'assets/voe-character-sheet-banner.png' in css
assert re.search(r'name="attr_character_name"', html)
print("Veil of Empires repository package validation passed.")
