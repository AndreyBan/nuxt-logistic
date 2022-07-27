<template>
  <div class="form-checkbox">
    <input :id="id" v-model="checkValue" type="checkbox" :checked="!!checked" @change="$emit('get-value', {[id]: {checked: checkValue, value: label}})">
    <label :for="id">{{ label }}</label>
    <a v-if="link.name" :href="link.url"> {{ link.name }}</a>
    <div v-if="required && !checkValue && checkStateSubmit" class="error-text">
      Поставьте галочку
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxComponent',
  props: {
    id: {
      type: String,
      default: 'check-1'
    },
    label: {
      type: String,
      default: 'check'
    },
    name: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    link: {
      type: Object,
      default () {
        return {
          name: '',
          url: '#'
        }
      }
    },
    checked: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checkValue: !!this.checked,
      submitEvnt: false
    }
  },
  computed: {
    checkError () {
      return this.$store.state['registration-form'].checkError
    },
    checkStateSubmit () {
      if (this.$store.state['registration-form'].checkError) {
        this.setStateSubmit()
      }
      return this.submitEvnt
    }
  },
  watch: {
    checkError () {
      if (this.required && !this.checkValue) {
        this.$store.commit('registration-form/setError', true)
      }
    }
  },
  methods: {
    setStateSubmit () {
      this.submitEvnt = true
    }
  }
}
</script>

<style scoped lang="scss">
.form-checkbox {
  position: relative;
  .error-text {
    display: block;
    position: relative;
    bottom: 0;
    margin-top: 8px;
    left: 30px;
    font-size: 12px;
  }
  input {
    display: none;

    & + label:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 3px;
      width: 12px;
      height: 9px;
      background: url("/img/svg/check.svg") 50% 50% no-repeat;
      background-size: 12px;
      opacity: 0;
    }

    &:checked + label:after {
      opacity: 1;
    }

    &:checked + label:before {
      background-color: scotch-color('primary');
      border: 1px solid scotch-color('primary');
    }

    &.no-check + label:before {
      border: 1px solid red;
    }
  }

  label {
    display: inline-block;
    position: relative;
    padding-left: 32px;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      margin-top: -3px;
      width: 20px;
      height: 20px;
      border: 1px solid #C4C4C4;
      border-radius: 4px;
    }

    &:hover:before {
      border: 1px solid scotch-color('primary');
    }
  }
}

.form-checkbox.bg-dark {
  label {
    color: scotch-color('white');
  }
}

.form-checkbox a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
