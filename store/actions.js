export default {
  addTodo ({ commit }, task) {
    commit('addTodo', task)
  },
  removeTodo ({ commit }, todo) {
    commit('removeTodo', todo)
  },
  toggleTodo ({ commit }, todo) {
    commit('editTodo', { todo, done: !todo.done })
  },
  clearCompleted ({ state, commit }) {
    state.todos.filter(todo => todo.done).forEach((todo) => {
      commit('removeTodo', todo)
    })
  }
}
