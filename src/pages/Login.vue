
<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
      <div class="w-full max-w-md space-y-6 border border-gray-300 rounded-lg p-6">
        <h1 class="text-2xl font-semibold">Sign in to Coinbase</h1>
  
        <BaseInput v-model="email" id="email" label="Email" type="email" />
  
        <BaseButton variant="primary" @click="handleContinue">Continue</BaseButton>
  
        <div class="flex items-center gap-4">
          <hr class="flex-1 border-gray-300" />
          <span class="text-sm text-gray-500">OR</span>
          <hr class="flex-1 border-gray-300" />
        </div>
  
        <div class="space-y-3">
          <BaseButton variant="outline">
            <FontAwesomeIcon :icon="['fas', 'key']" class="w-5 h-5 ml-4" />
          Sign in with Passkey
          </BaseButton>
          <BaseButton variant="outline">
            <font-awesome-icon :icon="['fab', 'google']" class="w-5 h-5 ml-4 " />
            Sign in with Google
          </BaseButton>
          <BaseButton variant="outline">
            <FontAwesomeIcon :icon="['fab', 'apple']" class="w-5 h-5 ml-4" />
            Sign in with Apple
          </BaseButton>
          <BaseButton variant="outline">
            <FontAwesomeIcon :icon="['fas', 'wallet']" class="w-5 h-5 ml-4" />
            Sign in with Wallet
          </BaseButton>
        </div>
  
        <p class="text-xs mx-auto text-center text-gray-500 mt-4 w-[256px]">
          Not your device?
          <a href="#" class="underline">Use a private window.</a>
          See our <a href="#" class="underline">Privacy Policy</a> for more info.
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  import BaseButton from '../components/BaseButton.vue'
  import BaseInput from '../components/BaseInput.vue'

  
  const email = ref('')
  const router = useRouter()
  
  const handleContinue = () => {
      console.log(email.value)
    if (!email.value) return alert('Please enter an email.')
    router.push({ name: 'PasswordLogin', query: { email: email.value } })
  }
  </script>
  