<template>
  <div>
    <h2>Login Successfully</h2>
    <h3 class="mb-5">User Token = {{ token }}</h3>
    <button class="btn small bold" @click="logOut">Log Out</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "homepage",
  computed: {
    ...mapState({
      token: (store) => store.auth.token,
    }),
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>