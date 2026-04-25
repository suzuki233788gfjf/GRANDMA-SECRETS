import { HERO } from '../assets/images'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[580px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-top brightness-[0.42]"
        style={{ backgroundImage: `url(${HERO})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown/25 to-brown/72" />

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl">
        <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-5 anim-fade-up delay-200 opacity-0">
          L'héritage capillaire africain
        </p>

        <h1 className="font-serif text-white leading-[1.0] font-normal anim-fade-up delay-400 opacity-0 mb-7"
            style={{ fontSize: 'clamp(44px, 9vw, 96px)' }}>
          Grand<span className="italic text-gold">'ma</span>
          <br />
          <span className="italic">Secrets</span>
        </h1>

        <p className="text-white/78 leading-relaxed max-w-lg mx-auto mb-10 anim-fade-up delay-600 opacity-0"
           style={{ fontSize: 'clamp(14px, 2.2vw, 17px)' }}>
          Sublimé par l'artisanat pharmaceutique.
          <br />
          Des soins conçus pour les cheveux Afro, naturels &amp; texturés.
        </p>

        <div className="flex gap-4 justify-center flex-wrap anim-fade-up delay-800 opacity-0">
          <a
            href="#produits"
            className="bg-gold hover:bg-gold/80 text-white text-[11px] font-semibold tracking-widest uppercase px-10 py-4 transition-colors duration-200 no-underline"
          >
            Découvrir la gamme
          </a>
          <a
            href="#notre-histoire"
            className="border border-white/35 hover:bg-white hover:text-brown text-white text-[11px] font-semibold tracking-widest uppercase px-10 py-4 transition-all duration-200 no-underline"
          >
            Notre histoire
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 anim-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-xl flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-gold rounded-sm anim-scroll" />
        </div>
      </div>
    </section>
  )
}
