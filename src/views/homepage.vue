<template>
  <div>
    <h2>Login Successfully</h2>
    <h3>User Token = {{ token }}</h3>
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
};
</script>