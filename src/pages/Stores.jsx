import React, { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import NavBar from "../Components/NavBar";
import Box from "@mui/material/Box";
import FeaturedPost from "../dummy/FeaturedPost";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// const featuredPosts = [
//   {
//     title: "Shoppie",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//     linkText: "Shop now",
//     link: "http://localhost:3001/",
//   },
//   {
//     title: "Food del",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//     linkText: "Explore now",
//     link: " http://localhost:1234",
//   },
// ];

export default function Stores() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("http://localhost:2020/allstores")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the state
        setFeaturedPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching featured posts:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Container maxWidth="lg">
          <main>
            <h1>Partner Stores</h1>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} uniqueId={post.id} post={post} />
              ))}
            </Grid>
          </main>
        </Container>
      </Box>
    </>
  );
}
