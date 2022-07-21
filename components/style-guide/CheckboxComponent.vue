<template>
  <div class="form-checkbox">
    <input :id="id" type="checkbox" :checked="!!checked">
    <label :for="id">{{ label }}</label>
    <a v-if="!!link" :href="link.url"> {{ link.name }}</a>
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
  }
}
</script>

<style scoped lang="scss">

.form-checkbox {
  input {
    display: none;

    & + label:after {
      content: '';
      position: absolute;
      left: 5px;
      //margin-top: 3px;
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
