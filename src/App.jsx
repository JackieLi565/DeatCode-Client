import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ProblemPage from "./pages/ProblemPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Home" element={<ProblemPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}
export default App;
