import Homepage from '@/views/homepage.vue'


const state = {
  auth: {
    token: 'test'
  }
}
const store = new Vuex.Store({
  state,
});
let wrapper

beforeEach(() => {
  wrapper = shallowMount(Homepage, {
    localVue,
    store,
    mocks: {
      $router: { push: jest.fn() },
    },
  });

});

describe('Homepage.vue', () => {
  it('should Homepage', () => {
    wrapper.vm.logOut();
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/');
  });
})
