import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import pdfGenerator from './pdfGenerator';

const store = new Vuex.Store({
  modules: {
    pdfGenerator,
  },
});

export default store;
