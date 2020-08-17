<template>
  <div class="key-number-input">
    <b-form-group label="Klíč" label-for="key">
      <b-form-input
        id="key"
        type="number"
        :value="value"
        @input="valueChanged"
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
    isValid: Boolean
  },
  methods: {
    valueChanged(value) {
      this.$emit('input', value)
      this.$emit('valueChanged', event)
    },
    formatter(value) {
      return this.isValid ? value : 2
    }
  }
}
</script>

<style scoped>
.key-input input {
  background-image: none;
}

.key-input .is-valid,
.key-input .is-valid:focus {
  border-color: inherit;
}

.key-input .is-invalid,
.key-input .is-invalid:focus {
  border-color: #9b6667;
}

.invalid-feedback {
  color: #9b6667;
}
</style>
