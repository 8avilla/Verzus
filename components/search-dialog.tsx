"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { searchProducts } from "@/lib/products-data"
import { formatCurrency } from "@/lib/utils"

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  // Efecto para buscar productos cuando cambia la consulta
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim().length > 1) {
        setIsSearching(true)
        const searchResults = searchProducts(query)
        setResults(searchResults)
        setIsSearching(false)
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  // Manejar clic en un resultado
  const handleResultClick = (productId: string) => {
    setOpen(false)
    setQuery("")
    router.push(`/product/${productId}`)
  }

  // Limpiar búsqueda
  const clearSearch = () => {
    setQuery("")
    setResults([])
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Buscar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className="flex items-center border-b pb-4">
          <Search className="mr-2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            className="flex-1 border-0 p-0 focus-visible:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <Button variant="ghost" size="icon" onClick={clearSearch} className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Limpiar búsqueda</span>
            </Button>
          )}
        </div>

        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          {isSearching ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          ) : results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((product) => (
                <li key={product.id}>
                  <button
                    className="flex w-full items-start gap-4 rounded-md p-2 text-left hover:bg-gray-100"
                    onClick={() => handleResultClick(product.id)}
                  >
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                      <div className="mt-1">
                        {product.discountPercentage ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm line-through text-gray-400">{formatCurrency(product.price)}</span>
                            <span className="font-medium">
                              {formatCurrency(product.price - product.price * (product.discountPercentage / 100))}
                            </span>
                            <span className="text-xs text-green-600">{product.discountPercentage}% OFF</span>
                          </div>
                        ) : (
                          <span className="font-medium">{formatCurrency(product.price)}</span>
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : query.trim().length > 1 ? (
            <div className="py-8 text-center">
              <p className="text-gray-500">No se encontraron resultados para "{query}"</p>
              <p className="mt-2 text-sm text-gray-400">Intenta con otro término o navega por nuestras categorías</p>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
