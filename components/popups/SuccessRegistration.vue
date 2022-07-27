<template>
  <div class="popup-success">
    <h3 class="e-big-mb">
      Благодарим вас за заполнение формы регистрации!
    </h3>
    <p>
      В ближайшее время с вами свяжется наш специалист для уточнения информации и оформления договора.
      После заключения договора отправим вам на E-mail логин и пароль для входа
    </p>
  </div>
</template>

<script>
export default {
  name: 'AuthComponent'
}
</script>

<style scoped lang="scss">
.popup-success {
  text-align: center; padding: 56px 100px;
}
</style>
