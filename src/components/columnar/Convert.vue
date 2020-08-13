<template>
  <div>
    <b-row>
      <b-col col lg="6">
        <b-form-group
          description="2 a více malých písmen"
          label="Klíč"
          label-for="key"
        >
          <b-form-input
            id="key"
            v-model="keyValue"
            type="text"
            autocomplete="off"
            @keyup="keyValueChanged"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="6">
        <b-form-group
          description="text obsahující malá písmena"
          label="Otevřený text"
          label-for="plainText"
        >
          <b-form-textarea
            id="plainText"
            v-model="plainText"
            placeholder="zadej otevřený text"
            rows="5"
            @keyup="plainTextChanged"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
      <b-col lg="6">
        <b-form-group
          description="text obsahující malá písmena"
          label="Šifrovaný text"
          label-for="cipherText"
        >
          <b-form-textarea
            id="cipherText"
            v-model="cipherText"
            placeholder="zadej šifrovaný text"
            rows="5"
            @keyup="cipherTextChanged"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-table striped hover :items="tableData"></b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import columnarCipher from '@/mixins/columnarCipher'

export default {
  name: 'Columnar',
  mixins: [columnarCipher],
  data() {
    return {
      keyValue: '',
      plainText: '',
      cipherText: '',
      tableData: []
    }
  },
  // computed: {
  //   tableData() {
  //     const keyPermutation = this.getKeyPermutation(this.keyValue)
  //     const data = {}
  //     for (let i = 0; i < this.keyValue.length; i++) {
  //       const letter = this.keyValue.charAt(i)
  //       data[letter] = keyPermutation[i] + 1
  //     }
  //     return data
  //   }
  // },
  methods: {
    getAdjustedText(text) {
      return text.replace(/[^A-Za-z]/g, '')
    },
    canEncrypt() {
      return (
        this.keyValue.length > 1 &&
        this.plainText.length >= this.keyValue.length
      )
    },
    canDecrypt() {
      return (
        this.keyValue.length > 1 &&
        this.cipherText.length >= this.keyValue.length
      )
    },
    keyValueChanged() {
      this.keyValue = this.getAdjustedText(this.keyValue).toLowerCase()
      if (this.canEncrypt()) {
        this.doEncrypt()
        this.calcTableData()
      }
    },
    plainTextChanged() {
      this.plainText = this.getAdjustedText(this.plainText).toLowerCase()
      if (this.canEncrypt()) {
        this.doEncrypt()
      }
    },
    cipherTextChanged() {
      this.cipherText = this.getAdjustedText(this.cipherText).toUpperCase()
      if (this.canDecrypt()) {
        this.doDecrypt()
      }
    },
    doEncrypt() {
      this.cipherText = this.columnarEncrypt(this.keyValue, this.plainText)
    },
    doDecrypt() {
      this.plainText = this.columnarDecrypt(this.keyValue, this.cipherText)
    },
    calcTableData() {
      const keyPermutation = this.getKeyPermutation(this.keyValue)
      const data = {}
      for (let i = 0; i < this.keyValue.length; i++) {
        const letter = this.keyValue.charAt(i)
        data[letter] = keyPermutation[i] + 1
      }
      this.tableData = [data]
    }
  }
}
</script>

<style scoped>
input:focus,
textarea:focus {
  border-color: #204051;
  outline: none;
}
</style>
