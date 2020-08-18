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

<style scoped>
.encryption-grid {
  overflow-x: auto;
  padding-bottom: 2em;
}

.encryption-grid >>> table {
  display: inline-block;
  margin: 0 auto;
  font-size: 1.2em;
}

.encryption-grid >>> td {
  padding: 0.4em 0.6em 0.2em;
}

.encryption-grid >>> .marked {
  border-bottom: 1px solid black;
}
</style>
