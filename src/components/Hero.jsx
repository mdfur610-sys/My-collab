import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    navigate("/login");
  };

  const handleEarnClick = () => {
    navigate("/login");
  };

  return (
    <header className="relative h-screen bg-gradient-to-r from-blue-500 to-orange-500 text-white flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none" 
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }} 
      />

   
      <div className="relative z-10 text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">COLLAB.LEARN.EARN</h1>
        <p className="text-xl md:text-2xl mb-8">
       Learn from the best. Turn passion to cheques.
        </p>

  
        <div className="space-x-4">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            onClick={handleLearnClick}
          >
            Learn
          </button>
          <button
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
            onClick={handleEarnClick}
          >
            Earn
          </button>
        </div>
      </div>
    </header>
  );
}
