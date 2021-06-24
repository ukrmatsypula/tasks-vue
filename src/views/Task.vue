<template>
  <div>
    <div v-if="task">
      <p>{{ task.title }}</p>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "task",
  computed: {
    ...mapGetters(["TASK_BY_ID"]),
    task() {
      return this.TASK_BY_ID(parseInt(this.$route.params.id));
    },
  },
};
</script>

<style></style>
