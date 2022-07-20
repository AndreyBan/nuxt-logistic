<template>
  <div class="form-checkbox">
    <input :id="id" type="checkbox">
    <label :for="id">{{ label }}</label>
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
    }
  }
}
</script>

<style scoped lang="scss">
@import "/assets/scss/variables";

.form-checkbox {
  input {
    display: none;

     &+ label:after {
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
    position: relative;
    padding-left: 32px;
    cursor: pointer;

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

</style>
