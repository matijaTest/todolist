<template>
  <div>
    <the-todo-register @registered="redirect"></the-todo-register>
  </div>
</template>

<script>
import TheTodoRegister from "../components/TheTodoRegister";
export default {
  name: "TodoRegisterView",
  components: {TheTodoRegister},
  methods: {
    redirect() {
      this.$router.replace("/")
    }
  }
}
</script>

<style scoped>

</style>