"use client";
import { Box, CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";

const MovieCard = ({ coverImg, isActive }) => {
  const path = `https://image.tmdb.org/t/p/w300${coverImg}`;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "120px",
      }}
    >
      <CardMedia width={100} height={200} component="img" src={path} />
    </Box>
  );
};

export default MovieCard;
