import axios from "axios";

const { defineStore } = require("pinia");

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:4200/products");
        this.products = response.data;
      } catch (error) {
        console.log("Error fetching!", error);
      }
    },
  },
});
