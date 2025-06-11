import type { ProductDto } from "./api-types"

// Tipo simplificado para compatibilidad con el carrito
export interface Product {
  id: string
  name: string
  price: number
  discountPercentage?: number | null
  freeShipping?: boolean | null
  image: string
  images?: string[]
  category: string
  description: string
  features?: string[]
  sizes?: string[]
  colors?: string[]
  isNew?: boolean | null
  isBestSeller?: boolean | null
  stock?: number | null
}

// Función para convertir ProductDto de la API a nuestro modelo Product simplificado
export function adaptProductDtoToProduct(productDto: ProductDto): Product {
  return {
    id: productDto.id,
    name: productDto.name,
    price: productDto.price,
    discountPercentage: productDto.discountPercentage,
    freeShipping: productDto.freeShipping,
    image: productDto.mainImage,
    images: productDto.imageGallery || [productDto.mainImage],
    category: productDto.category?.name || "",
    description: productDto.description,
    features: productDto.features?.map((f) => f.name) || [],
    sizes: productDto.sizes?.map((s) => s.name) || [],
    colors: productDto.colors?.map((c) => c.name) || [],
    isNew: productDto.isNew,
    isBestSeller: productDto.isBestSeller,
    stock: productDto.stock,
  }
}

// Función para convertir un array de ProductDto a un array de Product
export function adaptProductDtosToProducts(productDtos: ProductDto[]): Product[] {
  return productDtos.map(adaptProductDtoToProduct)
}
