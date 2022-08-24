<template>
  <div class="tractor-card">
    <div class="tractor-card-item">
      <p class="tractor-card__title">
        {{ dataCard.model.title }}:
      </p>
      <p
        class="tractor-card__name"
        :class="{'edit-mode': edit}"
        :contenteditable="edit"
        @change="dataCard.model.value = $event.target.innerText"
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
    </div>
    <ToggleSwitch v-model="dataCard.actual" :label="dataCard.actual ? 'Актуален' : 'Не актуален'" />
  </div>
</template>

<script>
import ToggleSwitch from '@/components/style-guide/ToggleSwitch'
import ShowSvg from '@/components/helpers/ShowSvg'

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
            title: 'Модель',
            value: ''
          },
          number: {
            title: 'Гос номер тягача',
            value: ''
          },
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
  }
}
</script>

<style scoped lang="scss">
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

  &__title {
    color: #878787;
  }
  &-edit {
    cursor: pointer;
  }
}

.icon-edit {
  width: 15px;
  height: 14px;
  margin-right: 5px;
}

.btn {
  white-space: nowrap;
}
</style>
