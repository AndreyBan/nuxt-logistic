<template>
  <div class="container">
    <div class="title-badge s-mt b-mb">
      <h1>Лот №123456</h1>
      <span class="badge badge-primary">Регистрация на лот</span>
    </div>
    <div class="lot-counter b-mb">
      <div class="lot-counter__desc">До окончания регистрации осталось:</div>
      <div class="lot-counter__num">1 ч 31 м 56 с</div>
    </div>
    <div class="">
      <div class="">
        <select>
          <option>Водитель</option>
          <option>Водитель</option>
          <option>Водитель</option>
        </select>
      </div>
      <div class="">
        <select>
          <option>Гос номер тягача</option>
          <option>Гос номер тягача</option>
          <option>Гос номер тягача</option>
        </select>
      </div>
      <div class="">
        <select>
          <option>Гос номер прицепа</option>
          <option>Гос номер прицепа</option>
          <option>Гос номер прицепа</option>
        </select>
      </div>
    </div>
    <div class="lot-files">
      <a href="#">Добавить вложенные файлы</a>
      <a href="#" target="_blank">Скачать доверенность</a>
    </div>
    <div class="lot-transport">
      <div class="">
        <div class="lot-transport__text">Задание на перевозку:</div>
        <div class="lot-transport__val">Перевезти 10 автомобилей Haval</div>
      </div>
      <div class="">
        <div class="lot-transport__text">Маршрут:</div>
        <div class="lot-transport__val">Нижний Новгород, Окская Гавань, 12
          <ShowSvg id="arrow-right" />
          Барнаул</div>
      </div>
      <div class="">
        <div class="lot-transport__text">Плановая дата погрузки:</div>
        <div class="lot-transport__val">26.05.2022 12:00</div>
      </div>
      <div class="">
        <div class="lot-transport__text">Плановой даты доставки:</div>
        <div class="lot-transport__val">27.05.2022 18:00</div>
      </div>
    </div>
    <div class="">
      <button class="btn btn--secondary btn--w-auto">Отказ</button>
    </div>
    <div class="lot-structure">
      <h2>Состав лота</h2>
      <table class="table table--lot">
        <thead>
          <tr>
            <th>№</th>
            <th>Vin</th>
            <th>Модель</th>
            <th>Грузополучатель</th>
            <th>Дата доставки план</th>
            <th>Дата доставки факт</th>
            <th>Доставлено</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>X96231073N2863803</td>
            <td>ГАЗ-231073-310</td>
            <td>АлтайГАЗавтосервис,ООО,г.Барнаул, рп.Южный, ул.Белинского, д.20</td>
            <td>26.05.22</td>
            <td>26.05.22</td>
            <td><CheckboxComponent id="check-1" label="первый" /></td>
          </tr>
          <tr>
            <td colspan="7"></td>
          </tr>
          <tr>
            <td>2</td>
            <td>X96231073N2863803</td>
            <td>ГАЗ-231073-310</td>
            <td>АлтайГАЗавтосервис,ООО,г.Барнаул, Сибирский пр. д.36в</td>
            <td>26.05.22</td>
            <td>26.05.22</td>
            <td><CheckboxComponent id="check-2" label=" " /></td>
          </tr>
          <tr>
            <td colspan="7"></td>
          </tr>
          <tr>
            <td>3</td>
            <td>X96231073N2863803</td>
            <td>ГАЗ-231073-310</td>
            <td>АлтайГАЗавтосервис,ООО,г.Барнаул, рп.Южный, ул.Белинского, д.20</td>
            <td>26.05.22</td>
            <td>26.05.22</td>
            <td>
              <CheckboxComponent id="check-3" label=" " />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import ShowSvg from '@/components/helpers/ShowSvg'
  import CheckboxComponent from '@/components/style-guide/CheckboxComponent'

  export default {
    components: {
      ShowSvg,
      CheckboxComponent
    }
  }
</script>

<style scoped lang="scss">
  .lot-counter{
    font-size: 16px;
    display: flex;

    &__desc{
      font-weight: 600;
      margin-right: 15px;
    }
    &__num{
      font-weight: 700;
    }
  }
  .table--lot{
    thead th{
      font-size: 12px;
      font-weight: 700;
      text-align: left;
      font-family: $fontTitles;
      text-transform: uppercase;
      vertical-align: middle;
      padding: 10px 25px;
    }
    td{
      padding: 10px 25px;
      vertical-align: middle;
    }
    tbody tr:nth-of-type(odd) td {
      background: #F9F9F9;
    }
    tbody tr:nth-of-type(odd) td:first-child{
      border-top-left-radius: 107px;
      border-bottom-left-radius: 107px;
    }
    tbody tr:nth-of-type(odd) td:last-child{
      border-top-right-radius: 107px;
      border-bottom-right-radius: 107px;
      text-align: right;
    }
  }

</style>
