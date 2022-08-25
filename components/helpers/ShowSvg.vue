<template>
  <svg :class="iconClass ? iconClass : id" @click="$emit('click')">
    <use xmlns="http://www.w3.org/2000/svg" :xlink:href="`/img/svg/map.svg#${getId}`" />
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
  },
  computed: {
    getId () {
      return this.id
    }
  }
}
</script>

<style scoped>

</style>
