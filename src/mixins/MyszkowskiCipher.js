export default {
  name: 'MyszkowskiCipher',
  methods: {
    myszkowskiEncrypt(keyPermutation, text) {
      const keyLength = keyPermutation.length
      const cipherCols = this.createTwoDimArray(keyLength)

      // sloupce se stejným vyčíslením jsou v jedné array
      for (let col = 0; col < keyLength; col++) {
        let cipherCol = ''
        for (let i = col; i < text.length; i += keyLength) {
          cipherCol += text.charAt(i)
        }
        const colPosition = keyPermutation[col]
        cipherCols[colPosition].push(cipherCol)
      }

      // bylo-li nalezeno více sloupců se stejným vyčíslením
      // jsou "slévány" do jednoho sloupce
      for (let i = 0; i < keyLength; i++) {
        const cipherCol = cipherCols[i]
        const size = cipherCol.length

        if (size == 0) cipherCols[i] = ''
        else if (size == 1) cipherCols[i] = cipherCol[0]
        else cipherCols[i] = this.mergeStringsInArray(cipherCol)
      }

      return cipherCols.join('').toUpperCase()
    },

    createTwoDimArray(length) {
      const array = new Array(length)

      for (let i = 0; i < length; i++) {
        array[i] = new Array()
      }

      return array
    },

    mergeStringsInArray(strings) {
      let result = ''

      for (let i = 0; i < strings[0].length; i++) {
        for (const str of strings) {
          result += str.charAt(i)
        }
      }

      return result
    }
  }
}
