<template>
  <div class="nav-tabs">
    <b-nav tabs>
      <b-nav-item :to="{ name: cipher + 'Description' }">Popis</b-nav-item>
      <b-nav-item :to="{ name: cipher + 'Convert' }">Převod</b-nav-item>
      <b-nav-item disabled>Prolomit</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: {
    cipher: String,
  },
}
</script>

<style>
.nav-tabs {
  margin-bottom: 2em;
}
</style>
