<template>
  <div class="flex flex-col gap-1">
    <label :for="id" class="text-sm font-medium dark:text-white text-gray-700">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      v-bind="$attrs"
      class="px-4 py-3 border border-gray-300 text-black dark:text-white rounded-md focus:outline-none focus:border-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  label: string
  modelValue: string
}>()

defineEmits(['update:modelValue'])
</script>
