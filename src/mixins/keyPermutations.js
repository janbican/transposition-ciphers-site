export default {
  methods: {
    getKeyPermutationArray(key) {
      let keyIndexArray = [...Array(key.length).keys()];
      keyIndexArray.sort(function (x, y) {
        return key.charCodeAt(x) - key.charCodeAt(y);
      });
      let keyPermutationArray = new Array(key.length);
      for (let i = 0; i < key.length; i++)
        keyPermutationArray[keyIndexArray[i]] = i;
      return keyPermutationArray;
    },
    getKeyPermutationDuplicatesArray(key) {
      let sortedKeyCharArray = [...key].sort();
      let charMap = new Map();
      for (let i = 0, j = 0; i < key.length; i++) {
        const char = sortedKeyCharArray[i];
        if (!charMap.has(char)) {
          charMap.set(char, j);
          j += 1;
        }
      }
      let keyPermutationArray = new Array(key.length);
      for (let i = 0; i < key.length; i++) {
        keyPermutationArray[i] = charMap.get(key.charAt(i));
      }
      return keyPermutationArray;
    }
  }
}