<template>
  <svg :class="iconClass ? iconClass : id">
    <use xmlns="http://www.w3.org/2000/svg" :xlink:href="`/img/svg/map.svg#${id}`" />
  </svg>
</template>

<script>
export default {
  name: 'ShowSvg',
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
