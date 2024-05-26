import { createStore } from "vuex";
import counter, { CounterState } from "./modules/counter";
import user, { UserState } from "./modules/user";

// Định nghĩa kiểu của RootState
export interface State {
  counter: CounterState;
  user: UserState;
}

// Tạo store chính với các module
const store = createStore<State>({
  modules: {
    counter,
    user,
  },
});

export default store;
