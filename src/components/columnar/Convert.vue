<template>
  <div>
    <b-form-group
      description="2 a více malých písmen"
      label="Klíč"
      label-for="key"
    >
      <b-form-input
        id="key"
        type="text"
        v-model="keyValue"
        @keyup="keyValueChanged"
      ></b-form-input>
    </b-form-group>

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
    keyValueChanged() {
      this.keyValue = this.getAdjustedText(this.keyValue).toLowerCase()
      this.doEncrypt()
    },
    plainTextChanged() {
      this.plainText = this.getAdjustedText(this.plainText).toLowerCase()
      this.doEncrypt()
    },
    cipherTextChanged() {
      this.cipherText = this.getAdjustedText(this.cipherText).toUpperCase()
      this.doDecrypt()
    },
    doEncrypt() {
      this.cipherText = this.encrypt(this.keyValue, this.plainText)
    },
    doDecrypt() {
      this.plainText = this.decrypt(this.keyValue, this.cipherText)
    },
  },
}
</script>
