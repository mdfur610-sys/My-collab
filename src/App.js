import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreatorDashboard from "./pages/CreatorDashboard";
import Courses from "./pages/Courses";
import LearnerDashboard from "./pages/LearnersDashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
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
