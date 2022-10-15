<template>
    <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative p-0">
      <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
        <thead class="text-sm text-gray-700 bg-gray-100">
        <tr class="text-left">
          <th v-for="col in header" :key="col.value">{{ col.title }}</th>
        </tr>
        </thead>
        <tbody>
        <tr class="text-left bg-white border-t hover:bg-gray-50" v-for="(row,index) in body" :key="index">
          <td class="" v-for="col in header" :key="col.value">{{ row[col.value] }}</td>
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