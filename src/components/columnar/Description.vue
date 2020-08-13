<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Jednoduchá sloupcová transpozice</h5>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['4', '1', '2', '5', '3'],
      items: [{ 4: 'b', 1: 'y', 2: 'l', 5: 'i', 3: 'j' }]
    }
  }
}
</script>
