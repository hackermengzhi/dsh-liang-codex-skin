# 滑动变祖 · Codex 皮肤

这是 [`kingOfSoySauce/dsh-liang-skin`](https://github.com/kingOfSoySauce/dsh-liang-skin)
的 **Codex Desktop（macOS）适配版**。它保留“梁祖”黑金视觉，将人物放在窗口右侧，左侧留出低干扰区域给 Codex 原生内容。

本项目基于 Codex Dream Skin Studio 1.2.0 的安全注入引擎：只通过本机回环地址上的 CDP 应用样式，**不会修改**官方 Codex `.app`、`app.asar` 或代码签名。侧栏、任务、审批、输入框、菜单和键盘焦点仍由 Codex 原生界面提供。

> 非 OpenAI 官方项目，也未获得 OpenAI 背书。Codex 是其权利人的商标。

## 与 DSH 原版的差异

- 保留：梁祖人物、黑金配色、右侧主视觉和低干扰任务背景。
- 改写：DeepSeek Harness 插件宿主已替换为 Codex Desktop 的可恢复 CDP 注入器。
- 暂不提供：DSH 原版会读取 `ModelDirectory` 并提交推理档位的滑块。Codex Desktop 当前没有等价、稳定的第三方客户端插件 API；本适配版不会伪造或暗改模型推理设置。

## 要求

- macOS
- 已安装并至少启动过一次官方 Codex Desktop
- 无需全局安装 Node.js；安装器会校验并使用 Codex 自带、已签名的 Node.js 运行时

## 安装

克隆后双击：

```text
Install Codex Dream Skin.command
```

或在终端运行（只安装，不立即启动）：

```bash
./scripts/install-dream-skin-macos.sh --no-launch
```

安装位置：

- 引擎：`~/.codex/codex-dream-skin-studio`
- 状态、日志和主题：`~/Library/Application Support/CodexDreamSkinStudio`

安装器默认启用 `preset-liang-ancestor`。之后可使用桌面上的启动器：

- `Codex Dream Skin.command`：启动或重新应用
- `Codex Dream Skin - Verify.command`：验证原生侧栏、输入框、溢出和注入状态
- `Codex Dream Skin - Restore.command`：恢复官方外观并关闭调试会话

## 安全边界

1. 验证 `com.openai.codex`、Team ID、架构、代码签名和内置 Node.js 版本。
2. 仅把 CDP 绑定到 `127.0.0.1`，并验证端口属于 Codex。
3. 只注入预期的 `app://` 渲染器目标。
4. 装饰层保持 `pointer-events: none`，不覆盖原生交互。
5. Restore 仅在 PID、可执行文件、命令行和启动时间全部匹配时停止注入器。

CDP 在本机回环上没有额外认证。使用皮肤时不要运行不受信任的本地软件；不再使用时运行 Restore。

## 开发与验证

```bash
npm test
./scripts/injector.mjs --check-payload --theme-dir ./presets/preset-liang-ancestor
```

完整发布验收包括：测试、安装、实时验证、重载验证、Restore、重新安装，以及确认官方应用签名仍通过。

## 许可与素材

- 本仓库的 Dream Skin Studio 软件引擎采用 MIT 许可，见 [`LICENSE`](./LICENSE)。
- 梁祖人物源自上游仓库，**不包含在 MIT 软件许可中**。
- 上游仓库在本次适配时未包含 `LICENSE`。在获得素材权利人明确许可前，请把本仓库保持为私有，不要公开再发布或商用。
- 详细来源见 [`references/asset-provenance.md`](./references/asset-provenance.md) 与 [`NOTICE.md`](./NOTICE.md)。

## API 配置

皮肤不需要模型供应商、代理地址或 API key。不要把 API key 写入本仓库、主题 JSON、日志或截图。
