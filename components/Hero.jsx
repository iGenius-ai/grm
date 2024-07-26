"use client"

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const heroRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640) // Adjust breakpoint as needed
    }

    handleResize() // Initial check on mount

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-in')
      if (elements.length > 0) {
        const tl = gsap.timeline()
        tl.fromTo(
          elements,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
        )

        return () => {
          tl.kill()
          gsap.set(elements, { clearProps: 'all' })
        }
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen flex items-center gap-x-10 overflow-hidden sm:px-6 lg:px-8 pt-16">
      {/* Conditionally render grid of images based on screen size */}
      {!isSmallScreen && (
        <div className='z-10 grid grid-cols-2 gap-4'>
          <div className="image-container">
            <Image src={"/img_1.jpg"} width={250} height={250} alt='Church Image 1' className='image mb-1' />
          </div>
          <div className="image-container">
            <Image src={"/go.jpg"} width={250} height={250} alt='Church Image 2' className='image mb-1' />
          </div>
          <div className="image-container">
            <Image src={"/go_2.jpg"} width={250} height={250} alt='Church Image 3' className='image mb-1' />
          </div>
          <div className="image-container">
            <Image src={"/hof.jpg"} width={250} height={250} alt='Church Image 4' className='image mb-1' />
          </div>
        </div>
      )}
      <div className="relative z-10 min-[360px]:ml-4">
        <p className='border border-gray-100 p-4 py-1 font-semibold rounded-full w-fit mb-4'>Welcome to</p>
        <h1 className="animate-in text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white"
          style={{
            textShadow:
              '-1px -1px 0 #FFFFFF19, 1px -1px 0 #FFFFFF19, -1px 1px 0 #FFFFFF19, 1px 1px 0 #FFFFFF19, ' +
              '0px 4px 4px rgba(0,0,0,0.1)'
          }}
        >
          Glory Restoration <br /> Ministries Int&apos;l
        </h1>
        <p className="animate-in text-lg sm:text-xl md:text-2xl mb-4 max-w-2xl text-gray-300">
          Restoring God&apos;s glory in Nigeria and beyond, one life at a time.
        </p>
        <motion.a
          href="/contact"
          className="animate-in mr-4 inline-block bg-white text-purple-800 font-semibold py-2 px-6 rounded-full text-lg transition duration-300 hover:bg-opacity-90 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Us Today
        </motion.a>
        <motion.a
          href="/contact"
          className="animate-in inline-block bg-transparent text-white border border-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300 hover:bg-white hover:text-purple-800 hover:bg-opacity-90 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Livestream
        </motion.a>
      </div>

      {/* Socials */}
      <div className='z-10 flex flex-col gap-y-4 fixed right-4 bg-black/80 px-2 py-4 rounded-lg'>
        {/* Facebook */}
        <Link href={"#"}>
          <i className='bx bxl-facebook-circle text-2xl'></i>
        </Link>
        {/* Twitter */}
        <Link href={"#"}>
          <i className='bx bxl-youtube text-2xl'></i>
        </Link>
        <Link href={"#"}>
          <i className='bx bxl-twitter text-2xl'></i>
        </Link>
      </div>
    </section>
  )
}