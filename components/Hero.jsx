'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      heroRef.current.querySelectorAll('.animate-in'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
    )

    return () => {
      tl.kill()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      gsap.set(heroRef.current.querySelectorAll('.animate-in'), { clearProps: 'all' })
    }
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              border: '2px solid rgba(255, 255, 255, 0.1)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: [1, 1.1, 1],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="animate-in text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white">
          Glory Restoration <br /> Ministries
        </h1>
        <p className="animate-in text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Restoring God&apos;s glory in Nigeria and beyond, one life at a time.
        </p>
        <motion.a 
          href="/contact" 
          className="animate-in inline-block bg-white text-purple-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-opacity-90 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Us Today
        </motion.a>
      </div>
    </section>
  )
}