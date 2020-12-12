import { createStore } from "vuex";

export default createStore({
  state: {
    cardNavActive: "info",
  },
  mutations: {
    setState(state, item) {
      state.cardNavActive = item;
    },
  },
  actions: {
    setState({ commit }, item) {
      this.commit("setState", item);
    },
  },
  modules: {},
});
