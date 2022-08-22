<template>
  <div class="form-field">
    <input
      v-if="!typeTextarea"
      ref="inputField"
      v-model="$v.field.$model"
      v-bind="$attrs"
      autocomplete="off"
      :class="{'valid': !!field, 'error': $v.field.$error}"
      @blur="getFieldValue"
      @input="getFieldValue"
    >
    <textarea
      v-else
      v-model="$v.field.$model"
      v-bind="$attrs"
      autocomplete="off"
      :class="{'valid': !!field, 'error': $v.field.$error}"
      @blur="getFieldValue"
      @input="getFieldValue"
    />
    <label>{{ fieldLabel }} <span v-if="required">*</span></label>
    <span class="error-text">{{ errorText }}</span>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import { mixinCheckError } from '@/mixins/FieldMixins'

const checkCyrillic = value => !/([A-z])+/g.test(value)
const checkLatin = value => !/([А-яёЁ])+/g.test(value)
const checkNumber = value => !/([0-9])+/g.test(value)

export default {
  name: 'FormField',
  mixins: [validationMixin, mixinCheckError],
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
      field: this.fieldValue,
      errorText: 'Заполните поле'
    }
  },
  methods: {
    getFieldValue () {
      this.$v.field.$touch()
      if (this.$v.field.$error) {
        if (this.required && !this.$v.field.required) {
          this.errorText = 'Заполните поле'
        }
        if (this.validateLanguage || this.validateNumber || this.checkEmail) {
          if (this.validateLanguage.toLocaleLowerCase() === 'cyrillic' && !this.$v.field.checkCyrillic) {
            this.errorText = 'Используйте русские буквы'
          }
          if (this.validateLanguage.toLocaleLowerCase() === 'latin' && !this.$v.field.checkLatin) {
            this.errorText = 'Используйте английские буквы'
          }
          if (this.validateNumber && !this.$v.field.checkNumber) {
            this.errorText = 'Использование цифр запрещено'
          }
        } else {
          this.errorText = 'Заполните поле'
        }
      }
      this.$emit('get-value', this.field)
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
    Object.assign(validate, { maxLength: maxLength(1000) })
    return {
      field: validate
    }
  }
}
</script>

<style scoped lang="scss">
.form-field {
  margin-bottom: 16px;
  padding-bottom: 16px;
  display: flex;
}
@media screen and (max-width: 767px) {
  .form-field {
    margin-bottom: 14px;
    padding-bottom: 14px;
  }
}
</style>
