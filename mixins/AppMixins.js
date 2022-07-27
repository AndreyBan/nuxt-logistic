export const mixinCheckError = {
  computed: {
    checkError () {
      return this.$store.state['registration-form'].checkError
    }
  },
  watch: {
    checkError () {
      this.$v.field.$touch()
      this.$store.commit('registration-form/setError', this.$v.field.$error)
    }
  }
}
