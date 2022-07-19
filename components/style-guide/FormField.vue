<template>
  <div class="form-field">
    <input
      v-if="!typeTextarea"
      v-model="value"
      v-bind="$attrs"
      autocomplete="off"
      pattern="([А-Яа-яЁё]+)"
      :class="{'valid': checkEmpty}"
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-else
      v-model="value"
      v-bind="$attrs"
      autocomplete="off"
      :class="{'valid': checkEmpty}"
      @input="$emit('input', $event.target.value)"
    />
    <label for="name">{{ labelText }}</label>
    <span class="error-text">{{ fieldError }}</span>
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
    }
  },
  data () {
    return {
      labelText: this.fieldLabel,
      value: this.fieldValue
    }
  },
  computed: {
    checkEmpty () {
      return !!this.value
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
