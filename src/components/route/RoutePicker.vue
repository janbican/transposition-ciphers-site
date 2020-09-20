<template>
  <div>
    <b-card-group columns>
      <b-card
        v-for="route in routes"
        :key="route.text"
        :bg-variant="route === selected ? 'secondary' : 'light'"
        :text-variant="route === selected ? 'white' : 'black'"
        class="text-center"
        @click="routeClicked(route)"
      >
        <img :src="require(`@/assets/images/route/${route.img}`)" alt="" />
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
      this.$emit('change', route)
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}

.card:hover {
  opacity: 0.9;
}

img {
  width: 80%;
}
</style>
