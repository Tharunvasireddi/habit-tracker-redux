// reducer is nothing but a function that contains a business logic to manipulate or change the value(state);
// slice is used to manage our state in the store it is part of a reducer

import { createSlice } from "@reduxjs/toolkit";

// create slice is a function it accecpts an object full of reducers and a intial state and names of the reducers

const initialState = {
  habits: [],
};
const habitSlice = createSlice({
  name: "habits",
  initialState,
  // inside our reducers we have to write functions that will going to use to manipulate the state

  reducers: {
    addHabit : (state,action)=>{
      const newHabit = {
        
      }
    }

  },
});

// reducers are the functions that take the state and actions as parameters

export const { addHabit } = habitSlice.actions;

export default habitSlice.reducer;
