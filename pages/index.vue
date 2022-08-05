<template>
  <div>
    <BannerBlock />
    <AuthorizationBlock v-if="!isLogin" />
    <RulesBlock v-if="!isLogin" />
    <ListLots v-else />
  </div>
</template>

<script>
import BannerBlock from '@/components/pages/main/BannerBlock'
import AuthorizationBlock from '@/components/pages/main/AuthorizationBlock'
import RulesBlock from '@/components/pages/main/RulesBlock'
import ListLots from '@/components/main/in/ListLots'

export default {
  name: 'IndexPage',
  components: {
    BannerBlock,
    AuthorizationBlock,
    RulesBlock,
    ListLots
  },
  computed: {
    isLogin () {
      return this.$store.state.login.login
    }
  }
}
</script>
