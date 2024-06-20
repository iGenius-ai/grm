'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Sarah M.', text: 'Glory Restoration Ministries has transformed my life. The teachings are powerful and relevant.' },
  { name: 'Michael O.', text: 'I found a loving community here. It\'s more than just a church; it\'s a family.' },
  { name: 'Grace E.', text: 'The youth program has helped my children grow in their faith. I\'m grateful for this ministry.' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl mb-4">&quot;{testimonials[currentIndex].text}&quot;</p>
              <p className="font-semibold">- {testimonials[currentIndex].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}