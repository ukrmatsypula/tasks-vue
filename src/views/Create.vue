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
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  components: {},
};
</script>
