<template>
  <div class="grille">
    <size-input
      v-model.number="size"
      :value="size"
      label="Velikost mřížky"
      invalidFeedback="Velikost mřížky musí být alespoň 4"
      :isValid="isSizeValid"
      @valueChanged="sizeChanged"
    />

    <div v-show="isSizeValid" class="mt-5">
      <label>Mřížka</label>
      <div class="grille-grid">
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
      size: 5,
      count: 0,
      grille: null
    }
  },
  created: function() {
    this.grille = this.createFreshGrille()
  },
  methods: {
    sizeChanged() {
      this.grille = this.createFreshGrille()
      this.count = 0

      this.$emit('change', null)
    },

    createFreshGrille() {
      const grille = []
      for (let i = 0; i < this.size; i++) {
        grille.push(new Array(this.size).fill(0))
      }

      if (this.size % 2 == 1) {
        const middle = Math.floor(this.size / 2)
        grille[middle][middle] = 2
      }

      return grille
    },

    cellClicked(row, col) {
      const value = this.grille[row][col]
      if (value === 0) {
        this.cutCellOut(row, col)
        this.count += 1
      } else if (value == 1) {
        this.fillCell(row, col)
        this.count -= 1
      }

      this.$emit('change', this.isComplete() ? this.grille : null)
    },

    isComplete() {
      return Math.floor((this.size * this.size) / 4) === this.count
    },

    cutCellOut(row, col) {
      this.grille[row][col] = 1
      this.grille[col][this.size - 1 - row] = 2
      this.grille[this.size - 1 - row][this.size - 1 - col] = 2
      this.grille[this.size - 1 - col][row] = 2

      // pro spustění automatické detekce změny
      // z důvodu překreslení mřížky
      this.$set(this.grille[row], col, 1)
    },

    fillCell(row, col) {
      this.grille[row][col] = 0
      this.grille[col][this.size - 1 - row] = 0
      this.grille[this.size - 1 - row][this.size - 1 - col] = 0
      this.grille[this.size - 1 - col][row] = 0

      // pro spustění automatické detekce změny
      // z důvodu překreslení mřížky
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

<style scoped>
table {
  margin: 0 auto;
}
</style>
