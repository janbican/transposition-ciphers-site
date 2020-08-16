export default {
  name: 'RailFenceCipher',
  methods: {
    railFenceEncrypt(layers, text) {
      const cipherLines = new Array(layers).fill('')
      let line = 0
      // urcuje smer v ramci řádků, 1 je dolu, -1 je nahoru
      let offset = 1

      for (const letter of text) {
        cipherLines[line] += letter
        line += offset

        // zjistuje, zda lze soucasnym smerem jeste pokracovat
        // pokud ne, smer je zmenen
        if (line == layers - 1 || line == 0) {
          offset = -offset
        }
      }

      return cipherLines.join('').toUpperCase()
    },

    // princip spociva v urceni pocatecnich indexu jednotlivych radku
    // nasleduje pruchod jako pri zasifrovani
    railFenceDecrypt(numOfLayers, cipher) {
      const indices = this.getLinesStartIndices(numOfLayers, cipher.length)
      let plainText = ''
      let line = 0
      let offset = 1

      for (let i = 0; i < cipher.length; i++) {
        // ziskani nasledujiciho pismene
        const index = indices[line]
        plainText += cipher.charAt(index)
        // ikrementace aktualniho indexu řádku
        indices[line] += 1
        // posun v ramci řádků
        line += offset

        // zjistuje, zda lze soucasnym smerem jeste pokracovat
        // pokud ne, smer je zmenen
        if (line == 0 || line == numOfLayers - 1) {
          offset = -offset
        }
      }

      return plainText
    },

    getLinesStartIndices(numOfLayers, length) {
      const indices = new Array(numOfLayers + 1).fill(0)
      let line = 0
      let offset = 1

      // vypocet poctu pismen v jednotlivych radcich
      // pruchod jako pri zasifrovani
      // index radku je posunut o 1
      for (let i = 0; i < length; i++) {
        indices[line + 1] += 1
        line += offset

        if (line === 0 || line === numOfLayers - 1) {
          offset = -offset
        }
      }

      // finalni vypocet pocatecnich indexu radku
      // zacina se nulou
      // index se vypocita prictenim predchoziho a poctu pismen aktualniho
      for (let i = 1; i < numOfLayers; i++) {
        indices[i] += indices[i - 1]
      }

      return indices
    }

    // railFenceEncryptAlternative(numOfLayers, text) {
    //   let cipher = ''
    //   let line = 0

    //   for (; line < numOfLayers - 1; line++) {
    //     let skip = 2 * (numOfLayers - line - 1)
    //     let j = 0
    //     for (let i = line; i < text.length; ) {
    //       cipher += text.charAt(i)
    //       if (line === 0 || j % 2 === 0) i += skip
    //       else i += 2 * (numOfLayers - 1) - skip
    //       j++
    //     }
    //   }

    //   for (let i = line; i < text.length; i += 2 * (numOfLayers - 1)) {
    //     cipher += text.charAt(i)
    //   }

    //   return cipher
    // }
  }
}
