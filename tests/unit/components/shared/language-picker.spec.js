import LanguagePicker from '@/components/shared/language-picker.vue'

const setLanguage = jest.fn();
const state = {
  auth: {
    language: 'EN'
  }
}
const store = new Vuex.Store({
  state
});
let wrapper

beforeEach(() => {
  wrapper = shallowMount(LanguagePicker, {
    localVue,
    store,
    methods: {
      setLanguage
    }
  });
});

describe('LanguagePicker.vue', () => {
  it('should create hook', () => {
    expect(wrapper.vm.$data.selectedLanguage).toBe('EN');
  });
  it('should create hook', async () => {
    wrapper.setData({ selectedLanguage: 'test' });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(setLanguage).toHaveBeenCalled()
  });
})
