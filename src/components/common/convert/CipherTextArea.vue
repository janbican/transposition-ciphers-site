<template>
  <div id="cipher-text-area">
    <b-form-group label="Šifrovaný text" label-for="cipherText">
      <b-form-textarea
        id="cipherText"
        :value="value"
        :formatter="formatter"
        placeholder="zadej šifrovaný text"
        rows="5"
        @keyup="valueChanged"
      ></b-form-textarea>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'CipherTextArea',
  props: {
    value: String
  },
  methods: {
    valueChanged(event) {
      this.$emit('input', event.target.value)
      this.$emit('valueChanged', event)
    },
    getAdjustedText(text) {
      return text.replace(/[^A-Za-z]/g, '').toUpperCase()
    },
    formatter(value) {
      return this.getAdjustedText(value)
    }
  }
}
</script>
