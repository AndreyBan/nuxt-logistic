<template>
  <div class="wrap">
    <HeaderComponent />
    <main>
      <Nuxt />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/main/HeaderComponent'
import FooterComponent from '@/components/main/FooterComponent'

export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    FooterComponent
  }

}
</script>
<style>
#__nuxt, #__layout {
  height: 100%;
}
</style>
<style scoped>
.wrap{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
