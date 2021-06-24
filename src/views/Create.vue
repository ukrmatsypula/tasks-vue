<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <div class="input-field">
        <h1>Create task</h1>
        <form @submit.prevent="submitHandler">
          <div class="input-field">
            <input
              class="validate"
              v-model="title"
              id="title"
              type="text"
              required
            />
            <label for="title">Title</label>
            <span class="helper-text" data-error="title is required"></span>
          </div>
          <div class="chips" ref="chips"></div>
          <div class="input-field">
            <textarea
              class="materialize-textarea"
              id="description"
              v-model="description"
            ></textarea>
            <label for="description">Description</label>
            <span
              class="character-counter"
              style="float: right; font-size: 12px"
              >{{ description.length }}/2048</span
            >
          </div>
          <input type="text" ref="datepicker" />
          <button class="btn" type="submit">Create task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import M from "materialize-css";
export default {
  name: "Create",
  components: {},
  data: () => ({
    description: "",
    title: "",
    chips: null,
    date: null,
  }),
  methods: {
    ...mapActions(["CREATE_TASK"]),
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: "active",
        tags: this.chips.chipsData,
        date: this.date.date,
      };

      this.CREATE_TASK(task);
      this.$router.push({ name: "list" });
    },
  },
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
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
