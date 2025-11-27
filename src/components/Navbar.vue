<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-brand">
                <router-link to="/">
                    <span class="brand-name">創視紀智能投資平台</span>
                </router-link>
            </div>

            <button class="nav-toggle" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="nav-menu" :class="{ active: isMenuOpen }">
                <router-link to="/" class="nav-link" @click="closeMenu">首頁</router-link>
                <router-link to="/products" class="nav-link" @click="closeMenu">投資產品</router-link>
                <router-link to="/market" class="nav-link" @click="closeMenu">市場分析</router-link>
                <router-link to="/dashboard" class="nav-link" @click="closeMenu">儀表板</router-link>
                <button class="nav-btn">登入/註冊</button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const isMenuOpen = ref<boolean>(false)

    const toggleMenu = (): void => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = (): void => {
        isMenuOpen.value = false
    }
</script>

<style scoped>
    .navbar {
        background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
        box-shadow: 0 2px 20px rgba(212, 175, 55, 0.3);
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    }

    .nav-container {
        width: 100%;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    .nav-brand a {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: #d4af37;
    }

    .logo {
        font-size: 2rem;
        filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.6));
    }

    .brand-name {
        font-size: 1.3rem;
        font-weight: 700;
        color: #d4af37;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }

    .nav-toggle {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .nav-toggle span {
        width: 25px;
        height: 3px;
        background: #d4af37;
        border-radius: 3px;
        transition: all 0.3s;
        box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
    }

    .nav-menu {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .nav-link {
        text-decoration: none;
        color: #e5e5e5;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s;
        padding: 8px 0;
        position: relative;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #d4af37, #f4d03f);
        transition: width 0.3s;
        box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
    }

    .nav-link:hover {
        color: #d4af37;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }

    .nav-link:hover::after {
        width: 100%;
    }

    .nav-link.router-link-active {
        color: #d4af37;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }

    .nav-link.router-link-active::after {
        width: 100%;
    }

    .nav-btn {
        padding: 12px 30px;
        background: linear-gradient(135deg, #d4af37 0%, #aa8c2c 100%);
        color: #0a0a0a;
        border: 2px solid #d4af37;
        border-radius: 25px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }

    .nav-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 25px rgba(212, 175, 55, 0.6);
        background: linear-gradient(135deg, #f4d03f 0%, #d4af37 100%);
    }

    @media (max-width: 768px) {
        .nav-container {
            padding: 0 30px;
        }

        .nav-toggle {
            display: flex;
        }

        .nav-menu {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
            flex-direction: column;
            justify-content: flex-start;
            padding: 40px 20px;
            gap: 20px;
            transition: left 0.3s;
            border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-link {
            width: 100%;
            text-align: center;
            font-size: 1.2rem;
            padding: 15px 0;
        }

        .nav-btn {
            width: 100%;
            padding: 15px 25px;
            font-size: 1.1rem;
        }
    }
</style>
