import { store } from '@pina/store'

store.addModule('products', {
  state: () => ({
    list: []
  }),
  mutations: {
    setProducts (state, products) {
      state.list = products
    },
    updateProduct (state, {index, product}) {
      state.list[index] = product
    }
  },
  actions: {
    fetchProducts ({commit}) {
      // your code to fetch products
    },
    updateProduct ({commit}, {index, product}) {
      commit('updateProduct', {index, product})
    }
  }
})
