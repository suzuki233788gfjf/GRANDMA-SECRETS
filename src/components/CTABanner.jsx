import { BRAND } from '../assets/images'

export default function CTABanner() {
  return (
    <section
      className="relative py-20 px-[6%] text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #583900 0%, #7a5200 100%)' }}
    >
      {/* Watermark image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BRAND})`, opacity: 0.07 }}
      />

      {/* Content */}
      <div className="relative">
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
          Offre Spéciale
        </p>
        <h2
          className="font-serif text-white font-normal mb-4"
          style={{ fontSize: 'clamp(26px, 5vw, 50px)' }}
        >
          -5% sur votre 1ère commande
        </h2>
        <p className="text-white/72 max-w-sm mx-auto leading-relaxed text-sm mb-9">
          Rejoignez la communauté Grand'ma Secrets et bénéficiez d'une
          réduction exclusive sur votre premier soin capillaire.
        </p>
        <a
          href="https://wa.me/237677187674"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold/80 text-white text-[11px] font-semibold tracking-widest uppercase px-12 py-4 transition-colors duration-200 no-underline"
        >
          Commander sur WhatsApp
        </a>
      </div>
    </section>
  )
}
