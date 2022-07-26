<template>
  <div class="form-field">
    <input
      v-model="field"
      v-mask="maskTemplate"
      type="text"
      inputmode="numeric"
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
  methods: {
    getFieldValue () {
      this.$v.field.$touch()
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
