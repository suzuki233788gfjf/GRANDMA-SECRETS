import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Strip from './components/Strip'
import Products from './components/Products'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Strip />
      <Products />
      <Story />
      <Testimonials />
      <CTABanner />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/237677187674"
        target="_blank"
        rel="noopener noreferrer"
        title="Nous contacter sur WhatsApp"
        className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl no-underline transition-transform duration-200 hover:scale-110"
        style={{
          background: '#25D366',
          boxShadow: '0 8px 28px rgba(37,211,102,0.45)',
        }}
      >
        💬
      </a>
    </>
  )
}
