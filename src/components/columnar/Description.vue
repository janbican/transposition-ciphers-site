<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Jednoduchá sloupcová transpozice</h5>
      <p class="card-text">
        <b-table striped hover :items="items"></b-table>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>
