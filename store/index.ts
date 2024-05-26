import { createStore } from "vuex";
import user from "./user";
import product from "./product";

const store = createStore({
  modules: {
    user,
    product,
  },
});

export default store;
