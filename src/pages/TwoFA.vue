<template>
    <div class="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div class="w-full max-w-md space-y-6 border border-gray-300 rounded-lg p-6">
        <h1 class="text-2xl font-semibold">Two-Factor Authentication</h1>
        <p class="text-gray-600 text-sm">
          We sent a 6-digit code to your email: <strong>{{ email }}</strong>
        </p>
  
        <BaseInput v-model="code" id="code" label="Enter 2FA Code" />
  
        <BaseButton variant="primary" @click="handleVerify">Verify</BaseButton>
  
        <p class="text-xs text-gray-500 text-center">
          Didn’t receive a code?
          <button class="text-blue-600 underline ml-1" @click="resendCode">
            Resend
          </button>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  import BaseInput from '../components/BaseInput.vue'
  import BaseButton from '../components/BaseButton.vue'
  
  const router = useRouter()
  const route = useRoute()
  
  const email = (route.query.email as string) || ''
  const code = ref('')
  
  // Simulate verification
  const handleVerify = () => {
    if (code.value === '123456') {
      alert('2FA Verified ✅')
      router.push('/dashboard') // or any success page
    } else {
      alert('Invalid code ❌')
    }
  }
  
  const resendCode = () => {
    alert(`Code resent to ${email}`)
  }
  </script>
  