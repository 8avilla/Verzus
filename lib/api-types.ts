// Tipos basados en el esquema OpenAPI proporcionado

// DTOs básicos
export interface SizeDto {
  id: string
  name: string
  description?: string
}

export interface ColorDto {
  id: string
  name: string
  hexCode?: string
  description?: string
}

export interface FeatureDto {
  id: string
  name: string
  description?: string
}

export interface CategoryDto {
  id: string
  name: string
  description?: string
  bannerImageUrl?: string
  frontImageUrl?: string
  slug?: string
  keywords?: string[]
  createdAt?: string
  createdBy?: string
  updatedAt?: string
  updatedBy?: string
  parentCategoryId?: string
  subcategories: CategoryDto[]
}

export interface ProductDto {
  id: string
  name: string
  price: number
  discountPercentage?: number
  freeShipping?: boolean
  mainImage: string
  imageGallery?: string[]
  category: CategoryDto
  description: string
  features?: FeatureDto[]
  sizes?: SizeDto[]
  colors?: ColorDto[]
  isNew?: boolean
  isBestSeller?: boolean
  stock?: number
}

// Comandos para crear/actualizar
export interface CreateProductCommand {
  name?: string
  price: number
  discountPercentage?: number
  freeShipping?: boolean
  mainImage?: string
  imageGallery?: string[]
  categoryId?: string
  description?: string
  featureIds?: string[]
  sizeIds?: string[]
  colorIds?: string[]
  isNew?: boolean
  isBestSeller?: boolean
  stock?: number
}

export interface UpdateProductCommand {
  id: string
  name?: string
  price?: number
  discountPercentage?: number
  freeShipping?: boolean
  mainImage?: string
  imageGallery?: string[]
  categoryId?: string
  description?: string
  featureIds?: string[]
  sizeIds?: string[]
  colorIds?: string[]
  isNew?: boolean
  isBestSeller?: boolean
  stock?: number
}

export interface CreateCategoryCommand {
  name?: string
  description?: string
  bannerImageUrl?: string
  frontImageUrl?: string
  slug?: string
  keywords?: string[]
  parentCategoryId?: string
}

export interface UpdateCategoryCommand {
  id?: string
  name?: string
  description?: string
  bannerImageUrl?: string
  frontImageUrl?: string
  slug?: string
  keywords?: string[]
  parentCategoryId?: string
}

export interface CreateColorCommand {
  name: string
  hexCode?: string
  description?: string
}

export interface CreateFeatureCommand {
  name: string
  description?: string
}

export interface CreateSizeCommand {
  name: string
  description?: string
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
