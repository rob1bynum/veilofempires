# Veil of Empires Roll20 v3.0-alpha.2 Sandbox Build

This package is directly usable in Roll20's Custom Sheet Sandbox.

## Install

1. Open the Roll20 Custom Sheet Sandbox or your game's Custom Character Sheet editor.
2. Paste `dist/veil-of-empires-v3.html` into **HTML Layout**.
3. Paste `dist/veil-of-empires-v3.css` into **CSS Styling**.
4. Paste `dist/translation.json` into **Translation**.
5. Save.
6. Close and reopen the character sheet.

## Included

- Working HTML layout
- Working CSS
- Embedded Roll20 sheet worker
- Version 3 structured rules data
- Automated Attribute and Skill totals
- Warden bonuses
- Condition penalties
- Percentile rolls
- Contingency digit flipping
- Agent, NPC, and Creature mode selector
- Protocol selection scaffolding

## Alpha limits

This build is deliberately conservative. Only confirmed Warden and Condition modifiers are automated.
Heritage and Protocol choices are wired into the data engine but currently have no mechanical modifiers.
The full v2.3.3 source was not available as a complete local file during this build, so this is a clean,
functional sandbox sheet rather than a byte-for-byte visual migration of v2.3.3.
