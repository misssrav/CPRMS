import React from "react";
import { Navigate } from "react-router-dom";
import SideNav from "../Components/SideNav";
import NavBar from "../Components/NavBar";
import Box from "@mui/material/Box";

const isAuthenticated = () => {
  // Implement your authentication logic here
  // For example, check if a user is logged in by checking for an authentication token
  const authToken = localStorage.getItem("auth-token");
  return authToken !== null; // Return true if authenticated, false otherwise
};

export default function Settings() {
  // Check authentication status
  const isAuthenticatedUser = isAuthenticated();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticatedUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NavBar />

      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings</h1>
        </Box>
      </Box>
    </>
  );
}
