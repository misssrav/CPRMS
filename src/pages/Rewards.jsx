import React from "react";
import SideNav from "../Components/SideNav";
import NavBar from "../Components/NavBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Settings() {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <h1>My Rewards</h1>
          <Container maxWidth="lg">
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
          </Container>
        </Box>
      </Box>
    </>
  );
}
