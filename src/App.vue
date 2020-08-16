<template>
  <div id="app">
    <NavBar />
    <b-container class="content">
      <router-view />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/app/NavBar'
import Footer from '@/components/app/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}

.content {
  padding: 2em 0;
}
input:focus,
textarea:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
footer {
  text-align: center;
  padding: 1em;
}
</style>
