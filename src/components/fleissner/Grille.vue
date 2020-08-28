<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(row, rowIndex) in grille" :key="rowIndex">
          <grille-cell
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            :grille="grille"
            :row="rowIndex"
            :col="cellIndex"
            @click="cellClicked"
          ></grille-cell>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import GrilleCell from '@/components/fleissner/GrilleCell'

export default {
  name: 'Grille',
  components: {
    'grille-cell': GrilleCell
  },
  props: {
    size: Number
  },
  data() {
    return {
      grille: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    }
  },
  methods: {
    cellClicked(row, col) {
      console.log(row, col)

      const value = this.grille[row][col]
      if (value == 0) {
        this.cutOut(row, col)
      } else if (value == 1) {
        this.fill(row, col)
      }
    },

    cutOut(row, col) {
      const size = this.grille.length

      this.grille[row][col] = 1
      //this.$set(this.grille[col], size - 1 - row, 2)
      this.grille[col][size - 1 - row] = 2
      this.grille[size - 1 - row][size - 1 - col] = 2
      this.grille[size - 1 - col][row] = 2

      this.$set(this.grille[row], col, 1)
    },

    fill(row, col) {
      const size = this.grille.length

      this.grille[row][col] = 0
      this.grille[col][size - 1 - row] = 0
      this.grille[size - 1 - row][size - 1 - col] = 0
      this.grille[size - 1 - col][row] = 0

      this.$set(this.grille[row], col, 0)
    }
  }
}
</script>
