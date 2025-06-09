"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import type { ProductFilterParams } from "@/lib/api-types"
import { useCategories, useColors, useFeatures, useSizes } from "@/lib/api-hooks"

interface ProductFilterProps {
  initialFilters: ProductFilterParams
  onFilterChange: (filters: Partial<ProductFilterParams>) => void
}

export default function ProductFilter({ initialFilters, onFilterChange }: ProductFilterProps) {
  const { categories, loading: loadingCategories } = useCategories()
  const { sizes, loading: loadingSizes } = useSizes()
  const { colors, loading: loadingColors } = useColors()
  const { features, loading: loadingFeatures } = useFeatures()

  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialFilters.minPrice || 0,
    initialFilters.maxPrice || 1000000,
  ])

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]])
    onFilterChange({
      minPrice: values[0],
      maxPrice: values[1],
    })
  }

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const currentCategoryIds = initialFilters.categoryIds || []
    let newCategoryIds: string[]

    if (checked) {
      newCategoryIds = [...currentCategoryIds, categoryId]
    } else {
      newCategoryIds = currentCategoryIds.filter((id) => id !== categoryId)
    }

    onFilterChange({ categoryIds: newCategoryIds.length > 0 ? newCategoryIds : undefined })
  }

  const handleSizeChange = (sizeId: string, checked: boolean) => {
    const currentSizeIds = initialFilters.sizeIds || []
    let newSizeIds: string[]

    if (checked) {
      newSizeIds = [...currentSizeIds, sizeId]
    } else {
      newSizeIds = currentSizeIds.filter((id) => id !== sizeId)
    }

    onFilterChange({ sizeIds: newSizeIds.length > 0 ? newSizeIds : undefined })
  }

  const handleColorChange = (colorId: string, checked: boolean) => {
    const currentColorIds = initialFilters.colorIds || []
    let newColorIds: string[]

    if (checked) {
      newColorIds = [...currentColorIds, colorId]
    } else {
      newColorIds = currentColorIds.filter((id) => id !== colorId)
    }

    onFilterChange({ colorIds: newColorIds.length > 0 ? newColorIds : undefined })
  }

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    const currentFeatureIds = initialFilters.featureIds || []
    let newFeatureIds: string[]

    if (checked) {
      newFeatureIds = [...currentFeatureIds, featureId]
    } else {
      newFeatureIds = currentFeatureIds.filter((id) => id !== featureId)
    }

    onFilterChange({ featureIds: newFeatureIds.length > 0 ? newFeatureIds : undefined })
  }

  const handleCheckboxChange = (field: keyof ProductFilterParams, value: boolean) => {
    onFilterChange({ [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Filtro de precio */}
      <div>
        <h3 className="mb-2 font-medium">Precio</h3>
        <Slider
          defaultValue={[priceRange[0], priceRange[1]]}
          min={0}
          max={1000000}
          step={10000}
          onValueChange={handlePriceChange}
          className="py-4"
        />
        <div className="flex items-center justify-between text-sm">
          <span>${priceRange[0].toLocaleString()}</span>
          <span>${priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Filtro de categorías */}
      <div>
        <h3 className="mb-2 font-medium">Categorías</h3>
        {loadingCategories ? (
          <p className="text-sm text-gray-500">Cargando categorías...</p>
        ) : (
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={initialFilters.categoryIds?.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Filtro de tallas */}
      <div>
        <h3 className="mb-2 font-medium">Tallas</h3>
        {loadingSizes ? (
          <p className="text-sm text-gray-500">Cargando tallas...</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <div key={size.id} className="flex items-center">
                <Checkbox
                  id={`size-${size.id}`}
                  checked={initialFilters.sizeIds?.includes(size.id)}
                  onCheckedChange={(checked) => handleSizeChange(size.id, checked === true)}
                />
                <label
                  htmlFor={`size-${size.id}`}
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {size.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Filtro de colores */}
      <div>
        <h3 className="mb-2 font-medium">Colores</h3>
        {loadingColors ? (
          <p className="text-sm text-gray-500">Cargando colores...</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <div key={color.id} className="flex items-center">
                <Checkbox
                  id={`color-${color.id}`}
                  checked={initialFilters.colorIds?.includes(color.id)}
                  onCheckedChange={(checked) => handleColorChange(color.id, checked === true)}
                />
                <label
                  htmlFor={`color-${color.id}`}
                  className="ml-2 flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {color.hexCode && (
                    <span
                      className="mr-1.5 inline-block h-3 w-3 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.hexCode }}
                    />
                  )}
                  {color.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Filtro de características */}
      <div>
        <h3 className="mb-2 font-medium">Características</h3>
        {loadingFeatures ? (
          <p className="text-sm text-gray-500">Cargando características...</p>
        ) : (
          <div className="space-y-2">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center">
                <Checkbox
                  id={`feature-${feature.id}`}
                  checked={initialFilters.featureIds?.includes(feature.id)}
                  onCheckedChange={(checked) => handleFeatureChange(feature.id, checked === true)}
                />
                <label
                  htmlFor={`feature-${feature.id}`}
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {feature.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Otros filtros */}
      <div>
        <h3 className="mb-2 font-medium">Otros filtros</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox
              id="filter-new"
              checked={initialFilters.isNew}
              onCheckedChange={(checked) => handleCheckboxChange("isNew", checked === true)}
            />
            <label
              htmlFor="filter-new"
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Nuevos productos
            </label>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="filter-bestseller"
              checked={initialFilters.isBestSeller}
              onCheckedChange={(checked) => handleCheckboxChange("isBestSeller", checked === true)}
            />
            <label
              htmlFor="filter-bestseller"
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Más vendidos
            </label>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="filter-freeshipping"
              checked={initialFilters.freeShipping}
              onCheckedChange={(checked) => handleCheckboxChange("freeShipping", checked === true)}
            />
            <label
              htmlFor="filter-freeshipping"
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Envío gratis
            </label>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="filter-onsale"
              checked={initialFilters.onSale}
              onCheckedChange={(checked) => handleCheckboxChange("onSale", checked === true)}
            />
            <label
              htmlFor="filter-onsale"
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              En oferta
            </label>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="filter-instock"
              checked={initialFilters.inStock}
              onCheckedChange={(checked) => handleCheckboxChange("inStock", checked === true)}
            />
            <label
              htmlFor="filter-instock"
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              En stock
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
