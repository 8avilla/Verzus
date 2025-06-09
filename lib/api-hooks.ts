"use client"

import { useCallback, useEffect, useState } from "react"
import type { CategoryDto, ColorDto, FeatureDto, ProductDto, ProductFilterParams, SizeDto } from "./api-types"
import { CategoryService, ColorService, FeatureService, ProductService, SizeService } from "./api-service"

// Hook para obtener productos filtrados
export function useFilteredProducts(initialParams: ProductFilterParams = {}) {
  const [products, setProducts] = useState<ProductDto[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState<{
    totalCount: number
    pageNumber: number
    pageSize: number
    totalPages: number
    hasPreviousPage: boolean
    hasNextPage: boolean
  }>({
    totalCount: 0,
    pageNumber: 1,
    pageSize: 10,
    totalPages: 0,
    hasPreviousPage: false,
    hasNextPage: false,
  })
  const [params, setParams] = useState<ProductFilterParams>(initialParams)

  const fetchProducts = useCallback(async (filterParams: ProductFilterParams) => {
    setLoading(true)
    setError(null)
    try {
      const result = await ProductService.filterProducts(filterParams)
      setProducts(result.items)
      setPagination({
        totalCount: result.totalCount,
        pageNumber: result.pageNumber,
        pageSize: result.pageSize,
        totalPages: result.totalPages || Math.ceil(result.totalCount / result.pageSize),
        hasPreviousPage: result.hasPreviousPage || result.pageNumber > 1,
        hasNextPage: result.hasNextPage || result.pageNumber * result.pageSize < result.totalCount,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar los productos")
      console.error("Error al cargar productos:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  // Actualizar los parámetros de filtrado
  const updateFilters = useCallback((newParams: Partial<ProductFilterParams>) => {
    setParams((prev) => {
      // Si cambiamos cualquier filtro, volvemos a la página 1
      if (Object.keys(newParams).some((key) => key !== "pageNumber" && key !== "pageSize")) {
        return { ...prev, ...newParams, pageNumber: 1 }
      }
      return { ...prev, ...newParams }
    })
  }, [])

  // Cargar productos cuando cambien los parámetros
  useEffect(() => {
    fetchProducts(params)
  }, [params, fetchProducts])

  return {
    products,
    loading,
    error,
    pagination,
    updateFilters,
    filters: params,
    refetch: () => fetchProducts(params),
  }
}

// Hook para obtener un producto por ID
export function useProduct(id: string | null) {
  const [product, setProduct] = useState<ProductDto | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await ProductService.getProductById(id)
        setProduct(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al cargar el producto")
        console.error("Error al cargar producto:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}

// Hook para obtener todas las categorías
export function useCategories() {
  const [categories, setCategories] = useState<CategoryDto[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCategories = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await CategoryService.getAllCategories()
      setCategories(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar las categorías")
      console.error("Error al cargar categorías:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return { categories, loading, error, refetch: fetchCategories }
}

// Hook para obtener todas las tallas
export function useSizes() {
  const [sizes, setSizes] = useState<SizeDto[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSizes = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await SizeService.getAllSizes()
      setSizes(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar las tallas")
      console.error("Error al cargar tallas:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSizes()
  }, [fetchSizes])

  return { sizes, loading, error, refetch: fetchSizes }
}

// Hook para obtener todos los colores
export function useColors() {
  const [colors, setColors] = useState<ColorDto[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchColors = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await ColorService.getAllColors()
      setColors(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar los colores")
      console.error("Error al cargar colores:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchColors()
  }, [fetchColors])

  return { colors, loading, error, refetch: fetchColors }
}

// Hook para obtener todas las características
export function useFeatures() {
  const [features, setFeatures] = useState<FeatureDto[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFeatures = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await FeatureService.getAllFeatures()
      setFeatures(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar las características")
      console.error("Error al cargar características:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchFeatures()
  }, [fetchFeatures])

  return { features, loading, error, refetch: fetchFeatures }
}
