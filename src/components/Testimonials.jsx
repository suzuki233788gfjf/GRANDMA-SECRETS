import { useInView } from '../hooks/useInView'
import { TESTIMONIALS } from '../data/products'
import GoldDivider from './GoldDivider'

function Stars({ count }) {
  return (
    <span className="text-gold tracking-widest" style={{ fontSize: 14 }}>
      {'★'.repeat(count)}
    </span>
  )
}

export default function Testimonials() {
  const [ref, visible] = useInView()

  return (
    <section id="temoignages" className="bg-light py-24 px-[6%]">
      <div className="text-center mb-14">
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
          Témoignages
        </p>
        <h2
          className="font-serif text-brown font-normal"
          style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}
        >
          Elles nous font confiance
        </h2>
        <GoldDivider />
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className={`bg-white p-9 border-l-4 border-gold transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${0.12 * i}s` }}
          >
            <Stars count={t.stars} />
            <p className="text-gray-500 leading-relaxed text-sm italic mt-3 mb-4">
              "{t.text}"
            </p>
            <strong className="text-brown text-sm">— {t.name}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
