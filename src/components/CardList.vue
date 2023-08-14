<template>
  <div class="flex justify-center items-center">
    <div class="m-10 grid grid-cols-3 gap-20">
      <Card :products="productItems" />
    </div>
  </div>
</template>
<script setup>
import Card from "@/components/Card.vue";
import productItems from "@/data/items.json";
</script>
<style></style>
