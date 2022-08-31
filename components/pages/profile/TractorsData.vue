<template>
  <div>
    <AddButton :class="{'disabled': newCard}" @click="newCard = true">
      Добавить тягач
    </AddButton>
    <section class="tractors b-mt">
      <TractorCard v-if="newCard" @cancel="newCard = false" />
      <TractorCard
        v-for="(el, i) in sortData(tractors)"
        :key="i"
        :tractor-data="el"
      />
    </section>
  </div>
</template>

<script>
import { mixinSortActual } from '~/mixins/DataMixins'
import AddButton from '@/components/style-guide/AddButton'
import TractorCard from '@/components/pages/profile/in/TractorCard'

export default {
  name: 'DriversData',
  components: {
    AddButton,
    TractorCard
  },
  mixins: [mixinSortActual],
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
  @include media('xl') {
    grid-template: auto / 1fr;
  }
}
.disabled {
  opacity: .5;
  pointer-events: none;
}
</style>
