<script>
import { mapActions } from 'vuex'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done).length
}
export default {
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  },
  data () {
    return {
      visibility: 'all',
      filters
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      if (!this.todos || this.todos.length === 0) {
        return 0
      }
      return this.todos.filter(todo => todo.done).length
    }
  },
  methods: {
    ...mapActions([
      'addTodo',
      'toggleAll',
      'clearCompleted'
    ]),
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.dispatch('addTodo', text)
      }
      e.target.value = ''
    }
  }
}
</script>

<template>
  <section class="todoapp">
    <h1>Vue ToDo List</h1>
    <div class="container">
      <v-card-title v-show="todos" class="card-title">
        <p class="todo-count">
          Tasks <span>{{ todos.length }}</span>
        </p>
        <p class="todo-count">
          Tasks Done <span>{{ remaining }}</span>
        </p>
        <v-btn @click="clearCompleted()">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg> All Tasks
        </v-btn>
      </v-card-title>
      <v-card>
        <v-list v-show="todos" class="list-items">
          <ToDo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo" />
        </v-list>
      </v-card>
      <div class="add-task">
        <v-input
          class="new-todo"
        >
          <input
            placeholder="Add task"
            autofocus
            type="text"
            @keyup.enter="addTodo"
          >
        </v-input>
      </div>
    </div>
  </section>
</template>

<style>
@import '~@/assets/style/main.scss';
</style>
