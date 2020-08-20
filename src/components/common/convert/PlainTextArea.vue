<template>
  <div id="plain-text-area">
    <b-form-group label="Otevřený text" label-for="plainText">
      <b-form-textarea
        id="plainText"
        :value="value"
        :formatter="formatter"
        placeholder="zadej otevřený text"
        rows="5"
        @keyup="valueChanged"
      ></b-form-textarea>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'PlainTextArea',
  props: {
    value: String
  },
  methods: {
    valueChanged(event) {
      this.$emit('input', event.target.value)
      this.$emit('valueChanged', event)
    },
    getAdjustedText(text) {
      return text.replace(/[^A-Za-z]/g, '').toLowerCase()
    },
    formatter(value) {
      return this.getAdjustedText(value)
    }
  }
}
</script>
