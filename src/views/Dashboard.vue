<script>
import Edit from './Edit.vue'
export default {
  components: {
    Edit
  },

  data( ) {
    return {
      items: [
      
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: 'Apple Macbook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
      ]
    }
  }

}

  
</script>

<template>
  <div class="relative shadow-md h-full">
    <table class="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Color</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          v-for="(item, i) in items"
          :key="i"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.name }}
          </th>
          <td class="px-6 py-4">{{ item.color }}</td>
          <td class="px-6 py-4">{{ item.category }}</td>
          <td class="px-6 py-4">{{ item.price }}</td>
          <td class="px-6 py-4">
            <router-link
              :to="{name: 'Edit'}"
              @click="openEdit(product)"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <Edit v-if="editing" :product="editingProduct" @save-product="saveProduct" />
  </div>
</template>

<!-- <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Microsoft Surface Pro
    </th>
    <td class="px-6 py-4">White</td>
    <td class="px-6 py-4">Laptop PC</td>
    <td class="px-6 py-4">$1999</td>
    <td class="px-6 py-4">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Edit</a
      >
    </td>
  </tr>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Magic Mouse 2
    </th>
    <td class="px-6 py-4">Black</td>
    <td class="px-6 py-4">Accessories</td>
    <td class="px-6 py-4">$99</td>
    <td class="px-6 py-4">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Edit</a
      >
    </td>
  </tr>
  <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Google Pixel Phone
    </th>
    <td class="px-6 py-4">Gray</td>
    <td class="px-6 py-4">Phone</td>
    <td class="px-6 py-4">$799</td>
    <td class="px-6 py-4">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Edit</a
      >
    </td>
  </tr>
  <tr>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Apple Watch 5
    </th>
    <td class="px-6 py-4">Red</td>
    <td class="px-6 py-4">Wearables</td>
    <td class="px-6 py-4">$999</td>
    <td class="px-6 py-4">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Edit</a
      >
    </td>
  </tr>
  <tr>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Apple Watch 5
    </th>
    <td class="px-6 py-4">Red</td>
    <td class="px-6 py-4">Wearables</td>
    <td class="px-6 py-4">$999</td>
    <td class="px-6 py-4">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Edit</a
      >
    </td>
  </tr>
  <tr>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Apple Watch 5
    </th>
    <td class="px-6 py-4">Red</td>
    <td class="px-6 py-4">Wearables</td>
    <td class="px-6 py-4">$999</td>
    <td class="px-6 py-4">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Edit</a
      >
    </td>
  </tr> -->
