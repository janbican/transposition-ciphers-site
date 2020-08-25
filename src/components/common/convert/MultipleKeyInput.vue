<template>
  <div class="multiple-key-input">
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
        Klíč musí mít alespoň 2 písmena, může mít víc slov oddělených mezerou
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>

<script>
import Utils from '@/mixins/Utils'

export default {
  name: 'MultipleKeyInput',
  mixins: [Utils],
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
      return this.getNormalizedText(text)
        .trimLeft()
        .replace(/[^A-Za-z ]/g, '')
        .replace(/\s\s+/g, ' ')
        .toLowerCase()
    },
    formatter(value) {
      return this.getAdjustedText(value)
    }
  }
}
</script>
