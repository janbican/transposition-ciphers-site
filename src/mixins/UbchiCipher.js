import ColumnarCipher from '@/mixins/ColumnarCipher'

export default {
  name: 'UbchiCipher',
  mixins: [ColumnarCipher],
  methods: {
    ubchiEncrypt(keyPermutation, numOfWords, text) {
      if (text.length == 0) return ''

      // první transpozice
      let partCipher = this.columnarEncrypt(keyPermutation, text)

      // přidání "klamačů"
      const deceiver = 'z'.repeat(numOfWords)
      partCipher += deceiver

      // druhá transpozice
      const cipher = this.columnarEncrypt(keyPermutation, partCipher)

      return cipher.toUpperCase()
    },

    ubchiDecrypt(keyPermutation, numOfWords, cipher) {
      // první transpozice
      let partPlain = this.columnarDecrypt(keyPermutation, cipher)

      // odstranění "klamačů"
      partPlain = partPlain.slice(0, -numOfWords)

      // druhá transpozice
      const plainText = this.columnarDecrypt(keyPermutation, partPlain)

      return plainText.toLowerCase()
    }
  }
}
