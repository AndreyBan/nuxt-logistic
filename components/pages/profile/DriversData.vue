<template>
  <div>
    <AddButton @click="newCard = true">
      Добавить водителя
    </AddButton>
    <section class="drivers">
      <div class="drivers-wrap b-mt">
        <DriverCard v-if="newCard" />
        <DriverCard
          v-for="(el, i) in sortData"
          :key="i"
          :driver-card="el"
        />
      </div>
    </section>
  </div>
</template>

<script>

import { mixinSortActual } from '~/mixins/DataMixins'
import AddButton from '@/components/style-guide/AddButton'
import DriverCard from '@/components/pages/profile/in/DriverCard'
export default {
  name: 'DriversData',
  components: {
    AddButton,
    DriverCard
  },
  mixins: [
    mixinSortActual
  ],
  inject: ['driverCards'],
  data () {
    return {
      newCard: false
    }
  }
}
</script>

<style scoped lang="scss">
.drivers {
  line-height: 150%;
}
</style>
