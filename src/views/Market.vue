<template>
    <div class="market">
        <div class="market-header">
            <h1>市場分析</h1>
            <p>實時追蹤市場動態，掌握投資先機</p>
        </div>

        <!-- Market Overview -->
        <div class="market-overview">
            <h2 class="section-title">市場概況</h2>
            <div class="overview-grid">
                <div class="overview-card">
                    <h3>台股加權指數</h3>
                    <div class="index-value positive">
                        <span class="value">17,850.23</span>
                        <span class="change">▲ 125.48 (+0.71%)</span>
                    </div>
                    <p class="update-time">更新時間：13:30</p>
                </div>
                <div class="overview-card">
                    <h3>上市成交量</h3>
                    <div class="index-value">
                        <span class="value">2,580億</span>
                    </div>
                    <p class="update-time">更新時間：13:30</p>
                </div>
                <div class="overview-card">
                    <h3>美國道瓊指數</h3>
                    <div class="index-value negative">
                        <span class="value">34,256.78</span>
                        <span class="change">▼ 85.32 (-0.25%)</span>
                    </div>
                    <p class="update-time">更新時間：04:00</p>
                </div>
                <div class="overview-card">
                    <h3>S&P 500</h3>
                    <div class="index-value positive">
                        <span class="value">4,512.45</span>
                        <span class="change">▲ 12.58 (+0.28%)</span>
                    </div>
                    <p class="update-time">更新時間：04:00</p>
                </div>
            </div>
        </div>

        <!-- Chart Section -->
        <div class="chart-section">
            <div class="section-header">
                <h2 class="section-title">市場趨勢</h2>
                <div class="time-range">
                    <button v-for="range in timeRanges" :key="range"
                        :class="['range-btn', { active: selectedRange === range }]" @click="selectedRange = range">
                        {{ range }}
                    </button>
                </div>
            </div>
            <div class="charts-grid">
                <div v-for="chartItem in separateCharts" :key="chartItem.id" class="chart-card">
                    <div class="chart-card-header">
                        <h3>{{ chartItem.title }}</h3>
                        <span :class="['chart-badge', chartItem.trend >= 0 ? 'positive' : 'negative']">
                            {{ chartItem.trend >= 0 ? '▲' : '▼' }} {{ Math.abs(chartItem.trend) }}%
                        </span>
                    </div>
                    <div class="chart-placeholder">
                        <Line v-if="chartItem.data" :data="chartItem.data"
                            :options="getChartOptions(chartItem.color)" />
                    </div>
                    <div class="chart-stats">
                        <div class="stat-item">
                            <span class="stat-label">當前</span>
                            <span class="stat-value">{{ chartItem.current }}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">最高</span>
                            <span class="stat-value">{{ chartItem.high }}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">最低</span>
                            <span class="stat-value">{{ chartItem.low }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="global-indices section-block">
            <div class="section-header">
                <h2 class="section-title">全球指數追蹤</h2>
                <p>同步追蹤主要市場變化，掌握跨市場風險與機會。</p>
            </div>
            <div class="indices-grid">
                <div class="index-card" v-for="index in globalIndices" :key="index.id">
                    <div class="index-top">
                        <span class="market-name">{{ index.market }}</span>
                        <span class="region-tag">{{ index.region }}</span>
                    </div>
                    <div class="index-main">
                        <span class="index-value">{{ index.value }}</span>
                        <span :class="['index-change', index.change >= 0 ? 'positive' : 'negative']">
                            {{ index.change >= 0 ? '+' : '' }}{{ index.change }}%
                        </span>
                    </div>
                    <p class="session-time">{{ index.session }}</p>
                </div>
            </div>
        </div>

        <div class="flow-sentiment section-block">
            <div class="section-header">
                <h2 class="section-title">資金流向與情緒</h2>
                <p>外資、投信與散戶行為一覽，避免盲點。</p>
            </div>
            <div class="flow-layout">
                <div class="flow-grid">
                    <div class="flow-card" v-for="flow in flowInsights" :key="flow.label">
                        <p class="flow-label">{{ flow.label }}</p>
                        <p class="flow-value">{{ flow.value }}</p>
                        <p :class="['flow-trend', flow.trend >= 0 ? 'positive' : 'negative']">
                            {{ flow.trend >= 0 ? '+' : '' }}{{ flow.trend }} 億
                        </p>
                        <p class="flow-detail">{{ flow.detail }}</p>
                    </div>
                </div>
                <div class="sentiment-panel">
                    <h3>情緒儀表</h3>
                    <div class="sentiment-list">
                        <div class="sentiment-item" v-for="sentiment in sentimentIndicators" :key="sentiment.label">
                            <div>
                                <p class="sentiment-label">{{ sentiment.label }}</p>
                                <p class="sentiment-note">{{ sentiment.note }}</p>
                            </div>
                            <div class="sentiment-score">
                                <span>{{ sentiment.score }}</span>
                                <small>{{ sentiment.status }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="macro-section section-block">
            <div class="section-header">
                <h2 class="section-title">重要經濟事件</h2>
                <p>提前掌握本週關鍵數據與政策訊號。</p>
            </div>
            <div class="macro-grid">
                <div class="macro-card" v-for="event in macroEvents" :key="event.title">
                    <div class="macro-meta">
                        <span class="macro-date">{{ event.date }}</span>
                        <span class="macro-impact">{{ event.impact }}</span>
                    </div>
                    <h3>{{ event.title }}</h3>
                    <p>{{ event.detail }}</p>
                </div>
            </div>
        </div>

        <div class="sector-section section-block">
            <div class="section-header">
                <h2 class="section-title">產業走勢排行</h2>
                <p>比較本週主要族群強弱，調整資金配置。</p>
            </div>
            <div class="sector-table">
                <div class="sector-row sector-head">
                    <span>產業</span>
                    <span>週漲跌</span>
                    <span>成交占比</span>
                    <span>焦點</span>
                </div>
                <div class="sector-row" v-for="sector in sectorPerformance" :key="sector.name">
                    <span class="sector-name">{{ sector.name }}</span>
                    <span :class="['sector-change', sector.change >= 0 ? 'positive' : 'negative']">
                        {{ sector.change >= 0 ? '+' : '' }}{{ sector.change }}%
                    </span>
                    <span class="sector-volume">{{ sector.volumeShare }}%</span>
                    <span class="sector-focus">{{ sector.focus }}</span>
                </div>
            </div>
        </div>

        <!-- Market News -->
        <div class="market-news">
            <h2 class="section-title">市場動態</h2>
            <div class="news-grid">
                <div class="news-card" v-for="news in visibleNews" :key="news.id">
                    <div class="news-badge" :class="news.category">{{ news.category }}</div>
                    <h3>{{ news.title }}</h3>
                    <p>{{ news.summary }}</p>
                    <div class="news-footer">
                        <span class="news-time">{{ news.time }}</span>
                        <button class="read-more">閱讀更多</button>
                    </div>
                </div>
            </div>
            <button class="toggle-more" @click="showMoreNews = !showMoreNews">{{ showMoreNews ? '收合' : '顯示更多'
                }}</button>
        </div>

        <!-- Consolidated Performance Panel -->
        <div class="market-performance">
            <h2 class="section-title">市場表現總覽</h2>
            <div class="perf-grid">
                <!-- 漲幅排行 -->
                <div class="perf-block">
                    <div class="perf-head">
                        <span class="perf-icon positive">▲</span>
                        <h3>漲幅排行</h3>
                    </div>
                    <ul class="perf-list">
                        <li v-for="(stock, index) in performanceGainers" :key="stock.id" class="perf-row">
                            <span class="perf-rank">{{ index + 1 }}</span>
                            <span class="perf-name">{{ stock.name }}<small>{{ stock.code }}</small></span>
                            <span class="perf-price">{{ stock.price }}</span>
                            <span class="perf-change positive">+{{ stock.change }}%</span>
                        </li>
                    </ul>
                </div>
                <!-- 跌幅排行 -->
                <div class="perf-block">
                    <div class="perf-head">
                        <span class="perf-icon negative">▼</span>
                        <h3>跌幅排行</h3>
                    </div>
                    <ul class="perf-list">
                        <li v-for="(stock, index) in performanceLosers" :key="stock.id" class="perf-row">
                            <span class="perf-rank">{{ index + 1 }}</span>
                            <span class="perf-name">{{ stock.name }}<small>{{ stock.code }}</small></span>
                            <span class="perf-price">{{ stock.price }}</span>
                            <span class="perf-change negative">{{ stock.change }}%</span>
                        </li>
                    </ul>
                </div>
                <!-- 市場統計精簡 -->
                <div class="perf-block">
                    <div class="perf-head">
                        <span class="perf-icon stats">🧭</span>
                        <h3>市場統計</h3>
                    </div>
                    <div class="dual-list">
                        <ul class="mini-list">
                            <li class="mini-title">家數統計</li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">上漲</span>
                                <span class="mini-val pos">1,248</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">下跌</span>
                                <span class="mini-val neg">512</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">平盤</span>
                                <span class="mini-val neu">62</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">漲停</span>
                                <span class="mini-val hl">28</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">跌停</span>
                                <span class="mini-val neg">5</span>
                            </li>
                        </ul>
                        <ul class="mini-list">
                            <li class="mini-title">成交統計</li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">總量</span>
                                <span class="mini-val">2,580億</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">張數</span>
                                <span class="mini-val">182萬張</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">筆數</span>
                                <span class="mini-val">85萬筆</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">外資</span>
                                <span class="mini-val pos">+215億</span>
                            </li>
                            <li class="mini-row stat-row">
                                <span class="mini-label">投信</span>
                                <span class="mini-val pos">+45億</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 成交量 / 金額排行精簡 -->
                <div class="perf-block">
                    <div class="perf-head">
                        <span class="perf-icon volume">📈</span>
                        <h3>成交排行</h3>
                    </div>
                    <div class="dual-list">
                        <ul class="mini-list">
                            <li class="mini-title">量(張)</li>
                            <li v-for="(stock, index) in performanceVolume" :key="stock.id" class="mini-row">
                                <span class="mini-rank">{{ index + 1 }}</span>
                                <span class="mini-name">{{ stock.name }}</span>
                                <span class="mini-val">{{ stock.volume }}</span>
                            </li>
                        </ul>
                        <ul class="mini-list">
                            <li class="mini-title">金額</li>
                            <li v-for="(stock, index) in performanceValue" :key="stock.id" class="mini-row">
                                <span class="mini-rank">{{ index + 1 }}</span>
                                <span class="mini-name">{{ stock.name }}</span>
                                <span class="mini-val">{{ stock.value }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <button class="toggle-more" @click="performanceExpanded = !performanceExpanded">{{ performanceExpanded ?
                '收合' : '展開更多' }}</button>
        </div>

        <!-- Market Insights -->
        <div class="market-insights">
            <h2 class="section-title">市場洞察</h2>
            <div class="insights-grid">
                <div class="insight-card">
                    <div class="insight-header">
                        <span class="insight-icon">🎯</span>
                        <h3>今日焦點</h3>
                    </div>
                    <ul class="insight-list">
                        <li v-for="item in visibleFocus" :key="item">{{ item }}</li>
                    </ul>
                </div>
                <div class="insight-card">
                    <div class="insight-header">
                        <span class="insight-icon">⚡</span>
                        <h3>關鍵訊號</h3>
                    </div>
                    <ul class="insight-list">
                        <li v-for="item in visibleSignals" :key="item">{{ item }}</li>
                    </ul>
                </div>
                <div class="insight-card">
                    <div class="insight-header">
                        <span class="insight-icon">💡</span>
                        <h3>操作建議</h3>
                    </div>
                    <ul class="insight-list">
                        <li v-for="item in visibleAdvice" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>
            <button class="toggle-more" @click="showMoreInsights = !showMoreInsights">{{ showMoreInsights ? '收合' :
                '顯示更多洞察' }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { Line } from 'vue-chartjs'
    import type { MarketNews, Stock } from '@/types'
    import type { ChartData, ChartOptions } from 'chart.js'
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    } from 'chart.js'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    )

    const timeRanges = ref<string[]>(['1日', '5日', '1月', '3月', '1年'])
    const selectedRange = ref<string>('1日')

    const chartPresets = ref<Record<string, ChartData<'line'>>>(
        {
            '1日': {
                labels: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'],
                datasets: [
                    {
                        label: '台股加權指數',
                        data: [17650, 17820, 17580, 17920, 17750, 17650, 17480, 17720, 17890, 18050, 17920, 18120, 18200],
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#aa8c2c',
                        pointHoverBackgroundColor: '#d4af37',
                        pointHoverBorderColor: '#d4af37'
                    },
                    {
                        label: '櫃買指數',
                        data: [232.5, 238.2, 235.0, 241.5, 237.8, 234.2, 229.5, 236.8, 243.5, 248.2, 245.1, 251.8, 255.3],
                        borderColor: '#60a5fa',
                        backgroundColor: 'rgba(96, 165, 250, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#60a5fa',
                        pointBorderColor: '#3b82f6',
                        pointHoverBackgroundColor: '#60a5fa',
                        pointHoverBorderColor: '#60a5fa'
                    },
                    {
                        label: '電子指數',
                        data: [965.2, 982.5, 958.3, 995.8, 1015.2, 988.5, 972.1, 1008.6, 1035.8, 1062.5, 1048.9, 1085.2, 1108.5],
                        borderColor: '#4ade80',
                        backgroundColor: 'rgba(74, 222, 128, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#4ade80',
                        pointBorderColor: '#22c55e',
                        pointHoverBackgroundColor: '#4ade80',
                        pointHoverBorderColor: '#4ade80'
                    }
                ]
            },
            '5日': {
                labels: ['周一', '周二', '周三', '周四', '周五'],
                datasets: [
                    {
                        label: '台股加權指數',
                        data: [17280, 17650, 17420, 17880, 18150],
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.08)',
                        fill: true,
                        tension: 0.35
                    },
                    {
                        label: '櫃買指數',
                        data: [228.5, 238.2, 232.8, 245.5, 252.8],
                        borderColor: '#60a5fa',
                        backgroundColor: 'rgba(96, 165, 250, 0.08)',
                        fill: true,
                        tension: 0.35
                    },
                    {
                        label: '電子指數',
                        data: [935, 985, 952, 1025, 1088],
                        borderColor: '#4ade80',
                        backgroundColor: 'rgba(74, 222, 128, 0.08)',
                        fill: true,
                        tension: 0.35
                    }
                ]
            },
            '1月': {
                labels: ['第1週', '第2週', '第3週', '第4週'],
                datasets: [
                    {
                        label: '台股加權指數',
                        data: [16850, 17450, 17120, 18050],
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.08)',
                        fill: true,
                        tension: 0.3
                    },
                    {
                        label: '櫃買指數',
                        data: [220.5, 238.8, 228.2, 252.5],
                        borderColor: '#60a5fa',
                        backgroundColor: 'rgba(96, 165, 250, 0.08)',
                        fill: true,
                        tension: 0.3
                    },
                    {
                        label: '電子指數',
                        data: [885, 968, 920, 1095],
                        borderColor: '#4ade80',
                        backgroundColor: 'rgba(74, 222, 128, 0.08)',
                        fill: true,
                        tension: 0.3
                    }
                ]
            },
            '3月': {
                labels: ['1月', '2月', '3月'],
                datasets: [
                    {
                        label: '台股加權指數',
                        data: [16450, 17680, 17950],
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.08)',
                        fill: true,
                        tension: 0.25
                    },
                    {
                        label: '櫃買指數',
                        data: [215.8, 242.5, 251.8],
                        borderColor: '#60a5fa',
                        backgroundColor: 'rgba(96, 165, 250, 0.08)',
                        fill: true,
                        tension: 0.25
                    },
                    {
                        label: '電子指數',
                        data: [850, 1025, 1105],
                        borderColor: '#4ade80',
                        backgroundColor: 'rgba(74, 222, 128, 0.08)',
                        fill: true,
                        tension: 0.25
                    }
                ]
            },
            '1年': {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: '台股加權指數',
                        data: [15200, 16850, 16420, 18050],
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.08)',
                        fill: true,
                        tension: 0.25
                    },
                    {
                        label: '櫃買指數',
                        data: [198.5, 228.8, 218.2, 252.5],
                        borderColor: '#60a5fa',
                        backgroundColor: 'rgba(96, 165, 250, 0.08)',
                        fill: true,
                        tension: 0.25
                    },
                    {
                        label: '電子指數',
                        data: [765, 945, 885, 1095],
                        borderColor: '#4ade80',
                        backgroundColor: 'rgba(74, 222, 128, 0.08)',
                        fill: true,
                        tension: 0.25
                    }
                ]
            }
        }
    )

    const separateCharts = computed(() => {
        const currentData = chartPresets.value[selectedRange.value] ?? chartPresets.value['1日']
        return currentData.datasets.map((dataset, index) => {
            const data = dataset.data as number[]
            const current = data[data.length - 1]
            const previous = data[0]
            const trend = ((current - previous) / previous) * 100
            const high = Math.max(...data)
            const low = Math.min(...data)

            return {
                id: index,
                title: dataset.label,
                color: dataset.borderColor as string,
                trend: Number(trend.toFixed(2)),
                current: current.toLocaleString(),
                high: high.toLocaleString(),
                low: low.toLocaleString(),
                data: {
                    labels: currentData.labels,
                    datasets: [dataset]
                }
            }
        })
    })

    const getChartOptions = (color: string): ChartOptions<'line'> => ({
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index' as const,
            intersect: false
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: color,
                bodyColor: '#c8c8c8',
                borderColor: color,
                borderWidth: 1
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#9b9b9b',
                    font: { size: 10 },
                    maxRotation: 0
                },
                grid: {
                    color: 'rgba(212, 175, 55, 0.05)',
                    display: true
                }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    color: '#9b9b9b',
                    font: { size: 10 },
                    callback: function (value) {
                        return value.toLocaleString()
                    }
                },
                grid: {
                    color: 'rgba(212, 175, 55, 0.05)',
                    display: true
                }
            }
        }
    })

    const globalIndices = ref([
        { id: 1, market: '那斯達克', region: '美國', value: '14,998.12', change: 0.82, session: '收盤 05:00' },
        { id: 2, market: '上證綜指', region: '中國', value: '3,152.48', change: -0.35, session: '收盤 15:00' },
        { id: 3, market: '日經225', region: '日本', value: '32,285.65', change: 1.12, session: '收盤 13:00' },
        { id: 4, market: '歐元區 STOXX50', region: '歐洲', value: '4,258.40', change: 0.48, session: '收盤 00:30' },
        { id: 5, market: '費城半導體', region: '美國', value: '3,488.20', change: 1.52, session: '收盤 05:00' },
        { id: 6, market: '印度 Nifty50', region: '印度', value: '19,820.35', change: 0.63, session: '收盤 18:00' }
    ])

    const flowInsights = ref([
        { label: '外資買賣超', value: '＋215 億', trend: 215, detail: '連續第三日淨買超，集中在電子與半導體。' },
        { label: '投信動態', value: '＋45 億', trend: 45, detail: '布局金融與軍工族群，偏向防禦。' },
        { label: '自營商部位', value: '－12 億', trend: -12, detail: '選擇權避險加碼，短線波動升高。' },
        { label: '期貨未平倉', value: '淨多 8,320 口', trend: 132, detail: '主力多單增加，偏多看待。' }
    ])

    const sentimentIndicators = ref([
        { label: 'Greed Index', score: 68, status: '偏樂觀', note: '買盤集中在科技股' },
        { label: 'Put/Call Ratio', score: 0.92, status: '中性', note: '選擇權押注趨於平衡' },
        { label: 'VIX波動率', score: 14.2, status: '低波動', note: '恐慌情緒回落' }
    ])

    const macroEvents = ref([
        { title: '美國 CPI 公布', date: '週四 21:30', impact: '通膨路徑', detail: '預估年增 3.2%，若低於預期，有利科技與成長股。' },
        { title: '台灣出口訂單', date: '週五 16:00', impact: '基本面', detail: '市場期待恢復成長，留意半導體接單回溫。' },
        { title: 'OPEC 會議', date: '週六', impact: '能源價格', detail: '產量政策將左右油價，間接影響通膨預期。' }
    ])

    const sectorPerformance = ref([
        { name: 'AI 與雲端', change: 4.8, volumeShare: 32, focus: 'GPU供應鏈、散熱模組放量' },
        { name: '綠能儲能', change: 3.1, volumeShare: 12, focus: '電網升級、儲能標案題材' },
        { name: '金融保險', change: 1.2, volumeShare: 18, focus: '殖利率題材吸引長線資金' },
        { name: '航運物流', change: -0.8, volumeShare: 9, focus: '運價回檔，短線整理' },
        { name: '消費內需', change: 0.5, volumeShare: 11, focus: '年底旺季、觀光股續強' },
        { name: '傳產原物料', change: -1.6, volumeShare: 7, focus: '原料成本壓力升溫' }
    ])

    const marketNews = ref<MarketNews[]>([
        {
            id: 1,
            category: '科技',
            title: '台積電宣布擴大美國投資，未來三年將投入500億美元',
            summary: '台積電今日宣布將擴大在美國的投資規模，未來三年將投資500億美元建設新廠，預計創造數萬個就業機會，鞏固全球半導體龍頭地位...',
            time: '2小時前'
        },
        {
            id: 2,
            category: '金融',
            title: '央行宣布維持利率不變，市場反應平穩',
            summary: '中央銀行今日召開理監事會議，決議維持政策利率不變於1.875%，符合市場預期。央行表示將持續關注通膨壓力與經濟成長動能...',
            time: '4小時前'
        },
        {
            id: 3,
            category: '產業',
            title: '電動車市場持續升溫，相關供應鏈受惠',
            summary: '隨著全球電動車需求持續增長，台灣相關供應鏈廠商訂單大增。電池、馬達、充電設備等關鍵零組件廠商營收創新高，帶動股價上漲...',
            time: '6小時前'
        },
        {
            id: 4,
            category: '國際',
            title: '美國Fed暗示可能放緩升息步調',
            summary: '美國聯準會主席鮑威爾在演講中暗示，未來可能放緩升息步調。市場解讀為通膨壓力趨緩，激勵全球股市上漲，台股也受惠同步走揚...',
            time: '8小時前'
        },
        {
            id: 5,
            category: '科技',
            title: 'AI晶片需求暴增，聯發科、輝達合作開發新產品',
            summary: '人工智慧應用快速發展，AI晶片需求持續暴增。聯發科宣布與輝達深化合作，共同開發次世代AI處理器，預計明年第二季推出...',
            time: '10小時前'
        },
        {
            id: 6,
            category: '產業',
            title: '5G基地台建設加速，網通設備廠商訂單滿載',
            summary: '電信業者加速5G網路布建，帶動網通設備需求大增。國內主要網通廠商接單暢旺，產能利用率達95%以上，全年營收可望創新高...',
            time: '12小時前'
        },
        {
            id: 7,
            category: '金融',
            title: '金管會推動永續金融，ESG投資成主流',
            summary: '金管會持續推動永續金融發展，鼓勵金融機構增加ESG相關投資。統計顯示，今年ESG基金規模成長超過40%，反映投資人重視永續...',
            time: '14小時前'
        },
        {
            id: 8,
            category: '國際',
            title: '日圓持續貶值，赴日旅遊商機看漲',
            summary: '日圓兌台幣匯率持續走弱，來到近年新低。旅遊業者表示赴日旅遊詢問度大增，航空公司增班因應需求，相關概念股表現亮眼...',
            time: '16小時前'
        },
        {
            id: 9,
            category: '科技',
            title: '鴻海積極布局電動車，與多家車廠簽訂合作協議',
            summary: '鴻海集團持續深化電動車布局，近期與多家國際車廠簽訂合作協議。預計三年內電動車相關營收將占集團總營收10%以上...',
            time: '18小時前'
        }
    ])

    // 顯示更多開關 (新聞 / 漲幅 / 跌幅 / 成交量 / 洞察)
    const showMoreNews = ref(false)
    // (Removed old per-section expansion flags after consolidation)
    // const showMoreGainers = ref(false)
    // const showMoreLosers = ref(false)
    // const showMoreVolume = ref(false)
    // const showMoreValue = ref(false)
    const showMoreInsights = ref(false)

    // Consolidated performance panel state
    const performanceExpanded = ref(false)
    const performanceGainers = computed(() => performanceExpanded.value ? gainers.value.slice(0, 10) : gainers.value.slice(0, 5))
    const performanceLosers = computed(() => performanceExpanded.value ? losers.value.slice(0, 10) : losers.value.slice(0, 5))
    const performanceVolume = computed(() => performanceExpanded.value ? volumeLeaders.value.slice(0, 10) : volumeLeaders.value.slice(0, 5))
    const performanceValue = computed(() => performanceExpanded.value ? valueLeaders.value.slice(0, 10) : valueLeaders.value.slice(0, 5))

    const visibleNews = computed(() => showMoreNews.value ? marketNews.value : marketNews.value.slice(0, 6))
    // Deprecated individual visible lists (kept for backward compatibility if referenced elsewhere)
    // Legacy aliases removed to avoid unused lint warnings
    // const visibleGainers = performanceGainers
    // const visibleLosers = performanceLosers
    // const visibleVolume = performanceVolume
    // const visibleValue = performanceValue

    // 洞察卡片列表轉 slice
    const insightFocus = ref([
        'AI概念股持續強勢，輝達供應鏈受矚目',
        '電子股領軍上攻，台積電創波段新高',
        '航運股回檔整理，短線支撐待觀察',
        '金融股表現平穩，殖利率題材支撐',
        '半導體庫存去化接近尾聲，回補力道增強',
        '綠能儲能政策加碼，相關族群吸引資金'
    ])
    const insightSignals = ref([
        '外資連續買超，多方氣勢強勁',
        '融資減少，籌碼面轉趨健康',
        '成交量放大至2,580億，創本月新高',
        '技術面突破季線壓力，多頭格局確立',
        '指數乖離加大，留意短線震盪',
        '美元走弱，新興市場資金回流'
    ])
    const insightAdvice = ref([
        '順勢操作，優先布局電子與AI相關族群',
        '注意漲多個股獲利了結風險',
        '航運與傳產可逢低分批承接',
        '留意美國經濟數據與Fed政策動向',
        '控制部位，避免追高缺口股',
        '聚焦基本面改善的中長線標的'
    ])

    const visibleFocus = computed(() => showMoreInsights.value ? insightFocus.value : insightFocus.value.slice(0, 4))
    const visibleSignals = computed(() => showMoreInsights.value ? insightSignals.value : insightSignals.value.slice(0, 4))
    const visibleAdvice = computed(() => showMoreInsights.value ? insightAdvice.value : insightAdvice.value.slice(0, 4))

    const gainers = ref<Stock[]>([
        { id: 1, name: '聯發科', code: '2454', price: 'NT$ 925', change: 8.5 },
        { id: 2, name: '南亞科', code: '2408', price: 'NT$ 78.2', change: 7.8 },
        { id: 3, name: '廣達', code: '2382', price: 'NT$ 235', change: 6.5 },
        { id: 4, name: '緯創', code: '3231', price: 'NT$ 95.5', change: 5.9 },
        { id: 5, name: '台積電', code: '2330', price: 'NT$ 585', change: 5.2 },
        { id: 6, name: '日月光投控', code: '3711', price: 'NT$ 118', change: 4.8 },
        { id: 7, name: '華碩', code: '2357', price: 'NT$ 485', change: 4.5 },
        { id: 8, name: '聯電', code: '2303', price: 'NT$ 52.5', change: 4.2 },
        { id: 9, name: '和碩', code: '4938', price: 'NT$ 89.5', change: 4.1 },
        { id: 10, name: '矽品', code: '2325', price: 'NT$ 115', change: 3.9 },
        { id: 11, name: '台達電', code: '2308', price: 'NT$ 325', change: 3.7 },
        { id: 12, name: '光寶科', code: '2301', price: 'NT$ 88.5', change: 3.5 },
        { id: 13, name: '仁寶', code: '2324', price: 'NT$ 32.5', change: 3.2 },
        { id: 14, name: '英業達', code: '2356', price: 'NT$ 48.2', change: 3.0 },
        { id: 15, name: '鴻準', code: '2354', price: 'NT$ 72.5', change: 2.8 },
    ])

    const losers = ref<Stock[]>([
        { id: 1, name: '長榮', code: '2603', price: 'NT$ 145', change: -5.8 },
        { id: 2, name: '陽明', code: '2609', price: 'NT$ 58.5', change: -4.5 },
        { id: 3, name: '萬海', code: '2615', price: 'NT$ 72', change: -3.9 },
        { id: 4, name: '裕民', code: '2606', price: 'NT$ 38.5', change: -3.5 },
        { id: 5, name: '中鋼', code: '2002', price: 'NT$ 28.5', change: -3.2 },
        { id: 6, name: '台塑', code: '1301', price: 'NT$ 98', change: -2.8 },
        { id: 7, name: '南亞', code: '1303', price: 'NT$ 75.5', change: -2.6 },
        { id: 8, name: '台化', code: '1326', price: 'NT$ 89.5', change: -2.4 },
        { id: 9, name: '中石化', code: '1314', price: 'NT$ 12.8', change: -2.3 },
        { id: 10, name: '華航', code: '2610', price: 'NT$ 22.5', change: -2.1 },
        { id: 11, name: '台泥', code: '1101', price: 'NT$ 35.5', change: -1.9 },
        { id: 12, name: '亞泥', code: '1102', price: 'NT$ 42.8', change: -1.7 },
        { id: 13, name: '中信金', code: '2891', price: 'NT$ 25.5', change: -1.5 },
        { id: 14, name: '開發金', code: '2883', price: 'NT$ 14.2', change: -1.4 },
        { id: 15, name: '元大金', code: '2885', price: 'NT$ 24.8', change: -1.2 },
    ])

    const volumeLeaders = ref([
        { id: 1, name: '鴻海', code: '2317', volume: '125,680張', change: 2.3 },
        { id: 2, name: '長榮', code: '2603', volume: '98,520張', change: -1.8 },
        { id: 3, name: '陽明', code: '2609', volume: '87,340張', change: -2.1 },
        { id: 4, name: '群創', code: '3481', volume: '76,890張', change: 1.5 },
        { id: 5, name: '友達', code: '2409', volume: '72,150張', change: 0.8 },
        { id: 6, name: '聯電', code: '2303', volume: '68,420張', change: 3.2 },
        { id: 7, name: '華航', code: '2610', volume: '65,780張', change: -0.9 },
        { id: 8, name: '長榮航', code: '2618', volume: '61,230張', change: -1.2 },
        { id: 9, name: '中鋼', code: '2002', volume: '58,940張', change: -0.5 },
        { id: 10, name: '台塑', code: '1301', volume: '52,680張', change: 0.3 }
    ])

    const valueLeaders = ref([
        { id: 1, name: '台積電', code: '2330', value: '368.5億', change: 5.2 },
        { id: 2, name: '聯發科', code: '2454', value: '125.8億', change: 8.5 },
        { id: 3, name: '鴻海', code: '2317', value: '98.3億', change: 2.3 },
        { id: 4, name: '聯電', code: '2303', value: '82.6億', change: 3.2 },
        { id: 5, name: '廣達', code: '2382', value: '76.4億', change: 6.5 },
        { id: 6, name: '南亞科', code: '2408', value: '68.9億', change: 7.8 },
        { id: 7, name: '台達電', code: '2308', value: '62.5億', change: 3.7 },
        { id: 8, name: '日月光投控', code: '3711', value: '58.2億', change: 4.8 },
        { id: 9, name: '華碩', code: '2357', value: '52.8億', change: 4.5 },
        { id: 10, name: '長榮', code: '2603', value: '48.6億', change: -1.8 }
    ])

</script>

<style scoped>
    .market {
        width: 100%;
        min-height: 100vh;
        background: #0a0a0a;
        padding-bottom: 80px;
    }

    .market-header {
        background: linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%);
        color: #c8c8c8;
        padding: 80px 50px;
        text-align: center;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .market-header::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.04) 48%, rgba(212, 175, 55, 0.04) 52%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.04) 48%, rgba(212, 175, 55, 0.04) 52%, transparent 52%);
        background-size: 35px 35px;
        pointer-events: none;
    }

    .market-header h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
    }

    .market-header p {
        font-size: 1rem;
        color: #9b9b9b;
        line-height: 1.8;
        letter-spacing: 0.5px;
    }

    .market-overview,
    .chart-section,
    .market-news,
    .market-performance,
    .market-insights {
        width: 100%;
        margin: 0;
        padding: 60px 50px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        background: #0a0a0a;
        position: relative;
    }

    .chart-section .section-header {
        margin-bottom: 30px;
        gap: 20px;
    }

    .charts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 30px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .chart-card {
        background: #111;
        border-radius: 12px;
        padding: 24px;
        border: 1px solid rgba(212, 175, 55, 0.2);
        transition: all 0.3s ease;
    }

    .chart-card:hover {
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .chart-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .chart-card-header h3 {
        font-size: 1.25rem;
        color: #c8c8c8;
        font-weight: 600;
        margin: 0;
    }

    .chart-badge {
        font-size: 0.9rem;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 12px;
    }

    .chart-badge.positive {
        background: rgba(74, 222, 128, 0.15);
        color: #4ade80;
        border: 1px solid rgba(74, 222, 128, 0.3);
    }

    .chart-badge.negative {
        background: rgba(248, 113, 113, 0.15);
        color: #f87171;
        border: 1px solid rgba(248, 113, 113, 0.3);
    }

    .chart-placeholder {
        height: 240px;
        min-height: 240px;
        position: relative;
        padding: 5px 0;
    }

    .chart-placeholder canvas {
        width: 100% !important;
        height: 100% !important;
    }

    .chart-stats {
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(212, 175, 55, 0.1);
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    .stat-label {
        font-size: 1rem;
        color: #888;
        letter-spacing: 0.5px;
    }

    .stat-value {
        font-size: 1rem;
        font-weight: 600;
        color: #d4af37;
    }

    .section-title {
        font-size: 1.5rem;
        margin: 0 0 30px;
        color: #d4af37;
        font-weight: 600;
        letter-spacing: 0.6px;
        line-height: 1.3;
        text-align: center;
    }

    .overview-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 30px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .overview-card {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.2);
        transition: all 0.3s ease;
    }

    .overview-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .overview-card h3 {
        font-size: 1rem;
        color: #808080;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .index-value {
        margin-bottom: 12px;
    }

    .index-value .value {
        display: block;
        font-size: 1.25rem;
        font-weight: 700;
        color: #c8c8c8;
        margin-bottom: 8px;
    }

    .index-value .change {
        font-size: 1rem;
        margin-bottom: 24px;
    }

    .index-value.positive .value,
    .index-value.positive .change {
        color: #4ade80;
        text-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
    }

    .index-value.negative .value,
    .index-value.negative .change {
        color: #f87171;
        text-shadow: 0 0 8px rgba(248, 113, 113, 0.4);
    }

    .update-time {
        font-size: 0.75rem;
        color: #666;
    }



    .time-range {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .range-btn {
        padding: 6px 24px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        background: transparent;
        color: #9b9b9b;
        border-radius: 15px;
        cursor: pointer;
        font-size: 0.85rem;
        transition: all 0.3s;
    }

    .range-btn:hover {
        border-color: #d4af37;
        color: #d4af37;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }

    .range-btn.active {
        background: linear-gradient(135deg, #d4af37, #aa8c2c);
        border-color: #d4af37;
        color: #0a0a0a;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
    }

    .chart-placeholder {
        height: 240px;
        min-height: 240px;
        position: relative;
        padding: 5px 0;
    }

    .chart-placeholder canvas {
        width: 100% !important;
        height: 100% !important;
    }

    .section-block {
        width: 100%;
        padding: 60px 50px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    }

    .section-header {
        margin: 0 auto 30px;
        max-width: 1400px;
    }

    .section-header p {
        color: #a5a5a5;
        font-size: 0.95rem;
        line-height: 1.7;
        margin-top: 6px;
        letter-spacing: 0.5px;
    }

    .indices-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 24px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .index-card {
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        padding: 20px;
        background: #111;
        transition: all 0.3s ease;
    }

    .index-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .index-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .market-name {
        font-size: 1rem;
        color: #f3f3f3;
        font-weight: 600;
    }

    .region-tag {
        font-size: 0.75rem;
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        color: #d4af37;
    }

    .index-main {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .index-value {
        font-size: 1.25rem;
        font-weight: 700;
        color: #c8c8c8;
    }

    .index-change {
        font-size: 1rem;
        font-weight: 600;
    }

    .index-change.positive {
        color: #4ade80;
        text-shadow: 0 0 8px rgba(74, 222, 128, 0.3);
    }

    .index-change.negative {
        color: #f87171;
        text-shadow: 0 0 8px rgba(248, 113, 113, 0.3);
    }

    .session-time {
        font-size: 0.75rem;
        color: #777;
        margin-top: 8px;
    }

    .flow-layout {
        display: grid;
        grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
        gap: 24px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .flow-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
    }

    .flow-card {
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        padding: 20px;
        background: #111;
        transition: all 0.3s ease;
    }

    .flow-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .flow-label {
        font-size: 1rem;
        color: #9b9b9b;
        margin-bottom: 6px;
    }

    .flow-value {
        font-size: 1.25rem;
        color: #f4d27a;
        font-weight: 700;
        margin-bottom: 4px;
    }

    .flow-trend {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 8px;
    }

    .flow-trend.positive {
        color: #4ade80;
    }

    .flow-trend.negative {
        color: #f87171;
    }

    .flow-detail {
        font-size: 0.8rem;
        color: #a0a0a0;
        line-height: 1.6;
    }

    .sentiment-panel {
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        padding: 24px;
        background: #111;
        transition: all 0.3s ease;
    }

    .sentiment-panel:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .sentiment-panel h3 {
        font-size: 1.25rem;
        color: #f3f3f3;
        margin-bottom: 14px;
    }

    .sentiment-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .sentiment-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        padding-bottom: 12px;
    }

    .sentiment-item:last-child {
        border-bottom: none;
    }

    .sentiment-label {
        font-size: 1rem;
        color: #dcdcdc;
    }

    .sentiment-note {
        font-size: 0.75rem;
        color: #8c8c8c;
        margin-top: 2px;
    }

    .sentiment-score {
        text-align: right;
        color: #f4d27a;
        font-weight: 700;
    }

    .sentiment-score small {
        display: block;
        font-size: 0.7rem;
        font-weight: 500;
        color: #9f9f9f;
    }

    .macro-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 24px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .macro-card {
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        padding: 20px;
        background: #111;
        transition: all 0.3s ease;
    }

    .macro-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .macro-meta {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: #a5a5a5;
        margin-bottom: 10px;
    }

    .macro-impact {
        color: #f4d27a;
    }

    .macro-card h3 {
        font-size: 1.25rem;
        color: #f3f3f3;
        margin-bottom: 8px;
    }

    .macro-card p {
        font-size: 1rem;
        color: #9b9b9b;
        line-height: 1.6;
    }

    .sector-table {
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        overflow: hidden;
        max-width: 1400px;
        margin: 0 auto;
        background: #111;
    }

    .sector-row {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr 0.8fr 1.4fr;
        padding: 14px 18px;
        font-size: 1rem;
        align-items: center;
        border-top: 1px solid rgba(212, 175, 55, 0.1);
    }

    .sector-row:first-child {
        border-top: none;
    }

    .sector-head {
        background: rgba(255, 255, 255, 0.02);
        color: #c5c5c5;
        font-weight: 600;
    }

    .sector-name {
        color: #f0f0f0;
        font-weight: 600;
    }

    .sector-change.positive {
        color: #4ade80;
    }

    .sector-change.negative {
        color: #f87171;
    }

    .sector-volume {
        color: #f4d27a;
    }

    .sector-focus {
        color: #b5b5b5;
        font-size: 0.85rem;
    }

    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 30px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .news-card {
        background: #111;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.2);
        transition: all 0.3s ease;
    }

    .news-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .news-badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 12px;
    }

    .news-badge.科技 {
        background: rgba(59, 130, 246, 0.2);
        color: #60a5fa;
        border: 1px solid rgba(59, 130, 246, 0.3);
    }

    .news-badge.金融 {
        background: rgba(212, 175, 55, 0.2);
        color: #d4af37;
        border: 1px solid rgba(212, 175, 55, 0.3);
    }

    .news-badge.產業 {
        background: rgba(74, 222, 128, 0.2);
        color: #4ade80;
        border: 1px solid rgba(74, 222, 128, 0.3);
    }

    .news-badge.國際 {
        background: rgba(168, 85, 247, 0.2);
        color: #a855f7;
        border: 1px solid rgba(168, 85, 247, 0.3);
    }

    .news-card h3 {
        font-size: 1.25rem;
        margin-bottom: 10px;
        color: #c8c8c8;
        line-height: 1.6;
        font-weight: 600;
        letter-spacing: 0.3px;
    }

    .news-card p {
        font-size: 1rem;
        color: #999;
        line-height: 1.7;
        margin-bottom: 15px;
        letter-spacing: 0.3px;
    }

    .news-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .news-time {
        font-size: 0.75rem;
        color: #666;
    }

    .read-more {
        background: transparent;
        border: none;
        color: #d4af37;
        font-weight: 600;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.3s;
    }

    .read-more:hover {
        text-decoration: underline;
        text-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
    }

    .movers-tabs {
        display: flex;
        gap: 12px;
        margin-bottom: 25px;
    }

    .tab-btn {
        padding: 10px 25px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        background: transparent;
        color: #9b9b9b;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s;
    }

    .tab-btn:hover {
        border-color: #d4af37;
        color: #d4af37;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
    }

    .tab-btn.active {
        background: linear-gradient(135deg, #d4af37, #aa8c2c);
        border-color: #d4af37;
        color: #0a0a0a;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
    }

    .movers-list {
        background: #111;
        border-radius: 12px;
        padding: 18px 18px 10px;
        border: 1px solid rgba(212, 175, 55, 0.18);
    }

    .mover-item {
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        transition: all 0.3s;
    }

    .mover-item:last-child {
        border-bottom: none;
    }

    .mover-item:hover {
        background: rgba(212, 175, 55, 0.05);
        border-radius: 10px;
    }

    .rank {
        font-size: 1.1rem;
        font-weight: 700;
        color: #d4af37;
        margin-right: 20px;
        min-width: 30px;
        text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
    }

    .stock-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .stock-name {
        font-size: 1rem;
        font-weight: 600;
        color: #c8c8c8;
    }

    .stock-code {
        font-size: 0.8rem;
        color: #808080;
    }

    .stock-price {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 5px;
    }

    .stock-price .price {
        font-size: 1rem;
        font-weight: 600;
        color: #c8c8c8;
    }

    .stock-price .change {
        font-size: 1rem;
        font-weight: 600;
    }

    .stock-price .change.positive {
        color: #4ade80;
        text-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
    }

    .stock-price .change.negative {
        color: #f87171;
        text-shadow: 0 0 8px rgba(248, 113, 113, 0.4);
    }

    /* Market Stats */
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .stat-card {
        background: #111;
        border: 1px solid rgba(212, 175, 55, 0.18);
        border-radius: 12px;
        padding: 22px;
        display: flex;
        align-items: center;
        gap: 16px;
        transition: background 0.25s, border-color 0.25s;
    }

    .stat-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.35);
    }

    .stat-icon {
        font-size: 2.5rem;
        filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
    }

    .stat-content h3 {
        font-size: 0.9rem;
        color: #a0a0a0;
        margin-bottom: 8px;
        font-weight: 500;
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 5px;
        color: #c8c8c8;
    }

    .stat-value.positive {
        color: #4ade80;
        text-shadow: 0 0 10px rgba(74, 222, 128, 0.3);
    }

    .stat-value.negative {
        color: #f87171;
        text-shadow: 0 0 10px rgba(248, 113, 113, 0.3);
    }

    .stat-value.neutral {
        color: #fbbf24;
        text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
    }

    .stat-value.highlight {
        color: #d4af37;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
    }

    .stat-detail {
        font-size: 0.75rem;
        color: #808080;
    }

    /* Volume Section */
    .volume-layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .volume-column {
        background: #111;
        border: 1px solid rgba(212, 175, 55, 0.18);
        border-radius: 12px;
        overflow: hidden;
        transition: background 0.25s, border-color 0.25s;
    }

    .volume-column:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.35);
    }

    .volume-header {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent);
        padding: 20px 25px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    }

    .volume-header h3 {
        font-size: 1.25rem;
        color: #c8c8c8;
        font-weight: 600;
        margin: 0;
    }

    .volume-icon {
        font-size: 1.3rem;
        filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.3));
    }

    .volume-table {
        padding: 15px;
    }

    .volume-row {
        display: grid;
        grid-template-columns: 0.6fr 1.5fr 1.2fr 0.8fr;
        gap: 15px;
        padding: 12px 10px;
        align-items: center;
        border-bottom: 1px solid rgba(212, 175, 55, 0.08);
        transition: all 0.3s;
    }

    .volume-row:last-child {
        border-bottom: none;
    }

    .volume-row:not(.header-row):hover {
        background: rgba(212, 175, 55, 0.08);
        border-radius: 8px;
        transform: translateX(3px);
    }

    .volume-row.header-row {
        background: rgba(255, 255, 255, 0.02);
        color: #a0a0a0;
        font-weight: 600;
        font-size: 0.85rem;
        border-bottom: 1px solid rgba(212, 175, 55, 0.15);
    }

    .vol-rank {
        font-size: 1rem;
        font-weight: 700;
        color: #d4af37;
        text-align: center;
    }

    .vol-stock {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .vol-name {
        font-size: 1rem;
        font-weight: 600;
        color: #c8c8c8;
    }

    .vol-code {
        font-size: 0.75rem;
        color: #808080;
    }

    .vol-amount {
        font-size: 1rem;
        color: #d4af37;
        font-weight: 600;
    }

    .vol-change {
        font-size: 1rem;
        font-weight: 600;
        text-align: right;
    }

    .vol-change.positive {
        color: #4ade80;
    }

    .vol-change.negative {
        color: #f87171;
    }

    /* Market Insights */
    .insights-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 30px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .insight-card {
        background: #111;
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        padding: 24px;
        transition: all 0.3s ease;
    }

    .insight-card:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .insight-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.15);
    }

    .insight-header h3 {
        font-size: 1.25rem;
        color: #d4af37;
        font-weight: 600;
        margin: 0;
    }

    .insight-icon {
        font-size: 1.5rem;
        filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.3));
    }

    .insight-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .insight-list li {
        padding: 12px 0 12px 20px;
        color: #9b9b9b;
        font-size: 1rem;
        line-height: 1.7;
        border-left: 3px solid rgba(212, 175, 55, 0.3);
        margin-bottom: 12px;
        transition: all 0.3s;
        position: relative;
    }

    .insight-list li:last-child {
        margin-bottom: 0;
    }

    .insight-list li::before {
        content: '▸';
        position: absolute;
        left: 5px;
        color: #d4af37;
        font-weight: 700;
    }

    .insight-list li:hover {
        border-left-color: #d4af37;
        color: #c8c8c8;
        padding-left: 25px;
        background: rgba(212, 175, 55, 0.05);
        border-radius: 0 8px 8px 0;
    }

    .toggle-more {
        margin: 18px auto 0;
        display: block;
        padding: 8px 20px;
        font-size: 0.8rem;
        letter-spacing: 1px;
        background: #111;
        border: 1px solid rgba(212, 175, 55, 0.35);
        color: #d4af37;
        border-radius: 999px;
        cursor: pointer;
        transition: background 0.25s, border-color 0.25s;
    }

    /* Consolidated Performance Panel */
    .market-performance {
        padding: 50px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    }

    .perf-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        max-width: 1600px;
        margin: 0 auto 16px;
    }

    .perf-block {
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        border: 1px solid rgba(212, 175, 55, 0.4);
        border-radius: 16px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        min-width: 0;
        transition: all 0.3s ease;
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        position: relative;
        overflow: hidden;
    }

    .perf-block::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image:
            repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(212, 175, 55, 0.02) 35px, rgba(212, 175, 55, 0.02) 36px),
            repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(212, 175, 55, 0.02) 35px, rgba(212, 175, 55, 0.02) 36px),
            radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.015) 0%, transparent 50%);
        pointer-events: none;
        z-index: 1;
    }

    .perf-block>* {
        position: relative;
        z-index: 2;
    }

    .perf-block::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 0;
    }

    .perf-block:hover {
        border-color: rgba(240, 199, 94, 0.6);
        transform: translateY(-5px);
        box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(212, 175, 55, 0.25),
            0 0 30px rgba(212, 175, 55, 0.2);
    }

    .perf-block:hover::after {
        opacity: 1;
    }

    .perf-head {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    }

    .perf-head h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #c8c8c8;
        margin: 0;
        letter-spacing: 0.5px;
    }

    .perf-icon {
        font-size: 1rem;
        line-height: 1;
    }

    .perf-icon.positive {
        color: #4ade80;
    }

    .perf-icon.negative {
        color: #f87171;
    }

    .perf-icon.stats {
        color: #d4af37;
    }

    .perf-icon.volume {
        color: #60a5fa;
    }

    .perf-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .perf-row {
        display: grid;
        grid-template-columns: 32px 1fr 80px 80px;
        align-items: center;
        padding: 8px 10px;
        font-size: 1rem;
        border: 1px solid rgba(212, 175, 55, 0.1);
        border-radius: 8px;
        background: #101010;
        letter-spacing: 0.35px;
    }

    .perf-row:hover {
        border-color: rgba(212, 175, 55, 0.25);
    }

    .perf-rank {
        font-weight: 600;
        color: #d4af37;
        text-align: center;
        font-size: 1rem;
    }

    .perf-name {
        color: #c8c8c8;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        line-height: 1.3;
        gap: 2px;
    }

    .perf-name small {
        font-size: 0.85rem;
        font-weight: 500;
        color: #808080;
        margin-top: 2px;
    }

    .perf-price {
        color: #d4af37;
        font-weight: 600;
        text-align: right;
        font-size: 1rem;
    }

    .perf-change {
        font-weight: 700;
        font-size: 1rem;
        text-align: right;
    }

    .perf-change.positive {
        color: #4ade80;
    }

    .perf-change.negative {
        color: #f87171;
    }

    .stats-compact {
        display: flex;
        flex-direction: column;
        gap: 6px;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .stat-line {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        font-size: 1rem;
        padding: 10px 12px;
        background: #101010;
        border: 1px solid rgba(212, 175, 55, 0.1);
        border-radius: 8px;
        transition: border-color 0.3s ease;
    }

    .stat-line:hover {
        border-color: rgba(212, 175, 55, 0.25);
    }

    .stat-line span {
        color: #9b9b9b;
        font-weight: 500;
    }

    .stat-line strong {
        color: #c8c8c8;
        font-weight: 700;
        font-size: 1.05rem;
    }

    .stat-line .pos {
        color: #4ade80;
    }

    .stat-line .neg {
        color: #f87171;
    }

    .stat-line .neu {
        color: #fbbf24;
    }

    .stat-line .hl {
        color: #d4af37;
    }

    .dual-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .mini-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .mini-title {
        font-size: 1rem;
        letter-spacing: 1px;
        color: #d4af37;
        font-weight: 600;
        padding: 6px 10px;
        background: #0f0f0f;
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 6px;
    }

    .mini-row {
        display: grid;
        grid-template-columns: 26px 1fr auto;
        align-items: center;
        font-size: 1rem;
        padding: 6px 8px;
        background: #101010;
        border: 1px solid rgba(212, 175, 55, 0.1);
        border-radius: 6px;
    }

    .mini-row:hover {
        border-color: rgba(212, 175, 55, 0.25);
    }

    .stat-row {
        grid-template-columns: 1fr auto;
    }

    .mini-label {
        color: #9b9b9b;
        font-weight: 500;
    }

    .mini-rank {
        color: #d4af37;
        font-weight: 600;
        text-align: center;
        font-size: 1rem;
    }

    .mini-name {
        color: #c8c8c8;
        font-weight: 600;
        line-height: 1.2;
    }

    .mini-val {
        color: #d4af37;
        font-weight: 600;
        text-align: right;
        font-size: 1rem;
    }

    @media (max-width: 1200px) {
        .perf-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .market-performance {
            padding: 40px 30px;
        }

        .perf-grid {
            grid-template-columns: 1fr;
        }

        .perf-row {
            grid-template-columns: 30px 1fr 75px 75px;
            font-size: 0.95rem;
        }

        .perf-price,
        .perf-change {
            font-size: 0.92rem;
        }

        .mini-row {
            grid-template-columns: 28px 1fr auto;
            font-size: 0.86rem;
        }

        .dual-list {
            grid-template-columns: 1fr;
        }
    }

    .toggle-more:hover {
        background: #151515;
        border-color: rgba(212, 175, 55, 0.55);
    }

    @media (max-width: 768px) {
        .market-header {
            padding: 60px 30px;
        }

        .market-header h1 {
            font-size: 2rem;
        }

        .market-overview,
        .chart-section,
        .market-news,
        .top-movers,
        .market-stats,
        .volume-section,
        .market-insights {
            padding: 40px 30px;
        }

        .chart-section .section-header {
            flex-direction: row;
            align-items: flex-start;
        }

        .charts-grid {
            grid-template-columns: 1fr;
        }

        .chart-placeholder {
            height: 200px;
            min-height: 200px;
        }

        .overview-grid {
            grid-template-columns: 1fr;
        }

        .time-range {
            flex-wrap: wrap;
        }

        .news-grid {
            grid-template-columns: 1fr;
        }

        .chart-section .section-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .charts-grid {
            grid-template-columns: 1fr;
        }

        .chart-placeholder {
            height: 200px;
            min-height: 200px;
        }

        .section-block {
            padding: 0 30px 40px;
        }

        .flow-layout {
            grid-template-columns: 1fr;
        }

        .sector-row {
            grid-template-columns: 1fr;
            gap: 8px;
        }

        .movers-grid {
            grid-template-columns: 1fr;
        }

        .stats-grid {
            grid-template-columns: 1fr;
        }

        .volume-layout {
            grid-template-columns: 1fr;
        }

        .insights-grid {
            grid-template-columns: 1fr;
        }

        .toggle-more {
            width: 100%;
            border-radius: 10px;
        }
    }

    @media (max-width: 480px) {
        .market-header {
            padding: 50px 20px;
        }

        .market-overview,
        .chart-section,
        .market-news,
        .market-performance,
        .market-insights {
            padding: 30px 20px;
        }

        .charts-grid {
            gap: 20px;
        }

        .chart-placeholder {
            height: 180px;
            min-height: 180px;
        }

        .section-block {
            padding: 0 20px 30px;
        }

        .section-header {
            margin: 0 auto 20px;
        }

        .indices-grid,
        .flow-grid,
        .macro-grid,
        .news-grid,
        .insights-grid {
            gap: 20px;
        }

        .perf-grid {
            gap: 20px;
        }

        .perf-row {
            grid-template-columns: 26px 1fr 70px 70px;
            font-size: 0.9rem;
        }

        .mini-row {
            font-size: 0.84rem;
        }
    }
</style>
