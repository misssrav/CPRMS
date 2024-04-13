// import React, { useState } from "react";
// import "../CSS/Login.css";
// import NavBar from "../Components/NavBar";
// import SideNav from "../Components/SideNav";

// const Login = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//   });
//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //code for login when continue button ks clicked
//   const login = async () => {
//     console.log("login is excuted", formData);
//     let responseData;
//     await fetch("http://localhost:2000/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/form-data",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => (responseData = data));

//     if (responseData.success) {
//       localStorage.setItem("auth-token", responseData.token);
//       window.location.replace("/");
//     } else {
//       alert(responseData.errors);
//     }
//   };
//   //   const signup = async () => {};
//   const signup = async () => {
//     console.log("signup is clicked", formData);
//     let responseData;
//     await fetch("http://localhost:2000/signup", {
//       method: "POST",
//       headers: {
//         Accept: "application/form-data",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => (responseData = data));

//     if (responseData.success) {
//       localStorage.setItem("auth-token", responseData.token);
//       window.location.replace("/");
//     } else {
//       alert(responseData.errors);
//     }
//   };
//   return (
//     <div>
//       <NavBar />
//       <SideNav />

//       <div className="loginsignup">
//         <div className="loginsignup-container">
//           <h1>{state}</h1>
//           <div className="loginsignup-fields">
//             {state === "Sign Up" ? (
//               <input
//                 name="username"
//                 value={formData.username}
//                 onChange={changeHandler}
//                 type="text"
//                 placeholder="Name"
//               />
//             ) : (
//               <></>
//             )}
//             <input
//               name="email"
//               value={formData.email}
//               onChange={changeHandler}
//               type="text"
//               placeholder="Email"
//             />
//             <input
//               name="password"
//               value={formData.password}
//               onChange={changeHandler}
//               type="text"
//               placeholder="Password"
//             />
//           </div>
//           <button
//             onClick={() => {
//               state === "Login" ? login() : signup();
//             }}
//           >
//             Continue
//           </button>
//           {state === "Sign Up" ? (
//             <p className="loginsignup-login">
//               Already Have an Account ?{" "}
//               <span
//                 onClick={() => {
//                   setState("Login");
//                 }}
//               >
//                 Login Here!
//               </span>
//             </p>
//           ) : (
//             <p className="loginsignup-login">
//               Not a Member!{" "}
//               <span
//                 onClick={() => {
//                   setState("Sign Up");
//                 }}
//               >
//                 Register Here!
//               </span>
//             </p>
//           )}

//           <div className="loginsignup-agree">
//             <input type="checkbox" name="" id="" />
//             <p>By Continuing, I agree to Terms and Conditions</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../Components/NavBar";
import SideNav from "../Components/SideNav";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Reward Hub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log("login is excuted", formData);

    try {
      const response = await fetch("http://localhost:2020/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      if (!response.ok) {
        throw new Error("Login request failed");
      }

      const responseData = await response.json();
      if (responseData) {
        if (responseData.token) {
          localStorage.setItem("auth-token", responseData.token);
          window.location.replace("/");
        } else {
          alert(responseData.errors);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <SideNav />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
