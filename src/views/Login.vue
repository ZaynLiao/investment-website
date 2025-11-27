<template>
    <div class="auth">
        <div class="auth-card">
            <div class="card-header">
                <h1>登入帳戶</h1>
                <p>繼續你的投資旅程</p>
            </div>
            <form @submit.prevent="onSubmit">
                <div class="input-group">
                    <label for="email">電子郵件</label>
                    <input id="email" v-model="email" type="email" placeholder="you@example.com" required />
                </div>
                <div class="input-group">
                    <label for="password">密碼</label>
                    <input id="password" v-model="password" type="password" placeholder="••••••••" required />
                </div>
                <div class="form-row">
                    <label class="checkbox">
                        <input type="checkbox" v-model="remember" /> 記住我
                    </label>
                    <a href="#" class="link">忘記密碼？</a>
                </div>
                <button class="primary-btn" type="submit">登入</button>
            </form>
            <p class="alt-link">
                還沒有帳戶？
                <router-link to="/register" class="link">立即註冊</router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const remember = ref(true)

    const onSubmit = () => {
        // TODO: 呼叫後端 API
        console.log('login', { email: email.value, remember: remember.value })
        router.push('/dashboard')
    }
</script>

<style scoped>
    .auth {
        width: 100%;
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        background: linear-gradient(135deg, #0d0d0d 0%, #0a0a0a 100%);
        position: relative;
    }

    .auth::before {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(45deg,
                transparent,
                transparent 12px,
                rgba(212, 175, 55, 0.06) 12px,
                rgba(212, 175, 55, 0.06) 13px);
        pointer-events: none;
    }

    .auth-card {
        width: 100%;
        max-width: 480px;
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        border: 1px solid rgba(212, 175, 55, 0.4);
        border-radius: 20px;
        padding: 32px;
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(212, 175, 55, 0.15),
            0 0 20px rgba(212, 175, 55, 0.1);
        position: relative;
        overflow: hidden;
    }

    .auth-card::before {
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
        border-radius: 20px;
        z-index: 1;
    }

    .auth-card>* {
        position: relative;
        z-index: 2;
    }

    .auth-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
        animation: shimmer 3s infinite;
    }

    @keyframes shimmer {
        0% {
            left: -100%;
        }

        100% {
            left: 200%;
        }
    }

    .card-header {
        text-align: center;
        margin: -32px -32px 28px;
        padding: 28px 32px 24px;
        background: linear-gradient(180deg, rgba(212, 175, 55, 0.06) 0%, transparent 100%);
        border-bottom: 1px solid rgba(212, 175, 55, 0.15);
        border-radius: 18px 18px 0 0;
        position: relative;
    }

    .card-header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent);
        filter: blur(1px);
    }

    .card-header h1 {
        font-size: 2rem;
        color: #d4af37;
        font-weight: 700;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        margin-bottom: 12px;
        letter-spacing: 1.5px;
    }

    .card-header p {
        font-size: 0.95rem;
        color: #b8b8b8;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
    }

    label {
        color: #a9a9a9;
        font-size: 0.9rem;
    }

    input[type="email"],
    input[type="password"] {
        background: #0f0f0f;
        border: 1px solid rgba(212, 175, 55, 0.3);
        color: #e5e5e5;
        border-radius: 10px;
        padding: 12px 14px;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    input:focus {
        border-color: #d4af37;
        box-shadow: 0 0 14px rgba(212, 175, 55, 0.25);
    }

    .form-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 0 16px;
    }

    .checkbox {
        color: #9b9b9b;
        font-size: 0.9rem;
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .link {
        color: #d4af37;
        text-decoration: none;
        font-weight: 600;
    }

    .link:hover {
        text-decoration: underline;
        text-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
    }

    .primary-btn {
        width: 100%;
        padding: 14px;
        border-radius: 50px;
        border: 2px solid #d4af37;
        background: linear-gradient(135deg, #d4af37 0%, #b8982d 100%);
        color: #0a0a0a;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        letter-spacing: 1px;
    }

    .primary-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        background: linear-gradient(135deg, #f0c75e 0%, #d4af37 100%);
    }

    .alt-link {
        margin-top: 14px;
        text-align: center;
        color: #9b9b9b;
    }

    @media (max-width: 480px) {
        .auth {
            padding: 20px 16px;
        }

        .auth-card {
            padding: 24px 20px;
        }

        .card-header {
            margin-bottom: 20px;
            padding-bottom: 16px;
        }

        .card-header h1 {
            font-size: 1.2rem;
        }
    }
</style>