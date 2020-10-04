<template>
  <div>
    <b-row>
      <b-col col>
        <cipher-text-area v-model="cipherText" :value="cipherText" />
        <b-button variant="outline-info" @click="solve">Prolomit</b-button>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col col>
        <label>Otevřený text (možnosti):</label>
        <div
          v-for="plainText in candidates"
          :key="plainText"
          class="candidate-container"
        >
          <p>{{ plainText }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import { loadSolveData, solve } from '@/solve/railfence-solver'

export default {
  name: 'RailFenceSolve',
  components: {
    'cipher-text-area': CipherTextArea
  },
  data() {
    return {
      cipherText: '',
      candidates: null
    }
  },
  created() {
    loadSolveData()
  },
  methods: {
    solve() {
      this.candidates = solve(this.cipherText)
    }
  }
}
</script>

<style scoped>
.candidate-container {
  padding: 1em 0 0;
  border-top: 1px solid #cccccc;
}
</style>
