<template>
    <div class="auth">
        <div class="auth-card">
            <div class="card-header">
                <h1>建立新帳戶</h1>
                <p>加入我們，開始你的智慧投資</p>
            </div>
            <form @submit.prevent="onSubmit">
                <div class="grid">
                    <div class="input-group">
                        <label for="name">姓名</label>
                        <input id="name" v-model="name" type="text" placeholder="王小明" required />
                    </div>
                    <div class="input-group">
                        <label for="email">電子郵件</label>
                        <input id="email" v-model="email" type="email" placeholder="you@example.com" required />
                    </div>
                </div>

                <div class="grid">
                    <div class="input-group">
                        <label for="password">密碼</label>
                        <input id="password" v-model="password" type="password" placeholder="至少 8 碼" required />
                    </div>
                    <div class="input-group">
                        <label for="confirm">確認密碼</label>
                        <input id="confirm" v-model="confirm" type="password" placeholder="再次輸入密碼" required />
                    </div>
                </div>

                <p v-if="error" class="error">{{ error }}</p>

                <label class="checkbox">
                    <input type="checkbox" v-model="agree" required /> 我已閱讀並同意
                    <a href="#" class="link">服務條款</a> 與
                    <a href="#" class="link">隱私政策</a>
                </label>

                <button class="primary-btn" type="submit" :disabled="!agree">建立帳戶</button>
            </form>
            <p class="alt-link">
                已經有帳戶了？
                <router-link to="/login" class="link">前往登入</router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const confirm = ref('')
    const agree = ref(false)
    const error = ref('')

    const onSubmit = () => {
        error.value = ''
        if (password.value.length < 8) {
            error.value = '密碼至少需 8 碼'
            return
        }
        if (password.value !== confirm.value) {
            error.value = '兩次輸入的密碼不一致'
            return
        }
        // TODO: 呼叫後端註冊 API
        console.log('register', { name: name.value, email: email.value })
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
            radial-gradient(700px 420px at 85% -10%, rgba(212, 175, 55, 0.10), transparent 42%),
            radial-gradient(420px 320px at -10% 35%, rgba(212, 175, 55, 0.06), transparent 48%),
            #0a0a0a;
    }

    .auth-card {
        width: 100%;
        max-width: 640px;
        background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
        border: 2px solid rgba(212, 175, 55, 0.3);
        border-radius: 16px;
        padding: 32px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 80px rgba(212, 175, 55, 0.08);
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

    .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        color: #a9a9a9;
        font-size: 0.9rem;
    }

    input[type="text"],
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

    .checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #9b9b9b;
        margin: 14px 0;
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

    .error {
        color: #f87171;
        margin: 6px 0 2px;
        font-size: 0.95rem;
        font-weight: 600;
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
        transition: transform 0.1s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        box-shadow: 0 0 14px rgba(212, 175, 55, 0.3);
    }

    .primary-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 24px rgba(212, 175, 55, 0.45);
    }

    .primary-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .alt-link {
        margin-top: 14px;
        text-align: center;
        color: #9b9b9b;
    }

    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
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