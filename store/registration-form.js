export const state = () => ({
  checkError: false,
  errors: false
})

export const mutations = {
  changeCheckError (state, data) {
    state.checkError = data
  },
  setError (state, data) {
    if (data) {
      state.errors = true
    }
  },
  resetErrors (state) {
    state.errors = false
  }
}
