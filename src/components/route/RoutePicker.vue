<template>
  <div>
    <b-card-group columns>
      <b-card
        v-for="route in routes"
        :key="route.text"
        bg-variant="dark"
        text-variant="white"
        class="text-center selected"
        @click="routeClicked(route)"
      >
        {{ route.text }}
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'RoutePicker',
  props: {
    selected: Object,
    routes: Array
  },
  methods: {
    routeClicked(route) {
      console.log(route)
    }
  }
}
</script>

<style scoped>
.card-body {
  cursor: pointer;
}

.card-body:hover {
  opacity: 0.8;
}

.selected {
  background-color: tomato;
}
</style>
