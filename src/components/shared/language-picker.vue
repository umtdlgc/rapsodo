<template>
  <div class="switch">
    <input
      type="radio"
      class="switch-input"
      name="language"
      value="EN"
      id="EN"
      v-model="selectedLanguage"
    />
    <label for="EN" class="switch-label switch-label-off">EN</label>
    <input
      type="radio"
      class="switch-input"
      name="language"
      value="JP"
      id="JP"
      v-model="selectedLanguage"
    />
    <label for="JP" class="switch-label switch-label-on">JP</label>
    <span class="switch-selection"></span>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LanguagePicker",
  computed: {
    ...mapState({
      language: (store) => store.auth.language,
    }),
  },
  data() {
    return {
      selectedLanguage: "",
    };
  },
  watch: {
    selectedLanguage(val) {
      this.setLanguage(val);
    },
  },
  created() {
    this.selectedLanguage = this.language;
  },
  methods: {
    ...mapActions({
      setLanguage: "setLanguage",
    }),
  },
};
</script>
<style lang="scss" scoped>
.switch {
  position: relative;
  height: 25px;
  width: 73px;
  background: #fff;
  border-radius: 5px;
  padding: 3px;
  border: solid 1px #bbbcbc;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: auto;
}

.switch-label {
  position: relative;
  z-index: 2;
  float: left;
  width: 38px;
  line-height: 26px;
  font-size: 12px;
  color: #bbbcbc;
  text-align: center;
  cursor: pointer;
}
.switch-label:active {
  font-weight: bold;
}

.switch-label-off {
  padding-left: 2px;
}

.switch-label-on {
  padding-right: 2px;
}

.switch-input {
  display: none;
}
.switch-input:checked + .switch-label {
  color: #fff;
}
.switch-input:checked + .switch-label-on ~ .switch-selection {
  left: 50%;
}

.switch-selection {
  position: absolute;
  z-index: 1;
  margin: auto;
  left: 5px;
  display: block;
  width: calc(50% - 6px);
  height: 26px;
  border-radius: 5px;
  background-color: #07263c;
  -webkit-transition: left 0.15s ease-out;
  -moz-transition: left 0.15s ease-out;
  -ms-transition: left 0.15s ease-out;
  -o-transition: left 0.15s ease-out;
  transition: left 0.15s ease-out;
}
</style>