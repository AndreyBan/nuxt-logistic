<template>
  <div class="popup-auth">
    <h3>Вход или регистрация</h3>
    <div class="popup-auth-buttons">
      <div class="e-big-mt e-big-mb">
        <NuxtLink to="/authorization/" class="btn btn--primary">
          Войти
        </NuxtLink>
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
  text-align: center;
  padding: 36px 100px;

  &-buttons {
    margin: 0 auto;
    width: 100%;
    max-width: 189px;
  }
}

@media screen and (max-width: 767px) {
  .popup-auth {
    padding: 36px 48px 32px;
    h3 {
      font-size: 16px;
    }
  }

}
</style>
