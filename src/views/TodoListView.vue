<template>
  <div>
    <div class="d-flex w-100">
      <the-todo-sidebar></the-todo-sidebar>
      <div>
        <todo-list :todo-list-id="todoListId"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
import TheTodoSidebar from "../components/TheTodoSidebar";
export default {
  name: "TodoListView",
  components: {TheTodoSidebar, TodoList},
  computed: {
    todoListId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>