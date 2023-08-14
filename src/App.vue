<template>
  <div class="w-full h-full">
    <div class="flex flex-col justify-center items-center">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
<style></style>

