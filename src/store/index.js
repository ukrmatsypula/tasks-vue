import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    CREATE_TASK(state, task) {
      state.tasks.push(task);
    },
  },
  actions: {
    CREATE_TASK({ commit }, task) {
      commit("CREATE_TASK", task);
    },
  },
  modules: {},
});
