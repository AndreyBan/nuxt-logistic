<template>
  <div class="btn btn-add" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AddButton'
}
</script>

<style scoped lang="scss">
.btn-add {
  display: inline-flex;
  font-family: 'Open-sans', sans-serif;
  max-width: 217px;
  background-color: transparent;
  border: 1px solid #CCCCCC;
  padding-right: 50px;
  cursor: pointer;
  font-weight: 600;

  &:before {
    content: '';
    position: absolute;
    right: 25px;
    margin-top: 1px;
    background: url("/img/svg/add-icon.svg") 0 0 no-repeat;
    width: 16px;
    height: 16px;
    background-size: 16px;
  }
}

</style>
