export default {
  name: 'FleissnerGrille',
  methods: {
    fleissnerEncrypt(grille, text) {
      const size = grille.length
      const cipherArray = new Array(size * size)

      let i = 0
      for (let rotateCount = 0; rotateCount < 4; rotateCount++) {
        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            if (grille[row][col] === 1) {
              const index = row * size + col
              cipherArray[index] = text.charAt(i++)
            }
          }
        }

        if (rotateCount === 3) break
        this.rotate(grille)
      }

      return cipherArray.join('').toUpperCase()
    },

    rotate(grille) {
      const size = grille.length
      const x = Math.floor(size / 2)
      const y = size - 1
      for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
          const temp = grille[i][j]
          grille[i][j] = grille[y - j][i]
          grille[y - j][i] = grille[y - i][y - j]
          grille[y - i][y - j] = grille[j][y - i]
          grille[j][y - i] = temp
        }
      }
    },

    fleissnerDecrypt(grille, cipher) {
      const size = grille.length
      const middle = (size * size) / 2
      const isOdd = size % 2 == 1
      let plainText = ''

      for (let rotateCount = 0; rotateCount < 4; rotateCount++) {
        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            if (grille[row][col] === 1) {
              let index = row * size + col

              // pokud je tabulka o liché délce, prostřední pole se ignoruje
              // pro další index je třeba odečíst 1
              if (isOdd && index > middle) index -= 1

              plainText += cipher.charAt(index)
            }
          }
        }

        if (rotateCount === 3) break
        this.rotate(grille)
      }

      return plainText.toLowerCase()
    }
  }
}
