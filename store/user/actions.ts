export default {
  login({ commit }, user) {
    commit("setUser", user);
  },
};
