<template>
  <section class="s-mt">
    <div class="container">
      <h1>Регистрация</h1>
      <div class="fields-grid fields-grid--md-bottom-full b-mt">
        <div class="v-select-form">
          <v-select
            id="f-form"
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
          :field-require="true"
        />
        <FormField
          id="f-inn"
          name="inn"
          type="text"
          field-label="ИНН"
          :field-require="true"
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
        <FormField
          id="f-kpp"
          name="kpp"
          type="text"
          field-label="КПП"
        />
        <FormField
          id="f-rs"
          name="rs"
          type="text"
          field-label="Р/сч"
          :field-require="true"
        />
        <FormField
          id="f-bank"
          name="bank"
          type="text"
          field-label="Банк"
          :field-require="true"
        />
        <FormField
          id="f-ks"
          name="ks"
          type="text"
          field-label="К/сч"
        />
        <FormField
          id="f-bik"
          name="bik"
          type="text"
          field-label="БИК"
          :field-require="true"
        />
        <FormField
          id="f-ogrn"
          name="ogrn"
          type="text"
          field-label="ОГРН"
          :field-require="true"
        />
        <FormField
          id="f-okpo"
          name="okpo"
          type="text"
          field-label="ОКПО"
          :field-require="true"
        />
        <FormField
          id="f-fio"
          name="fio"
          type="text"
          field-label="ФИО Директора организации"
          :field-require="true"
        />
      </div>
      <div class="fields-grid fields-grid--md-bottom-full b-mt">
        <FormField
          id="f-legal-address"
          name="legal-address"
          type="text"
          :type-textarea="true"
          field-label="Юридический адрес"
          :field-require="true"
          rows="4"
        />
        <FormField
          id="f-actual-address"
          name="actual-address"
          type="text"
          :type-textarea="true"
          field-label="Фактический адрес"
          :field-require="true"
          rows="4"
        />
        <FormField
          id="f-post-address"
          name="post-address"
          type="text"
          :type-textarea="true"
          field-label="Почтовый адрес"
          :field-require="true"
          rows="4"
        />
      </div>
      <div class="fields-grid b-mt s-pb">
        <FormField
          id="f-phone"
          name="phone"
          type="tel"
          :type-phone="true"
          field-label="Телефон"
          :field-require="true"
        />
        <FormField
          id="f-email"
          name="email"
          type="text"
          field-label="Адрес электронной почты"
          :field-require="true"
        />
        <FormField
          id="f-fio-contract"
          name="fio-contract"
          type="text"
          field-label="ФИО подписанта договора"
          :field-require="true"
        />
        <input-file />
        <div class="check-column">
          <CheckboxComponent id="check-agree" label="Даю согласие на " :link="{name: 'обработку персональных данных', url: '#'}" checked="checked" />
          <CheckboxComponent id="check-rules" label="Ознакомлен с " :link="{name: 'правилами портала', url: '#'}" checked="checked" />
        </div>
        <button class="btn btn--primary btn--w-auto">
          Зарегистрироваться
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import FormField from '@/components/style-guide/FormField'
import CheckboxComponent from '@/components/style-guide/CheckboxComponent'
import inputFile from '@/components/style-guide/InputFile'

export default {
  name: 'RegistrationPage',
  components: {
    FormField,
    CheckboxComponent,
    inputFile
  },
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
      typeOwnership: ['Юр. лицо', 'ИП']
    }
  }
}
</script>

<style>
.check-column label,
.check-column a{
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

.btn--w-auto{
   width: 189px;
  justify-self: flex-end;
}
.check-column{
  display: grid;
  grid-template: 1fr 1fr / 1fr;
  row-gap: 14px;
}

@media screen and (max-width: 991px){
  .checkbox-grid {
    display: grid;
    grid-template: 1fr 1fr / repeat(3, 1fr);
    justify-content: space-between;
  }
  .fields-grid {
    grid-template: auto / 1fr 1fr;
    column-gap: 16px;
  }
  .fields-grid--md-bottom-full .form-field:last-child{
    grid-column: 1 / 3;
  }
}

@media screen and (max-width: 767px){
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
