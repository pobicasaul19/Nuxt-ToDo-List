import Vuex from 'vue'
import mutations from './mutations'
import actions from './actions'
import plugins from '~/plugins/plugin'
import { STORAGE_KEY } from '~/storage_key/storage_key'

const store = () => new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  mutations,
  actions,
  plugins
})

export default store
