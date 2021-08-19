<template>
  <div class="content d-flex flex-column">
    <img
      class="logo mb-1 d-show"
      src="./../assets/RapsodoCoachConnectLogoDark (1).svg"
    />
    <img
      class="mobile-logo mb-1 m-show"
      src="./../assets/RapsodoCoachConnectLogoDark.svg"
    />
    <h2 class="fs-18 bold m-white-text m-text-center">
      Diamond Sports Cloud Platform
    </h2>
    <h3 class="fs-15 gray-text mb-2 m-white-text m-text-center">
      Please sign-in to your account.
    </h3>
    <img src="./../assets/players-bg.png" class="mobile-top-image m-show" />
    <form class="mb-3">
      <div class="d-flex mb-1 d-flex flex-column">
        <label class="black-text fs-12 medium mb-1">E-mail</label>
        <input type="text" placeholder="Enter e-mail" class="small" />
      </div>
      <div class="d-flex mb-1 d-flex flex-column">
        <label class="black-text fs-12 medium mb-1"> Password</label>
        <input type="password" placeholder="Enter Password" class="small" />
      </div>
      <router-link class="mb-5 router-link bold gray-text" to="/">
        Forgot your password?
      </router-link>
      <label class="fs-12 gray-text subline-text m-show">
        By continuing , you agree to
        <p>
          <b class="black-text bold">Rapsodo’s Terms of Use</b> and
          <b class="black-text bold">Privacy Policy</b>
        </p>
      </label>
      <button class="btn small bold passive mb-2">Sign in</button>
      <button class="btn small bold">Sign up</button>
    </form>
    <label class="fs-12 gray-text subline-text d-show">
      By continuing , you agree to
      <b class="black-text bold">Rapsodo’s Terms of Use</b> and
      <b class="black-text bold">Privacy Policy</b>
    </label>
  </div>
</template>
<script>
export default {
  name: "SignIn",
};
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  width: calc(100% - 80px);
  height: 100vh;
  max-height: 513px;
  border-radius: 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 45px 40px;
  z-index: 1;
  overflow: hidden;
  @media only screen and (max-width: 375px) {
    background: transparent;
    padding: 0;
    width: auto;
    max-height: calc(100vh - 70px);
    margin-bottom: 33px;
    box-shadow: none;
    overflow: visible;
  }
  &:after {
    background: url("./../assets/image.jpg");
    background-repeat: no-repeat;
    background-position: 100% 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    z-index: -1;
    @media only screen and (max-width: 375px) {
      display: none;
    }
  }
  .logo {
    width: 129px;
    height: 28.4px;
    object-fit: contain;
    @media only screen and (max-width: 375px) {
      display: none;
    }
  }
  .mobile-logo {
    display: none;
    width: 132.2px;
    height: 29.1px;
    margin: 30px auto 5px;
    @media only screen and (max-width: 375px) {
      display: block;
    }
  }
  .router-link {
    font-size: 12px;
    font-weight: bold;
    color: #7c7e7f !important;
    text-decoration: none;
    display: block;
    @media only screen and (max-width: 375px) {
      margin-bottom: 0;
    }
  }
  .subline-text {
    border-top: 1px solid #ededed;
    max-width: 443px;
    padding-top: 10px;
    @media only screen and (max-width: 375px) {
      font-size: 10px;
      text-align: center;
      border: none;
      max-width: 225px;
      margin: 25px auto 30px;
      line-height: 1.7;
    }
  }
  form {
    @media only screen and (max-width: 375px) {
      margin-top: 163px;
      margin-bottom: 0;
      padding: 85px 15px 26px 15px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
  .mobile-top-image {
    position: absolute;
    top: 82px;
    left: -5px;
    z-index: -1;
  }
}
</style>