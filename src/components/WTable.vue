<template>
  <div class="w_table_main">
    <div class="flex justify-between items-center">
      <select v-model="filterColumn">
        <option value="" disabled selected>Выбрать столбец</option>
        <option v-for="option in header"
                :key="option.value"
                :value="option.value"
        >{{ option.title }}
        </option>
      </select>
      <select v-model="filterCondition">
        <option value="" disabled selected>Выбрать условие</option>
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
      <button class="w_button"
              type="button"
              @click="filterSubmit"
      >Поиск
      </button>
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
                 :class="{'rotate-180': sortedColumn === col.value && sortDirection === -1, ' opacity-0 group-hover:opacity-50': sortedColumn !== col.value,'opacity-100 group-hover:opacity-100': sortedColumn === col.value}"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </th>
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
  data() {
    return {
      sortedColumn: null,
      sortDirection: 1,
      conditions: [
        {title: 'Больше', value: 1},
        {title: 'Меньше', value: 2},
        {title: 'Равно', value: 3},
        {title: 'Содержит', value: 4},
      ],
      filterColumn: '',
      filterCondition: '',
      filterValue: null,
    }
  },
  props: {
    body: Array,
    header: Array,
  },
  methods: {
    setSort(colum) {
      if (!colum.sorted) {
        return
      }
      if (this.sortedColumn === colum.value) {
        this.sortDirection *= -1
      }
      this.sortedColumn = colum.value
      this.$emit('sort-submit', {column: this.sortedColumn, direction: this.sortDirection})
    },
    filterSubmit() {
      this.$emit('filter-submit', {column: this.filterColumn, condition: this.filterCondition, value: this.filterValue})
    }
  }
}
</script>

<style scoped>

</style>