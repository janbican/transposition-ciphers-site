<template>
  <div class="key-number-input">
    <b-form-group label="Klíč (počet řádků)" label-for="key">
      <b-form-input
        id="key"
        type="number"
        :value="value"
        :state="isValid"
        @input="valueChanged"
      ></b-form-input>

      <b-form-invalid-feedback>
        Počet řádků musí být alespoň 2
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
