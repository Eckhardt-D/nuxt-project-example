// Object Store

import Vuex from 'vuex'

// Component-specific stores are in the modules/ firectory

const Store = () => {
  return new Vuex.Store({
    /** These must exist in order for the modules to merge **/
    // Add some initial state
    state: {
    },

    // Using centralized getters is good practice
    // They are also cached by vue just like computed props
    getters: {
    },

    // Only mutations can change the store state
    mutations: {
    },

    // Using centralized actions is good practice
    actions: {
    },

    // Additional modules included from other files
    modules: {

    }
  })
}

export default Store
