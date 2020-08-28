<template>
  <td :class="activeClass" @click="click"></td>
</template>

<script>
export default {
  name: 'GrilleCell',
  props: {
    grille: Array,
    row: Number,
    col: Number
  },
  methods: {
    click() {
      this.$emit('click', this.row, this.col)
    }
  },
  computed: {
    activeClass: function() {
      //console.log('activeClass: ' + this.row + ' ' + this.col)
      const value = this.grille[this.row][this.col]
      if (value === 0) return ''
      return value === 1 ? 'activated' : 'deactivated'
    }
  }
}
</script>

<style scoped>
td {
  width: 50px;
  height: 50px;
  background-color: gray;
  border: 2px solid black;
  cursor: pointer;
}

td:hover {
  opacity: 0.8;
}

.activated {
  background-color: white;
}

.deactivated {
  background-color: tomato;
}
</style>
