import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./habitSlice.js";

// configuring the store
// if we want to use the redux the app has to know that we are using the redux so now go to the app

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
