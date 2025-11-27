<template>
    <footer class="footer">
        <div class="gold-bar" />
        <div class="footer-content">
            <!-- 品牌與社群 -->
            <div class="footer-section brand">
                <div class="brand-row">
                    <span class="brand-mark">💹</span>
                    <span class="brand-name">創視紀智能投資平台</span>
                </div>
                <p class="brand-tagline">以專業與數據，打造您的長期優勢。</p>
                <div class="trust-badges">
                    <span class="badge">🔒 SSL</span>
                    <span class="badge">🌐 CDN</span>
                    <span class="badge">📈 99.9% Uptime</span>
                </div>
                <div class="social-links">
                    <a href="#" class="social-icon" aria-label="Facebook">📘</a>
                    <a href="#" class="social-icon" aria-label="Twitter">🐦</a>
                    <a href="#" class="social-icon" aria-label="Instagram">📷</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">💼</a>
                </div>
            </div>

            <!-- 快速連結 -->
            <div class="footer-section">
                <h3>快速連結</h3>
                <ul>
                    <li><router-link to="/">首頁</router-link></li>
                    <li><router-link to="/products">投資產品</router-link></li>
                    <li><router-link to="/market">市場分析</router-link></li>
                    <li><router-link to="/dashboard">儀表板</router-link></li>
                </ul>
            </div>

            <!-- 服務 -->
            <div class="footer-section">
                <h3>投資服務</h3>
                <ul>
                    <li><a href="#">股票投資</a></li>
                    <li><a href="#">ETF 交易</a></li>
                    <li><a href="#">基金理財</a></li>
                    <li><a href="#">債券投資</a></li>
                </ul>
            </div>

            <!-- 客服 / 聯絡 / 訂閱合併欄 -->
            <div class="footer-section support">
                <h3>客戶服務</h3>
                <ul>
                    <li><a href="#">幫助中心</a></li>
                    <li><a href="#">隱私政策</a></li>
                    <li><a href="#">服務條款</a></li>
                </ul>
                <div class="contact">
                    <p>客服信箱：support@example.com</p>
                    <p>服務專線：02-1234-5678</p>
                </div>

                <div class="footer-newsletter">
                    <h4>訂閱市場洞察</h4>
                    <div class="subscribe-row">
                        <input type="email" placeholder="輸入 Email" aria-label="Email" />
                        <button class="subscribe-btn">訂閱</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-inner">
                <p>&copy; 2025 智能投資平台 · All Rights Reserved</p>
                <p class="disclaimer">投資有風險，投資前請詳閱公開說明書與相關文件。</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .footer {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        color: #e5e5e5;
        padding: 60px 50px 30px;
        border-top: 2px solid rgba(212, 175, 55, 0.3);
        box-shadow: 0 -5px 30px rgba(212, 175, 55, 0.1);
        position: relative;
    }

    .gold-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.8) 25%, rgba(212,175,55,1) 50%, rgba(212,175,55,0.8) 75%, rgba(212,175,55,0) 100%);
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
    }

    .footer-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 30px;
        margin: 0 auto 40px;
        max-width: 1600px;
    }

    .brand .brand-row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
    }

    .brand-mark { font-size: 1.4rem; filter: drop-shadow(0 0 10px rgba(212,175,55,0.5)); }

    .brand-name {
        font-size: 1.25rem;
        font-weight: 700;
        color: #d4af37;
        text-shadow: 0 0 12px rgba(212, 175, 55, 0.4);
        letter-spacing: 0.6px;
    }

    .brand-tagline { color: #b0b0b0; margin-bottom: 16px; }

    .trust-badges { display: flex; gap: 10px; margin: 8px 0 14px; flex-wrap: wrap; }
    .trust-badges .badge {
        font-size: 0.8rem;
        color: #d4af37;
        border: 1px solid rgba(212,175,55,0.35);
        border-radius: 999px;
        padding: 2px 8px;
        background: rgba(212,175,55,0.08);
    }

    .footer-section h3 {
        font-size: 1.1rem;
        margin-bottom: 20px;
        color: #d4af37;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        font-weight: 700;
    }

    .footer-section p {
        line-height: 1.8;
        color: #b0b0b0;
        margin-bottom: 20px;
    }

    .social-links { display: flex; gap: 12px; }

    .social-icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 50%;
        text-decoration: none;
        font-size: 1.15rem;
        transition: all 0.3s;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
    }

    .social-icon:hover {
        background: linear-gradient(135deg, #d4af37, #aa8c2c);
        transform: translateY(-5px);
        box-shadow: 0 5px 25px rgba(212, 175, 55, 0.5);
        border-color: #d4af37;
    }

    .footer-section ul {
        list-style: none;
        padding: 0;
    }

    .footer-section ul li {
        margin-bottom: 12px;
    }

    .footer-section ul li a {
        color: #b0b0b0;
        text-decoration: none;
        transition: all 0.3s;
        display: inline-block;
    }

    .footer-section ul li a:hover {
        color: #d4af37;
        padding-left: 8px;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }

    .contact p { color: #9b9b9b; font-size: 0.9rem; }

    .footer-newsletter {
        margin-top: 12px;
        background: #111;
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 10px;
        padding: 12px;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
    }

    .footer-newsletter h4 { margin: 0 0 8px; font-size: 1rem; color: #e5e5e5; }

    .subscribe-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .subscribe-row input {
        flex: 1 1 200px;
        max-width: 260px;
        min-width: 0;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        background: #0f0f0f;
        color: #e5e5e5;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    .subscribe-row input::placeholder { color: #6f6f6f; }

    .subscribe-row input:focus {
        outline: none;
        border-color: #d4af37;
        box-shadow: 0 0 12px rgba(212, 175, 55, 0.35);
    }

    .subscribe-btn {
        padding: 8px 14px;
        border-radius: 8px;
        border: 1px solid #d4af37;
        background: linear-gradient(135deg, #d4af37 0%, #aa8c2c 100%);
        color: #0a0a0a;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 0 14px rgba(212, 175, 55, 0.3);
    }

    .subscribe-btn:hover { transform: translateY(-1px); }

    .footer-bottom {
        width: 100%;
        padding-top: 20px;
        border-top: 1px solid rgba(212, 175, 55, 0.2);
        text-align: center;
    }

    .footer-bottom-inner { max-width: 1600px; margin: 0 auto; }

    .footer-bottom p { color: #808080; margin: 8px 0; }

    .disclaimer {
        font-size: 0.9rem;
        font-style: italic;
        color: #d4af37;
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        .footer {
            padding: 60px 30px 20px;
        }

        .footer-content {
            grid-template-columns: 1fr;
            gap: 24px;
        }
    }

    @media (max-width: 480px) {
        .footer { padding: 50px 20px 20px; }
        .social-icon { width: 36px; height: 36px; font-size: 1rem; }
        .subscribe-row { gap: 8px; }
        .subscribe-btn { width: 100%; }
    }
</style>
