export const mixinCheckError = {
  data () {
    return {
      submitEvnt: false
    }
  },
  computed: {
    checkError () {
      return this.$store.state['registration-form'].checkError
    },
    /**
     * Проверяем был ли клик по кнопке отправки формы
     * @returns {boolean}
     */
    checkStateSubmit () {
      if (this.$store.state['registration-form'].checkError) {
        this.setStateSubmit()
      }
      return this.submitEvnt
    }
  },
  watch: {
    checkError () {
      this.$v.field.$touch()
      this.$store.commit('registration-form/setError', this.$v.field.$error)
    }
  },
  methods: {
    /**
     * Установка флага нажатия кнопки отправки формы
     */
    setStateSubmit () {
      this.submitEvnt = true
    }
  }
}
