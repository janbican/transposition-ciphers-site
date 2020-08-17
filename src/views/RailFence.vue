<template>
  <div>
    <NavTabs cipher="railfence" />
    <router-view />
  </div>
</template>

<script>
import NavTabs from '@/components/common/NavTabs'

export default {
  components: {
    NavTabs
  }
}
</script>
