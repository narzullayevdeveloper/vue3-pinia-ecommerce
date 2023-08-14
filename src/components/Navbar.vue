<template>
  <nav class="w-full h-full bg-green-500">
    <div class="max-w-7xl h-16 flex justify-around items-center">
      <router-link to="/">
        <h1 class="text-white text-2xl font-bold tracking-wider">Ecommerce</h1>
      </router-link>
      <ul class="flex gap-5">
        <li class="text-white cursor-pointer font-semibold">Home</li>
        <li class="text-white cursor-pointer font-semibold">About</li>
        <li class="text-white cursor-pointer font-semibold">Contact</li>
      </ul>
      <router-link to="/carts">
        <div class="cursor-pointer relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
          >
            <path
              d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"
            ></path>
          </svg>
          <span
            v-if="totalQuantity > 0"
            class="w-4 h-4 rounded-full text-xs flex justify-center items-center bg-white text-green-500 absolute top-1 -right-1"
            >{{ totalQuantity > 0 && totalQuantity }}</span
          >
        </div>
      </router-link>
    </div>
  </nav>
</template>
<script setup>
import { useCartStore } from "@/store/cart";

const { totalQuantity } = useCartStore();
</script>
<style></style>
