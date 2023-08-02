export const STORAGE_KEY = 'ToDoList'

if (navigator.userAgent.includes('PhantomJS') > -1) {
  window.localStorage.clear()
}
