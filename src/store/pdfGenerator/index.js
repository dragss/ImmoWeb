import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
  allowedStep: 0,
  steps: [
    {
      label: "Choisir l'adresse",
      path: '/pdf-gen/step/1',
      completed: false,
    },
    {
      label: 'Données INSEE',
      path: '/pdf-gen/step/2',
      completed: false,
    },
    {
      label: "Formulaire d'informations",
      path: '/pdf-gen/step/3',
      completed: false,
    },
    {
      label: 'PDF',
      path: '/pdf-gen/step/4',
      completed: false,
    },
  ],
  address: null,
  insee: null,
  pdfObject: null,
  form: {},
};

export default {
  state,
  actions,
  mutations,
  getters,
};
