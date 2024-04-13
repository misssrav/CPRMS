import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Stores from "./pages/Stores";
import Rewards from "./pages/Rewards";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Collectpoints from "./pages/Collectpoints";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/settings" exact element={<Settings />}></Route>
        <Route path="/stores" exact element={<Stores />}></Route>
        <Route path="/rewards" exact element={<Rewards />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/collectpoints" exact element={<Collectpoints />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
