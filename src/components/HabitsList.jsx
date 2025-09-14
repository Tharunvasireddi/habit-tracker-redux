import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const HabitsList = () => {
  // to fetch the state from the store we use useSelector hook from redux
  const habits = useSelector((state) => state.habits.habits);
  console.log("this is that", habits);
  const today = new Date().toISOString().split("T")[0];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
                      habit.compeletedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                  >
                    Mark completed
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
