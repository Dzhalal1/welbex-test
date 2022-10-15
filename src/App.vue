<template>
  <div id="app">
    <WTable :body="table" :header="header"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import WTable from "@/components/WTable";

export default {
  name: 'App',
  components: {WTable},
  data() {
    return {
      table: [],
      header: [
        {title: 'Дата', value: 'date'},
        {title: 'Название', value: 'title', sorted: true},
        {title: 'Количество', value: 'count', sorted: true},
        {title: 'Расстояние', value: 'distance', sorted: true},
      ]
    }
  },

  methods: {
    ...mapActions({
      getTable: 'data/getTable'
    }),
    async init() {
      this.table = await this.getTable()
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss">

</style>
