<template>
  <div class="nav-tabs">
    <b-nav tabs>
      <b-nav-item :to="{ name: 'ColumnarDescription' }">Popis</b-nav-item>
      <b-nav-item :to="{ name: 'ColumnarConvert' }">Převod</b-nav-item>
      <b-nav-item disabled>Prolomení</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-tabs {
  margin-bottom: 2em;
}
</style>
