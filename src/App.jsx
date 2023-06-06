import React from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ProblemPage from "./pages/ProblemPage";
import ProfilePage from "./pages/ProfilePage";
import { QueryClient, QueryClientProvider } from "react-query";
import Error from "./pages/Error";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Home" element={<ProblemPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Completed" element={<Error />} />
      </Routes>
    </QueryClientProvider>
  );
}
export default App;
