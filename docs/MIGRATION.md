# Migration Plan: v2.3.3 to v3.0

## Stable branch

v2.3.3 remains the playable production baseline until 3.0 reaches release-candidate status.

## Stage A: Parallel engine

1. Copy the v2.3.3 sheet into the 3.0 development branch.
2. Embed `VOE_DATA` above the existing worker logic.
3. Add the pure engine and adapter.
4. Compare old calculations with new calculations.
5. Keep old output authoritative until parity tests pass.

## Stage B: Data migration

Move one rules family at a time:

1. Conditions
2. Specialties
3. Protocols
4. Heritages
5. Skills and linked Attributes
6. Equipment and armor
7. Combat actions

Each family receives regression fixtures before the legacy object is removed.

## Stage C: UI shell

Replace visual layout without renaming existing attributes. This allows old characters to open in the redesigned sheet without manual rebuilding.

## Stage D: Wizard

The wizard writes to the same attributes used by the full sheet. It is an assisted editor, not a separate character format.

## Stage E: NPC and Creature modes

Add `sheet_mode` with values `player`, `npc`, and `creature`. Shared resources and Conditions continue using the same engine.

## Release gate

Version 3.0 is ready only when:

- existing v2.3.3 characters load without losing data
- all current calculations pass parity tests
- wizard-created Agents match manually created Agents
- Player, NPC, and Creature rolls work in the Roll20 sandbox
- desktop and narrow-width layouts remain usable
