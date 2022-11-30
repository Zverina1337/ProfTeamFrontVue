export const basketModule = {
  store: () => ({
    basket: []
  }),
  getters: {
    getBasket (state) {
      return state.basket
    }
  },
  mutations: {
    setBasket (state, newValue) {
      state.basket = [...newValue]
    }
  },
  actions: {

  }
}
