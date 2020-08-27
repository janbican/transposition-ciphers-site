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
            if (grille[row][col]) {
              const index = row * size + col
              cipherArray[index] = text.charAt(i++)
            }
          }
        }

        if (rotateCount === 3) break
        this.rotate(grille)
      }

      return cipherArray.join('').toLowerCase()
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
      let text = ''

      for (let rotateCount = 0; rotateCount < 4; rotateCount++) {
        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            if (grille[row][col]) {
              const position = row * size + col
              text += cipher.charAt(position)
            }
          }
        }

        if (rotateCount === 3) break
        this.rotate(grille)
      }

      return text.toLowerCase()
    }
  }
}
