<template>
  <section class="s-mt">
    <div class="container">
      <form action="/" @submit.prevent="formSubmit">
        <h1>Регистрация</h1>
        <div class="fields-grid fields-grid--md-bottom-full b-mt">
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
            id="f-name"
            name="name"
            type="text"
            field-label="Наименование юр лица/ип"
            :required="true"
            validate-language="Cyrillic"
          />
          <NumField
            mask-template="##########"
            label="ИНН"
            :required="true"
          />
        </div>
        <p class="title-text">
          <b>Специализация компании</b>
        </p>
        <p>Выберите из представленного списка специализацию, к которой относится Ваша компания</p>
        <div class="checkbox-grid e-big-mt s-mb">
          <CheckboxComponent v-for="(el, i) in dataCheck" :id="'check-' + i" :key="i" :label="el" />
        </div>
        <div class="fields-grid b-mt">
          <NumField
            mask-template="#########"
            label="КПП"
            :required="fields.mainData.formOwnership === 'Юр. лицо'"
            :min-length="9"
          />
          <NumField
            mask-template="####################"
            label="Р/сч"
            :required="true"
            :min-length="20"
          />
          <FormField
            id="f-bank"
            name="bank"
            type="text"
            field-label="Банк"
            :require="true"
          />
          <NumField
            mask-template="####################"
            label="К/сч"
            :required="true"
            :min-length="20"
          />
          <NumField
            mask-template="#########"
            label="БИК"
            :required="true"
            :min-length="9"
          />
          <NumField
            :mask-template="fields.mainData.formOwnership === 'Юр. лицо' ? '#############' : '###############'"
            label="ОГРН"
            :required="true"
            :min-length="fields.mainData.formOwnership !== 'ИП' ? 13 : 15"
          />
          <NumField
            :mask-template="fields.mainData.formOwnership === 'Юр. лицо' ? '########' : '##########'"
            label="ОКПО"
            :required="true"
            :min-length="fields.mainData.formOwnership !== 'ИП' ? 8 : 10"
          />
          <FormField
            id="f-fio"
            name="fio"
            type="text"
            field-label="ФИО Директора организации"
            :require="true"
          />
        </div>
        <div class="fields-grid fields-grid--md-bottom-full b-mt">
          <FormField
            type="text"
            :type-textarea="true"
            field-label="Юридический адрес"
            :required="true"
            rows="4"
          />
          <FormField
            type="text"
            :type-textarea="true"
            field-label="Фактический адрес"
            :required="true"
            rows="4"
          />
          <FormField
            type="text"
            :type-textarea="true"
            field-label="Почтовый адрес"
            :required="true"
            rows="4"
          />
        </div>
        <div class="fields-grid b-mt s-pb">
          <PhoneField :required="true" />
          <FormField
            type="text"
            field-label="Адрес электронной почты"
            :required="true"
          />
          <FormField
            type="text"
            field-label="ФИО подписанта договора"
            :required="true"
          />
          <input-file />
          <div class="check-column">
            <CheckboxComponent
              id="check-agree"
              label="Даю согласие на "
              :link="{name: 'обработку персональных данных', url: '#'}"
              checked="checked"
              class="e-mb"
            />
            <CheckboxComponent
              id="check-rules"
              label="Ознакомлен с "
              :link="{name: 'правилами портала', url: '#'}"
              checked="checked"
            />
          </div>
          <button type="submit" class="btn btn--primary btn--w-auto">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import FormField from '@/components/style-guide/FormField'
import CheckboxComponent from '@/components/style-guide/CheckboxComponent'
import inputFile from '@/components/style-guide/InputFile'
import NumField from '@/components/fields/NumField'
import PhoneField from '@/components/fields/PhoneField'

export default {
  name: 'RegistrationPage',
  components: {
    FormField,
    CheckboxComponent,
    inputFile,
    NumField,
    PhoneField
  },
  mixins: [validationMixin],
  data () {
    return {
      dataCheck: {
        car: 'Автомобили',
        spec: 'Спецтехника',
        cargo: 'Негабаритные грузы',
        products: 'Сельскохозяйственная продукция',
        pallet: 'Паллетированные грузы',
        danger: 'Опасные грузы'
      },
      typeOwnership: ['Юр. лицо', 'ИП'],
      fields: {
        mainData: {
          formOwnership: '',
          nameOrganize: '',
          INN: ''
        },
        bank: {
          kpp: '',
          rs: '',
          bankName: '',
          ks: '',
          BIK: '',
          OGRN: '',
          OKPO: '',
          organizeFIO: ''
        }
      }
    }
  },
  methods: {
    formSubmit () {
      return false
    }
  }
}
</script>

<style>
.check-column label,
.check-column a {
  font-size: 12px;
}
</style>
<style scoped lang="scss">
.fields-grid {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  justify-content: space-between;
  column-gap: 24px;

  .btn {
    max-height: 40px;
  }
}

.title-text {
  margin-bottom: 8px;
}

.checkbox-grid {
  display: flex;
  justify-content: space-between;
}

.btn--w-auto {
  width: 189px;
  justify-self: flex-end;
}

@media screen and (max-width: 991px) {
  .checkbox-grid {
    display: grid;
    grid-template: 1fr 1fr / repeat(3, 1fr);
    justify-content: space-between;
  }
  .fields-grid {
    grid-template: auto / 1fr 1fr;
    column-gap: 16px;
  }
  .fields-grid--md-bottom-full .form-field:last-child {
    grid-column: 1 / 3;
  }
}

@media screen and (max-width: 767px) {
  .checkbox-grid {
    display: block;
    margin-bottom: 40px;

    .form-checkbox {
      margin-bottom: 18px;
    }
  }
  .fields-grid {
    display: block;
  }
  .btn--w-auto {
    width: 100%;
  }
  .v-select-form {
    margin-bottom: 28px;
  }
  .check-column {
    margin: 28px 0;
  }
}
</style>
