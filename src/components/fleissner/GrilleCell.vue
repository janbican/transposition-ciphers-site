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
  data() {
    return {
      //activeClass: ''
    }
  },
  methods: {
    click() {
      this.$emit('click', this.row, this.col)
      //this.activeClass = this.calcActiveClass()
    }
    // calcActiveClass() {
    //   const value = this.grille[this.row][this.col]
    //   if (value === 0) return ''
    //   return value === 1 ? 'activated' : 'deactivated'
    // }
  },
  computed: {
    activeClass: function() {
      console.log('calcActiveClass')
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
