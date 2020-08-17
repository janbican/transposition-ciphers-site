<template>
  <div class="key-number-input">
    <b-form-group label="Klíč (počet řádků)" label-for="key">
      <b-form-input
        id="key"
        type="number"
        min="minimum"
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
      if (this.isValid) {
        this.$emit('valueChanged', event)
      }
    }
  }
}
</script>

<style scoped>
.key-number-input input {
  background-image: none;
}

.key-number-input .is-valid,
.key-number-input .is-valid:focus {
  border-color: #ced4da;
}

.key-number-input .is-invalid,
.key-number-input .is-invalid:focus {
  border-color: #9b6667;
}

.invalid-feedback {
  color: #9b6667;
}
</style>
