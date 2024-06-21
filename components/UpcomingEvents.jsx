'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const events = [
  {
    date: 'June 15',
    time: '7:00 PM',
    title: 'Youth Conference',
    description: 'A powerful gathering for young believers',
    location: 'Main Auditorium',
    image: '/church.jpg'
  },
  {
    date: 'July 1-3',
    time: '9:00 AM - 5:00 PM',
    title: 'Family Retreat',
    description: 'Strengthen your family bonds in Christ',
    location: 'Lakeside Retreat Center',
    image: '/church.jpg'
  },
  {
    date: 'August 20',
    time: '10:00 AM',
    title: 'Community Outreach',
    description: 'Serving our local community with love',
    location: 'Downtown Community Center',
    image: '/church.jpg'
  },
]

export default function UpcomingEvents() {
  const sectionRef = useRef(null)
  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 overflow-hidden">
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
            Upcoming Events
          </h1>
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl text-gray-100 z-10" style={{
            textShadow:
              '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
              '0px 4px 4px rgba(0,0,0,0.1)'
            }}
          >
            Upcoming Events
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xl sm:text-2xl font-bold">{event.date}</div>
                  <div className="text-xs sm:text-sm">{event.time}</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{event.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-xs sm:text-sm">{event.location}</span>
                </div>
              </div>
              <div className="px-4 sm:px-6 pb-4">
                <a href="#" className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <a href="#" className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  )
}