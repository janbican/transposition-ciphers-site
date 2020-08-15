export default {
  name: 'RailFenceCipher',
  methods: {
    railFenceEncrypt(numOfLayers, text) {
      const cipherLines = new Array(numOfLayers).fill('')
      let currentLine = 0
      // urcuje smer v ramci radku, 1 je dolu, -1 je nahoru
      let offset = 1

      for (const letter of text) {
        cipherLines[currentLine] += letter
        currentLine += offset

        // zjistuje, zda lze soucasnym smerem jeste pokracovat
        // pokud ne, smer je zmenen
        if (currentLine == numOfLayers - 1 || currentLine == 0) {
          offset = -offset
        }
      }

      return cipherLines.join('').toUpperCase()
    },

    railFenceEncryptAlternative(numOfLayers, text) {
      let cipher = ''
      let line = 0

      for (; line < numOfLayers - 1; line++) {
        let skip = 2 * (numOfLayers - line - 1)
        let j = 0
        for (let i = line; i < text.length; ) {
          cipher += text.charAt(i)
          if (line === 0 || j % 2 === 0) i += skip
          else i += 2 * (numOfLayers - 1) - skip
          j++
        }
      }

      for (let i = line; i < text.length; i += 2 * (numOfLayers - 1)) {
        cipher += text.charAt(i)
      }

      return cipher
    }
  }
}
