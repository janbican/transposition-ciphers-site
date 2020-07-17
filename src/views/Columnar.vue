<template>
  <div>
    <NavTabs />
    <router-view />
  </div>
</template>

<script>
import NavTabs from "../components/columnar/NavTabs";

export default {
  components: {
    NavTabs,
  },
};
</script>

<style></style>
