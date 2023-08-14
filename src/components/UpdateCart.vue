<template>
  <div class="flex justify-between items-center p-2 mt-4 gap-10">
    <button
      class="text-red-500 text-2xl font-bold w-10 h-10 flex items-center justify-center pb-1 rounded-full shadow"
      @click="decreaseCart(item)"
    >
      -
    </button>
    <span class="text-lg font-semibold">{{ item.quantity }}</span>
    <button
      class="text-green-500 text-2xl font-bold w-10 h-10 flex items-center justify-center pb-1 rounded-full shadow"
      @click="increaseCart(item)"
    >
      +
    </button>
  </div>
</template>
<script setup>
const { item } = defineProps(["item"]);
import { useCartStore } from "@/store/cart";
const { increaseCart, decreaseCart } = useCartStore();
</script>
