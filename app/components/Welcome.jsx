"use client";
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import image from "../../public/assets/images/panda4.jpg";

const Welcome = () => {
  return (
    <Box>
      <Image src={image} width={1250} height={400} alt="Background Image" />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(45deg, rgba(13, 37, 63, 1) 1%, rgba(1, 180, 228, 0.3) 90%)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Typography variant="h2" fontWeight={"bold"} gutterBottom pl="30px">
          Welcome
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} pl="30px">
          Millions of movies, TV shows, and people to discover.
        </Typography>

        <TextField
          placeholder="Search for a movie or TV show"
          sx={{ ml: "30px", mt: "30px" }}
          InputProps={{
            style: {
              backgroundColor: "#fff",
              maxWidth: "97%",

              borderRadius: "100px",
            },
            endAdornment: (
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  position: "end",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  background:
                    "linear-gradient(45deg, #90cea1 30%, #01b4e4 90%)",

                  "&:hover": {
                    color: "#000",
                    bgcolor: "#90cea1",
                  },
                }}
              >
                Search
              </Button>
            ),
          }}
        ></TextField>
      </Box>
    </Box>
  );
};

export default Welcome;
