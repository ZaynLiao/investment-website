<template>
    <div class="products">
        <div class="products-header">
            <h1>投資產品</h1>
            <p>探索多樣化的投資選擇，打造您的投資組合</p>
        </div>
        <!-- Filter Section -->
        <div class="filter-section">
            <div class="filter-container">
                <div class="filters">
                    <button v-for="category in categories" :key="category"
                        :class="['filter-btn', { active: selectedCategory === category }]"
                        @click="selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
                <div class="search-box">
                    <input v-model="searchQuery" type="text" placeholder="搜尋產品名稱或代碼..." />
                </div>
            </div>
        </div>
        <div class="products-content">
            <!-- Products List -->
            <div class="products-container">
                <div class="products-grid">
                    <div class="product-item" v-for="product in filteredProducts" :key="product.id">
                        <div class="product-header">
                            <h3>{{ product.name }}</h3>
                            <span class="product-code">{{ product.code }}</span>
                        </div>
                        <div class="product-body">
                            <div class="product-price" :class="product.changePercent >= 0 ? 'positive' : 'negative'">
                                <span class="price">{{ product.price }}</span>
                                <span class="change">
                                    {{ product.changePercent >= 0 ? '▲' : '▼' }}
                                    {{ Math.abs(product.changePercent) }}%
                                </span>
                            </div>
                            <div class="product-info">
                                <div class="info-item">
                                    <span class="label">類型：</span>
                                    <span class="value">{{ product.type }}</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">風險等級：</span>
                                    <span class="value">{{ product.risk }}</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">年化報酬：</span>
                                    <span class="value">{{ product.return }}%</span>
                                </div>
                            </div>
                        </div>
                        <button class="invest-btn">立即投資</button>
                    </div>
                </div>
            </div>

            <div class="category-highlights">
                <h2>投資組合配置</h2>
                <div>
                    <div class="highlight-card">
                        <p class="highlight-label">股票</p>
                        <p class="highlight-value">48% 組合比重</p>
                        <p class="highlight-note">聚焦科技、AI與電動車供應鏈</p>
                    </div>
                    <div class="highlight-card">
                        <p class="highlight-label">ETF</p>
                        <p class="highlight-value">32% 組合比重</p>
                        <p class="highlight-note">高股息與全球指數雙主軸</p>
                    </div>
                    <div class="highlight-card">
                        <p class="highlight-label">基金</p>
                        <p class="highlight-value">15% 組合比重</p>
                        <p class="highlight-note">配置在成長與收益平衡策略</p>
                    </div>
                    <div class="highlight-card">
                        <p class="highlight-label">債券</p>
                        <p class="highlight-value">5% 組合比重</p>
                        <p class="highlight-note">提供現金流與下檔保護</p>
                    </div>
                </div>
            </div>

            <section class="bundle-section">
                <h2>精選策略組合</h2>
                <div class="bundle-grid">
                    <div class="bundle-card">
                        <h3>穩健收益</h3>
                        <ul>
                            <li>50% 高股息ETF</li>
                            <li>30% 投資級債券</li>
                            <li>20% 成長基金</li>
                        </ul>
                        <p class="bundle-note">適合尋求穩定現金流與低波動的投資人。</p>
                    </div>
                    <div class="bundle-card">
                        <h3>成長動能</h3>
                        <ul>
                            <li>60% 科技權值股</li>
                            <li>25% 新興市場基金</li>
                            <li>15% 主題型ETF</li>
                        </ul>
                        <p class="bundle-note">抓住AI、雲端與電動車長期趨勢。</p>
                    </div>
                    <div class="bundle-card">
                        <h3>全球配置</h3>
                        <ul>
                            <li>40% 美國指數ETF</li>
                            <li>30% 歐洲/亞洲基金</li>
                            <li>30% 多元債券</li>
                        </ul>
                        <p class="bundle-note">以跨國資產分散單一市場風險。</p>
                    </div>
                </div>
            </section>

            <section class="knowledge-section">
                <div class="knowledge-header">
                    <h2>投資攻略與最新觀點</h2>
                    <p>每週更新的分析報告與教學，幫助您掌握市場脈動。</p>
                </div>
                <div class="knowledge-grid">
                    <article class="knowledge-card">
                        <span class="badge">策略</span>
                        <h3>用核心衛星法提升勝率</h3>
                        <p>核心資產配置穩定ETF，衛星部位選擇高成長題材，透過定期再平衡維持理想風險。</p>
                    </article>
                    <article class="knowledge-card">
                        <span class="badge">產業</span>
                        <h3>AI 供應鏈最新機會</h3>
                        <p>追蹤晶片、伺服器、散熱模組及高速傳輸族群，鎖定長期成長的新動能。</p>
                    </article>
                    <article class="knowledge-card">
                        <span class="badge">理財</span>
                        <h3>打造被動現金流</h3>
                        <p>結合債券、REITs 與月配息ETF，讓投資收入穩定覆蓋生活開支。</p>
                    </article>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import type { Product } from '@/types'

    const categories = ref<string[]>(['全部', '股票', 'ETF', '基金', '債券'])
    const selectedCategory = ref<string>('全部')
    const searchQuery = ref<string>('')

    const products = ref<Product[]>([
        { id: 1, name: '台積電', code: '2330', price: 'NT$ 585', changePercent: 2.5, type: '股票', risk: '高', return: 15.2 },
        { id: 2, name: '聯發科', code: '2454', price: 'NT$ 925', changePercent: 1.8, type: '股票', risk: '高', return: 12.8 },
        { id: 3, name: '鴻海', code: '2317', price: 'NT$ 108', changePercent: -0.5, type: '股票', risk: '中高', return: 8.5 },
        { id: 4, name: '台達電', code: '2308', price: 'NT$ 325', changePercent: 1.6, type: '股票', risk: '中', return: 10.2 },
        { id: 5, name: '廣達', code: '2382', price: 'NT$ 235', changePercent: 3.1, type: '股票', risk: '中高', return: 13.1 },
        { id: 6, name: '元大台灣50', code: '0050', price: 'NT$ 142', changePercent: 1.2, type: 'ETF', risk: '中', return: 10.5 },
        { id: 7, name: '元大高股息', code: '0056', price: 'NT$ 32.5', changePercent: 0.8, type: 'ETF', risk: '中', return: 9.2 },
        { id: 8, name: '國泰永續高股息', code: '00878', price: 'NT$ 22.5', changePercent: 1.5, type: 'ETF', risk: '中', return: 8.4 },
        { id: 9, name: '富邦科技', code: '0052', price: 'NT$ 118', changePercent: -1.2, type: 'ETF', risk: '中高', return: 11.8 },
        { id: 10, name: '統一全球股票基金', code: 'UT01', price: 'NT$ 25.6', changePercent: 3.2, type: '基金', risk: '中高', return: 13.5 },
        { id: 11, name: '富蘭克林成長基金', code: 'FR01', price: 'NT$ 48.2', changePercent: 2.1, type: '基金', risk: '高', return: 14.8 },
        { id: 12, name: '摩根亞洲基金', code: 'MG01', price: 'NT$ 35.8', changePercent: -0.8, type: '基金', risk: '中高', return: 11.2 },
        { id: 13, name: '安聯收益成長', code: 'AL01', price: 'NT$ 56.3', changePercent: 1.4, type: '基金', risk: '中', return: 9.9 },
        { id: 14, name: '中華郵政定存', code: 'CP01', price: 'NT$ 100', changePercent: 0.1, type: '債券', risk: '低', return: 1.5 },
        { id: 15, name: '政府公債', code: 'GB01', price: 'NT$ 98.5', changePercent: 0.2, type: '債券', risk: '低', return: 2.1 },
        { id: 16, name: '企業債券', code: 'CB01', price: 'NT$ 102', changePercent: 0.5, type: '債券', risk: '中低', return: 3.8 },
        { id: 17, name: '綠能債券', code: 'EB01', price: 'NT$ 101.2', changePercent: 0.4, type: '債券', risk: '中低', return: 4.2 },
        { id: 18, name: '美債20年', code: 'UST20', price: 'NT$ 87.5', changePercent: -0.2, type: '債券', risk: '中低', return: 3.1 },
    ])

    const filteredProducts = computed<Product[]>(() => {
        let result = products.value

        // Filter by category
        if (selectedCategory.value !== '全部') {
            result = result.filter(p => p.type === selectedCategory.value)
        }

        // Filter by search query
        if (searchQuery.value) {
            const query = searchQuery.value.toLowerCase()
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.code.toLowerCase().includes(query)
            )
        }

        return result
    })
</script>

<style scoped>
    .products {
        width: 100%;
        min-height: 100vh;
        background: #0a0a0a;
        padding-bottom: 80px;
    }

    .products-header {
        background: linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%);
        color: #c8c8c8;
        padding: 80px 50px;
        text-align: center;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .products-header::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.04) 48%, rgba(212, 175, 55, 0.04) 52%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.04) 48%, rgba(212, 175, 55, 0.04) 52%, transparent 52%);
        background-size: 35px 35px;
        pointer-events: none;
    }

    .products-header h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
    }

    .products-header p {
        font-size: 1rem;
        color: #b0b0b0;
        line-height: 1.8;
        letter-spacing: 0.5px;
    }

    .products-content {
        width: 85%;
        margin: 0 auto;
        padding: 60px 50px;
        background: #0a0a0a;
        position: relative;
    }

    .filter-section {
        background: #0f0f0f;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    }

    .filter-container {
        width: 85%;
        margin: 0 auto;
        padding: 30px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .filters {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }

    .filter-btn {
        padding: 8px 20px;
        border: 1px solid rgba(212, 175, 55, 0.4);
        background: transparent;
        color: #b0b0b0;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s;
    }

    .filter-btn:hover {
        background: rgba(212, 175, 55, 0.1);
        color: #d4af37;
        border-color: #d4af37;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
    }

    .filter-btn.active {
        background: linear-gradient(135deg, #d4af37, #aa8c2c);
        color: #0a0a0a;
        border-color: #d4af37;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
    }

    .search-box input {
        padding: 10px 20px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        background: #1a1a1a;
        color: #e5e5e5;
        border-radius: 20px;
        font-size: 0.9rem;
        width: 280px;
        transition: all 0.3s;
    }

    .search-box input::placeholder {
        color: #666;
    }

    .search-box input:focus {
        outline: none;
        border-color: #d4af37;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        background: #0f0f0f;
    }

    .products-container {
        width: 100%;
        padding: 0 0 60px 0;
    }

    .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 30px;

        margin: 0 auto;
    }

    .product-item {
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        border-radius: 16px;
        padding: 24px;
        border: 1px solid rgba(212, 175, 55, 0.4);
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .product-item::before {
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
        border-radius: 16px;
        z-index: 1;
    }

    .product-item>* {
        position: relative;
        z-index: 2;
    }

    .product-item::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 60%);
        opacity: 0;
        transition: opacity 0.3s;
    }

    .product-item:hover::before {
        opacity: 1;
    }

    .product-item:hover {
        background: #151515;
        transform: translateY(-2px);
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .product-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .product-header h3 {
        font-size: 1.25rem;
        color: #e5e5e5;
        font-weight: 600;
    }

    .product-code {
        background: rgba(212, 175, 55, 0.15);
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.8rem;
        color: #d4af37;
        border: 1px solid rgba(212, 175, 55, 0.3);
    }

    .product-body {
        margin-bottom: 18px;
    }

    .product-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
    }

    .product-price .price {
        font-size: 1.25rem;
        font-weight: 700;
    }

    .product-price.positive .price,
    .product-price.positive .change {
        color: #4ade80;
        text-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
    }

    .product-price.negative .price,
    .product-price.negative .change {
        color: #f87171;
        text-shadow: 0 0 8px rgba(248, 113, 113, 0.4);
    }

    .product-price .change {
        font-size: 1rem;
        font-weight: 600;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .info-item {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
    }

    .info-item .label {
        color: #808080;
    }

    .info-item .value {
        color: #d4af37;
        font-weight: 600;
    }

    .invest-btn {
        width: 100%;
        padding: 10px;
        background: linear-gradient(135deg, #d4af37, #aa8c2c);
        color: #0a0a0a;
        border: 1px solid #d4af37;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
    }

    .invest-btn:hover {
        background: linear-gradient(135deg, #f4d03f, #d4af37);
        transform: translateY(-2px);
        box-shadow: 0 5px 25px rgba(212, 175, 55, 0.5);
    }

    .category-highlights {
        padding: 60px 0 30px 0;
        margin: 0 auto;
    }

    .category-highlights h2 {
        font-size: 1.25rem;
        color: #d4af37;
        margin-bottom: 30px;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        font-weight: 700;
        letter-spacing: 0.8px;
    }

    .category-highlights>div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 30px;
    }

    .highlight-card {
        border: 1px solid rgba(212, 175, 55, 0.2);
        padding: 20px;
        border-radius: 12px;
        background: #111;
        box-shadow: inset 0 0 20px rgba(212, 175, 55, 0.08);
        transition: all 0.3s ease;
    }

    .highlight-card:hover {
        background: #151515;
        transform: translateY(-2px);
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .highlight-label {
        font-size: 0.85rem;
        color: #9c9c9c;
        letter-spacing: 0.6px;
        margin-bottom: 6px;
    }

    .highlight-value {
        font-size: 1.05rem;
        font-weight: 600;
        color: #d4af37;
        margin-bottom: 4px;
    }

    .highlight-note {
        font-size: 0.85rem;
        color: #bfbfbf;
        line-height: 1.6;
    }

    .bundle-section,
    .knowledge-section {
        padding: 60px 0 30px 0;
        margin: 0 auto;
    }

    .bundle-section h2,
    .knowledge-section h2 {
        font-size: 1.25rem;
        color: #d4af37;
        margin-bottom: 30px;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        font-weight: 700;
        letter-spacing: 0.8px;
    }

    .bundle-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 30px;
    }

    .bundle-card {
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        padding: 24px;
        background: #111;
        transition: all 0.3s ease;
    }

    .bundle-card:hover {
        background: #151515;
        transform: translateY(-2px);
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .bundle-card h3 {
        font-size: 1.25rem;
        color: #f5d77a;
        margin-bottom: 12px;
    }

    .bundle-card ul {
        list-style: none;
        padding: 0;
        margin: 0 0 12px;
    }

    .bundle-card li {
        font-size: 1rem;
        color: #d8d8d8;
        padding: 4px 0;
        border-bottom: 1px dashed rgba(212, 175, 55, 0.2);
    }

    .bundle-card li:last-child {
        border-bottom: none;
    }

    .bundle-note {
        font-size: 0.85rem;
        color: #a3a3a3;
        line-height: 1.6;
    }

    .knowledge-header {
        margin-bottom: 30px;
        text-align: left;
    }

    .knowledge-header h2 {
        margin-bottom: 15px;
    }

    .knowledge-header p {
        color: #b0b0b0;
        font-size: 1rem;
        line-height: 1.8;
        letter-spacing: 0.5px;
    }

    .knowledge-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 30px;
    }

    .knowledge-card {
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        padding: 24px;
        background: #111;
        position: relative;
        transition: all 0.3s ease;
    }

    .knowledge-card:hover {
        background: #151515;
        transform: translateY(-2px);
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
    }

    .knowledge-card .badge {
        position: absolute;
        top: -12px;
        right: 16px;
        background: #d4af37;
        color: #000;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 0.75rem;
        letter-spacing: 0.5px;
    }

    .knowledge-card h3 {
        font-size: 1.25rem;
        color: #f1f1f1;
        margin-bottom: 10px;
    }

    .knowledge-card p {
        font-size: 1rem;
        color: #bdbdbd;
        line-height: 1.7;
    }

    @media (max-width: 768px) {
        .products-header {
            padding: 60px 30px;
        }

        .products-header h1 {
            font-size: 2rem;
        }

        .filter-section {
            padding: 30px;
            flex-direction: column;
            align-items: stretch;
        }

        .search-box input {
            width: 100%;
        }

        .products-container {
            padding: 30px;
        }

        .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .category-highlights,
        .bundle-section,
        .knowledge-section {
            padding: 0 30px 40px;
        }
    }

    @media (max-width: 480px) {
        .filter-container {
            width: 100%;
            padding: 20px;
            gap: 12px;
        }

        .filters {
            gap: 8px;
        }

        .products-content {
            width: 100%;
            padding: 30px 20px;
        }

        .products-container {
            padding: 20px 0 40px;
        }

        .products-grid {
            gap: 18px;
        }

        .product-item {
            padding: 18px;
        }

        .product-header h3 {
            font-size: 1.1rem;
        }

        .product-price .price {
            font-size: 1.1rem;
        }

        .product-price .change {
            font-size: 0.9rem;
        }

        .invest-btn {
            padding: 10px;
            font-size: 0.9rem;
        }

        .category-highlights,
        .bundle-section,
        .knowledge-section {
            padding: 0 20px 30px;
        }
    }
</style>
