import { useEffect, useState } from 'react'
import LOGO from '../assets/logo.png'

const LINKS = ['Produits', 'Notre Histoire', 'Témoignages', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const toId = (label) =>
    label
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[6%] transition-all duration-500 ${
        scrolled ? 'bg-brown/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="#" className="font-serif text-xl text-white tracking-wide no-underline">
          <img
                    src={LOGO}
                    alt="Gamme complète Grand'ma Secrets"
                    className="w-20 rounded-xl block"
                  />
        </a>

        <div className="hidden md:flex gap-8">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${toId(l)}`}
              className="text-white/80 hover:text-gold text-xs tracking-widest uppercase transition-colors duration-200 no-underline"
            >
              {l}
            </a>
          ))}
        </div>


        {/* CTA */}
        <a
          href="https://wa.me/237677187674"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-gold hover:bg-gold/80 text-white text-[11px] font-semibold tracking-widest uppercase px-5 py-2.5 transition-colors duration-200 no-underline"
        >
          Commander
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brown/97 py-4 flex flex-col gap-4 px-4">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${toId(l)}`}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 text-sm tracking-widest uppercase no-underline"
            >
              {l}
            </a>
          ))}
          <a
            href="https://wa.me/237677187674"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white text-[11px] font-semibold tracking-widest uppercase px-5 py-3 text-center no-underline"
          >
            Commander sur WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
