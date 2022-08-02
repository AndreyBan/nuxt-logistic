<template>
  <div>
    <BannerBlock />
    <AuthorizationBlock v-if="!isLogin" />
    <RulesBlock v-if="!isLogin" />
  </div>
</template>

<script>
import BannerBlock from '@/components/pages/main/BannerBlock'
import AuthorizationBlock from '@/components/pages/main/AuthorizationBlock'
import RulesBlock from '@/components/pages/main/RulesBlock'

export default {
  name: 'IndexPage',
  components: {
    BannerBlock,
    AuthorizationBlock,
    RulesBlock
  },
  data () {
    return {
      isLogin: this.$store.state.login.login
    }
  }
}
</script>
