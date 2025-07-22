<template>
  <div class="dark:bg-black">
    <Navbar /> 
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

