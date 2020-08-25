<template>
  <div id="cipher-text-area">
    <b-form-group label="Šifrovaný text" label-for="cipherText">
      <b-form-textarea
        id="cipherText"
        :value="value"
        :formatter="formatter"
        placeholder="zadej šifrovaný text"
        rows="5"
        @keyup="valueChanged"
      ></b-form-textarea>
    </b-form-group>
  </div>
</template>

<script>
import Utils from '@/mixins/Utils'

export default {
  name: 'CipherTextArea',
  mixins: [Utils],
  props: {
    value: String
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
