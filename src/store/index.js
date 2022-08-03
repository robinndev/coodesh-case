import { createStore } from 'vuex';
import http from '@/services/api';

export default createStore({
  state: {
    toggleModal: '',
    allPeoples: [],
    modalInfos: {},
  },
  getters: {
  },
  mutations: {
    SET_TOGGLEMODAL(state, payload) {
      state.toggleModal = payload;
    },
    SET_GETPEOPLES(state, payload) {
      state.allPeoples = payload;
    },
    SET_INFOMODAL(state, payload) {
      state.modalInfos = payload;
    },
  },
  actions: {
    getPeoples({ commit }) {
      http.get('?results=9')
        .then((res) => {
          const respose = res.data.results;
          commit('SET_GETPEOPLES', respose);
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
