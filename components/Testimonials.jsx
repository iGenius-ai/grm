'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  { 
    name: 'Sarah M.', 
    text: 'Glory Restoration Ministries has transformed my life. The teachings are powerful and relevant.',
    image: '/church.jpg'
  },
  { 
    name: 'Michael O.', 
    text: 'I found a loving community here. It\'s more than just a church; it\'s a family.',
    image: '/church.jpg'
  },
  { 
    name: 'Grace E.', 
    text: 'The youth program has helped my children grow in their faith. I\'m grateful for this ministry.',
    image: '/church.jpg'
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold mb-8 sm:mb-12 text-center relative"
        >
          <h1 className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-200 flex items-center justify-center"
              style={{
                WebkitTextStroke: '1px #FFFFFF29',
                textStroke: '1px #FFFFFF29',
                textShadow: 
                  '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
                  '0px 4px 4px rgba(0,0,0,0.1)'
              }}>
            Testimonials
          </h1>
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl text-purple-950 z-10" style={{
            textShadow:
              '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
              '0px 4px 4px rgba(0,0,0,0.1)'
            }}
          >
            What Our Community Says
          </h2>
        </motion.div>
        <div className="relative flex items-center justify-center">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-white text-blue-500 shadow-md shadow-gray-400 hover:bg-blue-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </motion.button>
          </div>

          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              index === currentIndex && (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-2/3 lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full shadow-md"
                  />
                  <blockquote className="text-gray-800 font-medium italic">&ldquo;{testimonial.text}&rdquo;</blockquote>
                  <p className="font-semibold text-purple-950">{testimonial.name}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          <div className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-white text-blue-500 shadow-md shadow-gray-400 hover:bg-blue-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
