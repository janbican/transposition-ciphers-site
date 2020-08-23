<template>
  <b-navbar toggleable="lg" type="dark">
    <b-container>
      <b-navbar-brand :to="{ name: 'home' }">Transpoziční šifry</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'columnar' }">Sloupcová</b-nav-item>
          <b-nav-item :to="{ name: 'railfence' }">Rail Fence</b-nav-item>
          <b-nav-item :to="{ name: 'ubchi' }">ÜBCHI</b-nav-item>
          <b-nav-item>Myszkowskiho</b-nav-item>
          <b-nav-item>Route</b-nav-item>
          <b-nav-item>Fleissnerova</b-nav-item>
          <b-nav-item></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

.navbar {
  min-height: 80px;
  background-color: #679b9b;
}

.navbar-brand {
  font-family: 'Josefin Sans', sans-serif;
}

.navbar-collapse {
  justify-content: flex-end;
}
</style>
