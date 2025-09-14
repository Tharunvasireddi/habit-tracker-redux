// reducer is nothing but a function that contains a business logic to manipulate or change the value(state);
// slice is used to manage our state in the store it is part of a reducer

import { createSlice } from "@reduxjs/toolkit";

// create slice is a function it accecpts an object full of reducers and a intial state and names of the reducers

const initialState = {
  count: 0,
  habits: [],
};
const habitSlice = createSlice({
  name: "habits",
  initialState,
  // inside our reducers we have to write functions that will going to use to manipulate the state, and those functions are called actions
  // we are passing the state and the action to the reducer
  // we are using the reducer to manipulate the state
  // we are using the actions to trigger the reducer
  // we are using the state to store the data
  // we are using the actions to trigger the reducer

  // for get action aboject we have to pass those from the component to the reducer by using dispatch
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: new Date().getTime().toString(),
        name: action.payload.name,
        freq: action.payload.freq,
        completed: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },
  },
});

// reducers are the functions that take the state and actions as parameters
// actions are the functions that trigger the reducer
// state is the data that is stored in the store
// actions are the functions that trigger the reducer
export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
