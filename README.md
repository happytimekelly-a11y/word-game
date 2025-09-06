# 英语小霸王 - Word Sprint Game

一个基于 Duolingo 风格的英语词汇学习游戏，具有错题本功能和智能复习系统。

## 🎮 游戏特色

- **核心玩法**: 20道选择题，测试英语词汇理解
- **生命系统**: 5颗心，答错扣除
- **错题本**: 分为当前错题和历史错题
- **智能复习**: 70%概率优先测试错题
- **成就系统**: 追踪已掌握单词和连续学习天数
- **本地存储**: 自动保存学习进度

## 🚀 部署到 Vercel

### 方法一：通过 Vercel 网页部署（推荐）

1. **准备项目**
   ```bash
   # 确保所有文件都在项目文件夹中
   word-game/
   ├── index.html
   ├── script.js
   ├── style.css
   ├── words.json
   ├── package.json
   ├── vercel.json
   └── .git/
   ```

2. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

3. **导入项目**
   - 点击 "New Project"
   - 选择你的 word-game 仓库
   - 或者直接拖拽项目文件夹到导入区域

4. **配置项目**
   - Framework Preset: 选择 "Other"
   - Root Directory: 保持默认
   - Build Command: 留空（静态网站无需构建）
   - Output Directory: 留空
   - Install Command: `npm install`

5. **部署**
   - 点击 "Deploy"
   - 等待部署完成
   - 获得你的网站 URL

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   # 在项目根目录运行
   cd word-game
   vercel
   ```

4. **生产部署**
   ```bash
   vercel --prod
   ```

### 方法三：通过 GitHub 自动部署

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **在 Vercel 连接 GitHub**
   - 在 Vercel 控制台导入 GitHub 仓库
   - 启用自动部署
   - 每次推送代码会自动重新部署

## 📁 项目结构

```
word-game/
├── index.html          # 主页面
├── script.js           # 游戏逻辑
├── style.css           # 样式文件
├── words.json          # 词汇数据库
├── package.json        # 项目配置
├── vercel.json         # Vercel 配置
└── .git/              # Git 仓库
```

## ⚙️ Vercel 配置说明

### `vercel.json` 配置
- **静态文件服务**: 直接提供 HTML、CSS、JS 文件
- **单页应用路由**: 所有路径重定向到 index.html
- **安全头**: 添加基本的安全防护

### `package.json` 配置
- **项目信息**: 名称、版本、描述
- **部署脚本**: 开发、构建、部署命令
- **元数据**: 关键词、作者、仓库信息

## 🔧 故障排除

### 常见问题

1. **部署失败**
   - 检查文件路径是否正确
   - 确保没有语法错误
   - 查看 Vercel 构建日志

2. **样式不加载**
   - 检查 CSS 文件路径
   - 确保文件名大小写正确

3. **JavaScript 错误**
   - 检查浏览器控制台
   - 确保所有文件正确上传

4. **本地存储问题**
   - Vercel 支持 localStorage
   - 确保浏览器允许本地存储

## 🌐 访问你的网站

部署成功后，你可以通过以下方式访问：
- Vercel 提供的 `.vercel.app` 域名
- 绑定自定义域名
- 通过 Vercel 控制台管理

## 📊 性能优化

Vercel 自动提供：
- CDN 加速
- 图片优化
- 代码分割
- 缓存策略
- SSL 证书

## 🔄 更新部署

每次修改代码后：
```bash
git add .
git commit -m "Update description"
git push origin main
```

Vercel 会自动重新部署你的项目。

## 📄 许可证

MIT License - 详见 LICENSE 文件

---

## 🎯 下一步

1. 部署到 Vercel
2. 测试所有功能
3. 绑定自定义域名（可选）
4. 添加分析工具（可选）
5. 分享给朋友使用！

开始你的英语词汇学习之旅吧！🚀