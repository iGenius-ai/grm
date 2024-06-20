import Hero from '@/components/Hero'
import FeaturedSermon from '@/components/FeaturedSermon'
import UpcomingEvents from '@/components/UpcomingEvents'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSermon />
      <UpcomingEvents />
      <Testimonials />
    </>
  )
}