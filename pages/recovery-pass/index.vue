<template>
  <section class="s-pt">
    <div class="container">
      <h1>Восстановление пароля</h1>
      <div class="fields-grid b-mt">
        <div class="v-select-form">
          <v-select
            id="f-form"
            v-model="fields.mainData.formOwnership"
            placeholder="Форма собственности*"
            :searchable="false"
            :options="typeOwnership"
            class="select-dealers"
          >
            <template #no-options>
              Ничего не найдено
            </template>
          </v-select>
        </div>
        <FormField
          type="text"
          field-label="Наименование юр лица/ип"
          :required="true"
        />
        <NumField
          mask-template="##########"
          label="ИНН"
          :required="true"
        />
        <NumField
          mask-template="#########"
          label="КПП"
          :required="fields.mainData.formOwnership === 'Юр. лицо'"
          :min-length="9"
        />
        <FormField
          type="text"
          field-label="Адрес электронной почты"
          validate-language="latin"
          :required="true"
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
import FormField from '@/components/fields/FormField'
import NumField from '@/components/fields/NumField'

export default {
  name: 'RecoveryPass',
  components: {
    FormField,
    NumField
  },
  data () {
    return {
      typeOwnership: ['Юр. лицо', 'ИП'],
      fields: {
        mainData: {
          formOwnership: '',
          nameOrganize: '',
          INN: ''
        }
      }
    }
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
