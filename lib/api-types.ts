// Tipos basados en el esquema OpenAPI proporcionado

// DTOs básicos
export interface SizeDto {
  id: string
  name: string
  description?: string | null
}

export interface ColorDto {
  id: string
  name: string
  hexCode?: string | null
  description?: string | null
}

export interface FeatureDto {
  id: string
  name: string
  description?: string | null
}

export interface CategoryDto {
  id: string
  name: string
  description?: string | null
  bannerImageUrl?: string | null
  frontImageUrl?: string | null
  slug?: string | null
  keywords?: string[] | null
  createdAt?: string | null
  createdBy?: string | null
  updatedAt?: string | null
  updatedBy?: string | null
  parentCategoryId?: string | null
  subcategories: CategoryDto[]
}

export interface ProductDto {
  id: string
  name: string
  price: number
  discountPercentage?: number | null
  freeShipping?: boolean | null
  mainImage: string
  imageGallery?: string[] | null
  category: CategoryDto
  description: string
  features?: FeatureDto[] | null
  sizes?: SizeDto[] | null
  colors?: ColorDto[] | null
  isNew?: boolean | null
  isBestSeller?: boolean | null
  stock?: number | null
}

// Comandos para crear/actualizar
export interface CreateProductCommand {
  name?: string | null
  price: number
  discountPercentage?: number | null
  freeShipping?: boolean | null
  mainImage?: string | null
  imageGallery?: string[] | null
  categoryId?: string | null
  description?: string | null
  featureIds?: string[] | null
  sizeIds?: string[] | null
  colorIds?: string[] | null
  isNew?: boolean | null
  isBestSeller?: boolean | null
  stock?: number | null
}

export interface UpdateProductCommand {
  id: string
  name?: string | null
  price?: number | null
  discountPercentage?: number | null
  freeShipping?: boolean | null
  mainImage?: string | null
  imageGallery?: string[] | null
  categoryId?: string | null
  description?: string | null
  featureIds?: string[] | null
  sizeIds?: string[] | null
  colorIds?: string[] | null
  isNew?: boolean | null
  isBestSeller?: boolean | null
  stock?: number | null
}

export interface CreateCategoryCommand {
  name?: string | null
  description?: string | null
  bannerImageUrl?: string | null
  frontImageUrl?: string | null
  slug?: string | null
  keywords?: string[] | null
  parentCategoryId?: string | null
}

export interface UpdateCategoryCommand {
  id?: string | null
  name?: string | null
  description?: string | null
  bannerImageUrl?: string | null
  frontImageUrl?: string | null
  slug?: string | null
  keywords?: string[] | null
  parentCategoryId?: string | null
}

export interface CreateColorCommand {
  name: string
  hexCode?: string | null
  description?: string | null
}

export interface CreateFeatureCommand {
  name: string
  description?: string | null
}

export interface CreateSizeCommand {
  name: string
  description?: string | null
}

// Parámetros de filtrado para productos
export interface ProductFilterParams {
  searchTerm?: string
  categoryIds?: string[]
  minPrice?: number
  maxPrice?: number
  featureIds?: string[]
  sizeIds?: string[]
  colorIds?: string[]
  isNew?: boolean
  freeShipping?: boolean
  isBestSeller?: boolean
  onSale?: boolean
  inStock?: boolean
  sortBy?: string
  sortOrder?: string
  pageNumber?: number
  pageSize?: number
}

// Resultado paginado
export interface PagedResultDto<T> {
  items: T[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages?: number
  hasPreviousPage?: boolean
  hasNextPage?: boolean
}
