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
            <LoginLink :modal-show="modalShow" @modal-open="modalShow = true" />
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <MenuComponent :modal-show="modalShow" @modal-open="modalShow = true" />
      </div>
    </header>
    <AppModalWindow v-if="modalShow" @close-modal="modalShow = false">
      <AuthComponent />
    </AppModalWindow>
  </div>
</template>

<script>
import MenuComponent from '@/components/main/MenuComponent'
import LoginLink from '@/components/main/LoginLink'
import AppModalWindow from '@/components/main/AppModalWindow'
import AuthComponent from '@/components/popups/AuthComponent'

export default {
  name: 'HeaderComponent',
  components: {
    LoginLink,
    MenuComponent,
    AppModalWindow,
    AuthComponent
  },
  data () {
    return {
      modalShow: false
    }
  },
  beforeCreate () {
    this.$store.dispatch('login/isLogin')
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
}

.header-top-grid {
  display: flex;
  justify-content: space-between;
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
  .header-logo__text,
  .header-top .header-login {
    display: none;
  }

}
</style>
