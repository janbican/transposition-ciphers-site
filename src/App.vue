<template>
  <div id="app">
    <NavBar />
    <b-container class="content">
      <b-row class="justify-content-md-center">
        <b-col col md="10">
          <router-view />
        </b-col>
      </b-row>
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
