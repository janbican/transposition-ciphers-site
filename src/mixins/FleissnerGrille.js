export default {
  name: 'FleissnerGrille',
  methods: {
    // mřížka je v průběhu výpočtu modifikována
    fleissnerEncrypt(grille, text) {
      const size = grille.length
      const cipherArray = new Array(size * size)

      // provádí se 4 průchody a 3 rotace
      let rotations = 0
      let i = 0
      while (rotations < 4) {
        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            if (grille[row][col] === 1) {
              const index = row * size + col
              cipherArray[index] = text.charAt(i++)
            }
          }
        }

        // poslední rotace je zbytečná => návrat do původní podoby
        if (rotations < 3) {
          this.rotate(grille)
        }
        rotations += 1
      }

      return cipherArray.join('').toUpperCase()
    },

    // pootočí mřížku o 90% ve směru hodinových ručiček
    // operace se provádí na vstupní mřížce
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

    // mřížka je v průběhu výpočtu modifikována
    fleissnerDecrypt(grille, cipher) {
      const size = grille.length
      const middle = (size * size) / 2
      const isOdd = size % 2 == 1
      let plainText = ''

      // provádí se 4 průchody a 3 rotace
      let rotations = 0
      while (rotations < 4) {
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

        // poslední rotace je zbytečná => návrat do původní podoby
        if (rotations < 3) {
          this.rotate(grille)
        }
        rotations += 1
      }

      return plainText.toLowerCase()
    }
  }
}
