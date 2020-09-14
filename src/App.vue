<template>
  <div id="app">
    <NavBar />
    <section>
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col col md="10">
            <router-view />
          </b-col>
        </b-row>
      </b-container>
    </section>
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
