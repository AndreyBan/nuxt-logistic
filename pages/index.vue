<template>
  <div>
    <BannerBlock />
    <AuthorizationBlock />
    <RulesBlock />
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
  }
}
</script>
