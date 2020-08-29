<template>
  <div class="encryption-grid">
    <div v-html="htmlGrid"></div>
  </div>
</template>

<script>
export default {
  name: 'EncryptionGrid',
  props: {
    keyValue: Number,
    text: String,
    isValid: Boolean
  },
  computed: {
    htmlGrid: function() {
      if (!this.isValid) {
        return ''
      }

      const lines = new Array(this.keyValue).fill('<tr>')
      let currentLine = 0
      let offset = 1

      for (const letter of this.text) {
        for (let i = 0; i < this.keyValue; i++) {
          if (currentLine == i) {
            lines[i] += '<td class="marked">' + letter + '</td>'
          } else {
            lines[i] += '<td></td>'
          }
        }

        currentLine += offset
        if (currentLine == 0 || currentLine == this.keyValue - 1) {
          offset = -offset
        }
      }

      let table = '<table>'
      for (const line of lines) {
        table += line
      }
      table += '</table>'

      return table
    }
  }
}
</script>
