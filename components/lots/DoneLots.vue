<template>
  <div>
    <FilterComponent class="b-mb b-mt" />
    <div class="s-mb">
      <ListLots :lots="doneLots" :done-lot="true" />
    </div>
  </div>
</template>

<script>
import FilterComponent from '@/components/main/in/FilterComponent'
import ListLots from '@/components/lots/ListLots'

export default {
  name: 'AccessLots',
  components: {
    FilterComponent,
    ListLots
  },
  provide () {
    return {
      doneLot: true
    }
  },
  data () {
    return {
      doneLots:
        [
          {
            id: 124,
            numberLot: '00835',
            title: ' Перевозка автомобилей',
            from: 'Нижний Новгород, Окская Гавань, 12',
            arrival: 'Барнаул',
            shipmentDate: '26.05.2022 12:00',
            unloadingDate: '27.05.2022 18:00',
            task: 'Перевезти 10 автомобилей Haval',
            dateStart: '18.04.2022',
            dateEnd: '18.04.2022',
            statusLabel: 'in-transit'
          },
          {
            id: 125,
            numberLot: '00836',
            title: ' Перевозка автомобилей',
            from: 'Нижний Новгород, Окская Гавань, 12',
            arrival: 'Барнаул',
            shipmentDate: '26.05.2022 12:00',
            unloadingDate: '27.05.2022 18:00',
            task: 'Перевезти 10 автомобилей Haval',
            dateStart: '18.04.2022',
            dateEnd: '18.04.2022',
            statusLabel: 'accept'
          },
          {
            id: 126,
            numberLot: '00837',
            title: ' Перевозка автомобилей',
            from: 'Нижний Новгород, Окская Гавань, 12',
            arrival: 'Барнаул',
            shipmentDate: '26.05.2022 12:00',
            unloadingDate: '27.05.2022 18:00',
            task: 'Перевезти 10 автомобилей Haval',
            dateStart: '18.04.2022',
            dateEnd: '18.04.2022',
            statusLabel: 'register'
          }
        ]
    }
  }
}
</script>

<style scoped>

</style>
