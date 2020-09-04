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
        <p v-for="result in results" :key="result">{{ result }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RailFenceCipher from '@/mixins/RailFenceCipher'
import CipherTextArea from '@/components/common/convert/CipherTextArea'

export default {
  name: 'RailFenceSolve',
  mixins: [RailFenceCipher],
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
        this.results.push(this.railFenceDecrypt(i, this.cipherText))
      }
    }
  }
}
</script>
