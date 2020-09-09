export default {
  name: 'RouteCipher',
  methods: {
    // seznam všech cest s popisem a názvem metod pro šifrování a dešifrování
    getRoutes() {
      return [
        {
          encrypt: 'encryptVerticalFromTopLeft',
          decrypt: 'decryptVerticalFromTopLeft',
          text: 'Vertikální z levého horního rohu'
        },
        {
          encrypt: 'encryptVerticalFromTopRight',
          decrypt: 'decryptVerticalFromTopRight',
          text: 'Vertikální z pravého horního rohu'
        },
        {
          encrypt: 'encryptVerticalFromBottomLeft',
          decrypt: 'decryptVerticalFromBottomLeft',
          text: 'Vertikální z levého dolního rohu'
        },
        {
          encrypt: 'encryptVerticalFromBottomRight',
          decrypt: 'decryptVerticalFromBottomRight',
          text: 'Vertikální z pravého dolního rohu'
        },
        {
          encrypt: 'encryptHorizontalFromTopLeft',
          decrypt: 'decryptHorizontalFromTopLeft',
          text: 'Horizontální z levého horního rohu'
        },
        {
          encrypt: 'encryptHorizontalFromTopRight',
          decrypt: 'decryptHorizontalFromTopRight',
          text: 'Horizontální z pravého horního rohu'
        },
        {
          encrypt: 'encryptHorizontalFromBottomLeft',
          decrypt: 'decryptHorizontalFromBottomLeft',
          text: 'Horizontální z levého dolního rohu'
        },
        {
          encrypt: 'encryptHorizontalFromBottomRight',
          decrypt: 'decryptHorizontalFromBottomRight',
          text: 'Horizontální z pravého dolního rohu'
        },
        {
          encrypt: 'encryptSpiralClockwiseInwards',
          decrypt: 'decryptSpiralClockwiseInwards',
          text: 'Spirála z pravého horního rohu ve směru hodinových ručiček'
        },
        {
          encrypt: 'encryptSpiralAntiClockwiseOutwards',
          decrypt: 'decryptSpiralAntiClockwiseOutwards',
          text: 'Spirála zevnitř proti směru hodinových ručiček'
        },
        {
          encrypt: 'encryptSpiralAntiClockwiseInwards',
          decrypt: 'decryptSpiralAntiClockwiseInwards',
          text:
            'Spirála z pravého horního rohu ve proti směru hodinových ručiček'
        },
        {
          encrypt: 'encryptSpiralClockwiseOutwards',
          decrypt: 'decryptSpiralClockwiseOutwards',
          text: 'Spirála zevnitř ve směru hodinových ručiček'
        }
      ]
    },

    // Společné
    // pracuje s array s číselným pořadím jednotlivých písmen
    // na základě něj šifruje nebo dešifruje
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

    // Vertikální Route šifry
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

    // Horizontální route šifry
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

    // Spirální Route šifry
    getOrderSpiralClockwise(cols, rows) {
      let rowBegin = 0
      let rowEnd = rows - 1
      let colBegin = 0
      let colEnd = cols - 1
      let order = []

      while (rowBegin <= rowEnd && colBegin <= colEnd) {
        //průchod dolů
        for (let i = rowBegin; i <= rowEnd; i++) {
          order.push(i * cols + colEnd)
        }
        colEnd--

        //průchod doleva
        for (let i = colEnd; i >= colBegin; i--) {
          order.push(rowEnd * cols + i)
        }
        rowEnd--

        //průchod nahoru
        if (colBegin <= colEnd) {
          for (let i = rowEnd; i >= rowBegin; i--) {
            order.push(i * cols + colBegin)
          }
        }
        colBegin++

        //průchod doprava
        if (rowBegin <= rowEnd) {
          for (let i = colBegin; i <= colEnd; i++) {
            order.push(rowBegin * cols + i)
          }
        }
        rowBegin++
      }

      return order
    },

    encryptSpiralClockwiseInwards(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(this.getOrderSpiralClockwise(cols, rows), text)
    },

    decryptSpiralClockwiseInwards(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(this.getOrderSpiralClockwise(cols, rows), cipher)
    },

    encryptSpiralAntiClockwiseOutwards(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderSpiralClockwise(cols, rows).reverse(),
        text
      )
    },

    decryptSpiralAntiClockwiseOutwards(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderSpiralClockwise(cols, rows).reverse(),
        cipher
      )
    },

    getOrderSpiralAntiClockwise(cols, rows) {
      let rowBegin = 0
      let rowEnd = rows - 1
      let colBegin = 0
      let colEnd = cols - 1
      let order = []

      while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // průchod doleva
        for (let i = colEnd; i >= colBegin; i--) {
          order.push(rowBegin * cols + i)
        }
        rowBegin++

        // průchod dolů
        for (let i = rowBegin; i <= rowEnd; i++) {
          order.push(i * cols + colBegin)
        }
        colBegin++

        // průchod doprava
        if (rowBegin <= rowEnd) {
          for (let i = colBegin; i <= colEnd; i++) {
            order.push(rowEnd * cols + i)
          }
        }
        rowEnd--

        // průchod nahoru
        if (colBegin <= colEnd) {
          for (let i = rowEnd; i >= rowBegin; i--) {
            order.push(i * cols + colEnd)
          }
        }
        colEnd--
      }

      return order
    },

    encryptSpiralAntiClockwiseInwards(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderSpiralAntiClockwise(cols, rows),
        text
      )
    },

    decryptSpiralAntiClockwiseInwards(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderSpiralAntiClockwise(cols, rows),
        cipher
      )
    },

    encryptSpiralClockwiseOutwards(cols, text) {
      const rows = text.length / cols
      return this.routeEncrypt(
        this.getOrderSpiralAntiClockwise(cols, rows).reverse(),
        text
      )
    },

    decryptSpiralClockwiseOutwards(cols, cipher) {
      const rows = cipher.length / cols
      return this.routeDecrypt(
        this.getOrderSpiralAntiClockwise(cols, rows).reverse(),
        cipher
      )
    }
  }
}
