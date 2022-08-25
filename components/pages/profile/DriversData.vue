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
  },
  computed: {
    sortData () {
      const data = this.driverCards
      const actual = []
      const noActual = []
      for (const i in data) {
        if (data[i].actual) {
          actual.push({ id: i, ...data[i] })
        } else {
          noActual.push({ id: i, ...data[i] })
        }
      }
      return [...actual, ...noActual]
    }
  }
}
</script>

<style scoped lang="scss">
.drivers {
  line-height: 150%;
}
</style>
