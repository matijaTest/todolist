<template>
  <div>
    <b-card
        header-tag="header"
    >
      <template #header>
        <div class="d-flex justify-content-between">
          <a v-b-toggle="`collapse-${categoryId}`"
             variant="primary"
          >
            <h6 class="mb-0">{{ category.name }}</h6>
          </a>
          <div>
            <b-link class="link-primary"><b-icon-plus-circle></b-icon-plus-circle></b-link>
            <b-link class="link-secondary"><b-icon-pencil-square></b-icon-pencil-square></b-link>
            <b-link class="link-danger"><b-icon-trash></b-icon-trash></b-link>
          </div>
        </div>
      </template>
      <b-collapse visible :id="`collapse-${categoryId}`">
        <TodoListCategoryTask v-for="task in sortedTasks" :key="task.id" :task-id="task.id"></TodoListCategoryTask>
        <b-card-text v-if="!showNoTasks">No tasks yet :(</b-card-text>
        <b-icon v-if="loading" icon="arrow-clockwise" animation="spin" font-scale="1"></b-icon>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import TodoListCategoryTask from "./TodoListCategoryTask";
export default {
  name: "TodoListCategory",
  components: {TodoListCategoryTask},
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      category: {
        tasks: [

        ]
      },
      loading: false
    }
  },
  computed: {
    showNoTasks() {
      return this.category.tasks.length > 0 && !this.loading
    },
    sortedTasks() {
      return this.category.tasks
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.loading = true

      let response = await this.$http.get(`/categories/${this.categoryId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      this.category = response.data

      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>