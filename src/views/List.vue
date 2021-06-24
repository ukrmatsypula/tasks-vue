<template>
  <div>
    <h1>List</h1>

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
        <tr v-for="TASK of TASKS" :key="TASK.id">
          <td>{{ TASK.id }}</td>
          <td>{{ TASK.title }}</td>
          <td>{{ TASK.date }}</td>
          <td>
            <div>{{ TASK.description }}</div>
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

export default {
  name: "list",
  computed: {
    ...mapGetters(["TASKS"]),
  },
};
</script>

<style lang="scss"></style>
