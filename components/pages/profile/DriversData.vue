<template>
  <div>
    <AddButton @click="addCard">
      Добавить водителя
    </AddButton>
    <section class="drivers">
      <div class="drivers-wrap b-mt">
        <DriverCard v-show="newCard" />
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
  },
  methods: {
    addCard () {
      this.newCard = true
    }
  }
}
</script>

<style scoped lang="scss">
.drivers {
  line-height: 150%;
}
</style>
