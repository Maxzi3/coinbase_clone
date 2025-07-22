<template>
    <header class="w-full flex items-center justify-between px-2 py-4  bg-white dark:bg-black">
      <div class="flex items-center space-x-2">
        <router-link to="/">
        <img :src ='Logo' alt="Coinbase Logo" class="w-10 h-10 lg:w-12 lg:h-12" />
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
  
 
  