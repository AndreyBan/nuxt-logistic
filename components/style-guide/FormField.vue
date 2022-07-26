<template>
  <div class="form-field">
    <input
      v-if="!typeTextarea"
      ref="inputField"
      v-model="$v.value.$model"
      v-mask="mask"
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
const checkNumber = value => !/([/\d])+/g.test(value)

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
        if (!this.$v.value.required) {
          this.errorText = 'Заполните поле'
        } else if (this.validateLanguage) {
          if (this.validateLanguage.toLocaleLowerCase() === 'cyrillic' && !this.$v.value.checkCyrillic) {
            this.errorText = 'Используйте русские буквы'
          }
          if (this.validateLanguage.toLocaleLowerCase() === 'latin' && !this.$v.value.checkLatin) {
            this.errorText = 'Используйте английские буквы'
          }
        }
      } else {
        this.errorText = 'Заполните поле'
      }
      this.$emit('get-value', this.value)
    }
  },
  validations () {
    if (this.required) {
      if (this.validateLanguage) {
        if (this.validateLanguage.toLocaleLowerCase() === 'cyrillic') {
          return {
            value: {
              required,
              checkCyrillic
            }
          }
        } else {
          return {
            value: {
              required,
              checkLatin
            }
          }
        }
      }
    } else if (this.validateLanguage) {
      if (this.validateLanguage.toLocaleLowerCase() === 'cyrillic') {
        return {
          value: {
            checkCyrillic
          }
        }
      } else {
        return {
          value: {
            checkLatin
          }
        }
      }
    } else {
      return {
        value: {
          maxLength: maxLength(1000)
        }
      }
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
