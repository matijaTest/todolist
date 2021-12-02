<template>
  <div>
    <b-modal
        v-model="createCategoryModal"
        title="Create New Category"
        :busy="createCategoryModalBusy"
        @ok.prevent="saveNewCategory"
        ref="newCategoryModal"
    >
      <b-form ref="newCategoryForm" @submit.stop.prevent="saveNewCategory">
        <b-form-group
            id="modal-group-1"
            label="Name"
            label-for="modal-1"
            invalid-feedback="Name is required"
            :state="createCategoryFormValidity"
        >
          <b-form-input
              id="modal-1"
              v-model="createCategoryForm.name"
              type="text"
              placeholder="Enter category name"
              :state="createCategoryFormValidity"
              required
          ></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
    <div class="d-flex">
      <h1 v-if="!editing">{{ todoList.name }}</h1>
      <b-form v-if="editing" inline @submit.prevent="saveTodoList">
        <b-form-input
          id="edit-form-name-input"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Enter name"
          v-model="editForm.name"
        ></b-form-input>
        <b-button variant="primary"><b-icon icon="check-circle" font-scale="2"></b-icon></b-button>
      </b-form>
      <div v-if="!editing" class="float-right">
        <b-link @click="toggleCreateCategoryModal" class="link-primary"><b-icon-plus-circle></b-icon-plus-circle></b-link>
        <b-link @click="toggleEdit" class="link-secondary"><b-icon-pencil-square></b-icon-pencil-square></b-link>
        <b-link @click="removeTodoList" class="link-danger"><b-icon-trash></b-icon-trash></b-link>
      </div>
    </div>
    <todo-list-category v-for="category in todoList.categories" :key="category.id" :category-id="category.id"></todo-list-category>
  </div>
</template>

<script>
import TodoListCategory from "./TodoListCategory";
export default {
  name: "TodoList",
  components: {TodoListCategory},
  props: {
    todoListId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      todoList: {},
      editForm: {
        name: ''
      },
      createCategoryForm: {
        name: ''
      },
      createCategoryFormValidity: null,
      createCategoryModal: false,
      createCategoryModalBusy: false,
      loading: false,
      editing: false
    }
  },
  created() {
    this.load()
  },
  watch: {
    '$route': 'load'
  },
  methods: {
    async load() {
      this.todoList = {}
      this.loading = true

      let response = await this.$http.get(`/todolists/${this.todoListId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      console.log(response)
      this.todoList = response.data

      this.loading = false
    },
    async saveTodoList() {
      let response = await this.$http.put(`/todolists/${this.todoListId}`, this.editForm, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      this.todoList.name = response.data.name
      this.toggleEdit()
    },
    async removeTodoList() {
      await this.$http.delete(`/todolists/${this.todoListId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      await this.$router.replace("/")
    },
    async saveNewCategory() {
      if (!this.validateNewCategoryForm())
        return

      this.createCategoryModalBusy = true
      let response = await this.$http.get(`/todolists/${this.todoList.id}/categories/create`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        params: this.createCategoryForm
      })

      this.todoList.categories.push(response.data)

      this.$nextTick(() => {
        this.toggleCreateCategoryModal()
        this.resetCreateCategoryModal()
        this.createCategoryModalBusy = false
      })
    },
    validateNewCategoryForm() {
      const valid = this.$refs.newCategoryForm.checkValidity()
      this.createCategoryFormValidity = valid
      return valid
    },
    toggleCreateCategoryModal() {
      this.createCategoryModal = !this.createCategoryModal
    },
    resetCreateCategoryModal() {
      this.createCategoryForm.name = ''
      this.createCategoryFormValidity = null
    },
    toggleEdit() {
      this.editing = !this.editing
    },
  }
}
</script>

<style scoped>

</style>