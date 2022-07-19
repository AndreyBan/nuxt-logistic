<template>
  <div class="main-banner">
    <div class="container">
      <a href="#" class="btn btn--primary btn--w-auto">
        Условия и положения
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerBlock'
}
</script>

<style scoped lang="scss">
.main-banner {
  width: 100%;
  height: 471px;
  background: url("/img/banners/banner.jpg") 0 0/cover no-repeat;
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .btn {
    margin-bottom: 40px;
  }
}
</style>
