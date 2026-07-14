# Veil of Empires Roll20 v2.3.2

## Masthead correction

The top banner now preserves the artwork's original aspect ratio at every sheet width.

- `object-fit: fill` has been removed.
- The image uses `object-fit: cover`, so it fills the full width without being stretched or squashed.
- Only excess vertical artwork is clipped inside the shallow header.
- The focal point is positioned over the title plaque so **Veil of Empires** remains centered as the sheet is resized.
- Header height remains compact: 96–112 pixels.

## Installation

Replace all content in Roll20's **HTML Layout** and **CSS Styling** editors with the corresponding files in the `Veil%20of%20Empires` folder. Save the game settings, then fully close and reopen the character sheet.
