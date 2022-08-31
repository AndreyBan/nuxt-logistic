export const mixinIsLogin = {
  computed: {
    isLogin () {
      return this.$store.state.login.login
    }
  }
}
