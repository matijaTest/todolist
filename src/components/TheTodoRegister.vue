<template>
  <div>
    <h2>Register</h2>
    <b-alert v-model="showAlert" variant="danger" dismissible>
      {{ errorMessage }}
    </b-alert>
    <b-form @submit.prevent="register">
      <b-form-group
          id="register-group-1"
          label="Nickname:"
          label-for="register-input-1"
      >
        <b-form-input
            id="register-input-1"
            v-model="registerForm.name"
            type="text"
            placeholder="Enter nickname"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="register-group-2"
          label="Email address:"
          label-for="register-input-2"
      >
        <b-form-input
            id="register-input-2"
            v-model="registerForm.email"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="register-group-3"
          label="Password:"
          label-for="register-input-3">
        <b-form-input
            id="register-input-3"
            v-model="registerForm.password"
            type="password"
            placeholder="Enter password"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="register-group-4"
          label="Confirm password:"
          label-for="register-input-4">
        <b-form-input
            id="register-input-4"
            v-model="registerForm.password_confirmation"
            type="password"
            placeholder="Enter password"
            required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "TheTodoRegister",
  emits: ["registered"],
  data() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      showAlert: false,
      errorMessage: ''
    }
  },
  methods: {
    async register() {
      this.showAlert = true
      this.$http.post("/auth/signup", this.registerForm).then(() => {
        this.$emit("registered");
      }).catch((error) => {
        this.errorMessage = error.response.data.error
        this.showAlert = true
      })
    }
  }
}
</script>

<style scoped>

</style>