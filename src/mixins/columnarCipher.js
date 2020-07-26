import keyPermutations from './keyPermutations'

export default {
  mixins: [keyPermutations],
  methods: {
    columnarEncrypt(key, text) {
      const keyPermutation = this.getKeyPermutation(key)
      const cipherCols = new Array(key.length).fill('')

      for (let col = 0; col < key.length; col++) {
        const colPosition = keyPermutation[col]
        for (let i = col; i < text.length; i += key.length)
          cipherCols[colPosition] += text.charAt(i)
      }

      return cipherCols.join('').toUpperCase()
    },
    columnarDecrypt(key, cipher) {
      const numOfRows = Math.ceil(cipher.length / key.length)
      const numOfComplete = cipher.length - key.length * (numOfRows - 1)
      const colPositions = this.getColumnPositions(key)

      // vytvoreni slopcu sifrovaneho textu ve spravnem poradi
      const cipherCols = new Array(key.length).fill('')
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
        for (let col = 0; col < key.length; col++) {
          plainText += cipherCols[col].charAt(row)
        }
      }

      return plainText.toLowerCase()
    },
    getColumnPositions(key) {
      const keyPermutation = this.getKeyPermutation(key)
      let positions = [...Array(key.length).keys()]
      positions.sort(function (x, y) {
        return keyPermutation[x] - keyPermutation[y]
      })
      return positions
    },
  },
}