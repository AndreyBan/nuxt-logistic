<template>
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer-top">
        <div class="footer-logo">
          <img v-lazy-load data-src="/img/svg/logo-footer.svg" alt="footer-logo">
        </div>
        <nav>
          <ul class="footer-menu">
            <li>
              <a href="#">Доступные заказы</a>
            </li>
            <li>
              <a href="#">Заказы на рассмотрении</a>
            </li>
            <li>
              <a href="#">Мои заказы</a>
            </li>
            <li>
              <a href="#">Условия и положения</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="main-footer-bottom b-mt">
        <ul class="main-footer-bottom__list">
          <li>
            © ООО «ТД «Агат» 2008—2022
            <br>
            Все права защищены
          </li>
          <li>
            Обратная связь
            <br>
            <a href="mailto:feedback@agatgroup.com">feedback@agatgroup.com</a>
          </li>
          <li>
            <a href="#">
              Защита персональных данных
              <br>
              Юридическая информация
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped lang="scss">
.main-footer {
  background-color: #454545;
  padding: 40px 0;
}

.main-footer-top {
  display: grid;
  grid-template: 1fr / auto 65%;
  align-items: center;
  justify-content: space-between;
}

.footer-menu {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  a {
    color: #FFF;
    text-decoration: none;
  }
}

.main-footer-bottom__list {
  display: flex;
  justify-content: space-between;
  max-width: 719px;
  padding: 0;
  list-style: none;

  li {
    color: #B3B3B3;

    a {
      color: #B3B3B3;
      text-decoration: none;
    }
  }
}
@media screen and (max-width: 991px){
  .main-footer-top {
    grid-template: 1fr / auto 80%;
  }
}
@media screen and (max-width: 768px){
  .main-footer-top {
    grid-template: 1fr / auto 78%;
  }
}
@media screen and (max-width: 767px){
  .main-footer-top,
  .footer-menu,
  .main-footer-bottom__list {
    display: block;
  }
  .main-footer-bottom__list {
    li:not(:last-child) {
      margin-bottom: 14px;
    }
  }
  .footer-menu {
    li:not(:last-child) {
      margin-bottom: 14px;
    }
  }
}
</style>
