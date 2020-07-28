export default {
  methods: {
    getKeyPermutation(key) {
      let keyIndices = [...Array(key.length).keys()]
      keyIndices.sort(function (x, y) {
        return key.charCodeAt(x) - key.charCodeAt(y)
      })
      let keyPermutation = new Array(key.length)
      for (let i = 0; i < key.length; i++) {
        keyPermutation[keyIndices[i]] = i
      }
      return keyPermutation
    },
    getKeyPermutationDuplicatesArray(key) {
      let sortedKeyCharArray = [...key].sort()
      let charMap = new Map()
      for (let i = 0, j = 0; i < key.length; i++) {
        const char = sortedKeyCharArray[i]
        if (!charMap.has(char)) {
          charMap.set(char, j)
          j += 1
        }
      }
      let keyPermutationArray = new Array(key.length)
      for (let i = 0; i < key.length; i++) {
        keyPermutationArray[i] = charMap.get(key.charAt(i))
      }
      return keyPermutationArray
    }
  }
}