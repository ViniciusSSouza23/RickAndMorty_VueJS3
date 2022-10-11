import { createStore } from "vuex";
import axios from "axios";

window.axios = axios;

window.axios.defaults.baseURL = "https://rickandmortyapi.com/api";

window.axios.defaults.timeout = 1000 * 60 * 5;

export default createStore({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    setAll(state, persons) {
      state.items = persons;
      console.log(persons)
    },
  },
  actions: {
    getAll(context, page = 1) {
      return new Promise((resolve, reject) => {
        window.axios
          .get(`/character/?${page}`)
          .then((response) => {
            console.log(response)
            context.commit("setAll", response.data.results);
            resolve(response);
          })
          .catch(reject);
      });
    },
  },
  modules: {},
});
