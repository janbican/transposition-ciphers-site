export default {
  name: 'ColumnarCipher',
  methods: {
    columnarEncrypt(keyPermutation, text) {
      const keyLength = keyPermutation.length
      const cipherCols = new Array(keyLength).fill('')

      for (let col = 0; col < keyLength; col++) {
        const colPosition = keyPermutation[col]
        for (let i = col; i < text.length; i += keyLength)
          cipherCols[colPosition] += text.charAt(i)
      }

      return cipherCols.join('').toUpperCase()
    },

    columnarDecrypt(keyPermutation, cipher) {
      const keyLength = keyPermutation.length
      const numOfRows = Math.ceil(cipher.length / keyLength)
      const numOfComplete = cipher.length - keyLength * (numOfRows - 1)
      const colPositions = this.getColumnPositions(keyPermutation)

      // vytvoreni slopcu sifrovaneho textu ve spravnem poradi
      const cipherCols = new Array(keyLength).fill('')
      let i = 0
      for (let colPosition of colPositions) {
        let endIndex = i + numOfRows
        if (colPosition >= numOfComplete) endIndex -= 1
        while (i < endIndex) {
          cipherCols[colPosition] += cipher[i++]
        }
      }

      // zpracovani sloucu sifrovaneho textu do otevreneho
      let plainText = ''
      for (let row = 0; row < numOfRows; row++) {
        for (let col = 0; col < keyLength; col++) {
          plainText += cipherCols[col].charAt(row)
        }
      }

      return plainText.toLowerCase()
    },

    getColumnPositions(keyPermutation) {
      const keyLength = keyPermutation.length
      let positions = [...Array(keyLength).keys()]
      positions.sort(function(x, y) {
        return keyPermutation[x] - keyPermutation[y]
      })
      return positions
    }
  }
}
