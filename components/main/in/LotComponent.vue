<template>
  <!--  TODO: Класс gray-wrap--with-action добавлять только если есть кнопка или статус. gray-wrap--with-action-and-status если есть и кнопка и статус
  -->
  <section class="block-lot__element gray-wrap gray-wrap--with-action">
    <div class="lot-number">
      № 00834
    </div>
    <div class="lot-info e-big-mt">
      <div class="lot-info__left">
        <div class="lot-title">
          Перевозка автомобилей
        </div>
        <ul class="lot-info-rows">
          <li>
            <span class="lot-stroke__name">Маршрут:</span>
            <span class="lot-stroke__value">Нижний Новгород, Окская Гавань, 12</span>
            <ShowSvg id="arrow-right" />
            <span class="lot-stroke__value">Барнаул</span>
          </li>
          <li>
            <span class="lot-stroke__name">Плановая дата погрузки:</span>
            <span class="lot-stroke__value">26.05.2022 12:00</span>
          </li>
          <li>
            <span class="lot-stroke__name">Плановая дата доставки:</span>
            <span class="lot-stroke__value">27.05.2022 18:00</span>
          </li>
          <li>
            <span class="lot-stroke__name">Задание на перевозку:</span>
            <span class="lot-stroke__value">Перевезти 10 автомобилей Haval</span>
          </li>
        </ul>
      </div>
      <div class="lot-info__right">
        <div class="lot-info__title-date">
          Подача заявок
        </div>
        <div class="lot-info-date">
          с 18.04.2022 по 25.05.2022 12:00
        </div>
        <div class="lot-info-wrap">
          <div class="lot-info-status lot-info-status--wait">
            На рассмотрении
          </div>
        </div>
        <div class="lot-info-action">
          <div class="btn btn--secondary">
            Подать заявку на перевозку
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'LotComponent',
  components: {
    ShowSvg
  },
  props: ['num']

}
</script>

<style scoped lang="scss">
.block-lot__element:not(:last-child) {
  margin-bottom: 22px;
}
.gray-wrap {
  background-color: #F9F9F9;
  padding: 40px;
  border-radius: 29px;
}
.lot {
  font-family: 'Open-sans', sans-serif;
  &-info {
    display: flex;
    justify-content: space-between;
    &__title-date{
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 9px;
    }
    &-date {
      font-size: 16px;
      font-weight: 700;
    }
    &-action {
      margin-top: 42px;
    }
    &-wrap {
      display: flex;justify-content: flex-end;
    }
    &-status{
      padding: 6px 12px;
      margin-top: 26px;
      &--wait {
        display: inline-flex;
        background-color: #FECFD1;
        position: relative;
        padding-left: 43px;
        border-radius: 25px;
        font-weight: 600;
        &:before {
          content: '';
          position: absolute;
          left: 15px;
          width: 20px;
          height: 20px;
          background: url("/img/svg/time-circle.svg") 0 0 no-repeat;
          background-size: 20px;
        }
      }
    }
  }
  &-number {
    color: #878787;
  }
  &-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &-info-rows {
    list-style: none;
    li {
      &:not(:last-child){
        margin-bottom: 15px;
      }
    }
  }
  &-stroke__value {
    font-weight: 600;
    margin-left: 13px;
  }
}
.arrow-right{
  width: 18px;
  height: 10px;
  margin-left: 11px;
}
@media screen and (max-width: 991px) {
  .block-lot__element {
    position: relative;
  }
  .lot-info {
    flex-direction: column;
    &__left {
      order: 1;
    }
    &__right {
      order: 0;
    }
    &-action {
      position: absolute;
      margin-top: 0;
      bottom: 32px;
    }
    &-wrap {
      position: absolute;
      right: 40px;
      top: 32px;
    }
    &-status {
      margin-top: 0;
    }
    &__title-date,
    &-date {
      display: inline-block;
      font-weight: 700;
      font-size: 14px;
    }
  }
  .lot-title {
    font-size: 16px;
  }
  .gray-wrap {
    padding: 32px 40px;
    &--with-action,
    &--with-action-and-status{
      padding: 32px 40px 98px;
    }
  }
}
@media screen and (max-width: 767px) {
  .lot-info-wrap{
    bottom: 24px;
  }
  .gray-wrap {
    padding: 24px 16px;
    &--with-action {
      padding: 24px 16px 84px;
      .lot-info-action {
        bottom: 24px;
      }
    }
    &--with-action-and-status{
      padding: 24px 16px 128px;
      .lot-info-wrap{
        top: auto;
        bottom: 84px;
      }
      .lot-info-action {
        bottom: 24px;
      }
    }
  }
  .lot-info-wrap{
    top: auto;
    right: auto;
    left: 16px;
  }
  .lot-info-action {
    width: calc(100% - 32px);
  }
}
</style>
