<template>
  <div>
    <BannerBlock />
    <AuthorizationBlock v-if="!isLogin" />
    <RulesBlock v-if="!isLogin" />
    <LotsMain v-else />
  </div>
</template>

<script>
import BannerBlock from '@/components/pages/main/BannerBlock'
import AuthorizationBlock from '@/components/pages/main/AuthorizationBlock'
import RulesBlock from '@/components/pages/main/RulesBlock'
import LotsMain from '@/components/main/in/LotsMain'

export default {
  name: 'IndexPage',
  components: {
    BannerBlock,
    AuthorizationBlock,
    RulesBlock,
    LotsMain
  },
  computed: {
    isLogin () {
      return this.$store.state.login.login
    }
  }
}
</script>
