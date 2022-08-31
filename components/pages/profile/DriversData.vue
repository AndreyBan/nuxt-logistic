<template>
  <div>
    <AddButton :class="{'disabled': newCard}" @click="newCard = true">
      Добавить водителя
    </AddButton>
    <section class="drivers">
      <div class="drivers-wrap b-mt">
        <DriverCard v-if="newCard" @cancel="newCard = false" />
        <DriverCard
          v-for="(el, i) in sortData(driverCards)"
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
.disabled {
  opacity: .5;
  pointer-events: none;
}
</style>
