import { Box, Paper } from "@mui/material";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Paper sx={{ position: "relative" }}>
        <Welcome/>
      </Paper>
    </Box>
  );
}
