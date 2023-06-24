export default {
  SET_ADDRESS: (state, payload) => {
    state.address = { ...payload };
  },
  SET_INSEE: (state, payload) => {
    state.insee = { ...payload };
  },
  ADD_TO_INFO_FORM: (state, payload) => {
    state.form = { ...state.form, ...payload };
  },
  SET_STEP: (state, payload) => {
    if (payload > state.allowedStep) {
      state.allowedStep = payload;
    }
  },
  COMPLETE_STEP: (state, index) => {
    state.steps[index].completed = true;
  },
  SET_PDF_OBJECT: (state, payload) => {
    state.pdfObject = payload;
  },
};
