<template>
  <div>
    <div class="d-flex">
      <the-todo-sidebar></the-todo-sidebar>
      <div>
        <h1>Index</h1>
      </div>
    </div>
  </div>
</template>

<script>
import TheTodoSidebar from "../components/TheTodoSidebar";
export default {
  name: "TodoIndexView",
  components: {TheTodoSidebar}
}
</script>

<style scoped>

</style>