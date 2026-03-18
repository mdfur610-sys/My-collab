import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, Menu } from "lucide-react";
import Footers from "../components/Footers";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "Learner",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage({ text: "Signup successful! Redirecting...", type: "success" });

      setTimeout(() => {
        navigate("/login"); // Redirect to login after signup
      }, 2000);
    } catch (error) {
      setMessage({ text: error.response?.data || "Signup failed", type: "error" });
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
          <div className="hidden md:flex space-x-4">
            <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Sign In</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          {message && (
            <div className={`text-center p-2 rounded ${message.type === "success" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
              {message.text}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="Learner">Learner</option>
                <option value="Creator">Creator</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign In</a></p>
          </div>
        </div>
      </main>

      <Footers />
    </div>
  );
}
