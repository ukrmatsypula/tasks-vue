<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <div class="input-field">
        <h1>Create task</h1>
        <form>
          <div class="input-field">
            <input id="title" type="text" class="validate" required />
            <label for="title">Title</label>
          </div>
          <div class="chips" ref="chips"></div>
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
  mounted() {
    M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
    });
  },
};
</script>
