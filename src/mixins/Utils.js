export default {
  name: 'Utils',
  methods: {
    // normalizuje text, nahrazuje pismenka s diakritikou
    getNormalizedText(text) {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },

    getNormalizedPlainText(text) {
      return this.getNormalizedText(text)
        .replace(/[^A-Za-z]/g, '')
        .toLowerCase()
    },

    getNormalizedCipherText(text) {
      return this.getNormalizedText(text)
        .replace(/[^A-Za-z]/g, '')
        .toUpperCase()
    }
  }
}
