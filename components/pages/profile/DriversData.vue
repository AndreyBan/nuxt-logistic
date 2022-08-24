<template>
  <div>
    <AddButton @click="newCard = true">
      Добавить водителя
    </AddButton>
    <section class="drivers">
      <div class="drivers-wrap b-mt">
        <DriverCard v-if="newCard" />
        <DriverCard
          v-for="(el, i) in driverCards"
          :key="i"
          :driver-card="el"
        />
      </div>
    </section>
  </div>
</template>

<script>
import AddButton from '@/components/style-guide/AddButton'
import DriverCard from '@/components/pages/profile/in/DriverCard'
export default {
  name: 'DriversData',
  components: {
    AddButton,
    DriverCard
  },
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
