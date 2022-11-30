import axios from 'axios'

export const catalogModule = {
  state: () => ({
    catalog: [],
    pages: 0,
    currentPage: 1,
    isProductsLoading: true
  }),
  getters: {
    getCatalog (state) {
      return state.catalog
    },
    getCurrentPage (state) {
      return state.currentPage
    },
    getPages (state) {
      return state.pages
    },
    getIsProductsLoading (state) {
      return state.isProductsLoading
    }
  },
  mutations: {
    setCatalog (state, newValue) {
      state.catalog = [...newValue]
    },
    setPages (state, newValue) {
      state.pages = newValue
    },
    incrementCurrentPage (state) {
      state.currentPage++
    },
    decrementCurrentPage (state) {
      state.currentPage--
    },
    setIsProductsLoading (state, bool) {
      state.isProductsLoading = bool
    }
  },
  actions: {
    async fetchProducts ({ state, commit }) {
      try {
        const response = await axios.get('https://jurapro.bhuser.ru/api-samohod/products')
        const limit = 6
        commit('setCatalog', response.data.content)
        commit('setPages', Math.ceil(response.data.content.length / limit))
        commit('setIsProductsLoading', false)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
