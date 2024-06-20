import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Glory Restoration Ministries</h1>
      <div className="mb-8">
        <Image src="/pastor.jpg" alt="Pastor" width={400} height={300} className="float-left mr-8 mb-4 rounded-lg" />
        <p className="mb-4">Glory Restoration Ministries was founded in 2000 with a vision to restore God&apos;s glory in Nigeria and beyond. Our mission is to lead people to a life-changing encounter with God through worship, discipleship, and community outreach.</p>
        <p className="mb-4">Led by Pastor John Doe, our church has grown from a small gathering of believers to a thriving community of faith, hope, and love.</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Faith in God&apos;s Word</li>
        <li>Love for God and others</li>
        <li>Excellence in ministry</li>
        <li>Community engagement</li>
        <li>Continuous spiritual growth</li>
      </ul>
    </div>
  )
}