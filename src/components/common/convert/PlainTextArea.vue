<template>
  <div id="plain-text-area">
    <b-form-group label="Otevřený text" label-for="plainText">
      <b-form-textarea
        id="plainText"
        :value="value"
        :formatter="formatter"
        placeholder="zadej otevřený text"
        :state="!isInvalid"
        :maxlength="maxLength"
        rows="5"
        @keyup="valueChanged"
      ></b-form-textarea>

      <b-form-invalid-feedback>
        Nedostatečná délka - {{ value.length }}/{{ maxLength }} písmen
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>

<script>
import Utils from '@/mixins/Utils'

export default {
  name: 'PlainTextArea',
  mixins: [Utils],
  props: {
    value: String,
    maxLength: Number,
    isInvalid: Boolean
  },
  methods: {
    valueChanged(event) {
      this.$emit('input', event.target.value)
      this.$emit('valueChanged', event)
    },
    formatter(value) {
      return this.getNormalizedPlainText(value)
    }
  }
}
</script>
