<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="col in header" :key="col.value">{{ col.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row,index) in body" :key="index">
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