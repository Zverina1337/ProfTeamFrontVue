export const userModule = {
  store: () => ({
    user: {
      username: '',
      isAuth: false
    }
  }),
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    setUserIsAuth (state, bool) {
      state.user.isAuth = bool
    },
    setUserName (state, newValue) {
      state.user.username = newValue
    }
  },
  actions: {

  }
}
