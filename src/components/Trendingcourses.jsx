import React from 'react'
import { Star } from "lucide-react"

export default function TrendingCourses() {
  const courses = [
    {
      id: 1,
      title: "Mastering React",
      creator: "John Doe",
      price: 49,
      rating: 5,
    },
    {
      id: 2,
      title: "Spring Boot Essentials",
      creator: "Jane Smith",
      price: 69,
      rating: 4,
    },
    {
      id: 3,
      title: "Data Science with Python",
      creator: "Alex Johnson",
      price: 99,
      rating: 3,
    },
  ]

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Trending Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-gray-600">{course.creator}</p>
              <div className="flex items-center space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= course.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-green-500 font-bold mt-2">${course.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
