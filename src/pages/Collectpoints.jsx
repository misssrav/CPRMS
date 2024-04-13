import React from "react";
import NavBar from "../Components/NavBar";
import SideNav from "../Components/SideNav";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FeaturedPost from "../dummy/FeaturedPost";

const featuredPosts = [
  {
    title: "Shop",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
    linkText: "Shop now",
    link: "/stores",
  },
  {
    title: "Dine",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
    linkText: "Dine now",
    link: "/dine",
  },
  {
    title: "Travel",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
    linkText: "Explore now",
    link: "/",
  },
];
function Collectpoints() {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Container maxWidth="lg">
          <main>
            <h1>Collect Points</h1>
            <p>
              {" "}
              <i>Shop across various categories of stores to earn points</i>
            </p>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </main>
        </Container>
      </Box>{" "}
    </>
  );
}

export default Collectpoints;
