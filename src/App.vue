<template>
  <div id="app">
    <WTable :body="table" :header="header"/>
    <WPagination :pagination="pagination" :total="total" @change-page="paginationClick"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import WTable from "@/components/WTable";
import WPagination from "@/components/WPagination";

export default {
  name: 'App',
  components: {WTable, WPagination},
  data() {
    return {
      table: [],
      header: [
        {title: 'Дата', value: 'date'},
        {title: 'Название', value: 'title', sorted: true},
        {title: 'Количество', value: 'count', sorted: true},
        {title: 'Расстояние', value: 'distance', sorted: true},
      ],
      total: 0,
      pagination: {page: 1, count: 3}
    }
  },

  methods: {
    ...mapActions({
      getTable: 'data/getTable'
    }),
    async init() {
      const response = await this.getTable(this.pagination)
      this.table = response.data
      this.total = response.total
    },
    async paginationClick(page) {
      console.log(page)
      this.pagination.page = page
      await this.init()
    }
  },
  created() {
    this.init()
  },
}
</script>

<style lang="scss">

</style>
