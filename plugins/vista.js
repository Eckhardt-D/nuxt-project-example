import Vue from 'vue';
import '@rainmakerdigital/vista-sdk/dist/vendor.bundle.js';
import Vista from '@rainmakerdigital/vista-sdk/dist/index.bundle.js';

  let vista = new Vista({
    vistaId: '5cee1176-348d-4cf3-8417-ed031ea25d4e',
    secretKey: 'd1DlWSQwzBGlezTy4rQSL9QpplI47iIU',
    journeyKey: 'af64-cf7b-a40b-05db-bff2-2452-4741-e1c4'
  });

Vue.prototype.$vista = vista;