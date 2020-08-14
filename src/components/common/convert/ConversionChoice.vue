<template>
  <div class="choice">
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
