<template>
  <div class="flex items-center justify-center h-[100vh]">
    <form class="bg-white p-8 rounded-lg shadow-md">
      <label class="block text-gray-700 font-medium mb-2">
        Product Name:
        <input
          v-model="name"
          class="bg-gray-200 p-2 rounded-lg w-full"
          type="text"
        />
      </label>
      <label class="block text-gray-700 font-medium mb-2">
        Color:
        <input
          v-model="color"
          class="bg-gray-200 p-2 rounded-lg w-full"
          type="text"
        />
      </label>
      <label class="block text-gray-700 font-medium mb-2">
        Category:
        <input
          v-model="category"
          class="bg-gray-200 p-2 rounded-lg w-full"
          type="text"
        />
      </label>
      <label class="block text-gray-700 font-medium mb-2">
        Price:
        <input
          v-model="price"
          class="bg-gray-200 p-2 rounded-lg w-full"
          type="text"
        />
      </label>
      <button
        @click="saveProduct"
        class="bg-green-500 hover:bg-green-600 text-white py-2 mt-2  w-full px-4 rounded-lg"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      color: "",
      category: "",
      price: "",
    };
  },
  mounted() {
    this.name = this.product.name;
    this.color = this.product.color;
    this.category = this.product.category;
    this.price = this.product.price;
  },
  methods: {
    saveProduct() {
      this.$emit("save-product", {
        name: this.name,
        color: this.color,
        category: this.category,
        price: this.price,
      });
    },
  },
};
</script>
