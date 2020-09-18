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
        <p v-for="result in results" :key="result.key">
          Klíč: {{ result.key }} | {{ result.text }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import { decrypt } from '@/ciphers/RailFence'

export default {
  name: 'RailFenceSolve',
  components: {
    'cipher-text-area': CipherTextArea
  },
  data() {
    return {
      cipherText: '',
      results: null
    }
  },
  methods: {
    solve() {
      this.results = []
      for (let i = 2; i < this.cipherText.length; i++) {
        const result = { key: i, text: decrypt(i, this.cipherText) }
        this.results.push(result)
      }
    }
  }
}
</script>
