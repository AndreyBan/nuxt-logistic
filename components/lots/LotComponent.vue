<template>
  <!--  TODO: Класс gray-wrap--with-action добавлять только если есть кнопка или статус. gray-wrap--with-action-and-status если есть и кнопка и статус
  -->
  <section class="block-lot__element gray-wrap gray-wrap--with-action-and-status">
    <div class="lot-number">
      № {{ dataLot.numberLot }}
    </div>
    <div class="lot-info e-big-mt">
      <div class="lot-info__left">
        <div class="lot-title">
          {{ dataLot.title }}
        </div>
        <ul class="lot-info-rows">
          <li>
            <span class="lot-stroke__name">Маршрут:</span>
            <span class="lot-stroke__value">{{ dataLot.from }}</span>
            <ShowSvg id="arrow-right" />
            <span class="lot-stroke__value">{{ dataLot.arrival }}</span>
          </li>
          <li>
            <span class="lot-stroke__name">Плановая дата погрузки:</span>
            <span
              class="lot-stroke__value"
              :class="{'lot-stroke__value--red': dataLot.statusLabel === statusLabel.REGISTER}"
            >
              {{ dataLot.shipmentDate }}
            </span>
          </li>
          <li>
            <span class="lot-stroke__name">Плановая дата доставки:</span>
            <span
              class="lot-stroke__value"
              :class="{'lot-stroke__value--red': dataLot.statusLabel === statusLabel.IN_TRANSIT}"
            >
              {{ dataLot.unloadingDate }}
            </span>
          </li>
          <li>
            <span class="lot-stroke__name">Задание на перевозку:</span>
            <span class="lot-stroke__value">{{ dataLot.task }}</span>
          </li>
        </ul>
      </div>
      <div class="lot-info__right">
        <div class="lot-info__title-date">
          Подача заявок
        </div>
        <div class="lot-info-date">
          с {{ dataLot.dateStart }} по {{ dataLot.dateEnd }}
        </div>
        <div class="lot-info-wrap">
          <div v-if="dataLot.statusLabel === statusLabel.WAIT" class="lot-info-status lot-info-status--wait">
            На рассмотрении
          </div>
          <div
            v-else-if="dataLot.statusLabel === statusLabel.IN_TRANSIT"
            class="lot-info-status lot-info-status--in-transit"
          >
            В пути
          </div>
          <div
            v-else-if="dataLot.statusLabel === statusLabel.REGISTER"
            class="lot-info-status lot-info-status--register"
          >
            Регистрация на лот
          </div>
          <div
            v-else-if="dataLot.statusLabel === statusLabel.ACCEPT"
            class="lot-info-status lot-info-status--accept"
          >
            Подтвержден перевозчиком
          </div>
        </div>
        <div v-if="!dataLot.statusLabel" class="lot-info-action">
          <div class="btn btn--secondary">
            Подать заявку на перевозку
          </div>
        </div>
        <div v-if="doneLot && dataLot.statusLabel === statusLabel.ACCEPT" class="lot-info-action">
          <div class="btn btn--secondary">
            Отметить погрузку
          </div>
        </div>
        <div v-if="doneLot && dataLot.statusLabel === statusLabel.IN_TRANSIT" class="lot-info-action">
          <div class="btn btn--secondary">
            Отметить точку маршрута
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
  props: {
    dataLot: {
      type: Object,
      default: () => {
      },
      required: true
    },
    doneLot: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      statusLabel: {
        WAIT: 'wait',
        IN_TRANSIT: 'in-transit',
        ACCEPT: 'accept',
        REGISTER: 'register'
      }
    }
  }
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

    &__title-date {
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
      display: flex;
      justify-content: flex-end;
    }

    &-status {
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

      &--accept,
      &--register,
      &--in-transit {
        position: relative;
        text-align: center;
        padding: 6px 14px;
        border-radius: 25px;
        font-weight: 600;
      }

      &--accept {
        background-color: #D6F4E6;
      }

      &--register {
        background-color: #FFE3AD;
      }

      &--in-transit {
        background-color: #C9DEE8;
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
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  &-stroke__value {
    font-weight: 600;
    margin-left: 13px;

    &--red {
      color: #ED1C24;
    }
  }
}

.arrow-right {
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
    &--with-action-and-status {
      padding: 32px 40px 98px;
    }
  }
}

@media screen and (max-width: 767px) {
  .lot-info-wrap {
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

    &--with-action-and-status {
      padding: 24px 16px 128px;

      .lot-info-wrap {
        top: auto;
        bottom: 84px;
      }

      .lot-info-action {
        bottom: 24px;
      }
    }
  }
  .lot-info-wrap {
    top: auto;
    right: auto;
    left: 16px;
  }
  .lot-info-action {
    width: calc(100% - 32px);
  }
}
</style>
