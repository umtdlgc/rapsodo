import notify from '@/utils/notify.js';
import Vue from 'vue';

Vue.notify = jest.fn();

describe('Notify Util', () => {
  it('it should showError', async () => {
    notify.showError('test');
    expect(Vue.notify).toHaveBeenCalledWith({
      group: 'notify',
      title: 'Error:',
      text: 'test',
      type: 'error',
      duration: 5000,
    });
  });
});
