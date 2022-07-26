<template>
  <div class="container">
    <div class="menu-header-wrap">
      <input
        id="menu-burger"
        ref="menu-burger"
        type="checkbox"
        @click="openMenu"
      >
      <label for="menu-burger" class="mobile-menu-burger">
        <span class="mobile-menu-burger__line" />
      </label>
      <div class="menu-header">
        <LoginHeader
          :modal-show="modalShow"
          class="menu-header-login"
          @close-tooltip="closeMenu"
          @modal-open="openPopup"
        />
        <nav>
          <ul role="menu">
            <li v-for="(el, i) in menuLinks" :key="i">
              <nuxt-link :to="el.link" :class="{'disabled': el.disabled}" @click="closeMenu">
                {{ el.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinIsLogin } from '@/mixins/LoginMixins'
import LoginHeader from '@/components/main/in/LoginHeader'

export default {
  name: 'MenuHeader',
  components: {
    LoginHeader
  },
  mixins: [
    mixinIsLogin
  ],
  props: {
    modalShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menuLinks () {
      return {
        0: {
          text: 'Доступные заказы',
          link: '/access-order/',
          disabled: !this.isLogin
        },
        1: {
          text: 'Заказы в работе',
          link: '/done-order/',
          disabled: !this.isLogin
        },
        2: {
          text: 'Завершённые заказы',
          link: '#',
          disabled: !this.isLogin
        },
        3: {
          text: 'Условия и положения',
          link: '#',
          disabled: false
        }
      }
    }
  },
  methods: {
    openPopup () {
      if (this.$refs['menu-burger'].checked) {
        this.closeMenu()
      }
      this.$emit('modal-open')
    },
    openMenu () {
      if (matchMedia('(max-width:1024px)').matches) {
        if (this.$refs['menu-burger'].checked) {
          window.addEventListener('touchstart', this.overClick)
        }
      }
    },
    closeMenu () {
      this.$refs['menu-burger'].checked = false
    },
    overClick (e) {
      if (this.$refs['menu-burger'].checked) {
        if (!e.target.closest('.menu-header-wrap')) {
          this.removeEventClose()
          this.closeMenu()
        }
      }
    },
    removeEventClose () {
      window.removeEventListener('touchstart', this.overClick)
    }
  }
}
</script>
<style>
@media screen and (max-width: 991px) {
  .menu-header .header-login__icon {
    margin-right: 14px;
  }
}
</style>
<style scoped lang="scss">
.disabled {
  opacity: .5;
  pointer-events: none;
}

.menu-header .header-login {
  display: none;
}

.menu-header ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;

  a {
    color: #444;
    text-decoration: none;
    transition-duration: .2s;
    font-family: 'Montserrat', sans-serif;

    &.nuxt-link-active {
      color: scotch-color('primary');
    }

    &:hover {
      color: scotch-color('primary');
    }
  }
}

#menu-burger {
  display: none;
}

@media screen and (max-width: 991px) {
  .container {
    pointer-events: none;
  }
  .menu-header .header-login {
    display: inline-flex;
    flex-direction: row;
    margin-bottom: 46px;
  }
  .menu-header {
    background-color: #FFF;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    width: 100vw;
    margin-left: calc(0px - var(--padding-container));
    margin-right: calc(0px - var(--padding-container));
    padding: 34px var(--padding-container);
    transition-duration: .3s;
    opacity: 0;
    transform: translateY(-100%);

    ul {
      display: block;
    }

    li:not(:last-child) {
      margin-bottom: 18px;
    }
  }
  .mobile-menu-burger {
    margin-top: 34px;
    width: 30px;
    height: 30px;
    margin-bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    float: right;
    position: relative;
    pointer-events: auto;
    z-index: 1;

    &__line {
      height: 2px;
      margin-top: -1px;
      background-color: #000;
      width: 100%;
      position: relative;
      pointer-events: none;
      transition-duration: .3s;

      &:before, &:after {
        content: '';
        position: absolute;
        left: 0;
        height: 2px;
        background-color: #000;
        width: 100%;
        transition-duration: .3s;
      }

      &:before {
        top: -12px;
      }

      &:after {
        bottom: -12px;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #B2B2B2;
      transform: scale(0);
      transition-duration: .3s;
    }
  }
  #menu-burger:checked + .mobile-menu-burger {
    &:before {
      transform: scale(1);
    }
  }
  #menu-burger:checked + label .mobile-menu-burger {
    &__line {
      background-color: transparent;
      width: 65%;

      &:before {
        transform: translate(0, 12px) rotate(45deg);
        background-color: #FFF;
        border-radius: 0;
      }

      &:after {
        transform: translate(0, -12px) rotate(-45deg);
        background-color: #FFF;
        border-radius: 0;
      }
    }
  }
  #menu-burger:checked + label + .menu-header {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    z-index: 10;
  }
}

@media screen and (max-width: 767px) {
  .mobile-menu-burger {
    margin-top: 28px;
  }
}
</style>
