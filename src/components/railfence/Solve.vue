<template>
  <div>
    <b-row>
      <b-col col>
        <cipher-text-area v-model="cipherText" :value="cipherText" />
        <b-button variant="outline-info" @click="solve">Solve</b-button>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col col>
        <p>otevřený text: {{ this.plainText }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import { load, solve } from '@/solve/RailFenceSolver'

export default {
  name: 'RailFenceSolve',
  components: {
    'cipher-text-area': CipherTextArea
  },
  data() {
    return {
      cipherText: '',
      plainText: ''
    }
  },
  created() {
    load()
  },
  methods: {
    solve() {
      this.plainText = solve(this.cipherText)
    }
  }
}
</script>
