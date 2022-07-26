<template>
  <div class="form-field">
    <input
      v-model="phone"
      v-mask="'+7(###) ###-##-##'"
      placeholder="+7(___) ___-__-__"
      inputmode="numeric"
      type="text"
      autocomplete="off"
      :class="{'valid': !!phone, 'error': $v.field.$error}"
      @change="getFieldValue"
      @focus="startPhone"
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
      default: 12
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
          return this.label + ' должен состоять из ' + this.minLength + ' цифр'
        }
      }
      return 'Заполните поле'
    }
  },
  methods: {
    getFieldValue () {
      this.field = '+' + this.phone.replaceAll(/[()-/\s]+/g, '')
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
      }
    }
  },
  validations () {
    if (this.required) {
      return {
        field: {
          required,
          minLength: minLength(this.minLength)
        }
      }
    } else {
      return {
        field: {
          minLength: minLength(this.minLength)
        }
      }
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
