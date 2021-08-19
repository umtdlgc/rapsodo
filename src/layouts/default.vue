<template>
  <div class="main">
    <div class="container">
      <language-picker id="language-picker"></language-picker>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import languagePicker from "./../components/shared/language-picker.vue";
export default {
  name: "default-layout",
  components: {
    languagePicker,
  },
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  background: #f7f7f7;
  width: 100%;
  height: 100vh;
  background-image: -webkit-linear-gradient(150deg, #f7f7f7 50%, #fff 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 375px) {
    background: url("./../assets/mobile-bg-path.svg");
    background-position: top;
    background-repeat: no-repeat;
    align-items: flex-start;
    background-position-y: -12px;
  }
  .container {
    max-width: 1040px;
    width: 100%;
    @media only screen and (max-width: 375px) {
      max-width: 335px;
    }
  }
}
@media only screen and (max-width: 375px) {
  #language-picker {
    display: none;
  }
}
</style>