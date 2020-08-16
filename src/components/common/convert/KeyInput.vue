<template>
  <div id="key-input">
    <b-form-group label="Klíč" label-for="key">
      <b-form-input
        id="key"
        type="text"
        :value="value"
        :state="isValid"
        :formatter="formatter"
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
