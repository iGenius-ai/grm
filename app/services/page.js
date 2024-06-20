import ServiceCard from '@/components/ServiceCard'

const services = [
  { title: 'Sunday Worship', time: '9:00 AM', description: 'Join us for a powerful time of worship and the Word.' },
  { title: 'Wednesday Bible Study', time: '6:00 PM', description: 'Dive deeper into God\'s Word with our midweek Bible study.' },
  { title: 'Friday Prayer Meeting', time: '7:00 PM', description: 'Come together for a night of intercessory prayer and spiritual warfare.' },
  { title: 'Youth Service', time: 'Saturdays, 4:00 PM', description: 'A dynamic service tailored for young people.' },
]

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}