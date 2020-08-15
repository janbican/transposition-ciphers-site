<template>
  <div id="conversion-choice">
    <b-form-radio-group
      :checked="choice"
      :options="options"
      buttons
      button-variant="outline-info"
      size="md"
      @input="$emit('input', $event)"
    ></b-form-radio-group>
  </div>
</template>

<script>
export default {
  name: 'ConversionChoice',
  props: { choice: String },
  data() {
    return {
      options: [
        { text: 'Zašifrovat', value: 'encrypt' },
        { text: 'Dešifrovat', value: 'decrypt' }
      ]
    }
  }
}
</script>

<style scoped>
#conversion-choice {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
</style>
