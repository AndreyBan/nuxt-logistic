<template>
  <section class="filter-lots">
    <div class="gray-wrap">
      <div class="filter-lots__row-select e-big-mb">
        <div class="v-select-form">
          <v-select
            placeholder="Город отправления"
            :options="cityDeparture"
          >
            <template #no-options>
              Ничего не найдено
            </template>
          </v-select>
        </div>
        <div class="v-select-form">
          <v-select
            placeholder="Город назначения"
            :options="cityDestination"
          >
            <template #no-options>
              Ничего не найдено
            </template>
          </v-select>
        </div>
        <div class="v-select-form">
          <v-select
            placeholder="Статус лота"
            :options="statusLot"
            :searchable="false"
          >
            <template #no-options>
              Ничего не найдено
            </template>
          </v-select>
        </div>
      </div>
      <b>Специализация</b>
      <div class="filter-lots__row-checkboxes e-mt">
        <CheckboxComponent
          v-for="(check, i) in specs"
          :id="i"
          :key="i"
          :label="check"
        />
      </div>
      <div class="filter-lots__sort">
        <span>Сортировать по:</span>
        <div class="filter-lots__sort-radio">
          <input id="asc" type="radio" name="sort" checked>
          <label for="asc" class="e-big-mr">Дате погрузки <ShowSvg id="sort-up" /></label>
          <input id="desc" type="radio" name="sort">
          <label for="desc">Дате погрузки <ShowSvg id="sort-up" class="sort-up sort-up--rotate" /></label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckboxComponent from '@/components/style-guide/CheckboxComponent'
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'FilterComponent',
  components: {
    ShowSvg,
    CheckboxComponent
  },
  data () {
    return {
      cityDeparture: ['Город 1'],
      cityDestination: ['Город 1'],
      statusLot: ['На рассмотрении', 'Подать заявку на перевозку'],
      specs: [
        'Автомобили',
        'Спецтехника',
        'Негабаритные грузы',
        'Сельскохозяйственная продукция',
        'Паллетированные грузы',
        'Опасные грузы'
      ]

    }
  }
}
</script>

<style scoped lang="scss">
.filter-lots__row-select {
  display: grid;
  grid-template: 1fr/ repeat(3, 1fr);
  column-gap: 26px;
}

.gray-wrap {
  background-color: #F9F9F9;
  padding: 40px;
  border-radius: 29px;
}

.filter-lots__row-checkboxes {
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  row-gap: 16px;
}
.filter-lots__sort {
  display: flex;
  margin-top: 30px;
  span {
    color: #333333;
  }
}

.filter-lots__sort-radio {
  margin-left: 24px;
  input {
    display: none;
    &:checked + label {
      border-bottom: 1px solid scotch-color('primary');
    }
  }
  label {
    cursor: pointer;
    position: relative;
    padding-right: 18px;
    padding-bottom: 1px;
    display: inline-block;
  }
  .sort-up{
    position: absolute;
    right: 0;
    margin-top: 2px;
    height: 15px;
    width: 10px;
    &--rotate{
      transform: rotate(180deg);
    }
  }
}

@media screen and (max-width: 991px) {
  .filter-lots__row-checkboxes {
    grid-template: auto / repeat(3, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .filter-lots__row-select {
    grid-template: auto / 1fr 1fr;
    row-gap: 28px;
  }
}
@media screen and (max-width: 767px) {
  .filter-lots__row-select {
    grid-template: auto / 1fr;
    row-gap: 28px;
  }
  .filter-lots__row-checkboxes {
    grid-template: auto / 1fr;
  }
  .filter-lots__sort {
    display: block;
  }
  .filter-lots__sort-radio {
    margin-left: 0;
    margin-top: 10px;
  }
  .gray-wrap {
    padding: 24px 16px;
  }
}
</style>
