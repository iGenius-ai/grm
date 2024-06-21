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
    <section className="py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold mb-8 sm:mb-12 text-center relative"
        >
          <h1 className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-purple-900 flex items-center justify-center"
              style={{
                WebkitTextStroke: '1px #FFFFFF29',
                textStroke: '1px #FFFFFF29',
                textShadow:
                  '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
                  '0px 4px 4px rgba(0,0,0,0.1)'
              }}>
            God&apos;s Goodness
          </h1>
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl text-gray-100 z-10"
            style={{
              textShadow:
                '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
                '0px 4px 4px rgba(0,0,0,0.1)'
            }}
          >
            Testimonies
          </h2>
        </motion.div>
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100"
            >
              <div className="w-full md:w-1/3 relative h-48 sm:h-64 md:h-96">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-full md:w-2/3 p-6 sm:p-8">
                <p className="text-lg sm:text-xl mb-4 text-gray-700 italic">&quot;{testimonials[currentIndex].text}&quot;</p>
                <p className="font-semibold text-gray-900">- {testimonials[currentIndex].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-white text-blue-500 shadow-lg hover:bg-blue-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </motion.button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-white text-blue-500 shadow-lg hover:bg-blue-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>
        </div>
        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}