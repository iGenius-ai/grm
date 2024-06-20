export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Glory Restoration Ministries</h3>
            <p>Restoring God&apos;s glory in Nigeria and beyond</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-300">Our Services</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p>123 Church Street, Lagos, Nigeria</p>
            <p>Phone: +234 123 456 7890</p>
            <p>Email: info@gloryrestoration.org</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Glory Restoration Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}