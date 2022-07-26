<template>
  <div class="form-field">
    <input
      v-if="!typeTextarea"
      ref="inputField"
      v-model="$v.value.$model"
      v-bind="$attrs"
      autocomplete="off"
      :class="{'valid': !!value, 'error': $v.value.$error}"
      @input="getFieldValue"
    >
    <textarea
      v-else
      v-model="$v.value.$model"
      v-bind="$attrs"
      autocomplete="off"
      :class="{'valid': !!value, 'error': $v.value.$error}"
      @input="getFieldValue"
    />
    <label>{{ fieldLabel }} <span v-if="required">*</span></label>
    <span class="error-text">{{ errorText }}</span>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

const checkCyrillic = value => !/([A-z])+/g.test(value)
const checkLatin = value => !/([А-яёЁ])+/g.test(value)
const checkNumber = value => !/([0-9])+/g.test(value)

export default {
  name: 'FormField',
  mixins: [validationMixin],
  inheritAttrs: false,
  props: {
    fieldLabel: {
      type: String,
      required: true,
      default: 'Label'
    },
    fieldValue: {
      type: String,
      default: ''
    },
    typeTextarea: {
      type: Boolean,
      default: false
    },
    validateLanguage: {
      type: String,
      default: ''
    },
    validateNumber: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: this.fieldValue,
      errorText: 'Заполните поле'
    }
  },
  methods: {
    getFieldValue () {
      this.$v.value.$touch()
      if (this.$refs.inputField.validity.patternMismatch) {
        this.errorText = 'Неверный формат'
      } else if (this.$v.value.$error) {
        if (this.required && !this.$v.value.required) {
          this.errorText = 'Заполните поле'
        }
        if (this.validateLanguage || this.validateNumber) {
          if (this.validateLanguage.toLocaleLowerCase() === 'cyrillic' && !this.$v.value.checkCyrillic) {
            this.errorText = 'Используйте русские буквы'
          }
          if (this.validateLanguage.toLocaleLowerCase() === 'latin' && !this.$v.value.checkLatin) {
            this.errorText = 'Используйте английские буквы'
          }
          if (this.validateNumber && !this.$v.value.checkNumber) {
            this.errorText = 'Использование цифр запрещено'
          }
        } else {
          this.errorText = 'Заполните поле'
        }
      }
      this.$emit('get-value', this.value)
    }
  },
  validations () {
    const validate = {}
    if (this.required) {
      Object.assign(validate, { required })
    }
    if (this.validateLanguage.toLocaleLowerCase() === 'cyrillic') {
      Object.assign(validate, { checkCyrillic })
    } else if (this.validateLanguage.toLocaleLowerCase() === 'latin') {
      Object.assign(validate, { checkLatin })
    }
    if (this.validateNumber) {
      Object.assign(validate, { checkNumber })
    }
    Object.assign(validate, { maxLength: maxLength(10) })
    return {
      value: validate
    }
  }
}
</script>

<style scoped lang="scss">
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
