<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <div class="input-field">
        <h1>Create task</h1>
        <form>
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
            <label for="description">Textarea</label>
            <span
              class="character-counter"
              style="float: right; font-size: 12px"
              >{{ description.length }}/2048</span
            >
          </div>
          <input type="text" ref="datepicker" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "Create",
  components: {},
  data: () => ({
    description: "",
    title: "",
  }),
  mounted() {
    M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
    });
    M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  },
};
</script>
