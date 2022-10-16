<template>
  <div class="w_table_main">
    <div class="flex justify-between">
      <select v-model="filterColum">
        <option v-for="option in header"
                :key="option.value"
                :value="option.value"
        >{{ option.title }}
        </option>
      </select>
      <select v-model="filterCondition">
        <option v-for="option in conditions"
                :key="option.value"
                :value="option.value"
        >{{ option.title }}
        </option>
      </select>
      <input
          v-model="filterValue"
          type="text" id="table-search"
          class="w_input"
          placeholder="Search for items">
    </div>
    <table class="w_table table-auto whitespace-no-wrap table-striped">
      <thead class="w_head">
      <tr class="text-left">
        <th
            @click="setSort(col)"
            v-for="col in header"
            :key="col.value">
          <div
              class="flex items-center group"
              :class="{'cursor-pointer': col.sorted}">
            <span>{{ col.title }}</span>
            <svg v-if="col.sorted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="w-8 h-8 transition-transform"
                 :class="{'rotate-180': sortedColum === col.value && sortDirection === -1, ' opacity-0 group-hover:opacity-50': sortedColum !== col.value,'opacity-100 group-hover:opacity-100': sortedColum === col.value}"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="w_body_tr" v-for="(row,index) in filterBody" :key="index">
        <td v-for="col in header" :key="col.value">{{ row[col.value] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WTable",
  data() {
    return {
      sortedColum: null,
      sortDirection: 1,
      conditions: [
        {title: 'Больше', value: 1, func: (obj) => obj[this.filterColum] > this.filterValue},
        {title: 'Меньше', value: 2, func: (obj) => obj[this.filterColum] < this.filterValue},
        {title: 'Равно', value: 3, func: (obj) => obj[this.filterColum] === this.filterValue},
        {title: 'Содержит', value: 4, func: (obj) => `${obj[this.filterColum]}`.includes(this.filterValue)}
      ],
      filterColum: null,
      filterCondition: null,
      filterValue: null,
    }
  },
  props: {
    body: Array,
    header: Array,
  },
  computed: {
    sortedBody() {
      if (this.sortedColum) {
        return [...this.body].sort((prev, next) => {
          if (prev[this.sortedColum] > next[this.sortedColum]) {
            return 1 * this.sortDirection
          }
          if (prev[this.sortedColum] < next[this.sortedColum]) {
            return -1 * this.sortDirection
          }
          return 0
        })
      }
      return this.body
    },
    filterBody() {
      if (!this.filterColum || !this.filterValue || !this.filterCondition) {
        return this.sortedBody
      }
      const condition = this.conditions.find(obj => obj.value === this.filterCondition)
      return this.sortedBody.filter(condition.func)
    }
  },
  methods: {
    setSort(colum) {
      if (!colum.sorted) {
        return
      }
      if (this.sortedColum === colum.value) {
        this.sortDirection *= -1
      }
      this.sortedColum = colum.value
    },
  }
}
</script>

<style scoped>

</style>