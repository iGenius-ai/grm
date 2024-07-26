import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-8">
      <div className="container mx-auto px-4 py-6 pb-0">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex py-4 items-start">
            <div className="flex items-center">
              <Image src={"/logo.png"} width={100} height={100} alt="Church logo" />
              <div>
                <h3 className="text-xl font-bold mb-1">Glory Restoration Ministries</h3>
                <p>Restoring God&apos;s glory in Nigeria and beyond</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 py-4">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li className="mb-1"><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li className="mb-1"><a href="/services" className="hover:text-blue-300">Our Services</a></li>
              <li className="mb-1"><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 py-4">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p className="mb-1">30, Coker Road, By Coker Bridge, Orile-Iganmu, Lagos</p>
            <p className="mb-1">Phone: 
              <Link href={"tel:+2348033331066"} className="ml-2">+234(0) 803 333 1066</Link>,
              <Link href={"tel:+2347066852902"} className="ml-2">+234(0) 706 685 2902</Link>
            </p>
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