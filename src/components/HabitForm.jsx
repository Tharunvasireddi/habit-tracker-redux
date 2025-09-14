import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { addHabit } from "../store/habitSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import store from "../store/store";
const HabitForm = () => {
  const [name, setName] = useState("");
  const [freq, setFreq] = useState("");
  const dispatch = useDispatch();
  console.log("hi hello this is the store", store.getState());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && freq.trim()) {
      dispatch(addHabit({ name, freq }));
      setName("");
      setFreq("");
    }
    console.log("hi hello this is the store", );
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Habit Name"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="frequency-label">Frequency</InputLabel>
          <Select
            labelId="frequency-label"
            id="frequency"
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default HabitForm;
