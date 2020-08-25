export default {
  name: 'Utils',
  methods: {
    createTwoDimArray(length) {
      const array = new Array(length)

      for (let i = 0; i < length; i++) {
        array[i] = new Array()
      }

      return array
    }
  }
}
