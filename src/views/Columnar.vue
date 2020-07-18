<template>
  <div>
    <NavTabs cipher="Columnar" />
    <router-view />
  </div>
</template>

<script>
import NavTabs from '@/components/common/NavTabs'

export default {
  components: {
    NavTabs,
  },
}
</script>
