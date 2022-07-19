<template>
  <section class="rules-block">
    <div class="container">
      <h2>Правила работы на портале:</h2>
      <ul class="rules-list b-mt b-mb">
        <li>
          <img v-lazy-load data-src="/img/svg/regulations-icon-1.svg" alt="">
          <p>
            На&nbsp;странице &laquo;Доступные заказы&raquo; размещаются задания на&nbsp;перевозку (лоты), которые видят
            все зарегистрированные
            пользователи портала. В&nbsp;случае если лот заинтересовал пользователя, то&nbsp;пользователю нужно
            откликнуться на
            лот путем нажатия на&nbsp;кнопку &laquo;Подать заявку на&nbsp;перевозку&raquo;, после того как первый
            пользователь откликнется на
            лот, то&nbsp;администраторы ресурса в&nbsp;течении 2-х часов принимают решение по&nbsp;выбору компании
            перевозчика из
            списка компаний которые откликнулись на&nbsp;лот. По&nbsp;результатам принятого решения каждому
            откликнувшемся
            пользователю приходит уведомление о&nbsp;принятом решении.
          </p>
        </li>
        <li>
          <img v-lazy-load data-src="/img/svg/regulations-icon-2.svg" alt="">
          <p>
            После получения уведомления о&nbsp;том, что вашу компанию выбрали в&nbsp;качестве перевозчика, вам нужно в&nbsp;течении
            2-х
            часов назначить автовоз, на&nbsp;котором будет осуществляться перевозка и&nbsp;назначить Водителя, который
            будет
            осуществлять перевозку на&nbsp;выбранном автовозе и&nbsp;скачать комплект документов для перевозки. Если вы&nbsp;не&nbsp;успели
            пройти регистрацию в&nbsp;течение 2-х часов, вы&nbsp;автоматически снимаетесь с&nbsp;лота как перевозчик.
            Данный лот также
            снимается с&nbsp;публикации. Решение о&nbsp;повторном размещении лота принимается администраторами
            Портала. Ответственность за&nbsp;актуальность данных водителей и&nbsp;автовозов лежит на&nbsp;пользователях,
            которые
            являются представителями компании и&nbsp;самостоятельно заносят, и&nbsp;актуализируют данные.
          </p>
        </li>
        <li>
          <img v-lazy-load data-src="/img/svg/regulations-icon-3.svg" alt="">
          <p>
            В&nbsp;случае замены состава лота, вам нужно скачать новый комплект документов.
          </p>
        </li>
        <li>
          <img v-lazy-load data-src="/img/svg/regulations-icon-4.svg" alt="">
          <p>
            В&nbsp;случае если у&nbsp;вашей компании отсоветует возможность осуществить перевозку лота, то&nbsp;заявка
            на&nbsp;отказ
            принимается не&nbsp;позднее чем за&nbsp;24&nbsp;часа до&nbsp;плановой даты погрузки.
          </p>
        </li>
        <li>
          <img v-lazy-load data-src="/img/svg/regulations-icon-5.svg" alt="">
          <p>
            По&nbsp;лотам, по&nbsp;которым вы&nbsp;были выбраны в&nbsp;качестве перевозчика, необходимо своевременно
            вносить актуальную информацию на&nbsp;странице лота:
            Дата погрузки
            Один раз в&nbsp;сутки отмечать фактическое местонахождение автовоза как промежуточную точку маршрута.
            Устанавливать корректную дату завершения доставки автомобилей до&nbsp;каждого грузополучателя.
          </p>
        </li>
      </ul>
      <div class="s-mb">
        <a href="#">Ссылка на видеоинструкцию</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RulesBlock'
}
</script>

<style scoped lang="scss">
.rules-list {
  list-style: none;

  li {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    p {
      margin-left: 24px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .rules-list {
    li:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}

@media screen and (max-width: 767px) {
  .rules-list {
    li {
      flex-direction: column;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      p {
        margin-top: 16px;
        margin-left: 0;
      }
    }
  }
}
</style>
