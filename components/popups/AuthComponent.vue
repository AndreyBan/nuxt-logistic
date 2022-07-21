<template>
  <div class="popup-auth">
    <h3>Вход или регистрация</h3>
    <div class="popup-auth-buttons">
      <div class="e-big-mt e-big-mb">
        <a href="#" class="btn btn--primary">Войти</a>
      </div>
      <div>
        <NuxtLink to="/registration/" class="btn btn--secondary">
          Зарегистрироваться
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthComponent'
}
</script>

<style scoped lang="scss">
.popup-auth {
  text-align: center; padding: 36px 100px;
  &-buttons {
    margin: 0 auto;
    width: 100%;
    max-width: 189px;
  }
}

</style>
