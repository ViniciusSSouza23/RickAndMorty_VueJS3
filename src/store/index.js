import { createStore } from "vuex";
import axios from "axios";

window.axios = axios;

window.axios.defaults.baseURL = "https://rickandmortyapi.com/api";

window.axios.defaults.timeout = 1000 * 60 * 5;

export default createStore({
  state: {
    items: [],
    person: {},
  },
  getters: {},
  mutations: {
    setAll(state, persons) {
      state.items = persons;
    },
    setPerson(state, person) {
      state.person = { ...person };
    },
  },
  actions: {
    getAll(context, page = 1) {
      return new Promise((resolve, reject) => {
        window.axios
          .get(`/character/?${page}`)
          .then((response) => {
            context.commit("setAll", response.data.results);
            resolve(response);
          })
          .catch(reject);
      });
    },
    getPerson(context, id) {
      return new Promise((resolve, reject) => {
        window.axios
          .get(`/character/${id}`)
          .then((response) => {
            context.commit("setPerson", response.data);
            resolve(response);
          })
          .catch(reject);
      });
    },
  },
  modules: {},
});
