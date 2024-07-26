'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const events = [
  {
    title: 'Youth Fellowship',
    date: 'August 12, 2024',
    time: '5:00 PM',
    location: 'Main Church Hall',
    description: 'Join us for an evening of worship, prayer, and fellowship designed especially for the youth in our community.',
    image: '/church.jpg',
  },
  {
    title: 'Women\'s Retreat',
    date: 'September 3, 2024',
    time: '9:00 AM',
    location: 'Retreat Center',
    description: 'A special retreat for the women in our church to connect, grow, and renew their faith.',
    image: '/church.jpg',
  },
  {
    title: 'Christmas Carol',
    date: 'December 24, 2024',
    time: '6:00 PM',
    location: 'Main Church Hall',
    description: 'Celebrate the birth of Jesus with our annual Christmas Cantata featuring choir performances and a nativity play.',
    image: '/church.jpg',
  },
]

export default function UpcomingEvents() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    })

    tl.fromTo(
      section.querySelectorAll('.animate-in'), 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-10 sm:py-14 md:py-20 relative overflow-hidden bg-gray-50">
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
            Events
          </h1>
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl text-purple-950 z-10" style={{
            textShadow:
              '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
              '0px 4px 4px rgba(0,0,0,0.1)'
            }}
          >
            Upcoming Events
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-12 items-center space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden animate-in"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div>{event.date}</div>
                  <div>{event.time}</div>
                  <div>{event.location}</div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <a href="#" className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}