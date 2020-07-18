import keyPermutations from './keyPermutations'

export default {
  mixins: [keyPermutations],
  methods: {
    encrypt(key, text) {
      const colOrderArray = this.getKeyPermutationArray(key);
      text = this.addPlainTextPadding(text, key.length);
      let cipherCols = new Array(key.length).fill('');
      for (let i = 0; i < key.length; i++) {
        let col = colOrderArray[i];
        for (let j = i; j < text.length; j += key.length)
          cipherCols[col] += text.charAt(j);
      }
      return cipherCols.join('').toUpperCase();
    },
    addPlainTextPadding(text, keyLength) {
      let remainder = text.length % keyLength;
      let numOfEx = (remainder != 0) ? keyLength - remainder : 0;
      return text + 'x'.repeat(numOfEx);
    },
    decrypt(key, cipher) {
      const numOfRows = cipher.length / key.length;
      const colStartIndices = this.getColStartIndices(key, numOfRows);
      const plainRowArray = new Array(numOfRows).fill('');
      for (let index of colStartIndices)
        for (let row = 0; row < numOfRows;)
          plainRowArray[row++] += cipher.charAt(index++);
      return plainRowArray.join('').toLowerCase();
    },
    getColStartIndices(key, numOfRows) {
      const colOderArray = this.getKeyPermutationArray(key);
      return colOderArray.map(i => i * numOfRows);
    }
  }
}