import React from 'react'
import { Play, Users, Shield } from "lucide-react"
import { Link } from "react-router-dom"  // Make sure you have react-router-dom installed and configured

export default function HowItWorks() {
  const steps = [
    {
      icon: <Play className="h-12 w-12 text-white" />,
      title: "Browse Courses",
      desc: "Find courses that interest you.",
      link: "/courses", // course catalog route
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Join Community",
      desc: "Connect with learners and experts.",
      link: "/community", // community page route
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: "Start Learning",
      desc: "Access and complete courses.",
      link: "/dashboard", // user learning dashboard or enrolled courses
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Link
              to={step.link}
              key={index}
              className="flex flex-col items-center space-y-4 text-center transition-transform duration-200 hover:scale-105"
            >
              <div className="bg-blue-500 p-6 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
