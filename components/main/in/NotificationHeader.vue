<template>
  <NuxtLink to="/" class="bell-wrap">
    <ShowSvg id="bell" />
    <!-- TODO: Закодить количество уведомлений -->
    <span class="bell-count">22</span>
    <!-- TODO: Закодить вывод тултипа -->
    <div v-if="showTooltip" class="bell-tooltip" :class="{'bell-tooltip-hide': eventHide}">
      <ShowSvg id="bell" class="bell-tooltip__icon" />
      <div content="bell-tooltip__content">
        <span class="bell-tooltip__date">16.05.2022 13:14</span>
        <p class="bell-tooltip__text e-big-mt">
          Уважаемые представители компании ООО «Крылатый Автовоз»! Для лота <b>№ 00834</b> был выбран другой перевозчик.
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'NotificationHeader',
  components: {
    ShowSvg
  },
  data () {
    return {
      showTooltip: true,
      eventHide: false
    }
  },
  mounted () {
    this.visibilityTooltip()
  },
  methods: {
    overClick (e) {
      if (!e.target.closest('.bell-wrap')) {
        document.removeEventListener('click', this.overClick)
        this.closeNotify()
      }
    },
    visibilityTooltip () {
      document.addEventListener('click', this.overClick)
      setTimeout(() => this.closeNotify(), 10000)
    },
    closeNotify () {
      this.eventHide = true
      setTimeout(() => {
        this.showTooltip = false
      }, 400)
    }
  }
}
</script>

<style scoped lang="scss">
.bell {
  width: 18px;
  height: 23px;

  &-wrap {
    display: block;
    position: relative;
    cursor: pointer;

    &:hover {
      color: #000000;
    }
  }

  &-count {
    position: absolute;
    top: -8px;
    right: -10px;
    color: scotch-color('primary');
    font-weight: 600;
    background-color: scotch-color('light');
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }

  &-tooltip {
    position: absolute;
    transform: translateX(calc(-50% + 9px));
    background-color: #FFF;
    padding: 43px 32px 32px;
    border-radius: 29px;
    width: 359px;
    box-shadow: 0 0 23px rgba(0, 0, 0, 0.14);
    margin-top: 24px;
    z-index: 1;
    opacity: 1;
    transition-duration: .3s;

    &-hide {
      opacity: 0;
    }

    &:after {
      content: '';
      position: absolute;
      top: -14px;
      left: calc(50% - 28px);
      display: block;
      width: 56px;
      height: 26px;
      background: url("/img/svg/tooltip-triangle.svg") 0 0 no-repeat;
      background-size: 56px;
    }

    &__icon {
      position: absolute;
      right: 32px;
      top: 43px;
    }

    &__text {
      max-width: 270px;
    }

    &__date {
      color: #878787;
    }
  }
}

@media screen and (max-width: 991px) {
  .bell {
    &-tooltip {
      transform: translateX(calc(-80%));
      z-index: 0;

      &:after {
        left: 75%;
      }
    }

    &-wrap {
      margin-top: 2px;
    }
  }
}

@media screen and (max-width: 767px) {
  .bell {
    &-wrap {
      margin-top: 8px;
      margin-right: 24px;
    }

    &-tooltip {
      transform: translateX(calc(-60%));
      padding: 24px;
      width: 300px;

      &:after {
        left: 54%;
      }
    }
  }
}
</style>
