import { useState } from 'react'

const NAV_LINKS = ['Produits', 'Notre Histoire', 'Témoignages', 'Contact']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) setSent(true)
  }

  return (
    <footer
      id="contact"
      className="text-white/55 py-18 px-[6%] pt-16 pb-10"
      style={{ background: '#1a0f00' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
        {/* Brand */}
        <div>
          <div className="font-serif text-white text-xl mb-4">
            Grand<span className="text-gold">'ma</span> Secrets
          </div>
          <p className="text-sm leading-relaxed mb-5">
            L'héritage capillaire africain, sublimé par l'artisanat
            pharmaceutique.
          </p>
          <div className="flex gap-2.5">
            {['f', 'ig', 'tw'].map((s) => (
              <div
                key={s}
                className="w-9 h-9 flex items-center justify-center text-gold text-xs font-bold cursor-pointer"
                style={{ background: 'rgba(191,146,63,0.15)' }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-xs tracking-widest uppercase mb-5">
            Navigation
          </h4>
          <ul className="space-y-2.5 list-none p-0">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-white/45 hover:text-gold text-sm no-underline transition-colors duration-200"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs tracking-widest uppercase mb-5">
            Contact
          </h4>
          <div className="text-sm leading-[2.2]">
            <p>📱 +237 677 187 674</p>
            <p>📍 Yaoundé, Cameroun</p>
            <p>🕐 Lun–Sam · 8h–18h</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-xs tracking-widest uppercase mb-5">
            Newsletter
          </h4>
          <p className="text-sm mb-4 leading-relaxed">
            Conseils beauté &amp; offres exclusives.
          </p>
          {sent ? (
            <p className="text-gold text-sm">✓ Merci pour votre inscription !</p>
          ) : (
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="bg-white/7 border border-white/13 text-white placeholder-white/35 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              />
              <button
                onClick={handleSubscribe}
                className="bg-gold hover:bg-gold/80 text-white text-[10px] font-semibold tracking-widest uppercase py-3 cursor-pointer transition-colors duration-200 border-0"
              >
                S'inscrire
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-wrap justify-between gap-4 text-[11px] text-white/30 pt-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span>© 2026. Tous droits réservés.</span>
        <span>Fait avec ♥ au Cameroun</span>
      </div>
    </footer>
  )
}
