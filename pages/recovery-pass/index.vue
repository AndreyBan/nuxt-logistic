<template>
  <section class="s-pt">
    <div class="container">
      <h1>Восстановление пароля</h1>
      <form class="fields-grid b-mt" @submit.prevent="formSubmit">
        <div class="v-select-form">
          <v-select
            id="f-form"
            v-model="$v.fields.mainData.formOwnership.$model"
            placeholder="Форма собственности*"
            :searchable="false"
            :options="typeOwnership"
            class="select-dealers"
            @change="$v.fields.mainData.formOwnership.$touch()"
          >
            <template #no-options>
              Ничего не найдено
            </template>
          </v-select>
          <div v-if="$v.fields.mainData.formOwnership.$error" class="error-text-select">
            Выберите форму собственности
          </div>
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
          type="email"
          field-label="Адрес электронной почты"
          validate-language="latin"
          :required="true"
        />
        <button type="submit" class="btn btn--primary btn--w-auto">
          Восстановить доступ
        </button>
      </form>
    </div>
    <div class="bottom-img e-big-mt" />
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import FormField from '@/components/fields/FormField'
import NumField from '@/components/fields/NumField'

export default {
  name: 'RecoveryPass',
  components: {
    FormField,
    NumField
  },
  mixins: [validationMixin],
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
  },
  methods: {
    formSubmit () {
      new Promise((resolve) => {
        this.$store.commit('registration-form/resetErrors')
        this.$store.commit('registration-form/changeCheckError', true)
        this.$v.fields.mainData.formOwnership.$touch()
        resolve()
      }).then(() => {
        this.$store.commit('registration-form/changeCheckError', false)
        if (!this.$store.state['registration-form'].errors) {
          alert('Успешно')
        }
      })
      return false
    }
  },
  validations: {
    fields: {
      mainData: {
        formOwnership: {
          required
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
.v-select-form {
  position: relative;
  margin-bottom: 16px;
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
