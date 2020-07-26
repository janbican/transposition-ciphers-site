<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant="info">
    <b-container>
      <b-navbar-brand :to="{ name: 'Home' }">Transpoziční šifry</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'ColumnarDescription' }">Sloupcová</b-nav-item>
          <b-nav-item>Fleissnerova mřížka</b-nav-item>
          <b-nav-item>Myszkowskiho transpozice</b-nav-item>
          <b-nav-item>Rail Fence</b-nav-item>
          <b-nav-item>Route</b-nav-item>
          <b-nav-item>ÜBCHI</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style scoped>
.navbar {
  min-height: 80px;
}
</style>
