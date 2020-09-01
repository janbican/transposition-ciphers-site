export default {
  name: 'RouteCipher',
  methods: {
    getIndexOrderVerticalFromTopLeft(cols, rows) {
      const order = []
      let i = 0
      let offset = cols

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          order.push(i)
          i += offset
        }
        i -= offset - 1
        offset = -offset
      }

      return order
    },

    encrypt(order, text) {
      let cipher = ''
      for (const index of order) {
        cipher += text.charAt(index)
      }
      return cipher
    },

    encryptVerticalFromTopLeft(cols, rows, text) {
      return this.encrypt(
        this.getIndexOrderVerticalFromTopLeft(cols, rows),
        text
      )
    },

    encryptVerticalFromTopRight(cols, rows, text) {
      return this.encrypt(
        this.getIndexOrderVerticalFromTopLeft(cols, rows).reverse(),
        text
      )
    },

    decrypt(order, cipher) {
      const plainArray = new Array(order.length)
      for (let i = 0; i < order.length; i++) {
        plainArray[order[i]] = cipher.charAt(i)
      }
      return plainArray.join('')
    },

    decryptVerticalFromTopLeft(cols, rows, cipher) {
      return this.decrypt(
        this.getIndexOrderVerticalFromTopLeft(cols, rows),
        cipher
      )
    },

    decryptVerticalFromTopRight(cols, rows, cipher) {
      return this.decrypt(
        this.getIndexOrderVerticalFromTopLeft(cols, rows).reverse(),
        cipher
      )
    }
  }
}
