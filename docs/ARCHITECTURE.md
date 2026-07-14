# Version 3.0 Architecture

## Design rule

Game content, calculations, Roll20 APIs, and presentation must be separate.

```
Structured Data
      ↓
Pure Rules Engine
      ↓
Roll20 Adapter
      ↓
Sheet Workers
      ↓
Player / NPC / Creature UI
```

## Layer 1: Structured data

`game-data.js` is the authoritative catalog of rules entities. Each entity has a stable machine ID, player-facing name, descriptive text, tags, and zero or more modifiers.

A modifier uses this normalized shape:

```js
{
  target: "skill.athletics",
  operation: "add",
  value: 5
}
```

This allows a single calculator to process Heritage, Specialty, Protocol, Condition, equipment, advancement, and future effect sources.

## Layer 2: Pure rules engine

The engine accepts ordinary JavaScript objects and returns calculated results. It does not call `getAttrs`, `setAttrs`, `on`, `startRoll`, or any other Roll20 function.

Benefits:

- testable outside Roll20
- reusable for NPCs and Creatures
- easier migration to another VTT
- fewer side effects
- less duplicated logic

## Layer 3: Roll20 adapter

The adapter translates Roll20 attribute names into engine input and turns engine output back into `setAttrs` updates.

This is the only layer that knows names such as `protocol_slot_1`, `health_max`, and `condition_stunned`.

## Layer 4: UI components

Player, NPC, and Creature views consume the same engine but expose different sections.

## Data migration rule

Existing v2.3.3 attribute names remain supported during the 3.0 transition. New names should only be introduced behind adapter aliases or explicit migration workers.
