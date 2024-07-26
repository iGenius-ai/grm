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
    <section ref={sectionRef} className="bg-[#F8F8F8] featured-sermon-section p-4 py-10 sm:py-14 md:py-20 relative overflow-hidden">
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
            From the Altar
          </h1>
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl text-purple-950 z-10" style={{
            textShadow:
              '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
              '0px 4px 4px rgba(0,0,0,0.1)'
            }}
          >
            Latest Sermon
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-12 items-center space-y-8">
          <motion.div
            className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/go.jpg"
              alt="Church congregation"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
              <motion.button
                className="bg-white/90 rounded-full p-3 sm:p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-purple-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="animate-in text-sm font-bold text-purple-950 tracking-wider uppercase">LATEST SERMON</h2>
            <h3 className="animate-in text-3xl sm:text-4xl font-bold text-purple-950">God is Love</h3>
            <p className="animate-in text-base sm:text-lg text-purple-950">by <b>Rev. Ephraim G. N. Ifionu</b></p>
            <p className="animate-in text-lg sm:text-xl font-medium text-purple-950">&quot;If ye love Me, keep My Commandments.&quot;</p>
            <p className="animate-in text-purple-950 max-w-[50ch] text-base sm:text-lg leading-relaxed shadow-lg p-6 rounded-lg">
              For God so loved the world, that he gave his only begotten son. That whosoever believes in him,
              should not perish, but have everlasting life.
            </p>
            <motion.a
              href="#"
              className="bg-purple-200 shadow-md px-4 py-2 rounded-full animate-in inline-flex items-center text-purple-900 font-semibold hover:text-purple-950 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
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