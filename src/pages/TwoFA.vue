  <template>
    <div class="flex items-center justify-center bg-white dark:bg-black dark:text-white text-black py-8">
      <div class="w-full max-w-md space-y-6 md:border border-gray-300 rounded-lg p-6">
        <h1 class="text-2xl font-semibold">Two-Factor Authentication</h1>
        <p class="text-gray-600 text-sm">
          We sent a 6-digit code to your email: <strong>{{ auth.email }}</strong>
        </p>

        <!-- OTP Inputs -->
        <div class="flex justify-between gap-2" @paste.prevent="handlePaste">
     <input
  v-for="(_, index) in otpDigits"
  :key="index"
  type="text"
  maxlength="1"
  class="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  v-model="otpDigits[index]"
  @input="moveFocus(index, $event)"
  @keydown.backspace="handleBackspace(index)"
/>

        </div>

        <p v-if="otpError" class="text-red-500 text-sm mt-1">{{ otpError }}</p>

        <!-- Verify Button -->
        <BaseButton variant="primary" class="w-full" @click="handleVerify">
          <!-- {{ mutation.isPending ? 'Verifying...' : 'Verify' }} -->
            verify
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
  import { ref, nextTick } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/authStore'
  import { useSubmitAuth } from '../services/useSubmitAuth'
  import BaseButton from '../components/BaseButton.vue'

  const auth = useAuthStore()
  const router = useRouter()
  const mutation = useSubmitAuth()

  const otpDigits = ref(['', '', '', '', '', ''])
  const otpError = ref('')

  /* --- Handles focus when typing --- */
  const moveFocus = (index: number, event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.value && index < otpDigits.value.length - 1) {
      const nextInput = document.querySelectorAll<HTMLInputElement>('input')[index + 1]
      nextTick(() => nextInput.focus())
    }
  }

  /* --- Handles backspace navigation --- */
const handleBackspace = (index: number) => {
  if (!otpDigits.value[index] && index > 0) {
    const prevInput = document.querySelectorAll<HTMLInputElement>('input')[index - 1]
    nextTick(() => prevInput.focus())
  }
}


  /* --- Paste full OTP (e.g. "123456") --- */
  const handlePaste = (event: ClipboardEvent) => {
    const pasted = event.clipboardData?.getData('text') || ''
    if (/^\d{6}$/.test(pasted)) {
      otpDigits.value = pasted.split('')
      const lastInput = document.querySelectorAll<HTMLInputElement>('input')[5]
      nextTick(() => lastInput.focus())
    }
  }

  /* --- Verify and submit to backend --- */
  // const handleVerify = () => {
  //   const code = otpDigits.value.join('')
  //   otpError.value = ''

  //   if (!/^\d{6}$/.test(code)) {
  //     otpError.value = 'Code must be 6 digits'
  //     return
  //   }

  //   auth.setOtp(code)

  //   // ✅ Log the values you are about to send
  //   console.log("Sending:", auth.email, auth.password, code)
  // }

  const handleVerify = () => {
    const code = otpDigits.value.join('')
    otpError.value = ''

    if (!/^\d{6}$/.test(code)) {
      otpError.value = 'Code must be 6 digits'
      return
    }

    auth.setOtp(code)
  // console.log( auth.email,auth.password, auth.otp)
    mutation.mutate(
      { email: auth.email, password: auth.password, otp: auth.otp },
      {
        onSuccess: () => {
          alert('Auth successful!')
          router.push('/home')
        },
        onError: (err: any) => {
          otpError.value = err.response?.data?.error || 'Submission failed'
        }
      }
    )
  }

  const resendCode = () => {
    alert(`Code resent to ${auth.email}`)
  }
  </script>
