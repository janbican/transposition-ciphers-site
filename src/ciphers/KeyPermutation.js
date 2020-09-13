// permutační vyčíslení klíče
// př.: 'tomato' => [4, 2, 1, 0, 5, 3]
export function keyPermutation(key) {
  let indices = [...Array(key.length).keys()]

  // setřídí indexy podle abecedního pořadí písmen klíče
  // čímž získá umístění jednotlivých indexů
  indices.sort(function(x, y) {
    return key.charCodeAt(x) - key.charCodeAt(y)
  })

  // rozmístění indexů do finálního pole
  let keyPermutation = new Array(key.length)
  for (let i = 0; i < key.length; i++) {
    keyPermutation[indices[i]] = i
  }

  return keyPermutation
}

// permutační vyčíslení klíče, kde opakovaná písmena mají stejný index
// př.: 'tomato' => [3, 2, 1, 0, 3, 2]
export function keyPermutationDuplicate(key) {
  const sortedLetters = [...key].sort()
  const letterMap = new Map()
  let position = 0

  // mapování písmen na jejich pozice
  // mapován je pouze první výskyt
  for (const letter of sortedLetters) {
    if (!letterMap.has(letter)) {
      letterMap.set(letter, position++)
    }
  }

  // průchod přes písmena klíče, nahrazení indexy
  const keyPermutation = new Array(key.length)
  for (let i = 0; i < key.length; i++) {
    keyPermutation[i] = letterMap.get(key.charAt(i))
  }

  return keyPermutation
}
