# 预设主题

本仓库只内置 `preset-liang-ancestor`。安装器会把它幂等地复制到
`~/Library/Application Support/CodexDreamSkinStudio/themes/`，并在首次安装时设为当前主题。

```bash
~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh \
  --id preset-liang-ancestor
```

## 结构

```text
preset-liang-ancestor/
├── theme.json
└── background.jpg
```

主题图片必须位于自己的预设目录内，使用 PNG、JPEG 或 WebP，大小不超过
16 MB、单边不超过 16384 像素、总像素不超过 5000 万。壁纸应是无 UI 的
纯背景；不能把 Codex 截图、窗口框、按钮、输入框或可读水印烘焙进图片。

## 素材权利

`preset-liang-ancestor/background.jpg` 源自上游未附许可证的人物素材，不属于
MIT 软件许可。此仓库应保持私有，除非素材权利人明确授权再分发。详见
[`../NOTICE.md`](../NOTICE.md) 和
[`../references/asset-provenance.md`](../references/asset-provenance.md)。

## 校验

```bash
node scripts/injector.mjs --check-payload \
  --theme-dir presets/preset-liang-ancestor
```
