import { createTwoDimArray } from '@/ciphers/Utils'

export function encrypt(keyPermutation, text) {
  const keyLength = keyPermutation.length
  const cipherCols = createTwoDimArray(keyLength)

  // sloupce se stejným vyčíslením jsou v jednom poli
  for (let col = 0; col < keyLength; col++) {
    let cipherCol = ''
    for (let i = col; i < text.length; i += keyLength)
      cipherCol += text.charAt(i)

    const colPosition = keyPermutation[col]
    cipherCols[colPosition].push(cipherCol)
  }

  // nahrazení vnořených polí řetězci
  // více sloupců se stejným vyčíslením je "sléváno" do jednoho
  for (let i = 0; i < keyLength; i++) {
    const cipherCol = cipherCols[i]
    const size = cipherCol.length

    if (size == 0) cipherCols[i] = ''
    else if (size == 1) cipherCols[i] = cipherCol[0]
    else cipherCols[i] = mergeStringsInArray(cipherCol)
  }

  return cipherCols.join('').toUpperCase()
}

export function decrypt(key, cipher) {
  const numOfRows = Math.ceil(cipher.length / key.length)
  const numOfComplete = cipher.length - key.length * (numOfRows - 1)
  const cipherCols = new Array(key.length).fill('')

  // colGroup je pole obsahující indexy sloupců,
  // které byly "sléty" dohromady
  const colGroups = colIndexGroups(key)
  let i = 0
  for (const colGroup of colGroups) {
    // výpočet indexu, kde aktuální sloupcová skupina končí
    let endIndex = i
    for (const colIndex of colGroup) {
      endIndex += numOfRows

      // je-li sloupec neúplný, snížit počet písmen
      const isIncomplete = colIndex >= numOfComplete
      if (isIncomplete) endIndex -= 1
    }

    // inverze "slévání" sloupců
    // sloupcová skupina se rozděluje do daného počtu sloupců
    // vzniklé sloupce jsou umístěny na příslušné pozice
    let j = 0
    while (i < endIndex) {
      const colIndex = colGroup[j]
      cipherCols[colIndex] += cipher.charAt(i++)
      j = (j + 1) % colGroup.length
    }
  }

  // vytvoření otevřeného textu ze sloupců
  let plainText = ''
  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < key.length; col++) {
      plainText += cipherCols[col].charAt(row)
    }
  }

  return plainText.toLowerCase()
}

// př.: strings = ['aaaa', 'bbb']
// result = 'abababa'
function mergeStringsInArray(strings) {
  const length = strings[0].length
  let result = ''

  for (let i = 0; i < length; i++) {
    for (const str of strings) {
      result += str.charAt(i)
    }
  }

  return result
}

// vrací pole skupin sloupců
// obsahuje pole s indexy sloupců, které tvoří jednu skupinu
// v jedné skupině jsou indexy sloupců, které byly sléty dohromady
function colIndexGroups(key) {
  let order = getKeyOrder(key)
  let groups = []

  groups.push([order[0]])
  for (let i = 1; i < key.length; i++) {
    const colIndex = order[i]
    const currentLetter = key.charAt(colIndex)
    const previousLetter = key.charAt(order[i - 1])

    if (currentLetter === previousLetter) {
      // patří do aktuálně poslední skupiny
      groups[groups.length - 1].push(colIndex)
    } else {
      // vytvoří se nová skupina
      groups.push([colIndex])
    }
  }

  return groups
}

// vrací pole indexů
// seřazení podle abecedního pořadí písmen klíče
function getKeyOrder(key) {
  let keyOrder = [...Array(key.length).keys()]

  keyOrder.sort(function(x, y) {
    return key.charCodeAt(x) - key.charCodeAt(y)
  })

  return keyOrder
}
