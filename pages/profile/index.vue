<template>
  <section class="s-mt">
    <div class="container">
      <h1>Настройка профиля</h1>
      <div class="b-mt b-mb">
        <TabsComponent :content-data="tabs">
          <template #content-0>
            <OrganizationData />
          </template>
          <template #content-1>
            <DriversData />
          </template>
        </TabsComponent>
      </div>
    </div>
  </section>
</template>

<script>
import { mixinTabs } from '@/mixins/TabsMixins'
import TabsComponent from '@/components/style-guide/TabsComponent'
import OrganizationData from '@/components/pages/profile/OrganizationData'
import DriversData from '@/components/pages/profile/DriversData'

export default {
  name: 'ProfilePage',
  components: {
    DriversData,
    TabsComponent,
    OrganizationData
  },
  mixins: [mixinTabs],
  provide () {
    return {
      driverCards: {
        1231: {
          mainData: {
            surname: {
              title: 'Фамилия',
              value: 'Иванов'
            },
            name: {
              title: 'Имя',
              value: 'Иван'
            },
            patronymic: {
              title: 'Отчество',
              value: 'Константинович'
            },
            birthday: {
              title: 'Дата рождения',
              value: '03.06.1987'
            },
            nationality: {
              title: 'Гражданство',
              value: 'РФ'
            },
            address: {
              title: 'Адрес прописки',
              value: 'обл. Нижегородская, г. Нижний Новгород, р-н Московский, ул. Бурнаковская, д. 117, кв. 29'
            },
            phone: {
              title: 'Контактный телефон',
              value: '+7 (930) 777-777'
            }
          },
          passport: {
            serial: {
              title: 'Серия',
              value: '22 22'
            },
            number: {
              title: 'Номер',
              value: '233743'
            },
            date: {
              title: 'Дата выдачи',
              value: '05.10.2012'
            },
            organization: {
              title: 'Кем выдан',
              value: 'ГУ МВД по Нижегородской обл.'
            }
          },
          driversLicense: {
            number: {
              title: 'Номер',
              value: '22 22 353567'
            },
            date: {
              title: 'Дата выдачи',
              value: '05.10.2012'
            }
          },
          actual: false
        }
      }
    }
  },
  data () {
    return {
      tabs: [
        'Данные организации',
        'Водители',
        'Тягачи',
        'Прицепы'
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
