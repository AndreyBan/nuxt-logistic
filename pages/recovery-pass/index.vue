<template>
  <section class="s-pt">
    <div class="container">
      <h1>Восстановление пароля</h1>
      <div class="fields-grid b-mt">
        <div>
          <v-select
            id="f-form"
            placeholder="Форма собственности*"
            :searchable="false"
            class="select-dealers"
          >
            <template #selection>
              <label for="f-form">Форма собственности*</label>
            </template>
            <template #no-options>
              Ничего не найдено
            </template>
          </v-select>
        </div>
        <FormField
          id="f-name"
          name="name"
          type="text"
          field-label="Наименование юр лица/ип*"
          data-required
        />
        <FormField
          id="f-inn"
          name="inn"
          type="text"
          field-label="ИНН*"
          data-required
        />
        <FormField
          id="f-kpp"
          name="kpp"
          type="text"
          field-label="КПП"
        />
        <FormField
          id="f-mail"
          name="mail"
          type="mail"
          field-label="Адрес электронной почты*"
        />
        <button class="btn btn--primary btn--w-auto">
          Восстановить доступ
        </button>
      </div>
    </div>
    <div class="bottom-img e-big-mt" />
  </section>
</template>

<script>
import FormField from '@/components/style-guide/FormField'

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
  grid-template: auto / repeat(3, 1fr);
  justify-content: space-between;
  column-gap: 24px;

  .btn {
    max-height: 41px;
    max-width: 200px;
    justify-self: flex-end;
  }
}

.bottom-img {
  height: 519px;
  background-image: url("/img/backgrounds/bg-recovery-pass.jpg");
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
    background-position: 65% 0;
  }
}

@media screen and (max-width: 560px) {
  .fields-grid {
    grid-template: auto / 1fr;
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
