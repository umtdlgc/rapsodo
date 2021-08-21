import { createLocalVue, config, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Notifications from 'vue-notification';

const localVue = createLocalVue();

localVue.use(Notifications);
localVue.use(Vuex);

config.silent = true;
global.shallowMount = shallowMount;
global.localVue = localVue;
global.Vuex = Vuex;

