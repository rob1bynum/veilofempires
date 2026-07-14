# Veil of Empires Roll20 v3.0-alpha.1

This is the first architecture milestone for the Version 3.0 production release.

## What this milestone contains

- A Roll20-compatible data layer for Heritages, Specialties, Protocols, Conditions, skills, and sheet modes.
- A reusable rules engine that calculates modifiers without embedding game data in calculation functions.
- Player, NPC, and Creature sheet-mode definitions.
- A character-creation wizard state model.
- Validation tests for duplicate IDs, missing references, malformed modifiers, and wizard steps.
- A migration plan that keeps v2.3.3 stable while Version 3.0 is developed separately.

## Important

This package is an architecture alpha, not yet a replacement for the live v2.3.3 sheet.
The next build milestone will connect this engine to the existing HTML controls and then introduce the redesigned interface.

## Project layout

- `source/data/game-data.js` — structured rules content
- `source/engine/rules-engine.js` — calculation and validation functions
- `source/engine/roll20-adapter.js` — Roll20 sheet-worker integration boundary
- `source/components/wizard-model.js` — character creation workflow
- `source/components/sheet-modes.js` — Player, NPC, and Creature modes
- `tests/validate-data.js` — local validation suite
- `docs/ARCHITECTURE.md` — Version 3.0 design
- `docs/MIGRATION.md` — safe migration from v2.3.3
- `docs/ROADMAP.md` — staged development plan

## Run validation

```bash
node tests/validate-data.js
```
