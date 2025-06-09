"use client"

import { ShoppingBag, Trash2 } from "lucide-react"
import Link from "next/link"
import { useCart, type CartItem as CartItemType } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { formatCurrency } from "@/lib/utils"

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, itemCount, total } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Carrito</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Tu carrito</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center space-y-4">
            <ShoppingBag className="h-12 w-12 text-gray-300" />
            <p className="text-center text-gray-500">Tu carrito está vacío</p>
            <Button asChild>
              <Link href="/products">Explorar productos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              {items.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size || "default"}`}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>

            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center justify-between font-medium">
                <span>Subtotal</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <p className="text-xs text-gray-500">Impuestos y gastos de envío calculados en el checkout</p>
              <Button className="w-full" asChild>
                <Link href="/checkout">Finalizar compra</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/products">Seguir comprando</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: CartItemType
  onRemove: (id: string, size?: string) => void
  onUpdateQuantity: (id: string, quantity: number, size?: string) => void
}) {
  // Calcular el precio con descuento si existe
  const finalPrice = item.discountPercentage ? item.price - item.price * (item.discountPercentage / 100) : item.price

  return (
    <div className="flex py-4">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-sm font-medium">
          <h3>{item.name}</h3>
          <div className="ml-4 text-right flex flex-col">
            {item.discountPercentage ? (
              <>
                <p className="text-xs text-gray-500 line-through">{formatCurrency(item.price)}</p>
                <p>{formatCurrency(finalPrice)}</p>
              </>
            ) : (
              <p>{formatCurrency(item.price)}</p>
            )}
          </div>
        </div>
        {item.size && <p className="mt-1 text-xs text-gray-500">Talla: {item.size}</p>}

        {/* Mostrar etiquetas de descuento y envío gratis */}
        <div className="mt-1 flex flex-col gap-1">
          {item.discountPercentage && <span className="text-xs text-green-600">{item.discountPercentage}% OFF</span>}
          {item.freeShipping && <span className="text-xs text-green-600">Envío gratis</span>}
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border rounded">
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1), item.size)}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="px-2 py-1">{item.quantity}</span>
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1, item.size)}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="text-gray-500 hover:text-gray-700"
            onClick={() => onRemove(item.id, item.size)}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
