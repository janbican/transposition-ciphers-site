<template>
  <div class="key-input">
    <b-form-group label="Klíč" label-for="key">
      <b-form-input
        id="key"
        type="text"
        :value="value"
        :state="isValid"
        :formatter="formatter"
        autocomplete="off"
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
