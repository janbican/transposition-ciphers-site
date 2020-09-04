export default {
  name: 'RouteCipher',
  methods: {
    // Common
    routeEncrypt(order, text) {
      let cipher = ''
      for (const index of order) {
        cipher += text.charAt(index)
      }
      return cipher.toUpperCase()
    },

    routeDecrypt(order, cipher) {
      const plainArray = new Array(order.length)
      for (let i = 0; i < order.length; i++) {
        plainArray[order[i]] = cipher.charAt(i)
      }
      return plainArray.join('').toLowerCase()
    },

    // Vertical
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

    encryptVerticalFromTopLeft(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderVerticalFromLeftDown(cols, rows),
        text
      )
    },

    decryptVerticalFromTopLeft(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderVerticalFromLeftDown(cols, rows),
        cipher
      )
    },

    encryptVerticalFromTopRight(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderVerticalFromRightDown(cols, rows),
        text
      )
    },

    decryptVerticalFromTopRight(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderVerticalFromRightDown(cols, rows),
        cipher
      )
    },

    encryptVerticalFromBottomLeft(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderVerticalFromLeftUp(cols, rows),
        text
      )
    },

    decryptVerticalFromBottomLeft(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderVerticalFromLeftUp(cols, rows),
        cipher
      )
    },

    encryptVerticalFromBottomRight(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderVerticalFromRightUp(cols, rows),
        text
      )
    },

    decryptVerticalFromBottomRight(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderVerticalFromRightUp(cols, rows),
        cipher
      )
    },

    // Horizontal
    getOrderHorizontalFromTop(rows, cols, left) {
      const order = []
      let index = left ? 0 : cols - 1
      let offset = left ? 1 : -1

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          order.push(index)
          index += offset
        }
        index += cols + (offset > 0 ? -1 : 1)
        offset = -offset
      }

      return order
    },

    getOrderHorizontalFromTopLeft(rows, cols) {
      return this.getOrderHorizontalFromTop(rows, cols, true)
    },

    getOrderHorizontalFromTopRight(rows, cols) {
      return this.getOrderHorizontalFromTop(rows, cols, false)
    },

    getOrderHorizontalFromBottom(rows, cols, left) {
      const order = []
      let index = left ? cols * (rows - 1) : cols * rows - 1
      let offset = left ? 1 : -1

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          order.push(index)
          index += offset
        }
        index -= cols + (offset < 0 ? -1 : 1)
        offset = -offset
      }

      return order
    },

    getOrderHorizontalFromBottomLeft(rows, cols) {
      return this.getOrderHorizontalFromBottom(rows, cols, true)
    },

    getOrderHorizontalFromBottomRight(rows, cols) {
      return this.getOrderHorizontalFromBottom(rows, cols, false)
    },

    encryptHorizontalFromTopLeft(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderHorizontalFromTopLeft(rows, cols),
        text
      )
    },

    decryptHorizontalFromTopLeft(cols, text) {
      const rows = text.length / cols
      return this.routeDecrypt(
        this.getOrderHorizontalFromTopLeft(rows, cols),
        text
      )
    },

    encryptHorizontalFromTopRight(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderHorizontalFromTopRight(rows, cols),
        text
      )
    },

    decryptHorizontalFromTopRight(cols, text) {
      const rows = text.length / cols
      return this.routeDecrypt(
        this.getOrderHorizontalFromTopRight(rows, cols),
        text
      )
    },

    encryptHorizontalFromBottomLeft(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderHorizontalFromBottomLeft(rows, cols),
        text
      )
    },

    decryptHorizontalFromBottomLeft(cols, text) {
      const rows = text.length / cols
      return this.routeDecrypt(
        this.getOrderHorizontalFromBottomLeft(rows, cols),
        text
      )
    },

    encryptHorizontalFromBottomRight(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderHorizontalFromBottomRight(rows, cols),
        text
      )
    },

    decryptHorizontalFromBottomRight(cols, text) {
      const rows = text.length / cols
      return this.routeDecrypt(
        this.getOrderHorizontalFromBottomRight(rows, cols),
        text
      )
    },

    // Spiral
    getOrderSpiralFromTopLeft(cols, rows) {
      let order = []
      let row = rows
      let col = cols

      while (row > rows / 2) {
        // traverse row forward
        for (let i = cols - col; i < col; i++) {
          const index = (rows - row) * cols + i
          order.push(index)
        }

        // traverse column downward
        for (let i = rows - row + 1; i < row; i++) {
          const index = i * cols + col - 1
          order.push(index)
        }

        // traverse row backward
        for (let i = col - 1; i > cols - col; i--) {
          const index = (row - 1) * cols + i - 1
          order.push(index)
        }

        // traverse column upward
        for (let i = row - 1; i > rows - row + 1; i--) {
          const index = (i - 1) * cols + cols - col
          order.push(index)
        }

        row -= 1
        col -= 1
      }

      return order
    },

    encryptSpiralFromToLeft(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(this.getOrderSpiralFromTopLeft(cols, rows), text)
    },

    decryptSpiralFromToLeft(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderSpiralFromTopLeft(cols, rows),
        cipher
      )
    }
  }
}
