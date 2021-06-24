import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },
  mutations: {
    CREATE_TASK(state, task) {
      state.tasks.push(task);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    CREATE_TASK({ commit }, task) {
      commit("CREATE_TASK", task);
    },
  },
  modules: {},
});
