<template>
  <section class="s-mt">
    <div class="container">
      <h1>Регистрация</h1>
      <div class="fields-grid b-mt">
        <div>
          <v-select
            id="f-form"
            placeholder="Форма собственности*"
            :searchable="false"
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
          field-require="true"
        />
        <FormField
          id="f-inn"
          name="inn"
          type="text"
          field-label="ИНН"
          field-require="true"
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
          field-require="true"
        />
        <FormField
          id="f-bank"
          name="bank"
          type="text"
          field-label="Банк"
          field-require="true"
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
          field-require="true"
        />
        <FormField
          id="f-ogrn"
          name="ogrn"
          type="text"
          field-label="ОГРН"
          field-require="true"
        />
        <FormField
          id="f-okpo"
          name="okpo"
          type="text"
          field-label="ОКПО"
          field-require="true"
        />
        <FormField
          id="f-fio"
          name="fio"
          type="text"
          field-label="ФИО Директора организации*"
          field-require="true"
        />
      </div>
      <div class="fields-grid b-mt">
        <FormField
          id="f-legal-address"
          name="legal-address"
          type="text"
          type-textarea="true"
          field-label="Юридический адрес"
          field-require="true"
          rows="4"
        />
        <FormField
          id="f-actual-address"
          name="actual-address"
          type="text"
          type-textarea="true"
          field-label="Фактический адрес"
          field-require="true"
          rows="4"
        />
        <FormField
          id="f-post-address"
          name="post-address"
          type="text"
          type-textarea="true"
          field-label="Почтовый адрес"
          field-require="true"
          rows="4"
        />
      </div>
      <div class="fields-grid b-mt">
        <FormField
          id="f-phone"
          name="phone"
          type="text"
          field-label="Телефон"
          field-require="true"
        />
        <FormField
          id="f-email"
          name="email"
          type="text"
          field-label="Адрес электронной почты"
          field-require="true"
        />
        <FormField
          id="f-fio-contract"
          name="fio-contract"
          type="text"
          field-label="ФИО подписанта договора"
          field-require="true"
        />
      </div>
      <button class="btn btn--primary btn--w-auto">
        Зарегистрироваться
      </button>
    </div>
  </section>
</template>

<script>
import FormField from '@/components/style-guide/FormField'
import CheckboxComponent from '@/components/style-guide/CheckboxComponent'

export default {
  name: 'RegistrationPage',
  components: {
    FormField,
    CheckboxComponent
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
}
.title-text{
  margin-bottom: 8px;
}
.checkbox-grid {
  display: flex;
  justify-content: space-between;
}
</style>
