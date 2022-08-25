<template>
  <section class="s-mt">
    <div class="container">
      <div class="profile-title-wrap">
        <h1>
          Настройка профиля
        </h1>
        <ShowSvg id="icon-info" @click="visibilityTooltip" />
        <div v-show="showTooltip" class="push-info">
          Уважаемые представители компании ООО «Крылатый Автовоз»! Для редактирования данных вы можете оставить
          обращение на: <b>+7 (910)106-66-65, logist1@agatgroup.com</b>
        </div>
      </div>
      <div class="b-mt b-mb">
        <TabsComponent :content-data="tabs">
          <template #content-0>
            <OrganizationData />
          </template>
          <template #content-1>
            <DriversData />
          </template>
          <template #content-2>
            <TractorsData />
          </template>
          <template #content-3>
            <TrailersData />
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
import TractorsData from '@/components/pages/profile/TractorsData'
import TrailersData from '@/components/pages/profile/TrailersData'
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'ProfilePage',
  components: {
    DriversData,
    TabsComponent,
    OrganizationData,
    TractorsData,
    TrailersData,
    ShowSvg
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
        },
        1232: {
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
          actual: true
        }
      },
      tractors: {
        123: {
          model: {
            title: 'Модель тягача',
            value: '1/43 Mercedes-Benz Actros'
          },
          number: {
            title: 'Гос номер тягача',
            value: 'А777АА 152'
          },
          options: [
            '1/43 Mercedes-Benz Actros',
            '1/43 Mercedes-Benz Actros 2',
            '1/43 Mercedes-Benz Actros 3'
          ],
          actual: false
        },
        124: {
          model: {
            title: 'Модель тягача',
            value: '1/43 Mercedes-Benz Actros'
          },
          number: {
            title: 'Гос номер тягача',
            value: 'А777АВ 152'
          },
          options: [
            '1/43 Mercedes-Benz Actros',
            '1/43 Mercedes-Benz Actros 2',
            '1/43 Mercedes-Benz Actros 3'
          ],
          actual: true
        }
      },
      trailers: {
        123: {
          model: {
            title: 'Модель прицепа',
            value: '1/43 Mercedes-Benz Actros'
          },
          number: {
            title: 'Гос номер прицепа',
            value: 'А777АА 152'
          },
          options: [
            '1/43 Mercedes-Benz Actros',
            '1/43 Mercedes-Benz Actros 2',
            '1/43 Mercedes-Benz Actros 3'
          ],
          actual: false
        },
        124: {
          model: {
            title: 'Модель прицепа',
            value: '1/43 Mercedes-Benz Actros'
          },
          number: {
            title: 'Гос номер прицепа',
            value: 'А777АВ 152'
          },
          options: [
            '1/43 Mercedes-Benz Actros',
            '1/43 Mercedes-Benz Actros 2',
            '1/43 Mercedes-Benz Actros 3'
          ],
          actual: true
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
      ],
      showTooltip: false
    }
  },
  methods: {
    overClick (e) {
      if (this.showTooltip && !e.target.closest('.push-info')) {
        this.closeNotify()
      }
    },
    visibilityTooltip () {
      if (!this.showTooltip) {
        this.showTooltip = true
        setTimeout(() => {
          document.addEventListener('click', this.overClick)
          window.addEventListener('touchmove', this.overClick)
        })
      }
    },
    closeNotify () {
      document.removeEventListener('click', this.overClick)
      window.removeEventListener('touchmove', this.overClick)
      this.showTooltip = false
    }
  }
}
</script>

<style scoped lang="scss">
.profile-title-wrap {
  display: inline-flex;
  align-items: center;
  position: relative;
}

.icon-info {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 14px;
}
.push-info {
  position: absolute;
  background-color: #FFF;
  padding: 28px 24px;
  border-radius: 29px;
  width: 359px;
  box-shadow: 0 0 23px rgba(0, 0, 0, 0.14);
  margin-top: 24px;
  z-index: 1;
  opacity: 1;
  right: -169px;
  top: 28px;
  transition-duration: .3s;
  @include media('xs') {
    width: 290px;
    right: -52px;
    top: 20px;
  }
  &-hide {
    opacity: 0;
  }
  &:after {
    content: '';
    position: absolute;
    top: -14px;
    left: calc(50% - 28px);
    display: block;
    width: 56px;
    height: 26px;
    background: url("/img/svg/tooltip-triangle.svg") 0 0 no-repeat;
    background-size: 56px;
    @include media('xs') {
      left: 69%;
    }
  }
}
</style>
