<template>
  <div class="flex items-center justify-between border-gray-200 bg-white px-4 mx-auto py-3 sm:px-6">
    <div class="flex flex-1 justify-between sm:hidden">
      <a href="#"
         class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
      <a href="#"
         class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
    </div>
    <div class="flex items-center space-x-1 mx-auto">
      <button type="button"
              @click="paginationClick(pagination.page - 1)"
              :disabled="pagination.page === 1"
              class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white disabled:text-gray-500 disabled:bg-gray-100">
        Previous
      </button>
      <a
          @click="paginationClick(page)"
          v-for="page in pageCount"
          :key="page"
          href="#"
          class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-500"
          :class="{'bg-blue-400 text-white': pagination.page === page}">
        {{ page }}
      </a>
      <button
          @click="paginationClick(pagination.page + 1)"
          :disabled="pageCount === pagination.page"
          type="button"
          class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white disabled:text-gray-500 disabled:bg-gray-100">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WPagination",
  data() {
    return {}
  },
  methods: {
    paginationClick(page) {
      this.$emit('change-page', page)
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pagination.count)
    }
  },
  props: {
    pagination: Object,
    total: Number
  }
}
</script>

<style scoped>

</style>