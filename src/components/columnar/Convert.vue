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
        @input="doEncrypt"
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
        @input="doDecrypt"
      ></b-form-textarea>
    </b-form-group>
  </div>
</template>

<script>
import columnarCipher from "../../mixins/columnarCipher";

export default {
  name: "columnar",
  mixins: [columnarCipher],
  data() {
    return {
      keyValue: "",
      plainText: "",
      cipherText: "",
    };
  },
  methods: {
    keyValueChanged() {
      this.keyValue = this.keyValue.replace(/[^A-Za-z]/g, "").toLowerCase();
      this.doEncrypt();
    },
    doEncrypt() {
      this.cipherText = this.encrypt(this.keyValue, this.plainText);
    },
    doDecrypt() {
      this.plainText = this.decrypt(this.keyValue, this.cipherText);
    },
  },
};
</script>
