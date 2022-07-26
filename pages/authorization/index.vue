<template>
  <section class="s-pt">
    <div class="container">
      <h1>Авторизация</h1>
      <div class="fields-grid b-mt">
        <FormField
          type="text"
          field-label="Логин"
          :required="true"
        />
        <FormField
          type="password"
          field-label="Пароль"
          :required="true"
        />
        <button class="btn btn--primary btn--w-auto">
          Войти
        </button>
        <NuxtLink to="/recovery-pass/" class="btn btn--secondary btn--w-auto">
          Забыли пароль
        </NuxtLink>
      </div>
    </div>
    <div class="bottom-img e-big-mt" />
  </section>
</template>

<script>
import FormField from '@/components/fields/FormField'

export default {
  name: 'RecoveryPass',
  components: {
    FormField
  }

}
</script>

<style scoped lang="scss">
.fields-grid {
  display: grid;
  grid-template: auto / 1fr 1fr auto auto;
  justify-content: space-between;
  column-gap: 24px;

  .btn {
    max-height: 41px;
    max-width: 200px;
    justify-self: flex-end;
  }
}

.bottom-img {
  height: 644px;
  background-image: url("/img/backgrounds/bg-auth-page.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 830px) {
  .fields-grid {
    grid-template: auto / 1fr 1fr;

    .btn {
      width: 100%;
      max-width: 100%;
    }
  }
  .bottom-img {
    height: 500px;
  }
}

@media screen and (max-width: 560px) {
  .fields-grid {
    grid-template: auto / 1fr;
    .btn--primary {
      margin-bottom: 24px;
    }
  }
  .v-select {
    margin-bottom: 28px;
  }
  .bottom-img {
    height: 360px;
    background-position: 50% 0;
  }
}
</style>
