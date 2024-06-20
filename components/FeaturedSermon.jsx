'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedSermon() {
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

    tl.from(section.querySelectorAll('.animate-in'), {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <motion.div 
            className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/church.jpg"
              alt="Church congregation"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
              <motion.button
                className="bg-white/90 rounded-full p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="animate-in text-sm font-semibold text-white tracking-wider uppercase">LATEST SERMON</h2>
            <h3 className="animate-in text-4xl font-bold text-gray-95">God is Love</h3>
            <p className="animate-in text-lg text-gray-100">by Ptr. Johnson</p>
            <p className="animate-in text-xl font-medium text-gray-200">&quots;If ye love Me, keep My Commandments.&quots;</p>
            <p className="animate-in text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque, nisi Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..
            </p>
            <motion.a
              href="#"
              className="animate-in inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              WATCH VIDEO
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}