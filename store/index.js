// Object Store
import Vuex from 'vuex'
import journey from './modules/journey'

// Component-specific stores are in the modules/ firectory
const Store = () => {
  return new Vuex.Store({
    /** These must exist in order for the modules to merge **/
    // Add some initial state
    state: {
      selectedService: null,
      isContactForm: null
    },

    // Using centralized getters is good practice
    // They are also cached by vue just like computed props
    getters: {
      selectedService: state => state.selectedService,
      isContactForm: state => state.isContactForm
    },

    // Only mutations can change the store state
    mutations: {
      
    },

    // Using centralized actions is good practice
    actions: {
      changeService ({state}, payload) {
        state.selectedService = payload
        this.app.router.push('/services')
      },
      changeContactForm({state}, [payload, reload]) {
        state.isContactForm = payload
        if(reload) return this.app.router.push('/contact')
      }
    },

    // Additional modules included from other files
    modules: {
      journey
    }
  })
}

export default Store
