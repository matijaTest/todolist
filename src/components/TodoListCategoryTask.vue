<template>
  <div>
    <p>{{ task.task }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoListCategoryTask",
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      task: {}
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      let response = await this.$http.get(`/tasks/${this.taskId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      this.task = response.data
    }
  }
}
</script>

<style scoped>

</style>