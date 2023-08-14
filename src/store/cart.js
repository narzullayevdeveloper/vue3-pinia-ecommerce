import { defineStore } from "pinia";

export const useCartStore = defineStore("carts", {
  state: () => ({
    carts: [],
  }),
  getters: {
    totalPrice() {
      return this.carts.reduce(
        (total, cart) => total + cart.price * cart.quantity,
        0
      );
    },
    totalQuantity() {
      return this.carts.reduce((total, item) => total + item.quantity, 0);
    },
  },
  actions: {
    addToCart(item) {
      const existingItem = this.carts.find((i) => i.id === item.id);
      if (!existingItem) {
        this.carts.push({ ...item, id: item.id, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },
    increaseCart(item) {
      const itemIndex = this.carts.find((i) => i.id === item.id);
      if (itemIndex) {
        itemIndex.quantity++;
      }
    },
    decreaseCart(item) {
      const itemIndex = this.carts.find((i) => i.id === item.id);
      if (itemIndex && itemIndex.quantity > 1) {
        itemIndex.quantity--;
      } else {
        this.carts = this.carts.filter((i) => i.id !== itemIndex.id);
      }
    },
    removeFromCart(item) {
      this.carts = this.carts.filter((product) => product.id !== item.id);
    },
  },
});
