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
    activeClass() {
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
  background: #dddddd;
  border: 1px solid #999999;
  cursor: pointer;
}

td:hover {
  opacity: 0.8;
}

.activated {
  background-color: white;
}

.deactivated {
  background-color: #9b6667;
}
</style>
