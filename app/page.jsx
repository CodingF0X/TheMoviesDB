import { Box, Paper, Stack } from "@mui/material";
import Welcome from "./components/Welcome";
import MoviesList from "./components/Trending/MoviesList";

export default function Home() {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
    <Box display={"flex"} justifyContent={"center"}>
      <Box  sx={{ position: "relative" }}>
        <Welcome/>
      </Box>
      
    </Box>
    <MoviesList />
    </Box>
  );
}
