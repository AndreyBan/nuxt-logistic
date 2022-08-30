<template>
  <div class="container">
    <div class="s-mt b-mb">
      <TabsComponent :content-data="tabs">
        <template #content-0>
          <AccessLots />
        </template>
      </TabsComponent>
    </div>
  </div>
</template>

<script>
import TabsComponent from '@/components/style-guide/TabsComponent'
import AccessLots from '@/components/lots/AccessLots'

export default {
  name: 'ListLots',
  components: {
    TabsComponent,
    AccessLots
  },
  data () {
    return {
      tabs: [
        'Доступные заказы',
        'Заказы в работе',
        'Завершенные заказы'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tab-lots {
  list-style: none;

  li {
    display: inline-block;
    font-size: 16px;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}
</style>
