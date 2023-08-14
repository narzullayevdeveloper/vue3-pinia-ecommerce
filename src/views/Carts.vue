<template>
  <div class="w-full max-w-7xl h-full">
    <div class="flex justify-between items-center m-20">
      <div class="flex flex-col gap-10">
        <Cart v-for="item in carts" :key="item.id" :item="item" />
      </div>
      <div>
        <Payment />
      </div>
    </div>
  </div>
</template>
<script setup>
import Cart from "../components/Cart.vue";
import Payment from "@/components/Payment.vue";
import { useCartStore } from "@/store/cart";
const { carts } = useCartStore();
</script>
