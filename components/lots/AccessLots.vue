<template>
  <div>
    <FilterComponent class="b-mb" />
    <div class="s-mb">
      <ListLots :lots="accessLots" />
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
  data () {
    return {
      accessLots:
        [
          {
            id: 123,
            numberLot: '00834',
            title: ' Перевозка автомобилей',
            from: 'Нижний Новгород, Окская Гавань, 12',
            arrival: 'Барнаул',
            shipmentDate: '26.05.2022 12:00',
            unloadingDate: '27.05.2022 18:00',
            task: 'Перевезти 10 автомобилей Haval',
            dateStart: '18.04.2022',
            dateEnd: '18.04.2022',
            statusLabel: 'wait'
          },
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
            statusLabel: ''
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
            statusLabel: 'wait'
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
            statusLabel: ''
          }
        ]
    }
  }
}
</script>

<style scoped>

</style>
