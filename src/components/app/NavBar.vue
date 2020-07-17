<template>
  <b-navbar variant="light">
    <b-container>
      <b-navbar-brand :to="{ name: 'Home' }">Transpoziční šifry</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Columnar' }">Sloupcová</b-nav-item>
          <b-nav-item>Rail Fence</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
