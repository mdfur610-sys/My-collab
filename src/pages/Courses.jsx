import React from 'react'
import { Star, Heart, Menu } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    creator: "John Doe",
    creatorAvatar: "https://github.com/nutlope.png",
    thumbnail: "https://via.placeholder.com/300x200",
    rating: 4.5,
    price: "$99",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    creator: "Jane Smith",
    creatorAvatar: "https://github.com/nutlope.png",
    thumbnail: "https://via.placeholder.com/300x200",
    rating: 4.8,
    price: "$129",
  },
  {
    id: 3,
    title: "Data Science Basics",
    creator: "Alice Johnson",
    creatorAvatar: "https://github.com/nutlope.png",
    thumbnail: "https://via.placeholder.com/300x200",
    rating: 4.7,
    price: "$89",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    creator: "Bob Brown",
    creatorAvatar: "https://github.com/nutlope.png",
    thumbnail: "https://via.placeholder.com/300x200",
    rating: 4.6,
    price: "$149",
  },
  {
    id: 5,
    title: "React for Beginners",
    creator: "Charlie White",
    creatorAvatar: "https://github.com/nutlope.png",
    thumbnail: "https://via.placeholder.com/300x200",
    rating: 4.9,
    price: "$99",
  },
  {
    id: 6,
    title: "Python Programming",
    creator: "Diana Black",
    creatorAvatar: "https://github.com/nutlope.png",
    thumbnail: "https://via.placeholder.com/300x200",
    rating: 4.4,
    price: "$119",
  },
]

export default function CourseCatalogue() {
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
          <input
            type="text"
            placeholder="Search courses"
            className="w-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Sign Up</button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Course Catalogue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <img src={course.creatorAvatar} alt={course.creator} className="w-8 h-8 rounded-full" />
                    <span className="text-gray-600 text-sm">{course.creator}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`h-4 w-4 ${star <= course.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-green-500 font-bold">{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Knowledge Exchange Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Terms of Service</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacy</a>
        </nav>
      </footer>
    </div>
  )
}