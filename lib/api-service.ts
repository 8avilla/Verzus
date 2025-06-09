import type {
  CategoryDto,
  ColorDto,
  CreateCategoryCommand,
  CreateColorCommand,
  CreateFeatureCommand,
  CreateProductCommand,
  CreateSizeCommand,
  FeatureDto,
  PagedResultDto,
  ProductDto,
  ProductFilterParams,
  SizeDto,
  UpdateCategoryCommand,
  UpdateProductCommand,
} from "./api-types"

// URL base de la API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5222"

// Función auxiliar para realizar peticiones a la API
async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const defaultHeaders = {
    "Content-Type": "application/json",
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || `Error en la petición: ${response.status}`)
  }

  // Para peticiones que no devuelven JSON (como DELETE)
  if (response.status === 204 || response.headers.get("content-length") === "0") {
    return {} as T
  }

  return response.json() as Promise<T>
}

// Servicios para Productos
export const ProductService = {
  // Crear un nuevo producto
  createProduct: (product: CreateProductCommand): Promise<ProductDto> => {
    return fetchApi<ProductDto>("/api/Products", {
      method: "POST",
      body: JSON.stringify(product),
    })
  },

  // Obtener un producto por ID
  getProductById: (id: string): Promise<ProductDto> => {
    return fetchApi<ProductDto>(`/api/Products/${id}`)
  },

  // Actualizar un producto
  updateProduct: (id: string, product: UpdateProductCommand): Promise<ProductDto> => {
    return fetchApi<ProductDto>(`/api/Products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    })
  },

  // Filtrar productos
  filterProducts: (params: ProductFilterParams): Promise<PagedResultDto<ProductDto>> => {
    // Construir la URL con los parámetros de consulta
    const queryParams = new URLSearchParams()

    // Añadir parámetros simples
    if (params.searchTerm) queryParams.append("SearchTerm", params.searchTerm)
    if (params.minPrice !== undefined) queryParams.append("MinPrice", params.minPrice.toString())
    if (params.maxPrice !== undefined) queryParams.append("MaxPrice", params.maxPrice.toString())
    if (params.isNew !== undefined) queryParams.append("IsNew", params.isNew.toString())
    if (params.freeShipping !== undefined) queryParams.append("FreeShipping", params.freeShipping.toString())
    if (params.isBestSeller !== undefined) queryParams.append("IsBestSeller", params.isBestSeller.toString())
    if (params.onSale !== undefined) queryParams.append("OnSale", params.onSale.toString())
    if (params.inStock !== undefined) queryParams.append("InStock", params.inStock.toString())
    if (params.sortBy) queryParams.append("SortBy", params.sortBy)
    if (params.sortOrder) queryParams.append("SortOrder", params.sortOrder)
    if (params.pageNumber !== undefined) queryParams.append("PageNumber", params.pageNumber.toString())
    if (params.pageSize !== undefined) queryParams.append("PageSize", params.pageSize.toString())

    // Añadir arrays
    params.categoryIds?.forEach((id) => queryParams.append("CategoryIds", id))
    params.featureIds?.forEach((id) => queryParams.append("FeatureIds", id))
    params.sizeIds?.forEach((id) => queryParams.append("SizeIds", id))
    params.colorIds?.forEach((id) => queryParams.append("ColorIds", id))

    return fetchApi<PagedResultDto<ProductDto>>(`/api/Products/filter?${queryParams.toString()}`)
  },
}

// Servicios para Categorías
export const CategoryService = {
  // Obtener todas las categorías
  getAllCategories: (): Promise<CategoryDto[]> => {
    return fetchApi<CategoryDto[]>("/api/Categories")
  },

  // Obtener una categoría por ID
  getCategoryById: (id: string): Promise<CategoryDto> => {
    return fetchApi<CategoryDto>(`/api/Categories/${id}`)
  },

  // Crear una nueva categoría
  createCategory: (category: CreateCategoryCommand): Promise<void> => {
    return fetchApi<void>("/api/Categories", {
      method: "POST",
      body: JSON.stringify(category),
    })
  },

  // Actualizar una categoría
  updateCategory: (id: string, category: UpdateCategoryCommand): Promise<void> => {
    return fetchApi<void>(`/api/Categories/${id}`, {
      method: "PUT",
      body: JSON.stringify(category),
    })
  },

  // Eliminar una categoría
  deleteCategory: (id: string): Promise<void> => {
    return fetchApi<void>(`/api/Categories/${id}`, {
      method: "DELETE",
    })
  },
}

// Servicios para Tallas
export const SizeService = {
  // Obtener todas las tallas
  getAllSizes: (): Promise<SizeDto[]> => {
    return fetchApi<SizeDto[]>("/api/Sizes")
  },

  // Crear una nueva talla
  createSize: (size: CreateSizeCommand): Promise<SizeDto> => {
    return fetchApi<SizeDto>("/api/Sizes", {
      method: "POST",
      body: JSON.stringify(size),
    })
  },
}

// Servicios para Colores
export const ColorService = {
  // Obtener todos los colores
  getAllColors: (): Promise<ColorDto[]> => {
    return fetchApi<ColorDto[]>("/api/Colors")
  },

  // Crear un nuevo color
  createColor: (color: CreateColorCommand): Promise<void> => {
    return fetchApi<void>("/api/Colors", {
      method: "POST",
      body: JSON.stringify(color),
    })
  },
}

// Servicios para Características
export const FeatureService = {
  // Obtener todas las características
  getAllFeatures: (): Promise<FeatureDto[]> => {
    return fetchApi<FeatureDto[]>("/api/Features")
  },

  // Crear una nueva característica
  createFeature: (feature: CreateFeatureCommand): Promise<void> => {
    return fetchApi<void>("/api/Features", {
      method: "POST",
      body: JSON.stringify(feature),
    })
  },
}
