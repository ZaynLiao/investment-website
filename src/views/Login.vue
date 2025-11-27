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
        background:
            radial-gradient(600px 400px at 80% -10%, rgba(212, 175, 55, 0.10), transparent 40%),
            radial-gradient(400px 300px at -10% 30%, rgba(212, 175, 55, 0.06), transparent 45%),
            #0a0a0a;
    }

    .auth-card {
        width: 100%;
        max-width: 480px;
        background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
        border: 2px solid rgba(212, 175, 55, 0.3);
        border-radius: 16px;
        padding: 32px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7),
            0 0 80px rgba(212, 175, 55, 0.08);
    }

    .card-header {
        text-align: center;
        margin-bottom: 28px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    }

    .card-header h1 {
        font-size: 1.4rem;
        color: #d4af37;
        font-weight: 700;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        margin-bottom: 8px;
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
        padding: 12px 16px;
        border-radius: 10px;
        border: 1px solid #d4af37;
        background: linear-gradient(135deg, #d4af37 0%, #aa8c2c 100%);
        color: #0a0a0a;
        font-weight: 800;
        cursor: pointer;
        transition: transform 0.1s ease, box-shadow 0.2s ease;
        box-shadow: 0 0 14px rgba(212, 175, 55, 0.3);
    }

    .primary-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 24px rgba(212, 175, 55, 0.45);
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