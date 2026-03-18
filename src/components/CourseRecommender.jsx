import React, { useState } from 'react'
import axios from 'axios'
import ReactSelect from 'react-select'
import { Loader2, Search } from 'lucide-react'

export default function CourseRecommender() {
  const [subject, setSubject] = useState(null)
  const [level, setLevel] = useState(null)
  const [price, setPrice] = useState(100)
  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState([])

  const subjectOptions = [
    { value: 'Graphic Design', label: 'Graphic Design' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Python', label: 'Python' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Java', label: 'Java' },
  ]

  const levelOptions = [
    { value: 'Beginner Level', label: 'Beginner' },
    { value: 'Intermediate Level', label: 'Intermediate' },
    { value: 'Expert Level', label: 'Expert' },
  ]

  const fetchRecommendations = async () => {
    if (!subject || !level) return alert('Please select subject and level.')

    setLoading(true)
    try {
      const res = await axios.post('http://localhost:8000/recommend', {
        subject: subject.value,
        level: level.value,
        price: price
      })
      console.log('Fetched Data:', res.data); // Debugging response
      setRecommendations(res.data.recommended_courses);  // Use the correct property
    } catch (error) {
      console.error('Error fetching recommendations:', error)
      alert('Something went wrong fetching recommendations.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-blue-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center gap-2">
            <Search className="h-6 w-6 text-blue-600" />
            Course Recommender
          </h2>
          <p className="mt-2 text-gray-600">Find the best courses based on your interests, skill level, and budget.</p>
        </div>

        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-8">
          <ReactSelect
            options={subjectOptions}
            value={subject}
            onChange={setSubject}
            placeholder="Select Subject"
            isClearable
          />
          <ReactSelect
            options={levelOptions}
            value={level}
            onChange={setLevel}
            placeholder="Select Level"
            isClearable
          />
          <input
            type="number"
            min="0"
            max="1000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="px-4 py-2 border rounded-md w-full"
            placeholder="Max Budget"
          />
        </div>

        <div className="text-center mb-8">
          <button
            onClick={fetchRecommendations}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Search className="h-5 w-5 mr-2" />}
            Recommend
          </button>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((course, idx) => (
            <div
              key={idx}
              className="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-1">{course.courseTitle}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Price:</strong> ${course.price}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Subscribers:</strong> {course.numSubscribers}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
