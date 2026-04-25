import { useInView } from '../hooks/useInView'
import { MODEL1, MODEL2 } from '../assets/images'
import GoldDivider from './GoldDivider'

const STATS = [
  ['2024', 'Création'],
  ['100%', 'Naturel'],
  ['6+', 'Produits'],
]

export default function Story() {
  const [ref, visible] = useInView()

  return (
    <section id="notre-histoire" className="bg-brown py-24 px-[6%]">
      <div
        ref={ref}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
      >
        {/* Images */}
        <div
          className={`grid grid-cols-2 gap-3 transition-all duration-900 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDuration: '0.9s' }}
        >
          <img
            src={MODEL1}
            alt="Grand'ma Secrets — soin naturel"
            className="w-full object-cover"
            style={{ height: 340 }}
          />
          <img
            src={MODEL2}
            alt="Grand'ma Secrets — produit capillaire"
            className="w-full object-cover mt-10"
            style={{ height: 340 }}
          />
        </div>

        {/* Text */}
        <div
          className={`transition-all ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ transitionDuration: '0.9s', transitionDelay: '0.2s' }}
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4">
            Notre Histoire
          </p>

          <h2
            className="font-serif text-white font-normal leading-[1.15] mb-5"
            style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}
          >
            Les secrets transmis
            <br />
            de génération en génération
          </h2>

          <GoldDivider />

          <p className="text-white/70 leading-[1.9] text-sm mt-4 mb-4">
            <strong className="text-gold font-semibold">Grand'ma Secrets</strong>{' '}
            est née en Octobre 2024, inspirée des rituels capillaires de nos
            grands-mères africaines — ces femmes qui connaissaient par cœur
            chaque plante, chaque huile, chaque geste pour des cheveux lumineux
            et forts.
          </p>

          <p className="text-white/70 leading-[1.9] text-sm mb-8">
            Aujourd'hui, une pharmacienne passionnée réinterprète ces recettes
            ancestrales avec la rigueur de la science moderne, pour offrir aux
            cheveux Afro frisés, texturés, fins ou défrisés des soins aussi
            efficaces que respectueux.
          </p>

          {/* Stats */}
          <div className="flex gap-8 flex-wrap">
            {STATS.map(([number, label]) => (
              <div key={number}>
                <div className="font-serif text-gold text-4xl">{number}</div>
                <div className="text-white/55 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
