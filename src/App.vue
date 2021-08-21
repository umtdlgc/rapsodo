<template>
  <div>
    <notifications group="notify" />
    <div :is="layout" data-app></div>
  </div>
</template>
<script>
export default {
  name: "app",
  computed: {
    layout() {
      return this.$route.meta.layout + "-layout" || "default-layout";
    },
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
}
</style>
