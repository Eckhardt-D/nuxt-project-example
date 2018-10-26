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
    Vue.prototype.$vista.journey
    .sendTemplateMail({
      from: 'VISTA.journey <journey@rainmaker.travel>',
      to: ['"Eckhardt Dreyer" <eckhardt@rainmaker.travel>', '"Stephen Lombard" <stephen@rainmaker.travel>', '"Thomas Muller" <thomas@rainmaker.travel>'],
      subject: payload.subject,
      templateId: 'feebb6da-0eb6-47ed-b7e0-10764c3aa256',
      templateEngine: [
        {key:"first_name",value: payload.firstname},
        {key:"last_name",value: payload.lastname},
        {key:"user_email",value: payload.email},
        {key:"user_phone",value: payload.phone},
        {key:"message",value: payload.message},
        {key:"pack_width",value: payload.width},
        {key:"pack_height",value: payload.height},
        {key:"pack_length",value: payload.length},
        {key:"volumetric",value: payload.volumetric.toString()},
        {key:"department",value: payload.department}
      ],
      attachments: []
    })
    .then(res => {
      commit('CHANGE_MAIL_STATUS', true)
    })
    .catch(error => {
      commit('CHANGE_MAIL_STATUS', false)
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}
