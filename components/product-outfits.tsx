"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"
import { formatCurrency } from "@/lib/utils"

// Datos de ejemplo para conjuntos
const sampleOutfits = [
  {
    id: "outfit-1",
    name: "Urban Performance",
    products: [
      {
        id: "vz-tshirt-01",
        name: "Camiseta VZ Performance",
        price: 151962,
        discountPercentage: 15,
        image: "/images/tshirt-performance.png",
        size: "M",
      },
      {
        id: "vz-pants-01",
        name: "Pantalón Training Pro",
        price: 208962,
        image: "/images/pants-training.jpg",
        size: "M",
      },
      {
        id: "vz-cap-02",
        name: "Gorra Urban Sport",
        price: 106362,
        image: "/images/cap-urban.jpg",
        size: "Única",
      },
    ],
  },
  {
    id: "outfit-2",
    name: "Training Essential",
    products: [
      {
        id: "vz-tshirt-02",
        name: "Camiseta Training Pro",
        price: 163362,
        image: "/images/tshirt-training.png",
        size: "M",
      },
      {
        id: "vz-shorts-01",
        name: "Shorts Running Elite",
        price: 132962,
        discountPercentage: 10,
        image: "/images/shorts-running.jpg",
        size: "M",
      },
      {
        id: "vz-bottle-01",
        name: "Botella Térmica VERZUS",
        price: 94962,
        discountPercentage: 5,
        image: "/images/water-bottle.jpg",
      },
    ],
  },
]

export default function ProductOutfits() {
  const [currentOutfit, setCurrentOutfit] = useState(0)
  const { addItem } = useCart()
  const { toast } = useToast()
  const [isAdding, setIsAdding] = useState(false)

  const handlePrevious = () => {
    setCurrentOutfit((prev) => (prev === 0 ? sampleOutfits.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentOutfit((prev) => (prev === sampleOutfits.length - 1 ? 0 : prev + 1))
  }

  const handleAddOutfit = () => {
    setIsAdding(true)

    // Añadir todos los productos del conjunto al carrito
    sampleOutfits[currentOutfit].products.forEach((product) => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        discountPercentage: product.discountPercentage,
        image: product.image,
        quantity: 1,
        size: product.size,
      })
    })

    toast({
      title: "¡Conjunto añadido!",
      description: `El conjunto ${sampleOutfits[currentOutfit].name} se ha añadido a tu carrito.`,
      type: "success",
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 600)
  }

  // Calcular el precio total del conjunto
  const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => {
      const price = product.discountPercentage
        ? product.price - (product.price * product.discountPercentage) / 100
        : product.price
      return total + price
    }, 0)
  }

  const currentOutfitData = sampleOutfits[currentOutfit]
  const totalPrice = calculateTotalPrice(currentOutfitData.products)

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Conjuntos completos</h2>
      
      <div className="relative">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium">{currentOutfitData.name}</h3>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrevious}
                className="h-8 w-8 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Anterior</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="h-8 w-8 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {currentOutfitData.products.map((product) => (
              <div key={product.id} className="bg-white rounded-md overflow-hidden border">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-sm">{product.name}</h4>
                  <div className="mt-1 flex items-center justify-between">
                    <div>
                      {product.discountPercentage ? (
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 line-through">
                            {formatCurrency(product.price)}
                          </span>
                          <span className="text-sm font-medium">
                            {formatCurrency(product.price - (product.price * product.discountPercentage / 100))}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-medium">{formatCurrency(product.price)}</span>
                      )}
                    </div>
                    {product.size && (
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                        Talla: {product.size}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between border-t pt-4">
            <div>
              <span className="text-sm text-gray-500">Precio total:</span>
              <span className="ml-2 text-xl font-bold">{formatCurrency(totalPrice)}</span>
              <span className="ml-2 text-sm text-green-600">
                Ahorra {formatCurrency(
                  currentOutfitData.products.reduce((total, product) =>
                    total + (product.discountPercentage ? (product.price * product.discountPercentage / 100) : 0),
                  0
                )}\
              </span>
            </div>
            <Button 
              onClick={handleAddOutfit}
              disabled={isAdding}
              className="flex items-center"
            >
              {isAdding ? (
                <span className="flex items-center">
                  <span className="animate-spin mr-2">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  AÑADIENDO...
                </span>
              ) : (
                <span className="flex items-center">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  AÑADIR CONJUNTO
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
