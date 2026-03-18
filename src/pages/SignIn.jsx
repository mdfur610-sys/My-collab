import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Footers from "../components/Footers";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (loading) return; 
  setLoading(true);
  setError("");

  try {
    const response = await axios.post("http://localhost:8080/api/auth/signin", formData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.role);

    if (response.data.role === "Creator") {
      navigate("/creator-dashboard");
    } else if (response.data.role === "Learner") {
      navigate("/learner-dashboard");
    } else {
      navigate("/");
    }
  } catch (error) {
    setError("Login failed. Please check your email and password.");
  } finally {
    setLoading(false);
  }
};

  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white shadow-md">
        <div className="container px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-500">CollabLearn</h1>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="/courses" className="text-gray-600 hover:text-blue-500">Courses</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm hover:underline">Forgot Password?</a>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </main>

      <Footers />
    </div>
  );
}
