"use client";
import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import image from "../../../public/assets/images/panda4.jpg";

const MoviesList = () => {
  const [list, setList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTEyM2MwOGM0YjhmNTliZTAxMjg3MDk0NTNjODM1MSIsInN1YiI6IjYxNzZjNGY5YTU3OWY5MDA5MGI0YjcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jp1TvWziKtCA8dUUNB7ZQmF02oWR9RhMcu2tVj1bqiU",
    },
  };

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        options
      );
      const data = await res.json();
      setList(data.results);
    };
    fetchList();
    /////////////////////////
  }, []);

  const middleIndex = Math.floor(list.length / 2);

  return (
    <Box
      component="div"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Splide
        options={{
          rewind: true,
          width: 1000,

          perPage: 8,
          focus: "center",
          omitEnd: true,
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {list.map((res, index) => (
            <SplideSlide key={res.id}>
              <MovieCard coverImg={res.poster_path} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Box>
  );
};

export default MoviesList;
