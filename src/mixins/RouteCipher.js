export default {
  name: 'RouteCipher',
  methods: {
    getOrderVerticalFromLeft(cols, rows, down) {
      const order = []
      let index = down ? 0 : cols * (rows - 1)
      let offset = down ? cols : -cols

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          order.push(index)
          index += offset
        }
        index -= offset - 1
        offset = -offset
      }

      return order
    },

    getOrderVerticalFromLeftDown(cols, rows) {
      return this.getOrderVerticalFromLeft(cols, rows, true)
    },

    getOrderVerticalFromLeftUp(cols, rows) {
      return this.getOrderVerticalFromLeft(cols, rows, false)
    },

    getOrderVerticalFromRight(cols, rows, down) {
      const order = []
      let index = down ? cols - 1 : cols * rows - 1
      let offset = down ? cols : -cols

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          order.push(index)
          index += offset
        }
        index -= offset + 1
        offset = -offset
      }

      return order
    },

    getOrderVerticalFromRightDown(cols, rows) {
      return this.getOrderVerticalFromRight(cols, rows, true)
    },

    getOrderVerticalFromRightUp(cols, rows) {
      return this.getOrderVerticalFromRight(cols, rows, false)
    },

    encrypt(order, text) {
      let cipher = ''
      for (const index of order) {
        cipher += text.charAt(index)
      }
      return cipher.toUpperCase()
    },

    decrypt(order, cipher) {
      const plainArray = new Array(order.length)
      for (let i = 0; i < order.length; i++) {
        plainArray[order[i]] = cipher.charAt(i)
      }
      return plainArray.join('').toLowerCase()
    },

    encryptVerticalFromTopLeft(cols, text) {
      const rows = text.length / cols
      return this.encrypt(this.getOrderVerticalFromLeftDown(cols, rows), text)
    },

    decryptVerticalFromTopLeft(cols, cipher) {
      const rows = cipher.length / cols
      return this.decrypt(this.getOrderVerticalFromLeftDown(cols, rows), cipher)
    },

    encryptVerticalFromTopRight(cols, text) {
      const rows = text.length / cols
      return this.encrypt(this.getOrderVerticalFromRightDown(cols, rows), text)
    },

    decryptVerticalFromTopRight(cols, cipher) {
      const rows = cipher.length / cols
      return this.decrypt(
        this.getOrderVerticalFromRightDown(cols, rows),
        cipher
      )
    },

    encryptVerticalFromBottomLeft(cols, text) {
      const rows = text.length / cols
      return this.encrypt(this.getOrderVerticalFromLeftUp(cols, rows), text)
    },

    decryptVerticalFromBottomLeft(cols, cipher) {
      const rows = cipher.length / cols
      return this.decrypt(this.getOrderVerticalFromLeftUp(cols, rows), cipher)
    },

    encryptVerticalFromBottomRight(cols, text) {
      const rows = text.length / cols
      return this.encrypt(this.getOrderVerticalFromRightUp(cols, rows), text)
    },

    decryptVerticalFromBottomRight(cols, cipher) {
      const rows = cipher.length / cols
      return this.decrypt(this.getOrderVerticalFromRightUp(cols, rows), cipher)
    }
  }
}
