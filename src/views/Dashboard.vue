<template>
    <div class="dashboard">
        <div class="dashboard-header">
            <div class="header-content">
                <h1>投資儀表板</h1>
                <p>即時掌握您的投資組合表現</p>
            </div>
        </div>

        <div class="dashboard-content">
            <!-- Portfolio Summary -->
            <div class="portfolio-summary">
                <h2>投資組合總覽</h2>
                <div class="summary-cards">
                    <div class="summary-card total-assets">
                        <div class="card-header">
                            <span class="card-icon">💰</span>
                            <span class="card-label">總資產</span>
                        </div>
                        <div class="card-body">
                            <span class="card-value">NT$ 1,250,000</span>
                        </div>
                    </div>
                    <div class="summary-card profit-card">
                        <div class="card-header">
                            <span class="card-icon">📈</span>
                            <span class="card-label">總收益</span>
                        </div>
                        <div class="card-body">
                            <span class="card-value positive">+NT$ 185,000</span>
                            <span class="card-percent">+17.35%</span>
                        </div>
                    </div>
                    <div class="summary-card holdings-card">
                        <div class="card-header">
                            <span class="card-icon">📊</span>
                            <span class="card-label">持有標的</span>
                        </div>
                        <div class="card-body">
                            <span class="card-value">12 項</span>
                        </div>
                    </div>
                    <div class="summary-card cash-card">
                        <div class="card-header">
                            <span class="card-icon">💵</span>
                            <span class="card-label">可用資金</span>
                        </div>
                        <div class="card-body">
                            <span class="card-value">NT$ 250,000</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Holdings -->
            <div class="holdings-section">
                <h2>持有標的</h2>
                <div class="holdings-table">
                    <table>
                        <thead>
                            <tr>
                                <th>代碼</th>
                                <th>名稱</th>
                                <th>類型</th>
                                <th>持有數量</th>
                                <th>成本價</th>
                                <th>現價</th>
                                <th>市值</th>
                                <th>損益</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="holding in holdings" :key="holding.id">
                                <td class="stock-code">{{ holding.code }}</td>
                                <td>{{ holding.name }}</td>
                                <td>{{ holding.type }}</td>
                                <td>{{ holding.quantity }}</td>
                                <td>{{ holding.costPrice }}</td>
                                <td :class="holding.profitPercent >= 0 ? 'positive' : 'negative'">
                                    {{ holding.currentPrice }}
                                </td>
                                <td>{{ holding.marketValue }}</td>
                                <td :class="holding.profitPercent >= 0 ? 'positive' : 'negative'">
                                    {{ holding.profit }}
                                    <span class="percent">({{ holding.profitPercent >= 0 ? '+' : '' }}{{
                                        holding.profitPercent }}%)</span>
                                </td>
                                <td>
                                    <button class="action-btn buy">買進</button>
                                    <button class="action-btn sell">賣出</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Asset Allocation -->
            <div class="allocation-section">
                <h2>資產配置分析</h2>
                <div class="allocation-content">
                    <div class="allocation-chart">
                        <div class="pie-chart-container">
                            <div class="pie-chart" :style="{ background: allocationGradient }">
                                <div class="allocation-center">
                                    <p class="center-label">成長資產</p>
                                    <p class="center-value">{{ growthExposure }}%</p>
                                    <p class="center-note">股票+ETF+基金</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="allocation-legend">
                        <div class="legend-header">
                            <span>資產類別</span>
                            <span>比例</span>
                            <span>金額</span>
                        </div>
                        <div v-for="allocation in assetAllocation" :key="allocation.type" class="legend-item">
                            <div class="legend-info">
                                <span class="legend-color" :style="{ background: allocation.color }"></span>
                                <span class="legend-label">{{ allocation.type }}</span>
                            </div>
                            <span class="legend-value">{{ allocation.percentage }}%</span>
                            <span class="legend-amount">{{ formatCurrency(allocationValue(allocation.percentage))
                                }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Transactions -->
            <div class="transactions-section">
                <h2>最近交易記錄</h2>
                <div class="transactions-list">
                    <div v-for="transaction in recentTransactions" :key="transaction.id" class="transaction-item">
                        <div class="transaction-type" :class="transaction.type">
                            {{ transaction.type === 'buy' ? '買進' : '賣出' }}
                        </div>
                        <div class="transaction-info">
                            <span class="transaction-name">{{ transaction.name }}</span>
                            <span class="transaction-date">{{ transaction.date }}</span>
                        </div>
                        <div class="transaction-details">
                            <span class="transaction-quantity">{{ transaction.quantity }} 股</span>
                            <span class="transaction-price">@ {{ transaction.price }}</span>
                        </div>
                        <div class="transaction-total">
                            {{ transaction.total }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Performance Metrics -->
            <div class="performance-section">
                <h2>績效指標</h2>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-header">
                            <span class="metric-icon">📊</span>
                            <span class="metric-label">年化報酬率</span>
                        </div>
                        <div class="metric-value positive">+18.5%</div>
                        <div class="metric-change">vs 大盤 +8.2%</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-header">
                            <span class="metric-icon">📈</span>
                            <span class="metric-label">夏普比率</span>
                        </div>
                        <div class="metric-value">1.85</div>
                        <div class="metric-change">風險調整後收益</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-header">
                            <span class="metric-icon">📉</span>
                            <span class="metric-label">最大回撤</span>
                        </div>
                        <div class="metric-value negative">-12.3%</div>
                        <div class="metric-change">2024年3月</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-header">
                            <span class="metric-icon">🎯</span>
                            <span class="metric-label">勝率</span>
                        </div>
                        <div class="metric-value">68%</div>
                        <div class="metric-change">34筆獲利/50筆交易</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-header">
                            <span class="metric-icon">💹</span>
                            <span class="metric-label">平均持有天數</span>
                        </div>
                        <div class="metric-value">45天</div>
                        <div class="metric-change">中長線策略</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-header">
                            <span class="metric-icon">⚡</span>
                            <span class="metric-label">週轉率</span>
                        </div>
                        <div class="metric-value">2.5倍/年</div>
                        <div class="metric-change">穩健型投資</div>
                    </div>
                </div>
            </div>

            <!-- Watchlist -->
            <div class="watchlist-section">
                <h2>自選觀察清單</h2>
                <div class="watchlist-content">
                    <div class="watchlist-grid">
                        <div v-for="stock in watchlist" :key="stock.code" class="watch-item">
                            <div class="watch-header">
                                <div class="watch-info">
                                    <span class="watch-name">{{ stock.name }}</span>
                                    <span class="watch-code">{{ stock.code }}</span>
                                </div>
                                <button class="watch-action">+ 加入</button>
                            </div>
                            <div class="watch-price" :class="stock.change >= 0 ? 'positive' : 'negative'">
                                <span class="price-value">{{ stock.price }}</span>
                                <span class="price-change">
                                    {{ stock.change >= 0 ? '▲' : '▼' }} {{ Math.abs(stock.change) }}%
                                </span>
                            </div>
                            <div class="watch-stats">
                                <div class="stat-item">
                                    <span class="stat-label">成交量</span>
                                    <span class="stat-value">{{ stock.volume }}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">本益比</span>
                                    <span class="stat-value">{{ stock.pe }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Market Alerts -->
            <div class="alerts-section">
                <h2>市場提醒</h2>
                <div class="alerts-content">
                    <div v-for="alert in marketAlerts" :key="alert.id" class="alert-item" :class="alert.priority">
                        <div class="alert-icon">
                            <span v-if="alert.priority === 'high'">🔴</span>
                            <span v-else-if="alert.priority === 'medium'">🟡</span>
                            <span v-else>🟢</span>
                        </div>
                        <div class="alert-content">
                            <div class="alert-header">
                                <span class="alert-title">{{ alert.title }}</span>
                                <span class="alert-time">{{ alert.time }}</span>
                            </div>
                            <p class="alert-message">{{ alert.message }}</p>
                            <span class="alert-tag">{{ alert.tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import type { Holding, AssetAllocation, Transaction } from '@/types'

    const holdings = ref<Holding[]>([
        {
            id: 1,
            name: '台積電',
            code: '2330',
            type: '股票',
            quantity: 100,
            costPrice: 'NT$ 550',
            currentPrice: 'NT$ 585',
            marketValue: 'NT$ 58,500',
            profit: '+NT$ 3,500',
            profitPercent: 6.36
        },
        {
            id: 2,
            name: '聯發科',
            code: '2454',
            type: '股票',
            quantity: 50,
            costPrice: 'NT$ 850',
            currentPrice: 'NT$ 925',
            marketValue: 'NT$ 46,250',
            profit: '+NT$ 3,750',
            profitPercent: 8.82
        },
        {
            id: 3,
            name: '元大台灣50',
            code: '0050',
            type: 'ETF',
            quantity: 200,
            costPrice: 'NT$ 135',
            currentPrice: 'NT$ 142',
            marketValue: 'NT$ 28,400',
            profit: '+NT$ 1,400',
            profitPercent: 5.19
        },
        {
            id: 4,
            name: '鴻海',
            code: '2317',
            type: '股票',
            quantity: 300,
            costPrice: 'NT$ 110',
            currentPrice: 'NT$ 108',
            marketValue: 'NT$ 32,400',
            profit: '-NT$ 600',
            profitPercent: -1.82
        },
    ])

    const assetAllocation = ref<AssetAllocation[]>([
        { type: '台股/美股', percentage: 38, color: '#d4af37' },
        { type: '全球ETF', percentage: 24, color: '#60a5fa' },
        { type: '主題基金', percentage: 15, color: '#a855f7' },
        { type: '債券/票息', percentage: 13, color: '#4ade80' },
        { type: '現金部位', percentage: 6, color: '#f87171' },
        { type: '另類投資', percentage: 4, color: '#fbbf24' }
    ])

    const portfolioValue = 1250000

    const allocationGradient = computed(() => {
        let current = 0
        const segments = assetAllocation.value.map(({ color, percentage }) => {
            const start = current
            const end = current + percentage
            current = end
            return `${color} ${start}% ${end}%`
        })
        return `conic-gradient(${segments.join(', ')})`
    })

    const growthExposure = computed(() =>
        assetAllocation.value
            .filter(item => ['台股/美股', '全球ETF', '主題基金'].includes(item.type))
            .reduce((total, current) => total + current.percentage, 0)
    )

    const allocationValue = (percentage: number): number =>
        Math.round(portfolioValue * (percentage / 100))

    const formatCurrency = (amount: number): string => `NT$ ${amount.toLocaleString('zh-TW')}`

    const recentTransactions = ref<Transaction[]>([
        {
            id: 1,
            type: 'buy',
            name: '台積電 (2330)',
            date: '2025-11-27',
            quantity: 50,
            price: 'NT$ 585',
            total: 'NT$ 29,250'
        },
        {
            id: 2,
            type: 'sell',
            name: '鴻海 (2317)',
            date: '2025-11-26',
            quantity: 100,
            price: 'NT$ 108',
            total: 'NT$ 10,800'
        },
        {
            id: 3,
            type: 'buy',
            name: '元大台灣50 (0050)',
            date: '2025-11-25',
            quantity: 100,
            price: 'NT$ 142',
            total: 'NT$ 14,200'
        },
        {
            id: 4,
            type: 'buy',
            name: '聯發科 (2454)',
            date: '2025-11-24',
            quantity: 20,
            price: 'NT$ 925',
            total: 'NT$ 18,500'
        },
    ])

    const watchlist = ref([
        { name: '台達電', code: '2308', price: 'NT$ 325', change: 2.8, volume: '12,500張', pe: '18.5' },
        { name: '廣達', code: '2382', price: 'NT$ 235', change: 4.2, volume: '28,600張', pe: '22.3' },
        { name: '日月光', code: '2311', price: 'NT$ 148', change: -1.5, volume: '8,200張', pe: '15.2' },
        { name: '國泰金', code: '2882', price: 'NT$ 58.5', change: 0.8, volume: '15,300張', pe: '12.8' },
        { name: '中華電', code: '2412', price: 'NT$ 125', change: 0.4, volume: '6,800張', pe: '16.5' },
        { name: '聯電', code: '2303', price: 'NT$ 52.5', change: 3.2, volume: '45,200張', pe: '14.8' }
    ])

    const marketAlerts = ref([
        {
            id: 1,
            priority: 'high',
            title: '台積電突破新高',
            message: '台積電 (2330) 今日盤中突破 NT$ 600，創歷史新高，建議關注回測支撐。',
            time: '10分鐘前',
            tag: '價格提醒'
        },
        {
            id: 2,
            priority: 'medium',
            title: '聯發科接近目標價',
            message: '聯發科 (2454) 距離您設定的目標價 NT$ 950 僅差 2.7%，請留意獲利了結時機。',
            time: '1小時前',
            tag: '目標價'
        },
        {
            id: 3,
            priority: 'high',
            title: '鴻海停損警示',
            message: '鴻海 (2317) 已跌破您的停損價 NT$ 108，建議評估是否出場。',
            time: '2小時前',
            tag: '停損警示'
        },
        {
            id: 4,
            priority: 'low',
            title: '元大台灣50配息公告',
            message: '元大台灣50 (0050) 公告配息 NT$ 3.5/股，除息日為 12月15日。',
            time: '5小時前',
            tag: '股息資訊'
        },
        {
            id: 5,
            priority: 'medium',
            title: '台股成交量萎縮',
            message: '今日台股成交量 1,850 億元，較昨日減少 15%，留意盤整格局。',
            time: '6小時前',
            tag: '市場動態'
        }
    ])
</script>

<style scoped>
    .dashboard {
        width: 100%;
        min-height: 100vh;
        background: #0a0a0a;
        padding-bottom: 80px;
    }

    .dashboard-header {
        background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
        color: #e5e5e5;
        padding: 80px 50px;
        text-align: center;
        border-bottom: 2px solid rgba(212, 175, 55, 0.3);
        box-shadow: 0 10px 50px rgba(212, 175, 55, 0.1);
    }

    .header-content h1 {
        font-size: 1.25rem;
        margin-bottom: 15px;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: 1px;
    }

    .header-content p {
        font-size: 1rem;
        color: #b0b0b0;
        line-height: 1.8;
        letter-spacing: 0.5px;
    }

    .dashboard-content {
        width: 100%;
        margin: 0;
        padding: 60px 50px;
    }

    .portfolio-summary,
    .holdings-section,
    .allocation-section,
    .transactions-section,
    .performance-section,
    .watchlist-section,
    .alerts-section {
        margin-bottom: 50px;
    }

    .portfolio-summary h2,
    .holdings-section h2,
    .allocation-section h2,
    .transactions-section h2,
    .performance-section h2,
    .watchlist-section h2,
    .alerts-section h2 {
        font-size: 1.25rem;
        margin-bottom: 30px;
        color: #d4af37;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        font-weight: 700;
        letter-spacing: 0.8px;
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
    }

    .summary-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 30px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .summary-card {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(212, 175, 55, 0.2);
        transition: all 0.3s ease;
    }

    .summary-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
        transform: translateY(-2px);
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
    }

    .card-icon {
        font-size: 1.8rem;
    }

    .card-label {
        font-size: 0.9rem;
        color: #888;
        font-weight: 600;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .card-value {
        font-size: 1.25rem;
        font-weight: 700;
        color: #e5e5e5;
    }

    .card-value.positive {
        color: #4ade80;
        text-shadow: 0 0 10px rgba(74, 222, 128, 0.4);
    }

    .card-percent {
        font-size: 1rem;
        color: #4ade80;
        font-weight: 600;
        text-shadow: 0 0 8px rgba(74, 222, 128, 0.3);
    }

    .holdings-table {
        background: #111;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        overflow-x: auto;
        border: 1px solid rgba(212, 175, 55, 0.2);
        max-width: 1600px;
        margin: 0 auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    thead tr {
        border-bottom: 2px solid rgba(212, 175, 55, 0.3);
    }

    th {
        padding: 15px;
        text-align: left;
        font-weight: 600;
        color: #d4af37;
        font-size: 0.85rem;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }

    td {
        padding: 15px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        color: #b0b0b0;
        font-size: 0.9rem;
    }

    tbody tr:hover {
        background: rgba(212, 175, 55, 0.05);
    }

    .stock-code {
        font-weight: 600;
        color: #d4af37;
        letter-spacing: 0.3px;
        font-size: 0.85rem;
    }

    .positive {
        color: #4ade80;
        font-weight: 600;
        text-shadow: 0 0 8px rgba(74, 222, 128, 0.3);
    }

    .negative {
        color: #f87171;
        font-weight: 600;
        text-shadow: 0 0 8px rgba(248, 113, 113, 0.3);
    }

    .percent {
        font-size: 0.85rem;
        margin-left: 5px;
    }

    .action-btn {
        padding: 8px 18px;
        border: 1px solid;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        margin-right: 12px;
        transition: all 0.3s;
        background: transparent;
    }

    .action-btn.buy {
        border-color: #4ade80;
        color: #4ade80;
    }

    .action-btn.buy:hover {
        background: rgba(74, 222, 128, 0.15);
        border-color: #22c55e;
        color: #22c55e;
    }

    .action-btn.sell {
        border-color: #f87171;
        color: #f87171;
    }

    .action-btn.sell:hover {
        background: rgba(248, 113, 113, 0.15);
        border-color: #ef4444;
        color: #ef4444;
    }

    .allocation-content {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        display: grid;
        grid-template-columns: 400px 1fr;
        gap: 50px;
        align-items: center;
        border: 1px solid rgba(212, 175, 55, 0.2);
        max-width: 1600px;
        margin: 0 auto;
    }

    .allocation-chart {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pie-chart-container {
        position: relative;
    }

    .pie-chart {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .allocation-center {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: #0a0a0a;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        text-align: center;
    }

    .center-label {
        font-size: 0.9rem;
        color: #999;
        margin: 0;
    }

    .center-value {
        font-size: 1.25rem;
        font-weight: 700;
        color: #d4af37;
        margin: 0;
    }

    .center-note {
        font-size: 0.75rem;
        color: #777;
        letter-spacing: 0.5px;
        margin: 0;
    }

    .allocation-legend {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .legend-header {
        display: grid;
        grid-template-columns: 2fr 1fr 1.5fr;
        gap: 15px;
        padding-bottom: 12px;
        border-bottom: 2px solid rgba(212, 175, 55, 0.3);
        font-size: 0.85rem;
        color: #888;
        font-weight: 600;
    }

    .legend-item {
        display: grid;
        grid-template-columns: 2fr 1fr 1.5fr;
        gap: 15px;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(212, 175, 55, 0.08);
        transition: all 0.3s;
    }

    .legend-item:hover {
        background: rgba(212, 175, 55, 0.05);
        padding-left: 10px;
        border-radius: 8px;
    }

    .legend-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .legend-color {
        width: 24px;
        height: 24px;
        border-radius: 4px;
    }

    .legend-label {
        font-size: 0.95rem;
        color: #e5e5e5;
        font-weight: 500;
    }

    .legend-value {
        font-weight: 700;
        color: #d4af37;
        font-size: 1rem;
    }

    .legend-amount {
        font-size: 0.9rem;
        color: #999;
    }

    .transactions-list {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(212, 175, 55, 0.2);
        max-width: 1600px;
        margin: 0 auto;
    }

    .transaction-item {
        display: flex;
        align-items: center;
        gap: 25px;
        padding: 18px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        transition: all 0.3s;
    }

    .transaction-item:last-child {
        border-bottom: none;
    }

    .transaction-item:hover {
        background: rgba(212, 175, 55, 0.05);
        border-radius: 10px;
    }

    .transaction-type {
        padding: 10px 20px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 0.85rem;
        min-width: 60px;
        text-align: center;
    }

    .transaction-type.buy {
        background: rgba(74, 222, 128, 0.2);
        color: #4ade80;
        border: 1px solid rgba(74, 222, 128, 0.3);
    }

    .transaction-type.sell {
        background: rgba(248, 113, 113, 0.2);
        color: #f87171;
        border: 1px solid rgba(248, 113, 113, 0.3);
    }

    .transaction-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .transaction-name {
        font-weight: 600;
        color: #e5e5e5;
        letter-spacing: 0.3px;
        font-size: 0.95rem;
    }

    .transaction-date {
        font-size: 0.8rem;
        color: #808080;
        letter-spacing: 0.3px;
    }

    .transaction-details {
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: #b0b0b0;
        font-size: 0.9rem;
        letter-spacing: 0.3px;
        min-width: 120px;
    }

    .transaction-total {
        font-weight: 700;
        font-size: 1rem;
        color: #d4af37;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        min-width: 140px;
        text-align: right;
    }

    /* Performance Metrics Section */
    .performance-section {
        margin-bottom: 30px;
    }

    .performance-section h2 {
        padding: 0;
    }

    .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 30px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .metric-card {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.2);
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;
    }

    .metric-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
        transform: translateY(-2px);
    }

    .metric-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
    }

    .metric-icon {
        font-size: 1.5rem;
    }

    .metric-label {
        font-size: 0.9rem;
        color: #888;
        font-weight: 600;
    }

    .metric-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: #e5e5e5;
        margin-bottom: 8px;
    }

    .metric-value.positive {
        color: #4ade80;
        text-shadow: 0 0 10px rgba(74, 222, 128, 0.4);
    }

    .metric-value.negative {
        color: #f87171;
        text-shadow: 0 0 10px rgba(248, 113, 113, 0.4);
    }

    .metric-change {
        font-size: 0.85rem;
        color: #808080;
    }

    /* Watchlist Section */
    .watchlist-section {
        margin-bottom: 30px;
    }

    .watchlist-section h2 {
        padding: 0;
    }

    .watchlist-content {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.2);
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        max-width: 1600px;
        margin: 0 auto;
    }

    .watchlist-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }

    .watch-item {
        background: #0f0f0f;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid rgba(212, 175, 55, 0.15);
        transition: all 0.3s ease;
    }

    .watch-item:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.3);
        transform: translateY(-2px);
    }

    .watch-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .watch-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .watch-name {
        font-size: 1rem;
        font-weight: 600;
        color: #e5e5e5;
    }

    .watch-code {
        font-size: 0.85rem;
        color: #808080;
    }

    .watch-action {
        padding: 6px 16px;
        background: transparent;
        border: 1px solid #d4af37;
        color: #d4af37;
        border-radius: 6px;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
    }

    .watch-action:hover {
        background: rgba(212, 175, 55, 0.15);
        border-color: #f4d03f;
        color: #f4d03f;
    }

    .watch-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    }

    .price-value {
        font-size: 1.25rem;
        font-weight: 700;
    }

    .watch-price.positive .price-value,
    .watch-price.positive .price-change {
        color: #4ade80;
        text-shadow: 0 0 8px rgba(74, 222, 128, 0.3);
    }

    .watch-price.negative .price-value,
    .watch-price.negative .price-change {
        color: #f87171;
        text-shadow: 0 0 8px rgba(248, 113, 113, 0.3);
    }

    .price-change {
        font-size: 0.9rem;
        font-weight: 600;
    }

    .watch-stats {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .stat-label {
        font-size: 0.8rem;
        color: #808080;
    }

    .stat-value {
        font-size: 0.9rem;
        color: #d4af37;
        font-weight: 600;
    }

    /* Market Alerts Section */
    .alerts-section {
        margin-bottom: 30px;
    }

    .alerts-section h2 {
        padding: 0;
    }

    .alerts-content {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.2);
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        max-width: 1600px;
        margin: 0 auto;
    }

    .alert-item {
        display: flex;
        gap: 15px;
        padding: 18px;
        margin-bottom: 12px;
        border-radius: 10px;
        border-left: 3px solid;
        background: rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }

    .alert-item:last-child {
        margin-bottom: 0;
    }

    .alert-item.high {
        border-left-color: #f87171;
        background: rgba(248, 113, 113, 0.05);
    }

    .alert-item.medium {
        border-left-color: #fbbf24;
        background: rgba(251, 191, 36, 0.05);
    }

    .alert-item.low {
        border-left-color: #4ade80;
        background: rgba(74, 222, 128, 0.05);
    }

    .alert-item:hover {
        background: rgba(212, 175, 55, 0.08);
        transform: translateX(5px);
    }

    .alert-icon {
        font-size: 1.5rem;
        display: flex;
        align-items: flex-start;
        padding-top: 2px;
    }

    .alert-content {
        flex: 1;
    }

    .alert-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }

    .alert-title {
        font-size: 1rem;
        font-weight: 600;
        color: #e5e5e5;
    }

    .alert-time {
        font-size: 0.8rem;
        color: #808080;
    }

    .alert-message {
        font-size: 0.9rem;
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 8px;
    }

    .alert-tag {
        display: inline-block;
        padding: 4px 12px;
        background: rgba(212, 175, 55, 0.15);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 12px;
        font-size: 0.75rem;
        color: #d4af37;
        font-weight: 600;
    }

    @media (max-width: 1200px) {
        .allocation-content {
            grid-template-columns: 1fr;
            gap: 40px;
        }

        .pie-chart {
            width: 280px;
            height: 280px;
        }

        .allocation-center {
            width: 170px;
            height: 170px;
        }
    }

    @media (max-width: 768px) {
        .dashboard-header {
            padding: 60px 30px;
        }

        .header-content h1 {
            font-size: 2rem;
        }

        .dashboard-content {
            padding: 40px 30px;
        }

        .summary-cards {
            grid-template-columns: 1fr;
        }

        .holdings-table {
            overflow-x: scroll;
        }

        table {
            min-width: 800px;
        }

        .allocation-content {
            padding: 30px 20px;
        }

        .pie-chart {
            width: 240px;
            height: 240px;
        }

        .allocation-center {
            width: 140px;
            height: 140px;
        }

        .center-value {
            font-size: 1.8rem;
        }

        .legend-header {
            font-size: 0.75rem;
        }

        .legend-label {
            font-size: 0.85rem;
        }

        .transaction-item {
            flex-wrap: wrap;
            gap: 15px;
        }

        .transaction-total {
            width: 100%;
            text-align: left;
        }

        .metrics-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
        }

        .watchlist-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .alerts-content {
            padding: 20px;
        }

        .alert-item {
            padding: 15px;
        }
    }

    @media (max-width: 480px) {
        .dashboard-content {
            padding: 30px 20px;
        }

        .summary-cards {
            gap: 20px;
        }

        .holdings-table {
            padding: 18px;
        }

        table { min-width: 700px; }

        .allocation-content {
            padding: 20px;
            gap: 24px;
        }

        .pie-chart { width: 200px; height: 200px; }
        .allocation-center { width: 120px; height: 120px; }

        .transactions-list { padding: 18px; }
        .transaction-item { padding: 14px; }
        .transaction-total { min-width: auto; width: 100%; text-align: left; }

        .metrics-grid { gap: 16px; }
        .watchlist-content { padding: 18px; }
        .alerts-content { padding: 18px; }
    }
</style>
