<template>
  <div class="form-field">
    <input
      v-model="field"
      v-mask="maskTemplate"
      type="text"
      v-bind="$attrs"
      inputmode="numeric"
      autocomplete="off"
      :class="{'valid': !!field, 'error': $v.field.$error}"
      @change="$v.field.$touch()"
      @blur="$v.field.$touch()"
    >
    <label>{{ label }} <span v-if="$v.field.required !== undefined">*</span></label>
    <span class="error-text">{{ errorText }}</span>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import { mixinCheckError } from '@/mixins/FieldMixins'

export default {
  name: 'InnField',
  mixins: [validationMixin, mixinCheckError],
  inheritAttrs: false,
  props: {
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'ИНН'
    },
    maskTemplate: {
      type: String,
      default: '##########'
    },
    minLength: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      field: ''
    }
  },
  computed: {
    errorText () {
      if (this.$v.field.$error) {
        if (this.$v.field.required && !this.$v.field.minLength) {
          return this.label + ' должен состоять из ' + this.minLength + ' цифр'
        }
      }
      return 'Заполните поле'
    }
  },
  validations () {
    const validate = { minLength: minLength(this.minLength) }
    if (this.required) {
      Object.assign(validate, { required })
    }
    return {
      field: validate
    }
  }
}
</script>

<style scoped>
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
