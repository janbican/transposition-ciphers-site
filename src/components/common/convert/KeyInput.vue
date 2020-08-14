<template>
  <div id="key-input">
    <b-form-group label="Klíč" label-for="key">
      <b-form-input
        type="text"
        :value="value"
        :state="isValid"
        @keyup="valueChanged"
      ></b-form-input>

      <b-form-invalid-feedback>
        Klíč musí mít alespoň 2 písmena
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'KeyInput',
  props: {
    value: String,
    isValid: Boolean
  },
  methods: {
    valueChanged(event) {
      let value = this.getAdjustedText(event.target.value)
      event.target.value = value
      this.$emit('input', value)
      if (this.isValueValid) this.$emit('keyValid')
    },
    getAdjustedText(text) {
      return text.replace(/[^A-Za-z]/g, '')
    }
  }
}
</script>
