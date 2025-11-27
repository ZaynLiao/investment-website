<template>
    <footer class="footer">
        <div class="gold-bar" />

        <!-- 主要內容區 -->
        <div class="footer-main">
            <div class="footer-content">
                <!-- 品牌區 -->
                <div class="footer-brand">
                    <h2 class="brand-title">創視紀智能投資平台</h2>
                    <p class="brand-desc">以專業與數據，打造您的長期優勢</p>
                    <div class="brand-badges">
                        <span class="badge">SSL 加密</span>
                        <span class="badge">CDN 加速</span>
                        <span class="badge">99.9% 穩定</span>
                    </div>
                </div>

                <!-- 導航區域 - 3列對稱 -->
                <div class="footer-nav">
                    <div class="nav-column">
                        <h3 class="nav-title">快速連結</h3>
                        <ul class="nav-list">
                            <li><router-link to="/">首頁</router-link></li>
                            <li><router-link to="/products">投資產品</router-link></li>
                            <li><router-link to="/market">市場分析</router-link></li>
                            <li><router-link to="/dashboard">儀表板</router-link></li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h3 class="nav-title">投資服務</h3>
                        <ul class="nav-list">
                            <li><a href="#">股票投資</a></li>
                            <li><a href="#">ETF 交易</a></li>
                            <li><a href="#">基金理財</a></li>
                            <li><a href="#">債券投資</a></li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h3 class="nav-title">客戶服務</h3>
                        <ul class="nav-list">
                            <li><a href="#">幫助中心</a></li>
                            <li><a href="#">隱私政策</a></li>
                            <li><a href="#">服務條款</a></li>
                            <li><a href="#">聯繫我們</a></li>
                        </ul>
                    </div>
                </div>

                <!-- 聯絡資訊 -->
                <div class="footer-contact">
                    <h3 class="contact-title">聯絡我們</h3>
                    <div class="contact-info">
                        <p class="contact-item">
                            <span class="label">客服信箱</span>
                            <span class="value">support@example.com</span>
                        </p>
                        <p class="contact-item">
                            <span class="label">服務專線</span>
                            <span class="value">02-1234-5678</span>
                        </p>
                    </div>
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="Facebook">F</a>
                        <a href="#" class="social-link" aria-label="Twitter">X</a>
                        <a href="#" class="social-link" aria-label="Instagram">I</a>
                        <a href="#" class="social-link" aria-label="LinkedIn">in</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部版權 -->
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p class="copyright">&copy; 2025 創視紀智能投資平台 · All Rights Reserved</p>
                <p class="disclaimer">投資有風險，投資前請詳閱公開說明書與相關文件</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>

    /* 主容器 */
    .footer {
        background: #0d0d0d;
        color: #c8c8c8;
        border-top: 1px solid rgba(212, 175, 55, 0.2);
        position: relative;
    }

    /* 金色裝飾條 */
    .gold-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,
                transparent 0%,
                rgba(212, 175, 55, 0.6) 20%,
                rgba(212, 175, 55, 1) 50%,
                rgba(212, 175, 55, 0.6) 80%,
                transparent 100%);
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
    }

    /* 主要內容區 */
    .footer-main {
        padding: 70px 50px 50px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .footer-content {
        display: grid;
        grid-template-columns: 2fr 3fr 1.5fr;
        gap: 60px;
        align-items: start;
    }

    /* ========== 品牌區 ========== */
    .footer-brand {
        padding-right: 20px;
    }

    .brand-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #d4af37;
        margin-bottom: 16px;
        letter-spacing: 1px;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
    }

    .brand-desc {
        color: #b0b0b0;
        line-height: 1.8;
        margin-bottom: 24px;
        font-size: 0.95rem;
    }

    .brand-badges {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .badge {
        display: inline-block;
        padding: 6px 14px;
        background: rgba(212, 175, 55, 0.1);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 20px;
        color: #d4af37;
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    /* ========== 導航區域 ========== */
    .footer-nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }

    .nav-column {
        display: flex;
        flex-direction: column;
    }

    .nav-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #d4af37;
        margin-bottom: 20px;
        letter-spacing: 0.5px;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }

    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-list li {
        margin-bottom: 14px;
    }

    .nav-list a {
        color: #b0b0b0;
        text-decoration: none;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        display: inline-block;
    }

    .nav-list a:hover {
        color: #d4af37;
        padding-left: 6px;
        text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
    }

    /* ========== 聯絡區域 ========== */
    .footer-contact {
        display: flex;
        flex-direction: column;
    }

    .contact-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #d4af37;
        margin-bottom: 20px;
        letter-spacing: 0.5px;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }

    .contact-info {
        margin-bottom: 24px;
    }

    .contact-item {
        margin-bottom: 14px;
        color: #b0b0b0;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .contact-item .label {
        display: block;
        color: #888;
        font-size: 0.85rem;
        margin-bottom: 4px;
    }

    .contact-item .value {
        color: #d4af37;
        font-weight: 500;
    }

    /* 社交媒體 */
    .social-links {
        display: flex;
        gap: 12px;
    }

    .social-link {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 50%;
        color: #d4af37;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    .social-link:hover {
        background: linear-gradient(135deg, #d4af37, #b8982d);
        color: #0a0a0a;
        transform: translateY(-4px);
        box-shadow: 0 6px 25px rgba(212, 175, 55, 0.4);
        border-color: #d4af37;
    }

    /* ========== 底部版權 ========== */
    .footer-bottom {
        background: rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(212, 175, 55, 0.15);
        padding: 25px 50px;
    }

    .footer-bottom-content {
        max-width: 1600px;
        margin: 0 auto;
        text-align: center;
    }

    .copyright {
        color: #808080;
        font-size: 0.9rem;
        margin-bottom: 8px;
        letter-spacing: 0.5px;
    }

    .disclaimer {
        color: #666;
        font-size: 0.85rem;
        font-style: italic;
        opacity: 0.8;
    }

    /* ========== 響應式設計 ========== */
    @media (max-width: 1024px) {
        .footer-content {
            grid-template-columns: 1fr;
            gap: 50px;
        }

        .footer-nav {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .footer-brand {
            padding-right: 0;
        }
    }

    @media (max-width: 768px) {
        .footer-main {
            padding: 60px 30px 40px;
        }

        .footer-content {
            gap: 40px;
        }

        .footer-nav {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .footer-bottom {
            padding: 20px 30px;
        }
    }

    @media (max-width: 480px) {
        .footer-main {
            padding: 50px 20px 30px;
        }

        .brand-title {
            font-size: 1.2rem;
        }

        .social-link {
            width: 38px;
            height: 38px;
            font-size: 0.85rem;
        }

        .footer-bottom {
            padding: 20px;
        }
    }
</style>
