<template>
  <div>
    <NavTabs cipher="columnar" />
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
