<template>
  <div class="login-form">
    <h1 class="login-form__title">{{ title }}</h1>
    <form>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
        >
      </p>
      <p>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
        >
      </p>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">remeber me</label>

      <p>
        <button
          type="button"
          value="Submit"
          @click="checkForm"
        >
          Submit
        </button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    title: String,
  },
  data() {
    return {
      errors: [],
      name: null,
      password: null,
      checked: false,
    };
  },
  methods: {
    checkForm(e) {
      if (this.name && this.password) {
        this.$router.push('home');

        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }

      if (!this.password) {
        this.errors.push('Password required.');
      }

      e.preventDefault();

      return false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.login-form {
  &__title {
    color: red;
  }
}

</style>
