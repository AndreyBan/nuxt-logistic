<template>
  <div class="b-mt">
    <TabsComponent :content-data="tabs">
      <template #static>
        <FilterDone class="b-mb b-mt" />
      </template>
      <template #content-0>
        <ListLots :lots="doneLots" :done-lot="true" />
      </template>
      <template #content-1>
        <ListLots :lots="getSortLotStatus('register')" :done-lot="true" />
      </template>
      <template #content-2>
        <ListLots :lots="getSortLotStatus('accept')" :done-lot="true" />
      </template>
      <template #content-3>
        <ListLots :lots="getSortLotStatus('in-transit')" :done-lot="true" />
      </template>
    </TabsComponent>
  </div>
</template>

<script>
import ListLots from '@/components/lots/ListLots'
import TabsComponent from '@/components/style-guide/TabsComponent'
import FilterDone from '@/components/lots/in/FilterDone'
export default {
  name: 'AccessLots',
  components: {
    FilterDone,
    ListLots,
    TabsComponent
  },
  provide () {
    return {
      doneLot: true
    }
  },
  data () {
    return {
      tabs: [
        'Все',
        'Регистрация на лот',
        'Подтвержден перевозчиком',
        'В пути'
      ],
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
          },
          {
            id: 127,
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
  },
  methods: {
    getSortLotStatus (str) {
      return this.doneLots.filter(el => el.statusLabel === str)
    }
  }
}
</script>

<style scoped>

</style>
