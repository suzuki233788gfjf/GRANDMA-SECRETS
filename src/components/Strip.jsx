const ITEMS = [
  '🌿 Formules Naturelles',
  '🔬 Expertise Pharmaceutique',
  '✨ Héritage Africain',
  '💧 Soins Adaptés',
  '🌍 Made in Cameroun',
]

export default function Strip() {
  const tripled = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="bg-brown py-3 overflow-hidden">
      <div className="flex gap-14 whitespace-nowrap anim-ticker">
        {tripled.map((t, i) => (
          <span
            key={i}
            className="text-gold text-[11px] tracking-[0.22em] uppercase font-semibold shrink-0"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
