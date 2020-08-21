<template>
  <div class="columnar-table">
    <b-table-simple small caption-top class="text-center">
      <caption>
        {{
          caption
        }}
      </caption>
      <b-thead>
        <b-tr>
          <b-th
            variant="secondary"
            v-for="(letter, index) in keyValue"
            :key="index"
            >{{ letter }}</b-th
          >
        </b-tr>
        <b-tr>
          <b-th
            variant="dark"
            v-for="(position, index) in keyPermutation"
            :key="index"
            >{{ position + 1 }}</b-th
          >
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(row, index) in rows" :key="index">
          <b-td v-for="(letter, index) in row" :key="index">{{ letter }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  name: 'ColumnarTable',
  props: {
    caption: String,
    keyValue: String,
    keyPermutation: Array,
    isValid: Boolean,
    text: String
  },
  computed: {
    rows: function() {
      if (!this.isValid) return []
      const rowSize = this.keyValue.length
      return this.text.match(new RegExp('.{1,' + rowSize + '}', 'g'))
    }
  }
}
</script>

<style scoped>
.columnar-table {
  overflow-x: auto;
}

.columnar-table table td {
  max-width: 20px;
}
</style>
