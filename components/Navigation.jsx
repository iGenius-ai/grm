'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: { backgroundColor: "rgba(255, 255, 255, 0)", boxShadow: "none" },
          scrolled: { backgroundColor: "rgba(255, 255, 255, 0.8)", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-sm"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? "text-purple-900" : "text-gray-100"} flex items-center`}>
            <Image src={"/logo.png"} alt='Church Logo' width={60} height={60} objectFit='center' />
            <div className='uppercase'>
              <p className='text-sm'>Glory Restoration</p>
              <p className='text-lg'>Ministries Int&apos;l</p>
            </div>
          </Link>
          <div className="hidden md:flex space-x-4">
            {links.map(({ href, label, icon }) => (
              <Link key={href} href={href}>
                <motion.div
                  className={`relative p-2 ${isScrolled ? "text-purple-900" : "text-gray-100"} font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
          <div className={`md:hidden ${isScrolled ? "text-purple-900" : "text-gray-100"}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-purple-600 shadow-lg z-50 md:hidden overflow-y-auto"
          >
            <div className="p-4">
              <button onClick={() => setIsOpen(false)} className="mb-4 text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <br /> <br />
              {links.map(({ href, label, icon }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={href}>
                    <motion.div
                      className="px-4 py-2 mb-2 border-b border-gray-400"
                      whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                      {label}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}