<template>
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-black dark:text-white text-black px-4 py-8">
    <div class="w-full max-w-md space-y-6 border border-gray-300 rounded-lg p-6">
      <h1 class="text-2xl font-semibold">Two-Factor Authentication</h1>
      <p class="text-gray-600 text-sm">
        We sent a 6-digit code to your email: <strong>{{ auth.email }}</strong>
      </p>

      <!-- 2FA Code Input -->
      <BaseInput v-model="code" id="code" label="Enter 2FA Code" />
      <p v-if="codeError" class="text-red-500 text-sm mt-1">{{ codeError }}</p>

      <!-- Verify Button -->
      <BaseButton variant="primary" class="w-full" :disabled="loading" @click="handleVerify">
        {{ loading ? 'Verifying...' : 'Verify' }}
      </BaseButton>

      <!-- Resend Code -->
      <p class="text-xs text-gray-500 text-center">
        Didn’t receive a code?
        <button class="text-blue-600 underline ml-1" @click="resendCode">Resend</button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
import { useAuthStore } from '../stores/authStore'

const auth = useAuthStore()
const router = useRouter()

const code = ref('')
const codeError = ref('')
const loading = ref(false)

const handleVerify = async () => {
  if (loading.value) return
  loading.value = true

  const enteredCode = code.value.trim()
  codeError.value = ''

  if (!enteredCode) {
    codeError.value = 'Code is required'
    loading.value = false
    return
  }

  if (!/^\d{6}$/.test(enteredCode)) {
    codeError.value = 'Code must be 6 digits'
    loading.value = false
    return
  }

  // Simulate verification delay
  await new Promise((r) => setTimeout(r, 500))

  if (enteredCode === '123456') {
    auth.setCode(enteredCode)
    alert('2FA Verified ✅')
    router.push('/home')
  } else {
    codeError.value = 'Invalid code. Try again.'
  }

  loading.value = false
}

const resendCode = () => {
  alert(`Code resent to ${auth.email}`)
}
</script>
