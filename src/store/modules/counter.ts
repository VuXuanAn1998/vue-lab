import { Module } from "vuex";
import { State as RootState } from "../index";

// Định nghĩa kiểu cho state của module counter
export interface CounterState {
  count: number;
}

// Khởi tạo state cho module counter
const state: CounterState = {
  count: 0,
};

const counter: Module<CounterState, RootState> = {
  namespaced: true,
  state,
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
  },
  getters: {
    count: (state) => state.count,
  },
};

export default counter;
