<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h1>{{ task.title }}</h1>

      <form @submit.prevent="submitHandler">
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea
            class="materialize-textarea"
            id="description"
            v-model="description"
            style="min-height: 150px"
          ></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px"
            >{{ description.length }}/2048</span
          >
        </div>
        <input type="text" ref="datepicker" />
        <button class="btn" type="submit">Create task</button>
      </form>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import M from "materialize-css";

export default {
  name: "task",
  data: () => ({
    description: "",
    chips: null,
    date: null,
  }),
  computed: {
    ...mapGetters(["TASK_BY_ID"]),
    task() {
      return this.TASK_BY_ID(parseInt(this.$route.params.id));
    },
  },
  methods: {
    ...mapActions(["CREATE_TASK"]),
    submitHandler() {
      this.CREATE_TASK();
      this.$router.push({ name: "list" });
    },
  },
  mounted() {
    this.description = this.task.description;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
      data: this.task.tags,
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
    setTimeout(() => {
      M.updateTextFields();
    }, 0);
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
    if (this.chips && this.chips.destroy) {
      this.chips.destroy();
    }
  },
};
</script>

<style></style>
