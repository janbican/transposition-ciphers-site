<template>
  <div>
    <b-row>
      <b-col col lg="6">
        <b-form-group description="2 a více malých písmen" label="Klíč" label-for="key">
          <b-form-input
            id="key"
            type="text"
            v-model="keyValue"
            @keyup="keyValueChanged"
            autocomplete="off"
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
            placeholder="zadej otevřený text"
            rows="5"
            v-model="plainText"
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
            placeholder="zadej šifrovaný text"
            rows="5"
            v-model="cipherText"
            @keyup="cipherTextChanged"
          ></b-form-textarea>
        </b-form-group>
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
    }
  },
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
  },
}
</script>

<style scoped>
input:focus,
textarea:focus {
  border-color: #204051;
  outline: none;
}
</style>
