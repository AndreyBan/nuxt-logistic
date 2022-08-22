<template>
  <div>
    <ul class="profile-list-data b-mb">
      <li>
        Форма собственности: <span>ООО</span>
      </li>
      <li>
        Наименование юр лица/ип: <span>Крылатый Автовоз</span>
      </li>
      <li>ИНН:<span>3459073217</span></li>
      <li>КПП:<span>1173443010620</span></li>
      <li>Р/сч:<span>11734430106201173443010620</span></li>
      <li>Банк:<span>ПАО Сбербанк</span></li>
      <li>К/сч:<span>11734430106201173443010620</span></li>
      <li>БИК:<span>1173443010620</span></li>
      <li>ОГРН:<span>1173443010620</span></li>
      <li>ОКПО:<span>11734430106201173443010620</span></li>
      <li>ФИО Директора организации:<span>Иванов Иван Иванович</span></li>
      <li>
        Юридический адрес:<span>400009, Волгоградская обл, Волгоград г, им В.И.Ленина пр-кт, дом № 118Б, офис 2</span>
      </li>
      <li>
        Фактический адрес:<span>400009, Волгоградская обл, Волгоград г, им В.И.Ленина пр-кт, дом № 118Б, офис 2</span>
      </li>
      <li>
        Почтовый адрес:<span>400009, Волгоградская обл, Волгоград г, им В.И.Ленина пр-кт, дом № 118Б, офис 2</span>
      </li>
      <li>Телефон организации:<span>+7 (831) 2-000-000</span></li>
      <li>Адрес электронной почты:<span>client@agatgroup.com</span></li>
      <li>ФИО подписанта договора:<span>Иванов Иван Иванович</span></li>
    </ul>
    <p class="spec-title">
      Специализация компании
    </p>
    <div ref="block-checkboxes" class="checkbox-grid e-big-mt s-mb">
      <CheckboxComponent
        v-for="(el, i) in dataCheck"
        :id="'check-' + i"
        :key="i"
        :label="el"
        :checked="changeCheck.includes(el)"
        disabled="disabled"
      />
    </div>
  </div>
</template>

<script>
import CheckboxComponent from '@/components/style-guide/CheckboxComponent'

export default {
  name: 'OrganizationData',
  components: {
    CheckboxComponent
  },
  data () {
    return {
      dataCheck: [
        'Автомобили',
        'Спецтехника',
        'Негабаритные грузы',
        'Сельскохозяйственная продукция',
        'Паллетированные грузы',
        'Опасные грузы'
      ],
      changeCheck: [
        'Автомобили',
        'Негабаритные грузы'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@use "/assets/scss/variables.scss" as *;

.spec-title {
  margin-bottom: 20px;
  font-weight: 600;
}
.profile-list-data {
  list-style: none;

  li {
    font-weight: 600;

    span {
      font-weight: 500;
      margin-left: 7px;
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
.checkbox-grid {
  display: flex;
  justify-content: space-between;
  position: relative;
  @include media('md') {
    display: grid;
    grid-template: 1fr 1fr / repeat(3, 1fr);
    row-gap: 28px;
  }
  @include media('sm') {
    grid-template: auto / 1fr;
    row-gap: 16px;
  }
}
</style>
