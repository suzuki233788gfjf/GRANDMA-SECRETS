import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { PRODUCTS as IMG_PRODUCTS } from '../assets/images'
import { PRODUCTS } from '../data/products'
import GoldDivider from './GoldDivider'

export default function Products() {
  const [ref, visible] = useInView()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="produits" className="bg-white py-24 px-[6%]">
      {/* Header */}
      <div
        ref={ref}
        className={`text-center mb-16 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
          Notre Sélection
        </p>
        <h2
          className="font-serif text-brown font-normal mb-1"
          style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}
        >
          La Gamme Grand'ma Secrets
        </h2>
        <GoldDivider />
        <p className="text-gray-500 max-w-md mx-auto mt-3 leading-relaxed text-sm">
          Chaque produit est formulé par une pharmacienne passionnée, inspirée
          des recettes africaines ancestrales.
        </p>
      </div>

      {/* Hero product image */}
      <div className="max-w-2xl mx-auto mb-20 overflow-hidden shadow-2xl">
        <img
          src={IMG_PRODUCTS}
          alt="Gamme complète Grand'ma Secrets"
          className="w-full block"
        />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.id}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
            className={`p-8 cursor-pointer transition-all duration-300 ${
              visible ? 'opacity-100' : 'opacity-0'
            } ${
              hovered === product.id
                ? 'bg-brown -translate-y-1.5 shadow-2xl'
                : 'bg-light'
            }`}
            style={{ transitionDelay: `${0.06 * i}s` }}
          >
            <div className="text-3xl mb-3">{product.icon}</div>

            <span className="inline-block bg-gold/15 text-gold text-[10px] tracking-widest uppercase px-2.5 py-1 mb-3">
              {product.tag}
            </span>

            <h3
              className={`font-serif font-normal mb-1 ${
                hovered === product.id ? 'text-white' : 'text-brown'
              }`}
              style={{ fontSize: 21 }}
            >
              {product.name}
            </h3>

            <p className="text-gold text-[11px] mb-2">{product.size}</p>

            <p
              className={`text-sm leading-relaxed mb-5 ${
                hovered === product.id ? 'text-white/70' : 'text-gray-500'
              }`}
            >
              {product.desc}
            </p>

            <div className="flex items-center justify-between">
              <strong
                className={`text-base ${
                  hovered === product.id ? 'text-gold' : 'text-brown'
                }`}
              >
                {product.price}
              </strong>
              <a
                href="https://wa.me/237677187674"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-[10px] font-semibold tracking-widest uppercase px-4 py-2.5 no-underline transition-colors duration-200 ${
                  hovered === product.id ? 'bg-gold' : 'bg-brown'
                }`}
              >
                Commander
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
