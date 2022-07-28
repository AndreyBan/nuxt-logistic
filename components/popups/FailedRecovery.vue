<template>
  <div class="popup-success">
    <p>
      По введенному адресу электронной почты отсутствуют регистрационные данные. Попробуйте восстановить доступ используя другой адрес или пройдите регистрацию
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
