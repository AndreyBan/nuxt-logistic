<template>
  <div class="form-field">
    <input
      v-mask="{mask: '##########', showMaskOnHover: false}"
      type="text"
      autocomplete="off"
      :class="{'valid': !!field, 'error': $v.field.$error}"
      @change="getFieldValue"
      @blur="getFieldValue"
    >
    <label>{{ label }} <span v-if="$v.field.required !== undefined">*</span></label>
    <span class="error-text">{{ errorText }}</span>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'InnField',
  mixins: [validationMixin],
  data () {
    return {
      field: '',
      label: 'ИНН',
      errorText: 'Заполните поле'
    }
  },
  methods: {
    getFieldValue (e) {
      this.field = e.target.value.replaceAll('_', '')
      this.$v.field.$touch()
      if (this.$v.field.$error) {
        if (!this.$v.field.required) {
          this.errorText = 'Заполните поле'
        } else if (!this.$v.field.minLength) {
          this.errorText = this.label + ' должен состоять из 10 цифр'
        }
      }
    }
  },
  validations: {
    field: {
      required,
      minLength: minLength(10)
    }
  }
}
</script>

<style scoped>
.form-field {
  margin-bottom: 16px;
  padding-bottom: 16px;
}

@media screen and (max-width: 767px) {
  .form-field {
    margin-bottom: 14px;
    padding-bottom: 14px;
  }
}
</style>
