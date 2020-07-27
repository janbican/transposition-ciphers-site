<template>
  <div class="navtabs">
    <b-nav tabs>
      <b-nav-item :to="{ name: cipher + 'Description', params: { section: 'description' } }">Popis</b-nav-item>
      <b-nav-item :to="{ name: cipher + 'Convert', params: { section: 'convert' } }">Převod</b-nav-item>
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

<style scoped>
.navtabs {
  margin-bottom: 2em;
}
a {
  color: #383e56;
}
a:hover {
  color: #204051;
}
</style>
