import ColumnarCipher from '@/mixins/ColumnarCipher'

export default {
  name: 'UbchiCipher',
  mixins: [ColumnarCipher],
  methods: {
    ubchiEncrypt(keyPermutation, numOfWords, text) {
      if (text.length == 0) return ['', '']

      // první transpozice
      let partCipher = this.columnarEncrypt(keyPermutation, text)

      // přidání "klamačů"
      const deceiver = 'Z'.repeat(numOfWords)
      partCipher += deceiver

      // druhá transpozice
      const cipher = this.columnarEncrypt(keyPermutation, partCipher)

      return [partCipher.toLowerCase(), cipher]
    },

    ubchiDecrypt(keyPermutation, numOfWords, cipher) {
      // první transpozice
      let partCipher = this.columnarDecrypt(keyPermutation, cipher)

      // druhá transpozice s odstraněnými klamači
      const plainText = this.columnarDecrypt(
        keyPermutation,
        partCipher.slice(0, -numOfWords)
      )

      return [partCipher, plainText]
    }
  }
}
