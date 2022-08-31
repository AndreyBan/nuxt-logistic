<template>
  <div class="form-field">
    <input
      v-model="field"
      v-mask="maskTemplate"
      type="text"
      v-bind="$attrs"
      inputmode="numeric"
      autocomplete="off"
      :placeholder="placeholder"
      :class="{'valid': !!field, 'error': $v.field.$error}"
      @change="$v.field.$touch()"
      @blur="$v.field.$touch()"
    >
    <label>{{ label }} <span v-if="$v.field.required !== undefined">*</span></label>
    <span class="error-text">{{ errorText }}</span>
    <ShowSvg v-if="!!iconId" :id="iconId" class="icon-field" />
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import { mixinCheckError } from '@/mixins/FieldMixins'
import ShowSvg from '@/components/helpers/ShowSvg'
export default {
  name: 'InnField',
  components: {
    ShowSvg
  },
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
    placeholder: {
      type: String,
      default: ''
    },
    maskTemplate: {
      type: String,
      default: '##########'
    },
    iconId: {
      type: String,
      default: ''
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
.icon-field {
  position: absolute;
  width: 18px;
  height: 18px;
  right: 20px;
  top: 11px;
}
@media screen and (max-width: 767px) {
  .form-field {
    margin-bottom: 14px;
    padding-bottom: 14px;
  }
}
</style>
