<template>
  <div>
    <b-row class="mb-3">
      <b-col>
        <size-input
          v-model.number="size"
          :value="size"
          :minimum="4"
          :isValid="isSizeValid"
          @valueChanged="sizeChanged"
        />
      </b-col>
    </b-row>

    <div v-show="isSizeValid">
      <b-row class="mb-3">
        <b-col>
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
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import KeyNumberInput from '@/components/common/convert/KeyNumberInput'
import GrilleCell from '@/components/fleissner/GrilleCell'

export default {
  name: 'Grille',
  components: {
    'grille-cell': GrilleCell,
    'size-input': KeyNumberInput
  },
  data() {
    return {
      size: 4,
      grille: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    }
  },
  methods: {
    sizeChanged() {
      console.log(this.size)
      const newGrille = []
      for (let i = 0; i < this.size; i++) {
        newGrille.push(new Array(this.size).fill(0))
      }
      this.grille = newGrille
    },

    cellClicked(row, col) {
      const value = this.grille[row][col]

      console.log(row, col, value)

      if (value == 0) {
        this.cutOut(row, col)
      } else if (value == 1) {
        this.fill(row, col)
      }
    },

    cutOut(row, col) {
      this.grille[row][col] = 1
      //this.$set(this.grille[col], size - 1 - row, 2)
      this.grille[col][this.size - 1 - row] = 2
      this.grille[this.size - 1 - row][this.size - 1 - col] = 2
      this.grille[this.size - 1 - col][row] = 2

      this.$set(this.grille[row], col, 1)
    },

    fill(row, col) {
      this.grille[row][col] = 0
      this.grille[col][this.size - 1 - row] = 0
      this.grille[this.size - 1 - row][this.size - 1 - col] = 0
      this.grille[this.size - 1 - col][row] = 0

      this.$set(this.grille[row], col, 0)
    }
  },
  computed: {
    isSizeValid: function() {
      return this.size >= 4
    }
  }
}
</script>
