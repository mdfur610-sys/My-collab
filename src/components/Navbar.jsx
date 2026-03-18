import { motion } from "framer-motion"
// import { Button } from "../components/ui/button"
import { Home, BookOpen, Info, DollarSign, LogIn } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-left justify-start">
          <h1 className="text-2xl font-bold text-blue-500">CollabLearn</h1>
          {/* <p className="ml-2 text-sm text-gray-500">`Collab. Learn. Earn.</p> */}
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search courses"
            className="w-72 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {[
            { href: "/", icon: <Home className="w-5 h-5 inline-block mr-1" />, label: "Home" },
            { href: "/courses", icon: <BookOpen className="w-5 h-5 inline-block mr-1" />, label: "Courses" },
            // { href: "#", icon: <Info className="w-5 h-5 inline-block mr-1" />, label: "About" },
            { href: "/login", icon: <DollarSign className="w-5 h-5 inline-block mr-1" />, label: "Creator" },
            { href: "/login", icon: <LogIn className="w-5 h-5 inline-block mr-1" />, label: "Sign In" },
          ].map(({ href, icon, label }, index) => (
            <motion.a
              key={label}
              href={href}
              className="text-gray-600 hover:text-blue-500 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {icon}
              {label}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {/* <Button className="bg-blue-500 text-white hover:bg-blue-600">Get Started</Button> */}
          </motion.div>
        </div>
      </nav>
    </header>
  )
}