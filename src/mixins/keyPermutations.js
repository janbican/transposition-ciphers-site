export default {
  name: 'KeyPermutations',
  methods: {
    getKeyPermutation(key) {
      let keyIndices = [...Array(key.length).keys()]
      keyIndices.sort(function(x, y) {
        return key.charCodeAt(x) - key.charCodeAt(y)
      })

      let keyPermutation = new Array(key.length)
      for (let i = 0; i < key.length; i++) {
        keyPermutation[keyIndices[i]] = i
      }

      return keyPermutation
    },
    getKeyPermutationRepeated(key) {
      const sortedLetters = [...key].sort()
      const letterMap = new Map()
      let position = 0

      for (const letter of sortedLetters) {
        if (!letterMap.has(letter)) {
          letterMap.set(letter, position++)
        }
      }

      const keyPermutation = new Array(key.length)
      for (let i = 0; i < key.length; i++) {
        keyPermutation[i] = letterMap.get(key.charAt(i))
      }

      return keyPermutation
    }
  }
}
