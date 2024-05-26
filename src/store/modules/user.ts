import { Module } from "vuex";
import { State as RootState } from "../index";

// Định nghĩa kiểu cho state của module user
export interface UserState {
  name: string;
}

// Khởi tạo state cho module user
const state: UserState = {
  name: "John Doe",
};

const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations: {
    setName(state, name: string) {
      state.name = name;
    },
  },
  actions: {
    updateName({ commit }, name: string) {
      commit("setName", name);
    },
  },
  getters: {
    name: (state) => state.name,
  },
};

export default user;
