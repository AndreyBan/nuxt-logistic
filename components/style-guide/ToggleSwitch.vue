<template>
  <div class="form-toggle-switch">
    <input
      type="checkbox"
      :checked="checked"
    >
    <label @click="changeCheckbox">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Toggle switch'
    }
  },
  data () {
    return {
      checked: this.value
    }
  },
  methods: {
    changeCheckbox () {
      this.checked = !this.checked
      this.$emit('input', this.checked)
    }
  }
}
</script>

<style scoped lang="scss">

.form-toggle-switch {
  input {
    display: none;

    &:checked + label {
      &:before {
        border: 1px solid #C4C4C4;
        background-color: scotch-color('primary');
      }

      &:after {
        left: 22px;
        background-color: scotch-color('white');
      }

      &:hover:after {
        background-color: scotch-color('white');
      }
    }
  }

  label {
    position: relative;
    padding-left: 56px;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      margin-top: -3px;
      width: 44px;
      height: 24px;
      border-radius: 100px;
      border: 1px solid #C4C4C4;
      transition-duration: .2s;
    }

    &:after {
      content: '';
      position: absolute;
      left: 2px;
      margin-top: -1px;
      width: 22px;
      height: 22px;
      background-color: #CCCCCC;
      border-radius: 50%;
      transition-timing-function: ease-in;
      transition-duration: .2s;
    }

    &:hover:after {
      background-color: scotch-color('primary');
    }
  }
}

.form-toggle-switch.bg-dark {

  input:checked {
    & + label {
      &:after{
        background-color: scotch-color('white');
      }
      &:before {
        border: 1px solid scotch-color('primary');
      }
    }
  }

  label {
    color: scotch-color('white');

    &:before {
      border: 1px solid scotch-color('white');
    }

    &:after {
      background-color: scotch-color('white');
    }

    &:hover:after {
      background-color: scotch-color('primary');
    }
  }
}

</style>
