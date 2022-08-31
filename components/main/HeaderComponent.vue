<template>
  <div>
    <header class="main-header">
      <div class="header-top">
        <div class="container">
          <div class="header-top-grid">
            <nuxt-link to="/" class="header-logo">
              <img v-lazy-load data-src="/img/svg/logo.svg" alt="logo">
              <span class="header-logo__separate" />
              <span class="header-logo__text">Логистический<br>портал ГК АГАТ</span>
            </nuxt-link>
            <div class="header-top__right">
              <NotificationHeader v-if="isLogin" />
              <LoginHeader :modal-show="modalShow" locate="header" @modal-open="openModal" />
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <MenuHeader :modal-show="modalShow" @modal-open="openModal" />
      </div>
    </header>
    <AppModalWindow v-if="modalShow" @close-modal="modalShow = false">
      <AuthComponent />
    </AppModalWindow>
  </div>
</template>

<script>
import { mixinIsLogin } from '@/mixins/LoginMixins'
import MenuHeader from '@/components/main/in/MenuHeader'
import LoginHeader from '@/components/main/in/LoginHeader'
import AppModalWindow from '@/components/main/AppModalWindow'
import AuthComponent from '@/components/popups/AuthComponent'
import NotificationHeader from '@/components/main/in/NotificationHeader'

export default {
  name: 'HeaderComponent',
  components: {
    LoginHeader,
    MenuHeader,
    AppModalWindow,
    AuthComponent,
    NotificationHeader
  },
  mixins: [
    mixinIsLogin
  ],
  data () {
    return {
      modalShow: false
    }
  },
  beforeCreate () {
    this.$store.dispatch('login/isLogin')
  },
  methods: {
    openModal () {
      if (!this.isLogin) {
        this.modalShow = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
}

.header-top {
  padding: 28px 0;
  background-color: #FFF;
  &__right {
    display: flex;
    align-items: center;
  }
  &-grid {
    display: flex;
    justify-content: space-between;
  }
}
.header-bottom {
  background-color: #F9F9F9;
  padding: 18px 0;
}

.header-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: #000;
  }
}

.header-logo__separate {
  width: 1px;
  height: 37px;
  background-color: #000000;
  margin-left: 12px;
}

.header-logo__text {
  font-family: 'Montserrat', sans-serif;
  margin-left: 15px;
}

@media screen and (max-width: 991px) {
  .header-bottom {
    padding: 0;
    background-color: transparent;
    position: absolute;
    pointer-events: none;
    top: 0;
    right: 0;
    width: 100%;
  }
  .header-login {
    margin-right: 77px;
  }
}

@media screen and (max-width: 767px) {
  .header-logo__separate,
  .header-logo__text {
    display: none;
  }
  .header-logo img{
    width: 70px;
  }

  .header-top {
    padding: 25px 0;
  }
  .header-login {
    margin-right: 54px;
  }
}
</style>
