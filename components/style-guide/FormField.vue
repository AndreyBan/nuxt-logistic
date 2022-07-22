<template>
  <div class="form-field">
    <input
      v-if="!typeTextarea && !typePhone"
      v-model="value"
      v-bind="$attrs"
      autocomplete="off"
      pattern="([А-Яа-яЁё]+)"
      @blur="getError"
      :class="{'valid': checkEmpty, 'error': eventBlur}"
      @input="$emit('input', $event.target.value)"
    >
    <input
      v-else-if="typePhone"
      v-mask="{mask: '+7(999) 999-99-99', showMaskOnHover: false}"
      inputmode="numeric"
    >
    <textarea
      v-else
      v-model="value"
      v-bind="$attrs"
      autocomplete="off"
      :class="{'valid': checkEmpty}"
      @input="$emit('input', $event.target.value)"
    />
    <label>{{ fieldLabel }} <span v-if="fieldRequire">*</span></label>
    <span class="error-text">{{ errorText }}</span>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  inheritAttrs: false,
  props: {
    fieldLabel: {
      type: String,
      required: true,
      default: 'Label'
    },
    fieldError: {
      type: String,
      default: 'Ошибочка вышла'
    },
    fieldValue: {
      type: String,
      default: ''
    },
    typeTextarea: {
      type: Boolean,
      default: false
    },
    typePhone: {
      type: Boolean,
      default: false
    },
    fieldRequire: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: this.fieldValue,
      eventBlur: false,
      errorText: this.fieldError
    }
  },
  computed: {
    checkEmpty () {
      return !!this.value
    }
  },
  methods: {
    getError () {
      this.eventBlur = !this.checkEmpty && this.fieldRequire
      this.errorText = !this.checkEmpty && this.fieldRequire ? 'Заполните поле' : 'Некорректный формат'
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
