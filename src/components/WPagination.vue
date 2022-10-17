<template>
  <div class="w_pagination_wrapper">
    <div class="w_pag_mobile">
      <a href="#"
         class="w_button">Previous</a>
      <a href="#"
         class="w_button">Next</a>
    </div>
    <div class="flex items-center space-x-1 mx-auto">
      <button type="button"
              @click="paginationClick(pagination.page - 1)"
              :disabled="pagination.page === 1"
              class="w_button">
        Previous
      </button>
      <a
          @click="paginationClick(page)"
          v-for="page in pageCount"
          :key="page"
          href="#"
          class="w_button"
          :class="{'active': pagination.page === page}">
        {{ page }}
      </a>
      <button
          @click="paginationClick(pagination.page + 1)"
          :disabled="pageCount === pagination.page"
          type="button"
          class="w_button">
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