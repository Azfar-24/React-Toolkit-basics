// const redux = require("redux");
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementby5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementby5(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAutState = {
  isAuthenticated: localStorage.getItem("login"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAutState,
  reducers: {
    login(state) {
      localStorage.setItem("login", true);
      state.isAuthenticated = localStorage.getItem("login");
    },
    logout(state) {
      localStorage.removeItem("login");
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;

// if (action.type === "increment") {
//   return { ...state, counter: state.counter + 1 };
// }
// if (action.type === "decrement") {
//   return { ...state, counter: state.counter - 1 };
// }
// if (action.type === "incrementby5") {
//   return { ...state, counter: state.counter + action.amount };
// }
// if (action.type === "decrementby5") {
//   return { ...state, counter: state.counter - action.amount };
// }
// if (action.type === "toggle") {
//   return {
//     ...state,
//     showCounter: !state.showCounter,
//   };
// }
// return state;

// switch (action.type) {
//   case "increment":
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   case "decrement":
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   case "incrementby5":
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   case "decrementby5":
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter,
//     };
//   default:
//     state;
// }
