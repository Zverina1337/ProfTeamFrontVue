export const ordersModule = {
  store: () => ({
    orders: []
  }),
  getters: {
    getOrders (state) {
      return state.orders
    }
  },
  mutations: {
    setOrders (state, newValue) {
      state.orders = [...newValue]
    }
  },
  actions: {

  }
}
