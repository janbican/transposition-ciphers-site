<template>
  <div class="convert">
    <b-row class="mb-3">
      <b-col>
        <multiple-key-input
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
        <b-col col lg="6" class="text-center">
          <b-button
            v-if="!isTableDisplayed"
            variant="outline-info"
            @click="displayTable"
            >Ukázat šifrovací tabulky</b-button
          >
          <div v-else>
            <h5>tabulka první transpozice</h5>
            <columnar-table
              :keyValue="keyWithoutSpaces"
              :keyPermutation="keyPermutation"
              :isValid="isKeyValueValid"
              :text="plainText"
            />
            <h5>tabulka druhé transpozice</h5>
            <columnar-table
              :keyValue="keyWithoutSpaces"
              :keyPermutation="keyPermutation"
              :isValid="isKeyValueValid"
              :text="partCipherText"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import UbchiCipher from '@/mixins/UbchiCipher'
import KeyPermutations from '@/mixins/KeyPermutations'
import MultipleKeyInput from '@/components/common/convert/MultipleKeyInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import ColumnarTable from '@/components/columnar/ColumnarTable'

export default {
  name: 'UchiConvert',
  mixins: [UbchiCipher, KeyPermutations],
  components: {
    'multiple-key-input': MultipleKeyInput,
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
      cipherText: '',
      partCipherText: ''
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
      const encryptResult = this.ubchiEncrypt(
        this.keyPermutation,
        this.numOfKeyWords,
        this.plainText
      )
      this.partCipherText = encryptResult[0]
      this.cipherText = encryptResult[1]
    },
    decrypt() {
      this.isTableDisplayed = this.cipherText.length < 200
      const decryptResult = this.ubchiDecrypt(
        this.keyPermutation,
        this.numOfKeyWords,
        this.cipherText
      )
      this.partCipherText = decryptResult[0]
      this.plainText = decryptResult[1]
    },
    displayTable() {
      const message = 'Zobrazení může chvíli trvat. Pokračovat?'
      if (confirm(message)) {
        this.isTableDisplayed = true
      }
    }
  },
  computed: {
    keyArray: function() {
      return this.keyValue.trim().split(' ')
    },
    keyWithoutSpaces: function() {
      return this.keyArray.join('')
    },
    numOfKeyWords: function() {
      return this.keyArray.length
    },
    keyPermutation: function() {
      return this.getKeyPermutation(this.keyWithoutSpaces)
    },
    isKeyValueValid: function() {
      return this.keyWithoutSpaces.length > 1
    }
  }
}
</script>

<style scoped>
h5 {
  margin-top: 1em;
}
</style>
