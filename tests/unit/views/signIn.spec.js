import SignIn from '@/views/signIn.vue'
import * as authService from '@/services/auth.js';

authService.default.signIn = jest.fn().mockResolvedValue({
  data: {
    token: 1
  }
});

const actions = { updateToken: jest.fn() };
const store = new Vuex.Store({
  actions,
});
let wrapper

beforeEach(() => {
  wrapper = shallowMount(SignIn, {
    localVue,
    store,
    mocks: {
      $router: { push: jest.fn() },
    },
  });

});

describe('SignIn.vue', () => {
  it('should signIn', async () => {
    wrapper.vm.signIn();
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect(authService.default.signIn).toHaveBeenCalled();
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/homepage');
  });
  it('should isValid', () => {
    wrapper.setData({ email: 'test', password: 'test' });

    expect(wrapper.vm.isValid).toBeTruthy();
  });
})
