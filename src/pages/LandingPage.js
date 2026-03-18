import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import WhyCollabLearn from "../components/WhyCollabLearn"
import Testimonials from "../components/Testimonials"
import HowItWorks from "../components/HowItWorks"
import CallToAction from "../components/CallToAction"
import Footers from "../components/Footers"
import TrendingCourses from "../components/Trendingcourses"
import CourseRecommender from "../components/CourseRecommender"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyCollabLearn />
      <CourseRecommender/>
      <TrendingCourses/>
      <HowItWorks/>
      <Testimonials />
      <CallToAction />
      <Footers />
    </div>
  )
}
