<template>
  <div class="drivers-card" :class="{'drop': dropTablet, 'open': dropOpen}">
    <div class="drivers-card-left">
      <div
        v-for="(el, i) in dataCard.mainData"
        :key="i"
        class="drivers-card-left__item"
      >
        <p class="drivers-card__title">
          {{ el.title }}:
        </p>
        <p
          class="drivers-card__name"
          :class="{'edit-mode': edit}"
          :contenteditable="edit"
          @change="dataCard.mainData[i].value = $event.target.innerText"
        >
          {{ el.value }}
        </p>
      </div>
    </div>
    <div class="drivers-card-center drivers-card--gray">
      <p class="drivers-card__name-block">
        Паспортные данные:
      </p>
      <div
        v-for="(el, i) in dataCard.passport"
        :key="i"
        class="drivers-card-center__item"
      >
        <p class="drivers-card__title">
          {{ el.title }}:
        </p>
        <p
          class="drivers-card__name"
          :class="{'edit-mode': edit}"
          :contenteditable="edit"
          @change="dataCard.mainData[i].value = $event.target.innerText"
        >
          {{ el.value }}
        </p>
      </div>
    </div>
    <div class="drivers-card-right-wrap">
      <div class="drivers-card-right drivers-card--gray">
        <p class="drivers-card__name-block">
          Водительское удостоверение:
        </p>
        <div
          v-for="(el, i) in dataCard.driversLicense"
          :key="i"
          class="drivers-card-right__item"
        >
          <p class="drivers-card__title">
            {{ el.title }}:
          </p>
          <p
            class="drivers-card__name"
            :class="{'edit-mode': edit}"
            :contenteditable="edit"
            @change="dataCard.mainData[i].value = $event.target.innerText"
          >
            {{ el.value }}
          </p>
        </div>
      </div>
      <div class="drivers-card-bottom">
        <div class="drivers-card-bottom__actual">
          <ToggleSwitch v-model="dataCard.actual" :label="dataCard.actual ? 'Актуален' : 'Не актуален'" />
        </div>
        <div class="drivers-card-edit e-mt" @click="edit = !edit">
          <div v-if="!edit">
            <ShowSvg id="icon-edit" />
            Редактировать
          </div>
          <div v-else class="btn btn--secondary">
            Сохранить изменения
          </div>
        </div>
      </div>
    </div>
    <div v-if="dropTablet" class="drop-text" @click="dropOpen = !dropOpen">
      {{ textDrop }}
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '@/components/style-guide/ToggleSwitch'
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'DriverCard',
  components: {
    ToggleSwitch,
    ShowSvg
  },
  props: {
    driverCard: {
      type: Object,
      default () {
        return {
          mainData: {
            surname: {
              title: 'Фамилия',
              value: ''
            },
            name: {
              title: 'Имя',
              value: ''
            },
            patronymic: {
              title: 'Отчество',
              value: ''
            },
            birthday: {
              title: 'Дата рождения',
              value: ''
            },
            nationality: {
              title: 'Гражданство',
              value: ''
            },
            address: {
              title: 'Адрес прописки',
              value: ''
            },
            phone: {
              title: 'Контактный телефон',
              value: ''
            }
          },
          passport: {
            serial: {
              title: 'Серия',
              value: ''
            },
            number: {
              title: 'Номер',
              value: ''
            },
            date: {
              title: 'Дата выдачи',
              value: ''
            },
            organization: {
              title: 'Кем выдан',
              value: ''
            }
          },
          driversLicense: {
            number: {
              title: 'Номер',
              value: ''
            },
            date: {
              title: 'Дата выдачи',
              value: ''
            }
          },
          actual: true,
          newCard: true
        }
      }
    }
  },
  data () {
    return {
      dropTablet: false,
      dropOpen: false,
      edit: !!this.driverCard.newCard,
      dataCard: this.driverCard
    }
  },
  computed: {
    textDrop () {
      return this.dropOpen ? 'Свернуть' : 'Развернуть'
    }
  },
  created () {
    if (matchMedia('(max-width: 1279px)').matches) {
      this.dropTablet = true
    }
  }
}
</script>

<style scoped lang="scss">
.drivers-card {
  border: 1px solid #C4C4C4;
  border-radius: 38px;
  padding: 40px 80px;
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
  column-gap: 56px;
  position: relative;
  margin-bottom: 32px;
  @include media('xl') {
    grid-template: auto / 1fr;
    row-gap: 24px;
    padding: 24px 44px;

    &.drop {
      overflow: hidden;

      &:not(.open) {
        .drivers-card-left__item {
          &:nth-child(6),
          &:nth-child(7) {
            display: none;
          }
        }

        .drivers-card-right,
        .drivers-card-center,
        .drivers-card-edit {
          display: none;
        }

        .drivers-card-edit {
          @include media('sm') {
            display: block;
          }
        }
      }
    }
  }
  @include media('sm') {
    row-gap: 16px;
    padding: 24px 16px;
  }

  &__name-block {
    white-space: nowrap;
    font-weight: 600;
    grid-column: 1/3;
    @include media('xl') {
      margin-bottom: 0;
      grid-column: 1/5;
    }
    @include media('sm') {
      grid-column: 1/3;
    }
  }

  &-center {
    grid-row: 1/5;
    display: grid;
    grid-template: auto / repeat(2, auto);
    column-gap: 32px;
    row-gap: 20px;
    @include media('xl') {
      grid-row: auto;
      grid-template: auto /repeat(4, auto);
      row-gap: 15px;
    }
    @include media('sm') {
      grid-template: auto / repeat(2, auto);
    }

    &__item {
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: -10px;
        @include media('xl') {
          margin-top: 0;
        }
      }

      &:nth-child(4),
      &:nth-child(5) {
        grid-column: 1/3;
        @include media('xl') {
          grid-column: auto;
        }
      }
    }
  }

  &-bottom {
    align-self: flex-end;
    text-align: right;
    @include media('xl') {
      align-self: self-start;
    }
    @include media('sm') {
      text-align: left;
    }
  }

  &-right {
    display: grid;
    grid-template: auto / repeat(2, auto);
    column-gap: 32px;
    row-gap: 20px;
    @include media('sm') {
      margin-bottom: 16px;
    }

    &-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      grid-row: 1/5;
      @include media('xl') {
        grid-row: auto;
        flex-direction: row;
      }
      @include media('sm') {
        flex-direction: column;
      }
    }

    &__item {
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: -10px;
        @include media('xl') {
          margin-top: 0;
        }
      }
    }
  }

  &-left {
    grid-row: 1/5;
    display: grid;
    grid-template: auto / repeat(3, auto);
    column-gap: 26px;
    row-gap: 24px;
    @include media('xl') {
      grid-row: auto;
      grid-template: auto / repeat(5, auto);
    }
    @include media('sm') {
      grid-template: auto / repeat(2, auto);
      row-gap: 16px;
    }

    &__item {
      &:nth-child(5) {
        @include media('sm') {
          display: flex;
        }
      }

      &:nth-child(6),
      &:nth-child(7) {
        grid-column: 1/4;

      }

      &:nth-child(6) {
        @include media('sm') {
          grid-column: 1/3;
          order: 7;
        }
      }

      &:nth-child(7) {
        margin-top: -10px;
        @include media('xl') {
          grid-column: 4/6;
          margin-top: 0;
        }
        @include media('sm') {
          grid-column: 1/3;
          order: 6;
        }
      }
    }
  }

  &__title {
    color: #878787;
    white-space: nowrap;
    margin-right: 6px;
  }

  &-left {
    &__item {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        .drivers-card__name {
          font-weight: 600;
        }
      }
    }
  }

  &--gray {
    background-color: #F9F9F9;
    padding: 32px;
    border-radius: 27px;
    @include media('xl') {
      padding: 24px 16px;
    }
  }

  &-edit {
    cursor: pointer;
  }

  &__name {
    outline: none;

    &.edit-mode {
      border-bottom: 1px solid #878787;
    }
  }
}
.icon-edit {
  width: 15px;
  height: 14px;
  margin-right: 5px;
}

.drop-text {
  position: absolute;
  bottom: 24px;
  right: 45px;
  text-decoration: underline;
  @include media('sm') {
    position: static;
    margin-top: 6px;
  }
}
</style>
