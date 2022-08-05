<template>
  <a
    href="#"
    rel="nofollow"
    class="header-login"
    :class="{'header-login--auth': isLogin}"
    @click.prevent="openModal"
  >
    <span v-if="isLogin" class="header-login__name-organization">ООО Test</span>
    <div class="header-login__icon" @click="openTooltip">
      <ShowSvg :id="isLogin ? 'icon-profile' : 'login-user'" />
    </div>
    <span v-if="!isLogin" class="header-login__link">Войти</span>
    <div v-show="showTooltip" class="header-login__tooltip">
      <NuxtLink to="#">Настройка профиля</NuxtLink>
      <div class="logout" @click="logout">Выход</div>
    </div>
  </a>
</template>

<script>
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'LoginHeader',
  components: {
    ShowSvg
  },
  props: {
    modalShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ['modal-open'],
  data () {
    return {
      showTooltip: false
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.login.login
    }
  },
  methods: {
    logout () {
      setTimeout(() => {
        this.closeTooltip()
        this.$store.commit('login/setLogin', false)
      })
    },
    overClick (e) {
      if (this.showTooltip && e.target.className !== 'header-login__icon') {
        if (!['header-login__tooltip', 'logout'].includes(e.target.className)) {
          this.removeEventClose()
          this.closeTooltip()
        }
      }
    },
    removeEventClose () {
      document.removeEventListener('click', this.overClick)
      if (matchMedia('(max-width:1024px)').matches) {
        window.removeEventListener('touchstart', this.overClick)
      }
    },
    closeTooltip () {
      this.showTooltip = false
    },
    openTooltip () {
      if (this.isLogin && !this.showTooltip) {
        this.showTooltip = true
        document.addEventListener('click', this.overClick)
        if (matchMedia('(max-width:1024px)').matches) {
          window.addEventListener('touchstart', this.overClick)
        }
      } else if (this.showTooltip) {
        this.closeTooltip()
        this.removeEventClose()
      }
    },
    openModal () {
      if (!this.isLogin && !this.showTooltip) {
        this.$emit('modal-open', true)
      }
    }
  }
}
</script>

<style scoped lang="scss">

.header-login__link {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}
.logout {
  color: scotch-color('primary');
  text-decoration: underline;
  margin-top: 16px;
}
.header-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: #000000;

  &__name-organization {
    margin: 0 14px 0 24px;
    text-decoration: underline;
  }

  &--auth {
    flex-direction: row;
  }
  &__tooltip {
    position: absolute;
    background-color: #FFF;
    padding: 32px ;
    border-radius: 29px;
    width: 217px;
    box-shadow: 0 0 23px rgba(0, 0, 0, 0.14);
    margin-top: 72px;
    top: 0;
    transform: translateX(24%);
    z-index: 1;
    opacity: 1;
    transition-duration: .3s;
    text-align: center;
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
  }
}

.login-user {
  width: 17px;
  height: 21px;
}

.icon-profile {
  width: 48px;
  height: 48px;
  pointer-events: none;
}
@media screen and (max-width: 1420px) and (min-width: 1024px) {
  .header-login__tooltip {
    transform: translateX(-5%);
    &:after {
      left: 66%;
    }
  }
}
@media screen and (max-width: 991px) {
  .header-login.menu-header-login {
    .header-login__name-organization {
      margin: 0 24px 0 0;
      pointer-events: none;
      order: 1;
    }
  }
}
</style>
