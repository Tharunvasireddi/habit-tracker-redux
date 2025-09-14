import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { toggleHabit } from "../store/habitSlice";
import { deleteHabit } from "../store/habitSlice";

const HabitsList = () => {
  // to fetch the state from the store we use useSelector hook from redux
  const habits = useSelector((state) => state.habits.habits);
  console.log("this is that", habits);
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems={"center"}>
              <Grid>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {habit.freq}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                >
                  <Button
                    variant="outlined"
                    color={
                      habit.completedDates.includes(today)
                        ? "completed"
                        : "primary"
                    }
                    startIcon={<CheckCircleIcon />}
                    onClick={() => dispatch(toggleHabit(habit.id, today))}
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark completed"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => dispatch(deleteHabit(habit.id))}
                  >
                    {habit.completedDates.includes(today) ? "Undo" : "Delete"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitsList;
