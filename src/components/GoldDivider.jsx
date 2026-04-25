export default function GoldDivider() {
  return (
    <div className="flex items-center gap-3 mx-auto my-5 w-24">
      <div className="flex-1 h-px bg-gold opacity-50" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      <div className="flex-1 h-px bg-gold opacity-50" />
    </div>
  )
}
