<template>
  <div class="dark:bg-black">
    <Navbar /> 
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

