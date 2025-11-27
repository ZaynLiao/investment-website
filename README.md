# 🏦 智能投資理財平台

一個現代化的投資理財網站,提供完整的投資組合管理、市場分析和產品展示功能。

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)

## ✨ 功能特色

### 🏠 首頁 (Home)

- 吸引人的 Hero 區塊
- 核心功能展示
- 實時市場數據統計
- 熱門投資產品推薦
- 投資見解分享
- 投資流程指引

### 📊 投資儀表板 (Dashboard)

- **投資組合總覽**: 總資產、收益、持有標的、可用資金
- **持有標的管理**: 詳細的持股列表與損益追蹤
- **資產配置分析**: 視覺化圓餅圖展示資產分布
- **交易記錄**: 最近的買賣交易歷史
- **績效指標**: 年化報酬率、夏普比率、最大回撤、勝率等
- **自選觀察清單**: 追蹤感興趣的股票
- **市場提醒**: 智能警示系統(價格突破、停損、配息等)

### 📈 市場分析 (Market)

- 台股/美股主要指數即時資訊
- 技術分析圖表展示
- 資金流向追蹤
- 市場情緒指標
- 漲跌幅排行榜
- 成交量排行
- 產業類股表現
- 即時財經新聞
- 市場統計數據
- 投資洞察分析

### 🛍️ 投資產品 (Products)

- 股票、ETF、基金、債券產品瀏覽
- 智能篩選與搜尋功能
- 即時價格與漲跌幅
- 風險等級與年化報酬評估
- 投資組合配置建議
- 精選策略組合(穩健收益、成長動能、全球配置)
- 投資攻略與觀點分享

## 🎨 設計特點

- ✅ **統一的設計系統**: 一致的卡片樣式、顏色和排版
- ✅ **響應式設計**: 完美適配桌面、平板和手機
- ✅ **流暢動畫**: 精心設計的 hover 效果和過渡動畫
- ✅ **金融主題配色**: 專業的深色主題配金色強調
- ✅ **清晰的視覺層級**: 合理的字體大小和間距

## 🛠️ 技術棧

- **前端框架**: Vue 3 (Composition API)
- **類型支持**: TypeScript
- **構建工具**: Vite 7
- **路由管理**: Vue Router 4
- **圖表庫**: Chart.js + Vue-ChartJs
- **樣式**: Scoped CSS

## 📦 安裝與運行

### 前置需求

- Node.js 18 或更高版本
- npm 或 yarn

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

訪問 http://localhost:5173

### 構建生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

### 類型檢查

```bash
npm run type-check
```

## 📁 專案結構

```
investment-website/
├── src/
│   ├── assets/          # 靜態資源
│   ├── components/      # 可重用組件
│   │   ├── Footer.vue
│   │   ├── Navbar.vue
│   │   └── HelloWorld.vue
│   ├── router/          # 路由配置
│   │   └── index.ts
│   ├── types/           # TypeScript 類型定義
│   │   └── index.ts
│   ├── views/           # 頁面組件
│   │   ├── Home.vue
│   │   ├── Dashboard.vue
│   │   ├── Market.vue
│   │   └── Products.vue
│   ├── App.vue          # 根組件
│   └── main.ts          # 入口文件
├── public/              # 公共資源
├── .github/
│   └── workflows/       # GitHub Actions
│       └── deploy.yml
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 部署

本專案支持多種免費部署方式,詳見 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 推薦方式: Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### GitHub Pages

代碼推送到 GitHub 後會自動通過 GitHub Actions 部署。

## 🎯 核心設計理念

### 卡片系統標準

- Border: `1px solid rgba(212, 175, 55, 0.2)`
- Border-radius: `12px`
- Padding: `20-24px`
- Background: `#111`
- Hover: `translateY(-2px)` + shadow

### 字體系統

- 標題: `1.25rem`
- 內文: `1rem`
- 小標: `0.85rem`

### 間距系統

- Section padding: `60px 50px`
- Title margin: `30px`
- Card gap: `30px`

### 色彩系統

- 主色調: 金色 `#d4af37`
- 正值: 綠色 `#4ade80`
- 負值: 紅色 `#f87171`
- 資訊: 藍色 `#60a5fa`

## 📝 待開發功能

- [ ] 後端 API 整合
- [ ] 真實市場數據串接
- [ ] 用戶認證系統
- [ ] 交易功能實現
- [ ] 個人化設置
- [ ] 多語言支持
- [ ] 深色/淺色主題切換
- [ ] 更多圖表分析工具

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request!

## 📄 授權

MIT License

## 👨‍💻 作者

ZAYN

---

⭐ 如果這個專案對你有幫助,請給一個 Star!
