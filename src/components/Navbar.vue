<template>
  <div>
    <nav class="blue darken-3">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Tasks</router-link>
        <ul class="right hide-on-med-and-down">
          <router-link to="/" tag="li" exact active-class="active"
            ><a href="#">Create</a>
          </router-link>
          <router-link to="/list" tag="li" active-class="active"
            ><a href="#">List</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>
