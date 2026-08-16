# Notices

This is an unofficial Codex Desktop customization project. It is not affiliated
with, endorsed by, or sponsored by OpenAI.

## Software

The MIT License in `LICENSE` applies to the Codex Dream Skin Studio software
engine: scripts, CSS, injector code, tests, and software documentation.

It does not grant rights to OpenAI/Codex trademarks, official application
binaries, or third-party artwork.

## Liang artwork

These files are excluded from the MIT software license:

- `assets/liang-ancestor.jpg`
- `assets/liang-evolution.webm`
- `presets/preset-liang-ancestor/background.jpg`
- `presets/preset-liang-ancestor/liang-evolution.webm`
- `references/upstream/stage-30.png`

The portrait and evolution video were copied from `kingOfSoySauce/dsh-liang-skin` at upstream commit
`3d7ceacb8e75f1e03188d5c50f61da474f6ae2b4`. The upstream repository did not
contain a license when this adaptation was prepared. The derived 16:9 wallpaper
only places that portrait on a dark canvas; it does not establish redistribution
or commercial-use rights. Public availability of this repository does not grant
permission to redistribute or commercially use those media assets.

## Runtime

The project does not redistribute Node.js. It validates and uses the Node.js
runtime already signed and bundled with the official Codex Desktop application.

## Security

The theme is injected through Chromium DevTools Protocol on loopback only. The
debugging port is sensitive while the skin is active. Run Restore when finished.
