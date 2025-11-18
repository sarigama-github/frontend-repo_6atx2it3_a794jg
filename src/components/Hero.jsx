import { ShoppingCart, Gamepad2, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200 text-sm mb-6">
          <Star className="w-4 h-4 text-yellow-300" />
          Nouveautés gaming 2025
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Votre boutique E‑commerce Gaming
        </h1>
        <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
          Consoles, accessoires, périphériques et jeux — tout ce qu'il faut pour level‑up votre setup.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#products" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg transition font-semibold">
            <ShoppingCart className="w-5 h-5" />
            Voir les produits
          </a>
          <a href="#about" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg transition font-semibold">
            <Gamepad2 className="w-5 h-5" />
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  )
}
