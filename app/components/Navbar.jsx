"use client";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { Add, CropDinRounded } from "@mui/icons-material";

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0d253f",
        borderRadius: "5px",
      }}
    >
      <Container
        sx={{
          display: "flex",

          alignContent: "center",
        }}
      >
        <Box display="flex" gap={4} alignItems="center" flexGrow={90}>
          <Link href="/" style={{ textDecoration: "none", color: "#ffff" }}>
            <Image
              src={"/assets/images/blue_short-LOGO.svg"}
              alt="logo image"
              width={160}
              height={30}
            />
          </Link>

          <Box display={"flex"} gap={4}>
            <Link
              href="/movies"
              style={{
                textDecoration: "none",
                color: "#ffff",
                fontWeight: "bold",
              }}
            >
              Movies
            </Link>
            <Link
              href="/tvshows"
              style={{
                textDecoration: "none",
                color: "#ffff",
                fontWeight: "bold",
              }}
            >
              TV Shows
            </Link>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          flexBasis="30%"
          justifyContent="space-around"
        >
          <IconButton sx={{ color: "#ffff" }}>
            <Add
              sx={{ fontSize: "35px", stroke: "#fff", strokeWidth: "1.3px" }}
            />
          </IconButton>

          <IconButton>
            <Typography
              color="#fff"
              position="absolute"
              fontSize="12px"
              fontWeight="bold"
            >
              EN
            </Typography>
            <CropDinRounded
              sx={{ fontSize: "38px", stroke: "#000", color: "#fff" }}
            />
          </IconButton>

          {isLoggedIn ? (
            <Link
              href="/"
              onClick={() => setisLoggedIn((prev) => !prev)}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Logout
            </Link>
          ) : (
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={5}
              justifyContent="space-around"
            >
              <Link
                href="/login"
                onClick={() => setisLoggedIn((current) => !current)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </Link>

              <Link
                href="/login"
                onClick={() => setisLoggedIn((current) => !current)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Join TMDB
              </Link>
            </Box>
          )}
          <IconButton sx={{ color: "#4dc3ff" }}>
            <SearchIcon sx={{ fontWeight: "bold", fontSize: "40px" }} />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
