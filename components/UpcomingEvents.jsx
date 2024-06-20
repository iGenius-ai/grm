'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const events = [
  { date: 'June 15', title: 'Youth Conference', description: 'A powerful gathering for young believers' },
  { date: 'July 1-3', title: 'Family Retreat', description: 'Strengthen your family bonds in Christ' },
  { date: 'August 20', title: 'Community Outreach', description: 'Serving our local community with love' },
]

export default function UpcomingEvents() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Add any additional setup if needed
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">{event.date}</div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}