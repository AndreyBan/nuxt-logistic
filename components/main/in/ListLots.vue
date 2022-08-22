<template>
  <div class="container">
    <div class="s-mt b-mb">
      <TabsComponent :content-data="tabs">
        <template #content-0>
          <FilterComponent class="b-mb" />
          <!--    Access orders-->
          <div class="s-mb">
            <LotComponent v-for="i in showLots" :key="i" :num="i" />
            <v-paginate
              v-if="lots > showCount * 2 && !showMore"
              :click-handler="clickCallback"
              :page-count="getCount"
              :page-range="3"
              :margin-pages="2"
              :prev-text="'<'"
              :next-text="'>'"
              :container-class="'pagination'"
              :page-class="'page-item'"
            />
            <div v-if="showMore" class="btn-wrap">
              <div class="btn btn--w-auto btn--primary" @click="showMoreAction">
                Показать еще
              </div>
            </div>
          </div>
        </template>
      </TabsComponent>
    </div>
  </div>
</template>

<script>
import FilterComponent from '@/components/main/in/FilterComponent'
import LotComponent from '@/components/main/in/LotComponent'
import TabsComponent from '@/components/style-guide/TabsComponent'

export default {
  name: 'ListLots',
  components: {
    FilterComponent,
    LotComponent,
    TabsComponent
  },
  data () {
    return {
      tabs: [
        'Доступные заказы',
        'Заказы в работе',
        'Завершенные заказы'
      ],
      lots: 24,
      showLots: [],
      showMore: true,
      showCount: 3
    }
  },
  computed: {
    getCount () {
      return Math.ceil(this.lots / this.showCount)
    }
  },
  mounted () {
    this.getShowLots()
  },
  methods: {
    showMoreAction () {
      this.showMore = false
      this.showCount = this.showCount * 2
      this.getShowLots()
    },
    getShowLots (start = 0, end = this.showCount) {
      this.showLots = []
      for (let i = 0; i < this.lots; i++) {
        if (i >= start && i < end) {
          this.showLots.push(i)
        }
      }
    },
    clickCallback (pageNum) {
      let start = 0
      const end = this.showCount * pageNum

      if (pageNum > 1) {
        start = this.showCount * (pageNum - 1)
      }
      this.getShowLots(start, end)
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

.btn-wrap {
  text-align: center;
}
</style>
