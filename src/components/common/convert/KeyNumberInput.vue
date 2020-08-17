<template>
  <div class="key-number-input">
    <b-form-group label="Klíč" label-for="key">
      <b-form-input
        id="key"
        type="number"
        min="minimum"
        :value="value"
        @input="valueChanged"
        @keydown="$event.preventDefault()"
      ></b-form-input>

      <b-form-invalid-feedback>
        Klíč musí mít alespoň 2 písmena
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'KeyNumberInput',
  props: {
    value: Number,
    minimum: Number,
    isValid: Boolean
  },
  methods: {
    valueChanged(value) {
      this.$emit('input', value)
      this.$emit('valueChanged', event)
    }
  }
}
</script>
