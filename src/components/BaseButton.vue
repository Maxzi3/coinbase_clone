<template>
    <button
      class="w-full flex items-center justify-center gap-2 p-4 rounded-full font-medium transition duration-200"
      :class="[
        variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' :
        variant === 'outline' ? 'border border-gray-300 dark:bg-gray-800 bg-gray-200 dark:text-white text-black hover:bg-gray-300 dark:hover:bg-gray-600  flex justify-start gap-14 md:gap-20' : '',
      ]"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    variant?: 'primary' | 'outline'
  }>()
  </script>
  