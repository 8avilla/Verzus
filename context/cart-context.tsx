"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  discountPercentage?: number
  freeShipping?: boolean
  image: string
  quantity: number
  size?: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size?: string) => void
  updateQuantity: (id: string, quantity: number, size?: string) => void
  clearCart: () => void
  saveCart: () => void
  loadCart: () => void
  itemCount: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = "verzus-cart"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [itemCount, setItemCount] = useState(0)
  const [total, setTotal] = useState(0)

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    loadCart()
    // Escuchar eventos de almacenamiento para sincronizar entre pestañas
    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  // Manejar cambios en el almacenamiento (para sincronizar entre pestañas)
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === CART_STORAGE_KEY) {
      loadCart()
    }
  }

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }

    // Calcular totales
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    setItemCount(count)

    const cartTotal = items.reduce((sum, item) => {
      const itemPrice = item.discountPercentage ? item.price - item.price * (item.discountPercentage / 100) : item.price
      return sum + itemPrice * item.quantity
    }, 0)
    setTotal(cartTotal)
  }, [items])

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      // Verificar si el producto ya está en el carrito (con la misma talla si aplica)
      const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id && item.size === newItem.size)

      if (existingItemIndex >= 0) {
        // Actualizar cantidad si ya existe
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += newItem.quantity
        return updatedItems
      } else {
        // Añadir nuevo item si no existe
        return [...prevItems, newItem]
      }
    })
  }

  const removeItem = (id: string, size?: string) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => !(item.id === id && item.size === size))
      if (newItems.length === 0) {
        localStorage.removeItem(CART_STORAGE_KEY)
      }
      return newItems
    })
  }

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id && item.size === size ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem(CART_STORAGE_KEY)
  }

  const saveCart = () => {
    if (items.length > 0) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }
  }

  const loadCart = () => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error parsing cart data:", error)
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        saveCart,
        loadCart,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
