import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import ProblemPage from "./pages/ProblemPage";
import Navbar from "./components/Navbar";
const bp = "function Sum(a, b) {}";

function App() {
  return (
    <div>
      {/* <Navbar />
      <ProblemPage /> */}
      <LoginPage />
    </div>
  );
}
export default App;
