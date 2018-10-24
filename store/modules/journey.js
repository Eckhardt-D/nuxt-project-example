import Vue from 'vue'


const state = {
  mailStatus: null
}

const getters = {
  mailStatus: state => state.mailStatus
}

const mutations = {
  CHANGE_MAIL_STATUS: (state, payload) => {
    state.mailStatus = payload;
  }
}

const actions = {
  sendSanitizedMessage({commit}, payload) {
    Vue.prototype.$vista.journey.sendMail(
      {
        From: 'vistatest@rainmaker.travel',
        FromName: 'VISTA.switch',
        ReplyTo: 'vistatest@rainmaker.travel',
        ReplyToName: 'VISTA.switch',
        To: 'eckhardt.dreyer@gmail.com',
        ToName: 'Eckhardt',
        Subject: payload.subject,
        TextBody: 'This is a test',
        HTMLBody: `<h1>Enquiry to: ${payload.department}</h1>
                    <p>Name: ${payload.firstname}</p>
                    <p>Last Name: ${payload.lastname}</p>
                    <p>Email: ${payload.email}</p>
                    <p>Phone: ${payload.phone}</p>
                    <p>Package Length: ${payload.length}</p>
                    <p>Package Width: ${payload.width}</p>
                    <p>Package Height: ${payload.height}</p>
                    <p>Volumetric Calculation: ${payload.volumetric}</p>
                    <p>Subject: ${payload.subject}</p>
                    <p>Message: ${payload.message}</p>
                    <br>`
      }
    ).then(
      res => {
        if(res) {
          commit('CHANGE_MAIL_STATUS', true)
        }
      }
    ).catch(
      error => {
        commit('CHANGE_MAIL_STATUS', false)
      }
    );
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}
