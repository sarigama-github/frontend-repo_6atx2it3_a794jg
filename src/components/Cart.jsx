import { useMemo } from 'react'

export default function Cart({ items, onUpdateQty, onCheckout }) {
  const { subtotal, tax, total } = useMemo(() => {
    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0)
    const tax = Math.round(subtotal * 0.1 * 100) / 100
    const total = Math.round((subtotal + tax) * 100) / 100
    return { subtotal, tax, total }
  }, [items])

  return (
    <aside className="bg-white/5 border border-white/10 rounded-2xl p-4 sticky top-6">
      <h3 className="text-white font-bold mb-3">Panier</h3>
      <div className="space-y-3">
        {items.length === 0 ? (
          <p className="text-blue-200/80 text-sm">Votre panier est vide.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <img src={item.image} alt={item.title} className="w-12 h-12 rounded object-cover" />
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{item.title}</p>
                <p className="text-blue-200/80 text-xs">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 bg-white/10 rounded text-white">-</button>
                <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                <button onClick={() => onUpdateQty(item.id, item.quantity + 1)} className="px-2 py-1 bg-white/10 rounded text-white">+</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-white/10 mt-4 pt-4 text-sm text-blue-200/90 space-y-1">
        <div className="flex justify-between"><span>Sous‑total</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>TVA (10%)</span><span>${tax.toFixed(2)}</span></div>
        <div className="flex justify-between text-white font-semibold text-base"><span>Total</span><span>${total.toFixed(2)}</span></div>
      </div>

      <button
        onClick={() => onCheckout({ subtotal, tax, total })}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg disabled:opacity-50"
        disabled={items.length === 0}
      >
        Passer la commande
      </button>
    </aside>
  )
}
