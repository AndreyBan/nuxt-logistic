<template>
  <div class="form-field">
    <input
      v-bind="$attrs"
      autocomplete="off"
      :value="value"
      :class="{'valid': !!value, 'error': error}"
      @input="$emit('input', $event.target.value)"
    >
    <label>{{ label }} <span v-if="required">*</span></label>
    <span class="error-text">{{ error }}</span>
    <ShowSvg v-if="!!iconId" :id="iconId" class="icon-field" />
  </div>
</template>

<script>
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'SimpleInput',
  components: {
    ShowSvg
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    required: {
      type: String,
      default: undefined
    },
    error: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: ''
    },
    iconId: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
$colorBorder: #CCCCCC;
$colorBorderHover: #878787;
$colorError: #F90F0F;
$borderRadius: 25px;

.icon-field {
  position: absolute;
  width: 18px;
  height: 18px;
  right: 20px;
  top: 11px;
}

.form-field {
  position: relative;
  font-size: 1em;
  padding-bottom: 16px;
  margin-bottom: 16px;

  label {
    position: absolute;
    left: 16px;
    top: 12px;
    pointer-events: none;
    transition-duration: .2s;
  }
  input, select {
    border-radius: $borderRadius;
  }
  input {
    border: 1px solid $colorBorder;
    padding: 12px 16px;
    width: 100%;
    outline: none;

    &:hover {
      border: 1px solid $colorBorderHover;
    }
    &::placeholder{
      opacity: 0;
    }
    &:active, &:focus, &.valid{
      &::placeholder{
        opacity: 1;
      }
      & + label {
        font-size: .875em;
        margin-top: -30px;
        color: #CCCCCC;
      }
    }

    &:invalid,
    &.error{
      border: 1px solid $colorError;

      & + label + .error-text{
        display: block;
      }
    }
  }
}
</style>
