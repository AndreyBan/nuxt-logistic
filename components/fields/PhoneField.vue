<template>
  <div class="form-field">
    <input
      v-model="phone"
      v-mask="'+7(###) ###-##-##'"
      placeholder="+7(___) ___-__-__"
      inputmode="numeric"
      name="phone"
      type="text"
      autocomplete="off"
      :class="{'valid': !!phone, 'error': $v.field.$error}"
      @focus="startPhone"
      @blur="getFieldValue"
    >
    <label>{{ label }} <span v-if="$v.field.required !== undefined">*</span></label>
    <span class="error-text" :class="{'error-text-small': errorText !== 'Заполните поле'}">{{ errorText }}</span>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import { mixinCheckError } from '@/mixins/FieldMixins'

export default {
  name: 'InnField',
  mixins: [validationMixin, mixinCheckError],
  props: {
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Телефон'
    },
    minLength: {
      type: Number,
      default: 11
    }
  },
  data () {
    return {
      field: '',
      phone: ''
    }
  },
  computed: {
    errorText () {
      if (this.$v.field.$error) {
        if (this.$v.field.required && !this.$v.field.minLength) {
          return this.label + ' должен начинаться с +7 и состоять из ' + this.minLength + ' цифр'
        }
      }
      return 'Заполните поле'
    },
    unmaskValue () {
      return this.phone.replaceAll(/[()-/\s]+/g, '')
    }
  },
  methods: {
    getFieldValue () {
      this.field = this.unmaskValue
      this.$v.field.$touch()
      this.deleteStartPhone()
    },
    startPhone () {
      if (!this.phone) {
        this.phone = '+7'
      }
    },
    deleteStartPhone () {
      if (this.phone.length <= 3) {
        this.phone = ''
        this.field = ''
      }
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
.error-text-small {
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  .form-field {
    margin-bottom: 14px;
    padding-bottom: 14px;
  }
}
</style>
