<template>
  <div class="w_table_main">
    <table class="w_table table-auto whitespace-no-wrap table-striped">
      <thead class="w_head">
      <tr class="text-left">
        <th v-for="col in header" :key="col.value">{{ col.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr class="w_body_tr" v-for="(row,index) in body" :key="index">
        <td v-for="col in header" :key="col.value">{{ row[col.value] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WTable",
  props: {
    body: Array,
    header: Array,
  }
}
</script>

<style scoped>

</style>