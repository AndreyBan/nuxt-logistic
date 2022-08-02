export const state = () => ({
  login: false
})

export const actions = {
  isLogin (ctx) {
    if (localStorage.isLogin) {
      ctx.commit('setLogin', true)
    }
  }
}

export const mutations = {
  setLogin (state, data) {
    if (data) {
      // TODO: Test
      localStorage.setItem('isLogin', '1')
    }
    state.login = data
  }
}

export const getters = {
  getLogin (state) {
    return state.login
  }
}
