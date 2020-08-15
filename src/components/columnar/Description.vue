<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Jednoduchá sloupcová transpozice</h5>

      <div class="my-table">
        <b-table-simple hover small caption-top responsive class="text-center">
          <caption>
            Ukázka sloupcové transpozice
          </caption>

          <b-thead head-variant="dark">
            <b-tr>
              <b-th v-for="(letter, index) in keyValue" :key="index">{{
                letter
              }}</b-th>
            </b-tr>
            <b-tr>
              <b-th v-for="(position, index) in keyPermutation" :key="index">{{
                position + 1
              }}</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="(row, index) in plainTextRows" :key="index">
              <b-td v-for="(letter, index) in row" :key="index">{{
                letter
              }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.my-table {
  width: 30%;
}
</style>
