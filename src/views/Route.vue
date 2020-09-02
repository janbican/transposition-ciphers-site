<template>
  <div>
    <NavTabs cipher="route" />
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
