import apiGateway from './../services/interceptors/api.js'

const state = {
  token: localStorage.getItem('token') || null,
  language: localStorage.getItem('language') || "EN",
};

const actions = {
  updateToken({ commit }, token) {
    commit('setToken', token);
  },
  setLanguage({ commit }, language) {
    commit('updateLanguage', language);
  }
};

const mutations = {
  setToken(context, token) {
    if (token) {
      state.token = token;
      localStorage.setItem('token', token);
      apiGateway.defaults.headers.common.Authorization = token;
    } else {
      state.token = '';
      localStorage.removeItem('token');
      delete apiGateway.defaults.headers.common.Authorization;
    }
  },
  updateLanguage(context, language) {
    state.language = language;
    localStorage.setItem('language', language);
  }
};

export default {
  state,
  actions,
  mutations,
};
