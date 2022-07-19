<template>
  <section class="c-tabs">
    <ul class="c-tabs-list">
      <li
        v-for="(i, key) in contentData"
        ref="myTabs"
        :key="key"
        :class="{'active': (onHash && ($route.hash === '#content-' + key || !$route.hash && !key) || !onHash && !key)}"
        @click="setActiveClass"
      >
        <a v-if="onHash" :href="'#content-' + key">{{ i.name }}</a>
        <a v-else :href="'#content-' + key" @click.prevent>{{ i.name }}</a>
      </li>
    </ul>
    <div class="tabs-content b-mt">
      <template v-for="(i, key) in contentData">
        <div v-show="(onHash && ($route.hash === '#content-' + key || !$route.hash && !key) || !onHash && !key)" ref="contents" :key="key">
          {{ i.content }}
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TabsComponent',
  props: {
    contentData: {
      type: Array,
      required: true,
      default: Object
    },
    onHash: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * Получить таб с активным классом
     * @returns {number}
     */
    getActiveTab () {
      let index = 0
      this.$refs.myTabs.forEach((el, i) => {
        if (el.classList.contains('active')) {
          index = i
        }
      })
      return index
    },
    /**
     * Установить табу активный класс и отобразить соответствующий контент
     * @param e
     */
    setActiveClass (e) {
      let indexActive = this.getActiveTab()
      this.$refs.myTabs[indexActive].classList.remove('active')
      this.$refs.contents[indexActive].style.display = 'none'
      if (e.target.tagName === 'A') {
        e.target
          .closest('li')
          .classList
          .add('active')
      } else {
        e.target
          .classList
          .add('active')
      }
      indexActive = this.getActiveTab()
      this.$refs.contents[indexActive].style.display = 'block'
    }
  }
}
</script>

<style scoped lang="scss">
.c-tabs-list a {
  text-decoration: none;

  &:visited,
  &:active {
    color: inherit;
  }
}
</style>
