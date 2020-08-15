<template>
  <div id="plain-text-area">
    <b-form-group label="Otevřený text" label-for="plainText">
      <b-form-textarea
        id="plainText"
        :value="value"
        :state="isValid || isDisabled"
        :disabled="isDisabled"
        placeholder="zadej otevřený text"
        rows="5"
        @keyup="valueChanged"
      ></b-form-textarea>

      <b-form-invalid-feedback>
        Otevřený text musí mít alespoň dvojnásobný počet znaků klíče
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'PlainTextArea',
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
      return text.replace(/[^A-Za-z]/g, '').toLowerCase()
    }
  }
}
</script>
