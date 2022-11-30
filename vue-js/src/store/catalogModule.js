import axios from 'axios'

export const catalogModule = {
  state: () => ({
    catalog: [
      { id: 0, name: 'name0', description: 'description0', price: 1000 },
      { id: 1, name: 'name1', description: 'description1', price: 2000 },
      { id: 2, name: 'name2', description: 'description2', price: 3000 },
      { id: 3, name: 'name3', description: 'description3', price: 3000 }
    ]
  }),
  getters: {
    getCatalog (state) {
      return state.catalog
    }
  },
  mutations: {
    setCatalog (state, newValue) {
      state.catalog = [...newValue]
    }
  },
  actions: {
    async fetchProducts ({ state, commit }) {
      try {
        const response = await axios.get('https://jurapro.bhuser.ru/api-samohod/products')
        commit('setCatalog', response)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
