import { Star, ShoppingCart } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 transition">
      <div className="aspect-[4/3] overflow-hidden bg-black/20">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold leading-tight">{product.title}</h3>
          <div className="text-yellow-300 flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-300" />
            {product.rating?.toFixed ? product.rating.toFixed(1) : product.rating}
          </div>
        </div>
        <p className="text-blue-200/80 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-white text-lg font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold"
          >
            <ShoppingCart className="w-4 h-4" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}
