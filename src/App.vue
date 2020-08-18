<template>
  <div id="app">
    <NavBar />
    <b-container class="content">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/app/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
</style>
