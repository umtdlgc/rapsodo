import Vue from 'vue';

const showError = (errorMessage) => {
  Vue.notify({
    group: 'notify',
    title: 'Error:',
    text: errorMessage,
    type: 'error',
    duration: 5000,
  });
};

export default {
  showError,
};
