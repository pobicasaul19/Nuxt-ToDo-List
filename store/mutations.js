export default {
  addTodo (state, task) {
    state.todos.push({
      id: state.todos.length + 1,
      task,
      done: false
    })
  },
  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  editTodo (state, { todo, task, done = todo.done }) {
    const index = state.todos.indexOf(todo)

    state.todos.splice(index, 1, {
      ...todo,
      ...task,
      done
    })
  }
}
