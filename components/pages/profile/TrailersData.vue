<template>
  <div>
    <AddButton :class="{'disabled': newCard}" @click="newCard = true">
      Добавить прицеп
    </AddButton>
    <section class="tractors b-mt">
      <TrailerCard v-if="newCard" @cancel="newCard = false" />
      <TrailerCard
        v-for="(el, i) in sortData(trailers)"
        :key="i"
        :tractor-data="el"
      />
    </section>
  </div>
</template>

<script>
import { mixinSortActual } from '@/mixins/DataMixins'
import AddButton from '@/components/style-guide/AddButton'
import TrailerCard from '@/components/pages/profile/in/TrailerCard'

export default {
  name: 'DriversData',
  components: {
    AddButton,
    TrailerCard
  },
  mixins: [mixinSortActual],
  inject: ['trailers'],
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
  @include media('xl') {
    grid-template: auto / 1fr;
  }
}
.disabled {
  opacity: .5;
  pointer-events: none;
}
</style>
