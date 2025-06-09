"use client"

import { useState, useEffect } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"

interface MobileFilterDrawerProps {
  showDiscount: boolean
  setShowDiscount: (value: boolean) => void
  showFreeShipping: boolean
  setShowFreeShipping: (value: boolean) => void
  priceRange: number[]
  setPriceRange: (value: number[]) => void
  maxPrice: number
  applyFilters: () => void
}

export default function MobileFilterDrawer({
  showDiscount,
  setShowDiscount,
  showFreeShipping,
  setShowFreeShipping,
  priceRange,
  setPriceRange,
  maxPrice = 300000,
  applyFilters,
}: MobileFilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [localPriceRange, setLocalPriceRange] = useState(priceRange)
  const [localShowDiscount, setLocalShowDiscount] = useState(showDiscount)
  const [localShowFreeShipping, setLocalShowFreeShipping] = useState(showFreeShipping)

  // Sincronizar estados locales cuando cambian los props
  useEffect(() => {
    setLocalPriceRange(priceRange)
    setLocalShowDiscount(showDiscount)
    setLocalShowFreeShipping(showFreeShipping)
  }, [priceRange, showDiscount, showFreeShipping, isOpen])

  const handleApplyFilters = () => {
    setPriceRange(localPriceRange)
    setShowDiscount(localShowDiscount)
    setShowFreeShipping(localShowFreeShipping)
    applyFilters()
    setIsOpen(false)
  }

  const handleReset = () => {
    setLocalPriceRange([0, maxPrice])
    setLocalShowDiscount(false)
    setLocalShowFreeShipping(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 md:hidden">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh] rounded-t-xl">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Filtros</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">Ofertas y envío</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="mobile-discount"
                  checked={localShowDiscount}
                  onCheckedChange={(checked) => setLocalShowDiscount(checked as boolean)}
                />
                <Label htmlFor="mobile-discount">En oferta</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="mobile-freeShipping"
                  checked={localShowFreeShipping}
                  onCheckedChange={(checked) => setLocalShowFreeShipping(checked as boolean)}
                />
                <Label htmlFor="mobile-freeShipping">Envío gratis</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="mb-4 text-lg font-medium">Precio</h3>
            <div className="space-y-4">
              <Slider value={localPriceRange} max={maxPrice} step={10000} onValueChange={setLocalPriceRange} />
              <div className="flex justify-between text-sm">
                <span>{formatCurrency(localPriceRange[0])}</span>
                <span>{formatCurrency(localPriceRange[1])}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto flex gap-2 pt-6">
          <Button variant="outline" className="flex-1" onClick={handleReset}>
            Restablecer
          </Button>
          <Button className="flex-1" onClick={handleApplyFilters}>
            Aplicar filtros
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
