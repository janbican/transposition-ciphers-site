<template>
  <div class="convert">
    <b-row class="mb-3">
      <b-col>
        <key-input
          v-model="keyValue"
          :value="keyValue"
          :isValid="isKeyValueValid"
          @valueChanged="keyValueChanged"
        />
      </b-col>
    </b-row>

    <div v-show="isKeyValueValid">
      <b-row>
        <b-col lg="6">
          <plain-text-area
            v-model="plainText"
            :value="plainText"
            @valueChanged="plainTextChanged"
          />
        </b-col>

        <b-col lg="6">
          <cipher-text-area
            v-model="cipherText"
            :value="cipherText"
            @valueChanged="cipherTextChanged"
          />
        </b-col>
      </b-row>

      <b-row class="justify-content-md-center mt-5">
        <b-col col md="4" class="text-center">
          <b-button
            v-if="!isTableDisplayed"
            variant="outline-info"
            @click="displayTable"
            >Ukázat šifrovací tabulku</b-button
          >
          <div v-else>
            <h5>šifrovací tabulka</h5>
            <columnar-table
              :keyValue="keyValue"
              :keyPermutation="keyPermutation"
              :isValid="isKeyValueValid"
              :text="plainText"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ColumnarCipher from '@/mixins/ColumnarCipher'
import KeyPermutations from '@/mixins/KeyPermutations'
import KeyInput from '@/components/common/convert/KeyInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import ColumnarTable from '@/components/columnar/ColumnarTable'

export default {
  name: 'ColumnarConvert',
  mixins: [ColumnarCipher, KeyPermutations],
  components: {
    'key-input': KeyInput,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea,
    'columnar-table': ColumnarTable
  },
  data() {
    return {
      isEncrypting: true,
      isTableDisplayed: true,
      keyValue: '',
      plainText: '',
      cipherText: ''
    }
  },
  methods: {
    keyValueChanged() {
      if (this.isKeyValueValid) {
        if (this.isEncrypting) this.encrypt()
        else this.decrypt()
      }
    },
    plainTextChanged() {
      this.isEncrypting = true
      this.encrypt()
    },
    cipherTextChanged() {
      this.isEncrypting = false
      this.decrypt()
    },
    encrypt() {
      this.isTableDisplayed = this.plainText.length < 200
      this.cipherText = this.columnarEncrypt(
        this.keyPermutation,
        this.plainText
      )
    },
    decrypt() {
      this.isTableDisplayed = this.cipherText.length < 200
      this.plainText = this.columnarDecrypt(
        this.keyPermutation,
        this.cipherText
      )
    },
    displayTable() {
      const message = 'Zobrazení může chvíli trvat. Pokračovat?'
      if (confirm(message)) {
        this.isTableDisplayed = true
      }
    }
  },
  computed: {
    keyPermutation: function() {
      return this.getKeyPermutation(this.keyValue)
    },
    isKeyValueValid: function() {
      return this.keyValue.length > 1
    }
  }
}
</script>

<style scoped>
h5 {
  text-align: center;
  border-bottom: 0;
  font-weight: 400;
}
</style>
