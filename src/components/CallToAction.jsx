import React from "react";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup"); 
  };

  return (
    <section className="py-12 md:py-24 bg-gray-100">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-xl md:text-2xl mb-8">
          Join our platform and unlock your full potential.
        </p>
        <button
          onClick={handleSignUpClick}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300 text-lg"
        >
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

