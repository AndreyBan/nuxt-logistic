<template>
  <div>
    <AddButton @click="newCard = true">
      Добавить тягач
    </AddButton>
    <section class="tractors b-mt">
      <TractorCard v-if="newCard" />
      <TractorCard
        v-for="(el, i) in tractors"
        :key="i"
        :tractor-data="el"
      />
    </section>
  </div>
</template>

<script>
import AddButton from '@/components/style-guide/AddButton'
import TractorCard from '@/components/pages/profile/in/TractorCard'

export default {
  name: 'DriversData',
  components: {
    AddButton,
    TractorCard
  },
  inject: ['tractors'],
  data () {
    return {
      newCard: false
    }
  }
}
</script>

<style scoped lang="scss">
.tractors {
  line-height: 150%;
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 24px;
}
</style>
