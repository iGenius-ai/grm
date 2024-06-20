import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useParallax(wrapperRef, layers) {
  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const animations = []

    layers.forEach((layer, index) => {
      const element = layer.current
      if (!element) return

      const animation = gsap.to(element, {
        y: `${(index + 1) * 10}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      animations.push(animation)
    })

    return () => {
      // Clean up animations and ScrollTriggers when the component unmounts
      animations.forEach(animation => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill()
        }
        animation.kill()
      })
    }
  }, [wrapperRef, layers])
}