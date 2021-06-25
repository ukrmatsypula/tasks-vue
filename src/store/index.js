import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },
  getters: {
    TASKS(state) {
      return state.tasks;
    },
    TASK_BY_ID(state) {
      return (id) => state.tasks.find((task) => task.id === id);
    },
  },
  mutations: {
    CREATE_TASK(state, task) {
      state.tasks.push(task);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    UPDATE_TASK(state, { id, description, date }) {
      const tasks = state.tasks.concat();

      const idx = tasks.findIndex((task) => task.id === id);
      const task = tasks[idx];

      const status = new Date(date) > new Date() ? "active" : "outdated";

      tasks[idx] = { ...task, date, description, status };

      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    CREATE_TASK({ commit }, task) {
      commit("CREATE_TASK", task);
    },
    UPDATE_TASK({ commit }, task) {
      commit("UPDATE_TASK", task);
    },
  },
  modules: {},
});
