# Veil of Empires Roll20 Character Sheet

Repository-ready Roll20 character sheet for **Veil of Empires**.

## Files Roll20 uses

- `veil-of-empires.html`
- `veil-of-empires.css`
- `sheet.json`
- `translation.json`
- `preview.png`
- `assets/voe-character-sheet-banner.png`

## Banner artwork

The banner is stored in this folder and referenced from the CSS through the canonical Roll20 character-sheet repository URL:

`https://raw.githubusercontent.com/Roll20/roll20-character-sheets/master/Veil%20of%20Empires/assets/voe-character-sheet-banner.png`

That URL becomes valid after this exact folder is merged into Roll20's `roll20-character-sheets` repository. During development before merge, either:

1. keep using a temporary public URL in the CSS, or
2. place this folder in your own GitHub fork and change `Roll20` in the raw URL to your GitHub username and branch as needed.

Roll20's pasted Custom Sheet editor cannot load local files from a ZIP. The repository edition removes dependence on the previous website host once merged.

## Submission notes

- Keep LF line endings.
- Add your numeric Roll20 user ID to `sheet.json` before submission.
- Confirm publisher authorization if submitting this as an officially supported sheet.
- Test in Roll20's Custom Sheet Sandbox before opening a pull request.
