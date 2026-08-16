# 滑动变祖 · Codex Skin

把“梁祖”黑金视觉带进官方 Codex Desktop，同时保留原生侧栏、任务区、审批、菜单和输入框。

![梁祖 Codex 皮肤预览](assets/liang-ancestor.jpg)

> 仅支持 macOS。非 OpenAI 官方项目，也未获得 OpenAI 背书。

当前引擎基于 [Codex Dream Skin Studio v1.5.14](https://github.com/Fei-Away/Codex-Dream-Skin/tree/v1.5.14/macos)
的公开教程与运行时，并在它的新版选择器、安全恢复和菜单栏架构上加入梁祖专属视频滑块。

## 特点

- 一张 16:9 壁纸连续覆盖侧栏和主界面，不使用伪造 UI 截图。
- 右下角提供 0–30 连续“变祖”滑块：人物逐帧进化，色温、光晕、景深和镜头推近同步增强。
- 六阶段称号随进度切换：小难梁、牢梁、梁子、梁圣、梁神、梁祖。
- 首页突出人物主视觉，任务页面自动降低背景干扰。
- 黑金配色适配原生控件、正文、输入框和交互状态。
- 通过本机回环 CDP 注入，不修改 Codex `.app`、`app.asar` 或代码签名。
- 校验 Codex 身份、Team ID、架构、签名、端口归属和内置 Node.js。
- 提供一键验证、暂停和恢复官方外观。

## 安装要求

- macOS
- 官方 Codex Desktop 已安装并至少启动过一次
- `~/.codex/config.toml` 已存在
- 不需要全局安装 Node.js

## 快速安装

```bash
git clone https://github.com/hackermengzhi/dsh-liang-codex-skin.git
cd dsh-liang-codex-skin
./scripts/install-dream-skin-macos.sh --no-launch
```

安装前请先完全退出 Codex。安装完成后正常打开 Codex，再运行桌面的
`Codex Dream Skin.command`；如果 Codex 已在运行，启动器会要求明确确认后才重启应用。

也可以克隆后双击：

```text
Install Codex Dream Skin.command
```

安装器会把完整引擎复制到：

```text
~/.codex/codex-dream-skin-studio
```

状态、日志和主题保存在：

```text
~/Library/Application Support/CodexDreamSkinStudio
```

首次安装默认选择 `preset-liang-ancestor`。

## 滑动变祖

拖动右下角滑块即可在 0–30 级之间连续变化；它不是简单切图，而是直接控制
8 秒进化视频的时间轴，因此可以停在任意中间形态。滑块、金色能量光晕、人物
亮度与画面推近会同步响应，松手后档位保存在本机，下次注入会恢复。

滑块也支持键盘方向键。它只改变皮肤的视觉强度，不读取、不写入 Codex 的模型、
推理强度、供应商、代理地址或 API key 设置。

## 使用

安装后，桌面会生成以下入口：

| 入口 | 用途 |
| --- | --- |
| `Codex Dream Skin.command` | 启动或重新应用皮肤 |
| `Codex Dream Skin - Customize.command` | 换成自己的背景图片 |
| `Codex Dream Skin - Verify.command` | 验证注入状态和原生界面 |
| `Codex Dream Skin - Restore.command` | 恢复官方外观并关闭 CDP |

命令行验证：

```bash
~/.codex/codex-dream-skin-studio/scripts/doctor-macos.sh --require-live
~/.codex/codex-dream-skin-studio/scripts/verify-dream-skin-macos.sh --reload
```

新版不会把 Codex 本体注册成 `launchctl submit` 或 KeepAlive 作业；Codex 始终通过
macOS 普通 `open -na` 启动。后台作业只负责皮肤注入器，不会在你退出 Codex 后反复拉起它。

## 紧急恢复

如果界面异常，先完全退出 Codex，然后运行：

```bash
~/.codex/codex-dream-skin-studio/scripts/restore-dream-skin-macos.sh
```

它会关闭皮肤注入器、撤销 CDP 参数并恢复保存的原生外观；不会修改或替换 Codex
应用包。如果只是暂时停用皮肤，可运行：

```bash
~/.codex/codex-dream-skin-studio/scripts/pause-dream-skin-macos.sh
```

## 从 DSH 版本迁移了什么

本项目改编自
[`kingOfSoySauce/dsh-liang-skin`](https://github.com/kingOfSoySauce/dsh-liang-skin)：

- 保留梁祖人物、黑金配色和右侧主视觉。
- 将 DeepSeek Harness 插件宿主重写为 Codex Desktop 的可恢复 CDP 注入器。
- 将 DSH 的档位概念改造成 Codex 内的 0–30 级视觉演化滑块；保留“滑动变祖”体验，
  但不会伪造或暗改模型设置。

## 安全模型

1. 动态发现并验证官方 `com.openai.codex` 应用。
2. 仅将 CDP 绑定到 `127.0.0.1`。
3. 只接受属于 Codex 的监听进程和预期的 `app://` 渲染器。
4. 视频和装饰层保持 `pointer-events: none`；只有独立滑块控件接收指针输入。
5. 仅当 PID、启动时间、可执行文件和命令行全部匹配时停止注入器。
6. Restore 会移除注入内容、恢复保存的外观配置并关闭调试会话。

CDP 在本机回环上没有额外认证。皮肤运行期间不要运行不受信任的本地软件；不用时建议执行 Restore。

## 开发与测试

```bash
npm test
/Applications/ChatGPT.app/Contents/Resources/cua_node/bin/node \
  scripts/injector.mjs --check-payload \
  --theme-dir presets/preset-liang-ancestor
```

测试覆盖脚本语法、载荷构建、图片与视频限制、0–30 滑块清理和持久化、新版 Codex 选择器、路径穿越、符号链接、预设播种、
配置原子写入、PID 复用保护、签名检查和 Restore 往返。

## 许可与素材声明

- Dream Skin Studio 软件引擎采用 MIT 许可，见 [`LICENSE`](LICENSE)。
- `assets/liang-ancestor.jpg`、`assets/liang-evolution.webm`、预设媒体及上游人物源图不包含在 MIT 软件许可中。
- 人物素材来自上游提交
  `3d7ceacb8e75f1e03188d5c50f61da474f6ae2b4`；上游在本项目制作时没有提供许可证。
- 公开托管本仓库不代表授予素材再分发、商用、肖像或衍生作品权利。使用者需自行取得所需授权。
- 完整来源、哈希和限制见 [`NOTICE.md`](NOTICE.md) 与
  [`references/asset-provenance.md`](references/asset-provenance.md)。

## API key

本皮肤不需要任何模型供应商、代理地址或 API key。不要把密钥写入仓库、主题配置、日志或截图。
