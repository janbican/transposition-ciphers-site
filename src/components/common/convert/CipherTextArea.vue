<template>
  <div id="cipher-text-area">
    <b-form-group label="Šifrovaný text" label-for="cipherText">
      <b-form-textarea
        id="cipherText"
        :value="value"
        :state="isValid || isDisabled"
        :disabled="isDisabled"
        placeholder="zadej šifrovaný text"
        rows="5"
        @keyup="valueChanged"
      ></b-form-textarea>

      <b-form-invalid-feedback>
        Šifrovaný text musí mít alespoň dvojnásobný počet znaků klíče
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'CipherTextArea',
  props: {
    value: String,
    isValid: Boolean,
    isDisabled: Boolean
  },
  methods: {
    valueChanged(event) {
      let value = this.getAdjustedText(event.target.value)
      event.target.value = value
      this.$emit('input', value)
      this.$emit('valueChanged', event)
    },
    getAdjustedText(text) {
      return text.replace(/[^A-Za-z]/g, '').toUpperCase()
    }
  }
}
</script>
