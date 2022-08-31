<template>
  <div>
    <section class="c-tabs b-mb">
      <ul class="c-tabs-list">
        <li
          v-for="(i, key) in contentData"
          ref="myTabs"
          :key="key"
          :class="{'active': (onHash && ($route.hash === '#content-' + key || !$route.hash && !key) || !onHash && activeTab === key)}"
          @click="setActiveClass(key)"
        >
          <a v-if="onHash" :href="'#content-' + key" @click="setActiveClass(key)">{{ i }}</a>
          <a v-else :href="'#content-' + key" @click.prevent="setActiveClass(key)">{{ i }}</a>
        </li>
      </ul>
    </section>
    <slot name="static" />
    <section class="contents-wrap">
      <div
        v-for="(i, key) in contentData"
        v-show="(onHash && ($route.hash === '#content-' + key || !$route.hash && !key) || !onHash && activeTab === key)"
        :key="key"
        class="tab-content"
      >
        <slot :name="'content-' + key" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TabsComponent',
  props: {
    contentData: {
      type: Array,
      required: true,
      default: () => []
    },
    onHash: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    activeTab () {
      return this.activeIndex
    }
  },
  methods: {
    setActiveClass (key) {
      this.activeIndex = key
    }
  }
}
</script>

<style scoped lang="scss">
@use "/assets/scss/variables" as *;

.c-tabs-list {
  display: flex;
  overflow: auto;
  padding-bottom: 4px;
  list-style: none;
  font-size: 16px;
  font-weight: 600;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  a {
    text-decoration: none;
    white-space: nowrap;

    &:visited,
    &:active {
      color: inherit;
    }
  }

  li {
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding-bottom: 4px;

    &:not(:last-child) {
      margin-right: 28px;
    }

    &.active {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        bottom: -4px;
        height: 5px;
        width: 100%;
        background-color: scotch-color('primary');
        border-radius: 22px;
      }
    }
  }
}
</style>
