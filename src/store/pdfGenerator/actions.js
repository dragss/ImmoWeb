export default {
  setAllowedStep(context, payload) {
    context.commit('SET_STEP', payload);
  },
  completeStep(context, index) {
    context.commit('COMPLETE_STEP', index);
  },
  setAddress(context, payload) {
    let data = { ...payload };
    delete data.id;
    delete data._formatted;
    delete data.suffixe_numero;
    delete data.prefixe_section;
    delete data.numero_volume;
    delete data.nature_culture_speciale;
    delete data.type_voie;
    delete data.nature_culture;
    context.commit('SET_ADDRESS', data);
    context.commit('ADD_TO_INFO_FORM', data);
    context.commit('COMPLETE_STEP', 0);
    context.commit('SET_STEP', 1);
  },
  setInsee(context, payload) {
    context.commit('SET_INSEE', payload);
    context.commit('COMPLETE_STEP', 1);
    context.commit('SET_STEP', 2);
  },
  addToInfoForm(context, payload) {
    context.commit('ADD_TO_INFO_FORM', payload);
  },
  setPdfObject(context, payload) {
    context.commit('SET_PDF_OBJECT', payload);
    context.commit('COMPLETE_STEP', 2);
    context.commit('COMPLETE_STEP', 3);
    context.commit('SET_STEP', 3);
  },
};
