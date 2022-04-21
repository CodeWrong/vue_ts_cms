import { createStore } from 'vuex';

const store = createStore({
  state: () => {
    return {
      name: 'coderrly'
    };
  }
});

export default store;
