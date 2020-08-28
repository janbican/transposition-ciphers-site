<template>
  <div class="key-number-input">
    <b-form-group :label="label" label-for="key">
      <b-form-input
        id="key"
        type="number"
        :value="value"
        :state="isValid"
        @input="valueChanged"
      ></b-form-input>

      <b-form-invalid-feedback>
        {{ invalidFeedback }}
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'KeyNumberInput',
  props: {
    value: Number,
    isValid: Boolean,
    label: String,
    invalidFeedback: String
  },
  methods: {
    valueChanged(value) {
      this.$emit('input', value)
      this.$emit('valueChanged', event)
    }
  }
}
</script>
