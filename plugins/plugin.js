import { STORAGE_KEY } from '~/storage_key/storage_key'

export default ({ store }) => {
  if (process.client) {
    const savedState = localStorage.getItem('ToDo')

    if (savedState) {
      const parsedSavedState = JSON.parse(savedState)

      if (parsedSavedState.todos) {
        store.replaceState(parsedSavedState)
      }
    }

    store.subscribe((mutation, state) => {
      const todo = state.todos
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ todo }))
    })

    if (!store.state.todos) {
      store.replaceState({ todos: [] })
    }
  }
}
