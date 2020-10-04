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
            v-if="!areTablesVisible"
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
import MultipleKeyInput from '@/components/common/convert/MultipleKeyInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import ColumnarTable from '@/components/columnar/ColumnarTable'

import { ubchi } from 'transposition-ciphers'
import { keyPermutation } from 'transposition-ciphers'

export default {
  name: 'UchiConvert',
  components: {
    'multiple-key-input': MultipleKeyInput,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea,
    'columnar-table': ColumnarTable
  },
  data() {
    return {
      isEncrypting: true,
      areTablesVisible: true,
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
      const [partCipherText, cipherText] = ubchi.encryptByPermutation(
        this.keyPermutation,
        this.plainText,
        { numOfWords: this.numOfKeyWords, normalize: false }
      )
      this.partCipherText = partCipherText
      this.cipherText = cipherText
      this.tryDisplayTable()
    },
    decrypt() {
      const [partCipherText, plainText] = ubchi.decryptByPermutation(
        this.keyPermutation,
        this.cipherText,
        { numOfWords: this.numOfKeyWords, normalize: false }
      )
      this.partCipherText = partCipherText
      this.plainText = plainText
      this.tryDisplayTable()
    },
    tryDisplayTable() {
      this.areTablesVisible = this.plainText.length < 200
    },
    displayTable() {
      const message = 'Zobrazení může chvíli trvat. Pokračovat?'
      if (confirm(message)) this.areTablesVisible = true
    }
  },
  computed: {
    // pole s jednotlivými slovy klíče
    keyArray() {
      return this.keyValue.trim().split(' ')
    },
    keyWithoutSpaces() {
      return this.keyArray.join('')
    },
    numOfKeyWords() {
      return this.keyArray.length
    },
    keyPermutation() {
      return keyPermutation(this.keyWithoutSpaces, { normalize: false })
    },
    isKeyValueValid() {
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
