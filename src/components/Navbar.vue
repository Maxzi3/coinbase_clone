<template>
    <header class="w-full flex items-center justify-between px-6 py-4 sticky top-0 bg-white dark:bg-black">
      <div class="flex items-center space-x-2">
        <router-link to="/">
        <img :src ='Logo' alt="Coinbase Logo" class="w-15 h-15" />
    </router-link>
      </div>
      <button class="text-blue-700 font-bold px-4 py-2 rounded transition">
        Sign Up
      </button>
    </header>
  </template>
  
  <script setup lang="ts">
  import Logo from '../assets/coinbase_image-removebg-preview.png'
  </script>
  
 
  