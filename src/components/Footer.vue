<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>關於我們</h3>
                <p>智能投資平台致力於提供專業的投資分析與市場洞察，幫助投資者實現財富增長。</p>
                <div class="social-links">
                    <a href="#" class="social-icon">📘</a>
                    <a href="#" class="social-icon">🐦</a>
                    <a href="#" class="social-icon">📷</a>
                    <a href="#" class="social-icon">💼</a>
                </div>
            </div>

            <div class="footer-section">
                <h3>快速連結</h3>
                <ul>
                    <li><router-link to="/">首頁</router-link></li>
                    <li><router-link to="/products">投資產品</router-link></li>
                    <li><router-link to="/market">市場分析</router-link></li>
                    <li><router-link to="/dashboard">儀表板</router-link></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>投資服務</h3>
                <ul>
                    <li><a href="#">股票投資</a></li>
                    <li><a href="#">ETF 交易</a></li>
                    <li><a href="#">基金理財</a></li>
                    <li><a href="#">債券投資</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>客戶服務</h3>
                <ul>
                    <li><a href="#">幫助中心</a></li>
                    <li><a href="#">聯絡我們</a></li>
                    <li><a href="#">隱私政策</a></li>
                    <li><a href="#">服務條款</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 智能投資平台。保留所有權利。</p>
            <p class="disclaimer">投資有風險，投資前請詳閱相關說明文件。</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .footer {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        color: #e5e5e5;
        padding: 80px 50px 30px;
        border-top: 2px solid rgba(212, 175, 55, 0.3);
        box-shadow: 0 -5px 30px rgba(212, 175, 55, 0.1);
    }

    .footer-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 50px;
        margin-bottom: 50px;
    }

    .footer-section h3 {
        font-size: 1.3rem;
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

    .social-links {
        display: flex;
        gap: 15px;
    }

    .social-icon {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 50%;
        text-decoration: none;
        font-size: 1.3rem;
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

    .footer-bottom {
        width: 100%;
        padding-top: 30px;
        border-top: 1px solid rgba(212, 175, 55, 0.2);
        text-align: center;
    }

    .footer-bottom p {
        color: #808080;
        margin: 10px 0;
    }

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
            gap: 30px;
        }
    }
</style>
