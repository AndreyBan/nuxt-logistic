<template>
  <div>
    <div class="s-mb">
      <LotComponent
        v-for="(el, i) in showLots"
        :key="i"
        :data-lot="el"
        :done-lot="doneLot"
      />
      <v-paginate
        v-if="Object.keys(lots).length > showCount * 2 && !showMore"
        :click-handler="clickCallback"
        :page-count="getCount"
        :page-range="3"
        :margin-pages="2"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      />
      <div v-if="showMore && lots.length > showCount" class="btn-wrap">
        <div class="btn btn--w-auto btn--primary" @click="showMoreAction">
          Показать еще
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LotComponent from '@/components/lots/LotComponent'

export default {
  name: 'ListLots',
  components: {
    LotComponent
  },
  props: {
    lots: {
      type: Array,
      default: () => []
    },
    doneLot: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
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
      for (const i in this.lots) {
        if (i >= start && i < end) {
          this.showLots.push(this.lots[i])
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

<style scoped>
.btn-wrap {
  text-align: center;
}
</style>
