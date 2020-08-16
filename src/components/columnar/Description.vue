<template>
  <div class="description">
    <div class="b-row">
      <b-col>
        <h5>Jednoduchá sloupcová transpozice</h5>

        <div class="table-container">
          <columnar-table
            :keyValue="keyValue"
            :keyPermutation="keyPermutation"
            :text="plainText"
          />
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
import ColumnarTable from '@/components/columnar/ColumnarTable'

export default {
  name: 'ColumnarDescription',
  components: {
    'columnar-table': ColumnarTable
  },
  data() {
    return {
      keyValue: 'slovo',
      keyPermutation: [3, 0, 1, 4, 2],
      plainText: 'thisistransposition',
      plainTextRows: ['thisi', 'stran', 'sposi', 'tion']
    }
  }
}
</script>

<style scoped>
.table-container {
  width: 30%;
  margin: 0 auto;
}
</style>
