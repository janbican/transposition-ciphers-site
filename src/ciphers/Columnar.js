import { createTwoDimArray } from '@/ciphers/Utils'

export function encrypt(keyPermutation, text) {
  const keyLength = keyPermutation.length
  const cipherCols = new Array(keyLength).fill('')

  // vytváření šifrovaných sloupců v permutovaném pořadí
  for (let col = 0; col < keyLength; col++) {
    const colPosition = keyPermutation[col]
    for (let i = col; i < text.length; i += keyLength)
      cipherCols[colPosition] += text.charAt(i)
  }

  return cipherCols.join('').toUpperCase()
}

// bere v potaz neúplnost (neúplná tabulka)
export function decrypt(keyPermutation, cipher) {
  const keyLength = keyPermutation.length
  const numOfRows = Math.ceil(cipher.length / keyLength)
  const numOfComplete = cipher.length - keyLength * (numOfRows - 1)
  const colPositions = columnPositions(keyPermutation)

  // získání sloupců
  const cipherCols = createTwoDimArray(keyLength)
  let i = 0
  for (let colPosition of colPositions) {
    let endIndex = i + numOfRows

    // je-li sloupec neúplný, snížit počet písmen
    const isIncomplete = colPosition >= numOfComplete
    if (isIncomplete) endIndex -= 1

    // zaplnění sloupce
    while (i < endIndex) {
      cipherCols[colPosition].push(cipher[i++])
    }

    // přidání 'prázdného znaku' kvůli neúplným sloupcům
    // aby se neobjevovalo undefined
    if (isIncomplete) cipherCols[colPosition].push('')
  }

  //zpracování sloupců šifrovaného textu do otevřeného
  let plainText = ''
  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < keyLength; col++) {
      plainText += cipherCols[col][row]
    }
  }

  return plainText.toLowerCase()
}

// získání původních pozic sloupců
// aby se mohly při dešifrování správně umístit
function columnPositions(keyPermutation) {
  const keyLength = keyPermutation.length
  let positions = [...Array(keyLength).keys()]

  positions.sort(function(x, y) {
    return keyPermutation[x] - keyPermutation[y]
  })

  return positions
}
