<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>智能投資平台</h1>
                <p>專業的投資分析與市場洞察，助您實現財富增長</p>
                <div class="hero-buttons">
                    <button class="btn-primary" @click="$router.push('/products')">開始投資</button>
                    <button class="btn-secondary" @click="$router.push('/market')">市場分析</button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <h2>我們的優勢</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>多元投資商品</h3>
                    <p>提供股票、基金、ETF、債券、期貨等超過50種投資選擇，滿足不同風險偏好</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>安全可靠</h3>
                    <p>採用銀行級別256位元SSL加密技術，資金由第三方信託保管，安全有保障</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>隨時隨地</h3>
                    <p>支援iOS/Android APP及網頁版本，7x24小時全天候服務，隨時掌握投資動態</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💡</div>
                    <h3>專業分析</h3>
                    <p>由資深分析師團隊提供即時市場分析、技術指標和AI智能投資建議</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h3>低手續費</h3>
                    <p>業界最低交易手續費率，零開戶費，讓您的每一分投資都發揮最大價值</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎓</div>
                    <h3>投資教育</h3>
                    <p>免費提供線上投資課程、理財講座和模擬交易，新手也能快速上手</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏆</div>
                    <h3>獲獎肯定</h3>
                    <p>榮獲2024年最佳證券商、金融科技創新獎等多項業界殊榮</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤝</div>
                    <h3>專屬服務</h3>
                    <p>配置專業理財顧問團隊，提供一對一諮詢服務和客製化投資組合建議</p>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats">
            <div class="stats-grid">
                <div class="stat-card">
                    <p class="stat-label">全球用戶</p>
                    <p class="stat-value">280,000+</p>
                    <p class="stat-note">遍布12個國家與地區</p>
                </div>
                <div class="stat-card">
                    <p class="stat-label">平均年化報酬</p>
                    <p class="stat-value">+12.7%</p>
                    <p class="stat-note">根據近三年回測結果</p>
                </div>
                <div class="stat-card">
                    <p class="stat-label">管理資產規模</p>
                    <p class="stat-value">NT$ 186 億</p>
                    <p class="stat-note">持續穩定成長中</p>
                </div>
                <div class="stat-card">
                    <p class="stat-label">線上課程</p>
                    <p class="stat-value">120+ 堂</p>
                    <p class="stat-note">從基礎到高階策略</p>
                </div>
            </div>
        </section>

        <!-- Popular Products -->
        <section class="popular-products">
            <h2>熱門投資產品</h2>
            <div class="product-grid">
                <div class="product-card" v-for="product in popularProducts" :key="product.id">
                    <h3>{{ product.name }}</h3>
                    <div class="product-price" :class="product.change >= 0 ? 'positive' : 'negative'">
                        {{ product.price }}
                        <span class="change">{{ product.change >= 0 ? '+' : '' }}{{ product.change }}%</span>
                    </div>
                    <p class="product-type">{{ product.type }}</p>
                </div>
            </div>
        </section>

        <!-- Insights Section -->
        <section class="insights">
            <div class="insights-content">
                <div class="insight-block">
                    <h3>市場觀察</h3>
                    <ul>
                        <li>半導體族群受惠AI需求，權值股帶動大盤續創高點。</li>
                        <li>高股息ETF持續吸收資金，是穩健型投資人首選。</li>
                        <li>ESG主題逐漸成為長期資產配置核心。</li>
                    </ul>
                </div>
                <div class="insight-block">
                    <h3>策略建議</h3>
                    <ul>
                        <li>以核心資產搭配衛星操作，風險分散更靈活。</li>
                        <li>透過定期定額與逢低加碼策略平滑成本。</li>
                        <li>設定資產配置再平衡門檻，維持理想風險值。</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="cta">
            <h2>準備好開始投資了嗎？</h2>
            <p>立即註冊，獲取專業投資指導</p>
            <button class="btn-primary" @click="$router.push('/dashboard')">前往儀表板</button>
        </section>

        <!-- Learning Path -->
        <section class="learning">
            <h2>投資進階路徑</h2>
            <div class="learning-steps">
                <div class="step-card">
                    <span class="step-index">01</span>
                    <h3>建立帳戶</h3>
                    <p>完成KYC與風險屬性問卷，獲得專屬投資建議。</p>
                </div>
                <div class="step-card">
                    <span class="step-index">02</span>
                    <h3>熟悉工具</h3>
                    <p>透過模擬交易與教學課程，了解平台功能。</p>
                </div>
                <div class="step-card">
                    <span class="step-index">03</span>
                    <h3>配置資產</h3>
                    <p>依照目標設定多元資產組合並啟用再平衡機制。</p>
                </div>
                <div class="step-card">
                    <span class="step-index">04</span>
                    <h3>持續優化</h3>
                    <p>透過市場快訊與智能提醒調整策略，維持績效。</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import type { PopularProduct } from '@/types'

    const popularProducts = ref<PopularProduct[]>([
        { id: 1, name: '台積電 (2330)', price: 'NT$ 585', change: 5.2, type: '股票' },
        { id: 2, name: '元大台灣50 (0050)', price: 'NT$ 142', change: 2.8, type: 'ETF' },
        { id: 3, name: '鴻海 (2317)', price: 'NT$ 108', change: -1.5, type: '股票' },
        { id: 4, name: '聯發科 (2454)', price: 'NT$ 925', change: 8.3, type: '股票' },
        { id: 5, name: '元大高股息 (0056)', price: 'NT$ 38.5', change: 1.8, type: 'ETF' },
        { id: 6, name: '台達電 (2308)', price: 'NT$ 325', change: 4.2, type: '股票' },
        { id: 7, name: '中華電 (2412)', price: 'NT$ 125', change: 0.8, type: '股票' },
        { id: 8, name: '國泰永續高股息 (00878)', price: 'NT$ 22.5', change: 2.1, type: 'ETF' },
        { id: 9, name: '聯電 (2303)', price: 'NT$ 52.5', change: 3.9, type: '股票' },
    ])
</script>

<style scoped>
    .home {
        width: 100%;
        background: #0a0a0a;
    }

    .hero {
        background: linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%);
        position: relative;
        color: #e5e5e5;
        padding: 120px 50px;
        text-align: center;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image:
            linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.04) 48%, rgba(212, 175, 55, 0.04) 52%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.04) 48%, rgba(212, 175, 55, 0.04) 52%, transparent 52%);
        background-size: 35px 35px;
        pointer-events: none;
    }

    .hero-content {
        position: relative;
        z-index: 1;
    }

    .hero-content h1 {
        font-size: 3rem;
        margin-bottom: 20px;
        font-weight: 700;
        color: #d4af37;
        text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        letter-spacing: 2px;
        line-height: 1.3;
    }

    .hero-content p {
        font-size: 1.2rem;
        margin-bottom: 40px;
        color: #b0b0b0;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        line-height: 1.8;
        letter-spacing: 0.5px;
    }

    .hero-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-primary {
        background: linear-gradient(135deg, #d4af37 0%, #b8982d 100%);
        color: #0a0a0a;
        padding: 14px 35px;
        border: 2px solid #d4af37;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        letter-spacing: 1px;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        background: linear-gradient(135deg, #f0c75e 0%, #d4af37 100%);
    }

    .btn-secondary {
        background: transparent;
        color: #d4af37;
        padding: 14px 35px;
        border: 2px solid #d4af37;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        letter-spacing: 1px;
    }

    .btn-secondary:hover {
        background: linear-gradient(135deg, #d4af37 0%, #b8982d 100%);
        color: #0a0a0a;
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
    }

    .features {
        padding: 100px 50px;
        width: 100%;
        background: #0a0a0a;
        position: relative;
    }

    .features h2 {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 30px;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        font-weight: 700;
    }

    .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .feature-card {
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        padding: 24px;
        border-radius: 16px;
        text-align: center;
        border: 1px solid rgba(212, 175, 55, 0.4);
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .feature-card::before {
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

    .feature-card>* {
        position: relative;
        z-index: 2;
    }

    .feature-card::after {
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

    .product-card {
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        padding: 24px;
        border-radius: 16px;
        text-align: center;
        border: 1px solid rgba(212, 175, 55, 0.4);
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .product-card::before {
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

    .product-card>* {
        position: relative;
        z-index: 2;
    }

    .product-card::after {
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

    .product-card:hover {
        transform: translateY(-5px);
        border-color: rgba(240, 199, 94, 0.6);
        box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(212, 175, 55, 0.25),
            0 0 30px rgba(212, 175, 55, 0.2);
    }

    .product-card:hover::after {
        opacity: 1;
    }

    .feature-card:hover {
        transform: translateY(-5px);
        border-color: rgba(240, 199, 94, 0.6);
        box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(212, 175, 55, 0.25),
            0 0 30px rgba(212, 175, 55, 0.2);
    }

    .feature-card:hover::after {
        opacity: 1;
    }

    .feature-icon {
        font-size: 3.5rem;
        margin-bottom: 25px;
        filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
    }

    .feature-card h3 {
        font-size: 1.25rem;
        margin-bottom: 15px;
        color: #d4af37;
        font-weight: 600;
    }

    .feature-card p {
        color: #9b9b9b;
        line-height: 1.8;
        font-size: 1rem;
        letter-spacing: 0.5px;
    }

    .stats {
        width: 100%;
        padding: 60px 50px;
        background: #0a0a0a;
        border-top: 1px solid rgba(212, 175, 55, 0.1);
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        position: relative;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .stat-card {
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        padding: 24px;
        border-radius: 16px;
        text-align: center;
        border: 1px solid rgba(212, 175, 55, 0.4);
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .stat-card::before {
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

    .stat-card>* {
        position: relative;
        z-index: 2;
    }

    .stat-card::after {
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

    .stat-card:hover {
        transform: translateY(-5px);
        border-color: rgba(240, 199, 94, 0.6);
        box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(212, 175, 55, 0.25),
            0 0 30px rgba(212, 175, 55, 0.2);
    }

    .stat-card:hover::after {
        opacity: 1;
    }

    .stat-label {
        color: #b0b0b0;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-bottom: 8px;
    }

    .stat-value {
        font-size: 1.25rem;
        color: #d4af37;
        font-weight: 700;
        margin-bottom: 6px;
    }

    .stat-note {
        color: #808080;
        font-size: 0.85rem;
        letter-spacing: 0.6px;
    }

    .popular-products {
        background: linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%);
        padding: 60px 50px;
        width: 100%;
        border-top: 1px solid rgba(212, 175, 55, 0.12);
        position: relative;
    }

    .popular-products h2 {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 30px;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        font-weight: 700;
    }

    .product-grid {
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
    }

    .product-card h3 {
        font-size: 1.25rem;
        margin-bottom: 15px;
        color: #c8c8c8;
        font-weight: 600;
    }

    .product-price {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .product-price.positive {
        color: #4ade80;
        text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
    }

    .product-price.negative {
        color: #f87171;
        text-shadow: 0 0 10px rgba(248, 113, 113, 0.5);
    }

    .change {
        font-size: 0.9rem;
        margin-left: 10px;
    }

    .product-type {
        color: #808080;
        font-size: 0.85rem;
        padding: 5px 15px;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 15px;
        display: inline-block;
        margin-top: 10px;
    }

    .cta {
        padding: 60px 50px;
        text-align: center;
        background: linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%);
        border-top: 1px solid rgba(212, 175, 55, 0.2);
        color: #e5e5e5;
        width: 100%;
        position: relative;
    }

    .cta::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
            repeating-linear-gradient(45deg,
                transparent,
                transparent 15px,
                rgba(212, 175, 55, 0.015) 15px,
                rgba(212, 175, 55, 0.015) 16px),
            repeating-linear-gradient(-45deg,
                transparent,
                transparent 15px,
                rgba(212, 175, 55, 0.015) 15px,
                rgba(212, 175, 55, 0.015) 16px);
        pointer-events: none;
    }

    .cta h2 {
        font-size: 1.25rem;
        margin-bottom: 20px;
        color: #d4af37;
        text-shadow: 0 0 25px rgba(212, 175, 55, 0.5);
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 1px;
    }

    .cta p {
        font-size: 1rem;
        margin-bottom: 35px;
        color: #b0b0b0;
        line-height: 1.7;
        letter-spacing: 0.5px;
    }

    .insights {
        width: 100%;
        padding: 60px 50px;
        background: #0f0f0f;
        border-top: 1px solid rgba(212, 175, 55, 0.12);
        border-bottom: 1px solid rgba(212, 175, 55, 0.12);
        position: relative;
    }

    .insights::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: repeating-linear-gradient(0deg,
                transparent,
                transparent 19px,
                rgba(212, 175, 55, 0.025) 19px,
                rgba(212, 175, 55, 0.025) 20px);
        pointer-events: none;
    }

    .insights-content {
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 30px;
    }

    .insight-block {
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        border: 1px solid rgba(212, 175, 55, 0.4);
        border-radius: 16px;
        padding: 24px;
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .insight-block::before {
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

    .insight-block>* {
        position: relative;
        z-index: 2;
    }

    .insight-block::after {
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

    .insight-block:hover {
        transform: translateY(-5px);
        border-color: rgba(240, 199, 94, 0.6);
        box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(212, 175, 55, 0.25),
            0 0 30px rgba(212, 175, 55, 0.2);
    }

    .insight-block:hover::after {
        opacity: 1;
    }

    .insight-block h3 {
        font-size: 1.25rem;
        color: #d4af37;
        margin-bottom: 20px;
        letter-spacing: 0.8px;
    }

    .insight-block ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: #c7c7c7;
        font-size: 1rem;
        line-height: 1.8;
    }

    .insight-block li {
        position: relative;
        padding-left: 18px;
    }

    .insight-block li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #d4af37;
        box-shadow: 0 0 6px rgba(212, 175, 55, 0.6);
    }

    .learning {
        width: 100%;
        padding: 60px 50px;
        background: #0a0a0a;
        position: relative;
    }

    .learning h2 {
        text-align: center;
        font-size: 1.25rem;
        color: #d4af37;
        margin-bottom: 30px;
        letter-spacing: 1px;
    }

    .learning-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .step-card {
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        border: 1px solid rgba(212, 175, 55, 0.4);
        border-radius: 16px;
        padding: 24px;
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .step-card::before {
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

    .step-card>* {
        position: relative;
        z-index: 2;
    }

    .step-card::after {
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

    .step-card:hover {
        transform: translateY(-5px);
        border-color: rgba(240, 199, 94, 0.6);
        box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(212, 175, 55, 0.25),
            0 0 30px rgba(212, 175, 55, 0.2);
    }

    .step-card:hover::after {
        opacity: 1;
    }

    .step-index {
        font-size: 0.9rem;
        color: #d4af37;
        letter-spacing: 5px;
        text-transform: uppercase;
    }

    .step-card h3 {
        margin-top: 10px;
        font-size: 1.25rem;
        color: #e5e5e5;
    }

    .step-card p {
        color: #b0b0b0;
        font-size: 1rem;
        line-height: 1.7;
        margin-top: 8px;
        letter-spacing: 0.6px;
    }

    @media (max-width: 768px) {
        .hero {
            padding: 80px 30px;
        }

        .hero-content h1 {
            font-size: 2.2rem;
        }

        .hero-content p {
            font-size: 1.1rem;
        }

        .features,
        .popular-products,
        .cta,
        .insights,
        .learning,
        .stats {
            padding: 60px 30px;
        }

        .features h2,
        .popular-products h2,
        .cta h2,
        .learning h2 {
            font-size: 2rem;
        }
    }

    @media (max-width: 480px) {
        .hero {
            padding: 60px 20px;
        }

        .hero-content h1 {
            font-size: 1.8rem;
        }

        .hero-content p {
            font-size: 1rem;
            margin-bottom: 28px;
        }

        .hero-buttons {
            gap: 12px;
        }

        .features,
        .popular-products,
        .cta,
        .insights,
        .learning,
        .stats {
            padding: 40px 20px;
        }

        .feature-grid,
        .product-grid,
        .insights-content,
        .learning-steps,
        .stats-grid {
            gap: 20px;
        }

        .btn-primary,
        .btn-secondary {
            padding: 12px 20px;
            font-size: 0.95rem;
        }
    }
</style>
