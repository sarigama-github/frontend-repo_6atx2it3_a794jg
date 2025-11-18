import { useState } from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleAdd = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { ...product, product_id: product.id, quantity: 1 }]
    })
  }

  const handleUpdateQty = (id, qty) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)))
  }

  const handleCheckout = async () => {
    const payload = {
      name: 'Guest',
      email: 'guest@example.com',
      address: '123 Gaming Street',
      items: cart.map((i) => ({
        product_id: i.product_id || i.id,
        title: i.title,
        price: i.price,
        quantity: i.quantity,
        image: i.image,
      })),
    }
    try {
      const res = await fetch(`${backend}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      alert(`Commande confirmée. Total: $${data.total}. ID: ${data.order_id}`)
      setCart([])
    } catch (e) {
      alert('Erreur lors de la commande')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <header className="relative z-10">
        <Hero />
      </header>
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Products onAdd={handleAdd} />
          </div>
          <div>
            <Cart items={cart} onUpdateQty={handleUpdateQty} onCheckout={handleCheckout} />
          </div>
        </div>
      </main>
      <footer className="relative z-10 mt-16 py-8 text-center text-blue-200/70">
        © {new Date().getFullYear()} Gaming Shop • Propulsé par Flames Blue
      </footer>
    </div>
  )
}

export default App
