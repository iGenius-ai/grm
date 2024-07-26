import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: 'Glory Restoration Ministries',
  description: 'Restoring God\'s glory in Nigeria and beyond',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-white`}>
        <Navigation />
        <main className="container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}