import Vue from 'vue'


const state = {
  mailStatus: null,
  vacancyMailStatus: null
}

const getters = {
  mailStatus: state => state.mailStatus,
  vacancyMailStatus: state => state.vacancyMailStatus
}

const mutations = {
  CHANGE_MAIL_STATUS: (state, payload) => {
    state.mailStatus = payload;
  },
  CHANGE_VMAIL_STATUS: (state, payload) => {
    state.vacancyMailStatus = payload;
  }
}

const actions = {
  sendSanitizedMessage({commit}, payload) {
    Vue.prototype.$vista.journey
    .sendTemplateMail({
      from: 'rainmaker VISTA.journey <journey@rainmaker.travel>',
      to: ['"Eckhardt Dreyer" <eckhardt@rainmaker.travel>', '"Stephen Lombard" <stephen@rainmaker.travel>', '"Thomas Muller" <thomas@rainmaker.travel>'],
      replyTo: payload.email,
      subject: `New WebSite Enquiry | ${payload.department}`,
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
  },
  sendVacancyApplication({commit}, payload) {
    Vue.prototype.$vista.journey.sendTemplateMail({
      from: 'rainmaker VISTA.journey <journey@rainmaker.travel>',
      to: ['"Eckhardt Dreyer" <eckhardt@rainmaker.travel>', '"Stephen Lombard" <stephen@rainmaker.travel>', '"Thomas Muller" <thomas@rainmaker.travel>'],
      replyTo: payload.email,
      subject: `New Vacancy Application | ${payload.position}`,
      templateId: '5160faae-942b-4f89-9483-63426eeb8493',
      templateEngine: [
        {key:"user_fullname",value: payload.fullname},
        {key:"user_email",value: payload.email},
        {key:"app_position",value: payload.position}
      ],
      attachments: [{
        filename: 'cv.pdf',
        contentType: 'application/pdf',
        encoding: 'base64',
        cid: 'cv@l0l0l0l0',
        content: payload.cv
      }]
    })
    .then(res => {
      commit('CHANGE_VMAIL_STATUS', true)
    })
    .catch(error => {
      commit('CHANGE_VMAIL_STATUS', false)
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}
