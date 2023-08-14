<template>
  <div
    class="w-[700px] h-60 rounded-xl shadow flex flex-row items-center gap-10 relative"
  >
    <div class="flex flex-row items-center">
      <img
        :src="item.imgUrl"
        alt="cartImg"
        class="w-60 h-60 object-cover rounded-s-xl"
      />
      <h1 class="text-2xl font-bold ml-3">{{ item.title }}</h1>
    </div>
    <p>{{ item.price * item.quantity }} so'm</p>
    <UpdateCart :item="item" />
    <button
      class="px-5 py-2 font-semibold text-white bg-red-500 rounded absolute bottom-4 right-4 z-20"
      @click="removeFromCart(item)"
    >
      Remove
    </button>
  </div>
</template>
<script setup>
import UpdateCart from "./UpdateCart.vue";
const { item } = defineProps(["item"]);
import { useCartStore } from "../store/cart";
const { removeFromCart } = useCartStore();
</script>
