import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
