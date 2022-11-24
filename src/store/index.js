import { createStore } from "vuex";
import axios from "axios";

window.axios = axios;

window.axios.defaults.baseURL = "https://rickandmortyapi.com/api";

window.axios.defaults.timeout = 1000 * 60 * 5;

export default createStore({
  state: {
    items: [],
    person: {},
    count: "",
  },
  getters: {},
  mutations: {
    setAll(state, persons) {
      state.items = persons;
    },
    setPerson(state, person) {
      state.person = { ...person };
    },
    setCount(state, count){
      state.count = count;
    }
  },
  actions: {
    getAll(context, page = 1) {
      return new Promise((resolve, reject) => {
        window.axios
          .get(`/character/?page=${page}`)
          .then((response) => {
            context.commit("setAll", response.data.results);
            context.commit("setCount", response.data.info.pages);
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
    search(context, { name, page }) {
      return new Promise((resolve, reject) => {
        const names = name.toString();
        const pages = parseInt(page);
        window.axios
          .get(`/character/?page=${pages}&name=${names}`)
          .then((response) => {
            context.commit("setAll", response.data.results);
            context.commit("setCount", response.data.info.pages);
            resolve(response);
          })
          .catch(reject);
      });
    },
  },
  modules: {},
});
