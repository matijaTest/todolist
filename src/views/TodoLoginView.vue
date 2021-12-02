<template>
  <div>
    <the-todo-login @loggedIn="redirect"></the-todo-login>
  </div>
</template>

<script>
import TheTodoLogin from "../components/TheTodoLogin";
export default {
  name: "TodoLoginView",
  components: {TheTodoLogin},
  methods: {
    redirect() {
      this.$router.replace("/")
    }
  }
}
</script>

<style scoped>

</style>