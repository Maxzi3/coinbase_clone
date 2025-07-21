<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
        <div class="w-full max-w-md space-y-10 border border-gray-300 rounded-lg p-6">

            <h1 class="text-2xl font-semibold">Sign in to Coinbase</h1>
            <div class="relative w-full">
                <!-- Avatar Icon -->
                <font-awesome-icon
      icon="user"
      class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4"
    />



                <!-- Email Input -->
                <input :value="email" type="text" disabled
                    class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-700 cursor-not-allowed" />
            </div>

            <!-- Password input with toggle -->
            <label class="text-sm font-medium text-black">Password</label>
            <div class="relative">
                <input :type="show ? 'text' : 'password'" v-model="password"
                    class="w-full px-4 py-3 my-2 border border-gray-300 rounded-md" />
                <span class="absolute right-3 top-5 text-gray-500 cursor-pointer" @click="toggleVisibility">
                    <FontAwesomeIcon :icon="show ? 'eye-slash' : 'eye'" />
                </span>
                <!-- Forgot password -->
                <div class="flex items-center justify-between">
                    <a href="#" class="text-sm text-blue-600 hover:underline">Forgot your password?</a>
                </div>
            </div>


            <BaseButton variant="primary" class="w-full" @click="handleLogin">
                Continue
            </BaseButton>

        </div>
        <!-- Cancel Sign In -->
        <p class="text-[16px] text-center py-4 text-blue-700 cursor-pointer" @click="handleCancel">
            Cancel signing in
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'

const route = useRoute()
const router = useRouter()

const email = route.query.email as string || ''
const password = ref('')
const show = ref(false)

const toggleVisibility = () => {
    show.value = !show.value
}

const handleLogin = () => {
    if (!password.value) {
        alert('Enter password.')
        return
    }

    router.push({ path: '/2fa', query: { email } })
}
const handleCancel = () => {
    router.push({ path: '/login' })
}
</script>