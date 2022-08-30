<template>
  <div class="container">
    <h1 class="s-mt">
      Заказы в работе
    </h1>
    <DoneLots />
  </div>
</template>

<script>
import DoneLots from '@/components/lots/DoneLots'

export default {
  name: 'DoneOrder',
  components: {
    DoneLots
  }
}
</script>

<style scoped>

</style>
