import { Container, Typography } from "@mui/material";
import HabitForm from "./components/HabitForm";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          Habit Tracker
          <HabitForm />
        </Typography>
      </Container>
    </>
  );
}

export default App;
