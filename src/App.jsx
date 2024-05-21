import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./home/Home";
import Single from "./pages/single/Single";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
};

export default App;
