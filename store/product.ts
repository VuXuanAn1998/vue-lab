// src/store/modules/products.js
const state = () => ({
  products: [],
});

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

const actions = {
  fetchProducts({ commit }) {
    // Giả sử bạn có API để lấy danh sách sản phẩm
    // const products = await api.getProducts();
    const products = []; // Thay thế bằng API thực tế
    commit("setProducts", products);
  },
};

const getters = {
  getProducts(state) {
    return state.products;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
