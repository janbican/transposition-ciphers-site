<template>
  <div id="cipher-text-area">
    <b-form-group label="Šifrovaný text" label-for="cipherText">
      <b-form-textarea
        id="cipherText"
        :value="value"
        :formatter="formatter"
        placeholder="zadej šifrovaný text"
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
  name: 'CipherTextArea',
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
      return this.getNormalizedCipherText(value)
    }
  }
}
</script>
