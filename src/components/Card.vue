<template>
  <div
    class="w-80 h-96 shadow hover:shadow-xl transition-shadow rounded-xl cursor-pointer"
    v-for="item in products"
    :key="item.id"
  >
    <img
      :src="item.imgUrl"
      class="w-96 h-3/5 object-cover rounded-t-xl"
      alt="products"
    />
    <div class="m-5">
      <h2 class="text-2xl font-semibold">{{ item.title }}</h2>
      <p>{{ item.price }} so'm</p>
      <button
        class="w-full h-10 rounded bg-green-500 mt-4 text-white"
        @click="addToCart(item)"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>
<script setup>
const { products } = defineProps(["products"]);
import { useCartStore } from "@/store/cart";
const { addToCart } = useCartStore();
</script>
<style></style>
