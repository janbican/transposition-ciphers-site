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
      this.grille[row][col] = this.grille[row][col] === 0 ? 1 : 0
      console.log(this.grille[row][col])
    }
  }
}
</script>
