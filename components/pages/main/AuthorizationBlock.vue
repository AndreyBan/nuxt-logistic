<template>
  <section class="auth-block s-mb">
    <div class="container">
      <h1>Логистический портал ГК АГАТ</h1>
      <p class="auth-block__subtitle b-mt b-mb">
        Добро пожаловать на специализированную площадку Транспортной компании “АГАТ-Логистик”
      </p>
      <a href="#" class="btn btn--primary btn--w-auto e-big-mr">Войти</a>
      <NuxtLink to="/registration/" class="btn btn--secondary btn--w-auto">
        Зарегистрироваться
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AuthorizationBlock'
}
</script>

<style scoped lang="scss">
.auth-block {
  padding: 56px 0 90px;
  background-color: #FBFBFB;
  background-image: url("/img/backgrounds/bg-auth.jpg");
  background-repeat: no-repeat;
  background-position: 68% 0;

  &__subtitle {
    max-width: 500px;
  }
}
@media screen and (max-width: 1024px){
  .auth-block {
    background-position: 80% 100%;
    background-size: 350px;
  }
}
@media screen and (max-width: 991px){
  .auth-block {
    background-position: 100% 100%;
    background-size: 300px;
  }
}
@media screen and (max-width: 767px){
  .auth-block {
    padding: 32px 0;
    background-image: none;
  }
  .btn.btn--primary{
    margin-bottom: 24px;
  }
}
</style>
