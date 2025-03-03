import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import {
  GlobalStyles,
} from "@mui/material";


function App() {
  return (
    <Router>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            height: "100%",
            background: "linear-gradient(to right, #788284, #2196F3)",
            color: "white",
            scrollBehavior: "smooth",
          },
          "#root": {
            height: "100%",
          },
          a: {
            textDecoration: "none",
            color: "inherit",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

