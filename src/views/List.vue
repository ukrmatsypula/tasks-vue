<template>
  <div>
    <h1>List</h1>

    <div class="row">
      <div class="input-field col s3">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Choose your option</option>
          <option value="active">Active</option>
          <option value="outdated">Outdated</option>
          <option value="completed">Completed</option>
        </select>
        <label>Status filter</label>
      </div>
    </div>

    <button class="btn btn-small" @click="filter = null">Clear filter</button>

    <hr />

    <table v-if="TASKS.length">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="TASK of filterTasks" :key="TASK.id">
          <td>{{ TASK.id }}</td>
          <td>{{ TASK.title }}</td>
          <td>{{ new Date(TASK.date).toLocaleDateString() }}</td>
          <td class="parent-for-description">
            <div class="task-description">{{ TASK.description }}</div>
          </td>
          <td>{{ TASK.status }}</td>
          <td>
            <router-link
              :to="'/task/' + TASK.id"
              tag="button"
              class="btn btn-small"
              >Open</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No tasks</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import M from "materialize-css";

export default {
  name: "list",
  data: () => ({
    filter: null,
  }),
  computed: {
    ...mapGetters(["TASKS"]),
    filterTasks() {
      return this.TASKS.filter((task) => {
        if (!this.filter) {
          return true;
        }
        return task.status === this.filter;
      });
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.select, {});
  },
};
</script>

<style lang="scss">
.parent-for-description {
  max-width: 400px;
}
.task-description {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
