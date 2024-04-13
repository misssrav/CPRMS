import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../dummy/MainFeaturedPost";
import FeaturedPost from "../dummy/FeaturedPost";
import SideNav from "../Components/SideNav";
import NavBar from "../Components/NavBar";

//import { Link } from "react-router-dom";

import Footer from "../dummy/Footer";

const mainFeaturedPost = {
  title: "Reward Hub",
  description:
    "A Centralised reward management system where people can quickly and efficiently manage their rewards obtained from integrated stores.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Join Now",
  link: "/login",
};

const featuredPosts = [
  {
    title: "Collect points",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
    linkText: "Explore now",
    link: "/collectpoints",
  },
  {
    title: "Redeem points",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
    linkText: "Explore now",
    link: "/stores",
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NavBar />
      <SideNav />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Reward Hub"
        description="A Centralized platform to keep track of all your rerward points!"
      />
    </ThemeProvider>
  );
}
