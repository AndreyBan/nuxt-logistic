<template>
  <a href="#" rel="nofollow" class="header-login" @click.prevent="$emit('modal-open', true)">
    <div class="header-login__icon">
      <ShowSvg id="login-user" />
    </div>
    <span class="header-login__link">
      Войти
    </span>
  </a>
</template>

<script>
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'LoginLink',
  components: {
    ShowSvg
  },
  props: {
    modalShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

.header-login__link {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.header-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
}

.login-user {
  width: 17px;
  height: 21px;
}
</style>
