# Asset provenance

## Liang ancestor portrait

- Upstream repository: `https://github.com/kingOfSoySauce/dsh-liang-skin`
- Upstream commit: `3d7ceacb8e75f1e03188d5c50f61da474f6ae2b4`
- Upstream path: `assets/portrait-source-v2/stage-30.png`
- Local archival copy: `references/upstream/stage-30.png`
- Source SHA-256: `5fd77f30412e1be01b049824f8161cb5e014dcae51043411e62d26d7bef57bd5`
- Derived wallpaper: `assets/liang-ancestor.jpg`
- Wallpaper SHA-256: `9ce728aff0051edd087a03a0acb084ce8c5a0f5d2d349bcec326cd1a4ae328de`
- Derivation: place the 1024×1024 source at the right of a 2560×1440 `#111111`
  canvas after scaling it to 1440×1440; JPEG quality 2 via ffmpeg.
- Purpose: private Codex Desktop skin adaptation.
- Rights: excluded from the MIT software license. The upstream repository had no
  license at review time; redistribution and commercial-use rights are not established.

## Liang evolution video

- Upstream repository: `https://github.com/kingOfSoySauce/dsh-liang-skin`
- Upstream commit: `3d7ceacb8e75f1e03188d5c50f61da474f6ae2b4`
- Upstream path: `assets/liang-evolution.webm`
- Local runtime copies: `assets/liang-evolution.webm` and
  `presets/preset-liang-ancestor/liang-evolution.webm`
- SHA-256: `216f2bace19a9b8f11473272930e2549abb6a5e9a33b5434a58c4ecb6578c181`
- Derivation: unchanged copy of the upstream WebM used as the 0–30 slider timeline.
- Rights: excluded from the MIT software license. The upstream repository had no
  license at review time; redistribution and commercial-use rights are not established.

Run `shasum -a 256 references/upstream/stage-30.png assets/liang-ancestor.jpg assets/liang-evolution.webm`
to verify the checked-in files.
