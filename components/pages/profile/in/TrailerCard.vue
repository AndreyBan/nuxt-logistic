<template>
  <div class="tractor-card">
    <div class="tractor-card-item">
      <p class="tractor-card__title" :class="{'tractor-card__title--edit': edit}">
        {{ dataCard.model.title }}:
      </p>
      <div v-if="edit" class="v-select-form">
        <v-select
          v-model="dataCard.model.value"
          placeholder="Модель тягача"
          :searchable="false"
          :clearable="false"
          :options="dataCard.options"
        >
          <template #no-options>
            Ничего не найдено
          </template>
        </v-select>
      </div>
      <p
        v-else
        class="tractor-card__name"
      >
        {{ dataCard.model.value }}
      </p>
    </div>
    <div class="tractor-card-item">
      <p class="tractor-card__title">
        {{ dataCard.number.title }}:
      </p>
      <p
        class="tractor-card__name"
        :class="{'edit-mode': edit}"
        :contenteditable="edit"
        @change="dataCard.number.value = $event.target.innerText"
      >
        {{ dataCard.number.value }}
      </p>
    </div>
    <div class="tractor-card-edit" @click="edit = !edit">
      <div v-if="!edit">
        <ShowSvg id="icon-edit" />
        Редактировать
      </div>
      <div v-else class="btn btn--secondary">
        Сохранить изменения
      </div>
      <div v-if="!!dataCard.newCard && edit" class="btn btn--primary" @click="cancelAdd">
        Отменить
      </div>
    </div>
    <ToggleSwitch v-model="dataCard.actual" :label="dataCard.actual ? 'Актуален' : 'Не актуален'" />
  </div>
</template>

<script>
import ToggleSwitch from '@/components/style-guide/ToggleSwitch'
import ShowSvg from '@/components/helpers/ShowSvg'
// TODO: Подумать как привести к одному компоненту с TractorsCard
export default {
  name: 'TractorCard',
  components: {
    ToggleSwitch,
    ShowSvg
  },
  props: {
    tractorData: {
      type: Object,
      default () {
        return {
          model: {
            title: 'Модель прицепа',
            value: ''
          },
          number: {
            title: 'Гос номер прицепа',
            value: ''
          },
          options: [
            '1/43 Mercedes-Benz Actros',
            '1/43 Mercedes-Benz Actros 2',
            '1/43 Mercedes-Benz Actros 3'
          ],
          actual: true,
          newCard: true
        }
      }
    }
  },
  data () {
    return {
      edit: !!this.tractorData.newCard,
      dataCard: this.tractorData
    }
  },
  methods: {
    cancelAdd () {
      this.edit = false
      this.$emit('cancel')
    }
  }
}
</script>
<style lang="scss">
.v-select-form {
  .vs__selected {
    padding-left: 17px;
    width: 100%;
  }
  .vs__selected-options {
    flex-wrap: nowrap;
  }
  .vs__search {
    padding-left: 20px;
  }
  .vs--open:not(.vs--searchable) .vs__search {
    transform: translateY(0);
    opacity: 0;
  }
}
</style>

<style scoped lang="scss">
.v-select-form {
  min-width: 290px;
  width: 100%;
  @include media('xs') {
    min-width: auto;
  }
}

.tractor-card {
  border: 1px solid #C4C4C4;
  border-radius: 38px;
  padding: 40px 78px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 42px;
  row-gap: 30px;
  align-items: center;
  justify-content: space-between;
  @include media('xl') {
    column-gap: 0;
    display: grid;
    grid-template: auto/auto auto;
    padding: 24px 45px;
    row-gap: 28px;
  }
  @include media('xs') {
    padding: 24px 16px;
    grid-template: auto/1fr;
    row-gap: 24px;
  }
  &__name {
    outline: none;
    &.edit-mode {
      border-bottom: 1px solid #878787;
    }
  }
  &-item {
    max-width: 50%;
    @include media('xl') {
      max-width: none;
    }
  }

  &__title {
    color: #878787;

    &--edit {
      font-size: 12px;
      color: #CCCCCC;
      margin-left: 24px;
    }
  }

  &-edit {
    cursor: pointer;
    display: flex;
    @include media('xs') {
      display: block;
    }
    .btn--primary {
      margin-left: 16px;
      @include media('xs') {
        margin-left: 0;
        margin-top: 24px;
      }
    }
  }
}

.icon-edit {
  width: 15px;
  height: 14px;
  margin-right: 5px;
}

.btn {
  white-space: nowrap;
  @include media('xl') {
    width: 211px;
  }
}
</style>
