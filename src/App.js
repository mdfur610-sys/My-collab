import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import CreatorDashboard from "./pages/CreatorDashboard";
import Courses from "./pages/Courses";
import LearnerDashboard from "./pages/LearnersDashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {

  // 🔗 Backend connection test
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => console.log("Backend Data:", data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/creator-dashboard" element={<CreatorDashboard />} />
        <Route path="/learner-dashboard" element={<LearnerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;