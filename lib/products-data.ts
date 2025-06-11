import { convertToCOP } from "@/lib/utils"
import type { ProductDto, CategoryDto, FeatureDto, SizeDto, ColorDto } from "@/lib/api-types"

// Datos de ejemplo para categorías
const categories: CategoryDto[] = [
  {
    id: "cea1952b-dbbc-43ee-bb4e-c06320754fa0",
    name: "Camisetas",
    description: "Camisetas deportivas y casuales",
    bannerImageUrl: null,
    frontImageUrl: null,
    slug: "camisetas",
    keywords: ["camisetas", "deportivas", "casual"],
    createdAt: "2025-06-09T13:23:02.1982523",
    createdBy: "System",
    updatedAt: null,
    updatedBy: null,
    parentCategoryId: null,
    subcategories: [],
  },
  {
    id: "b8f3c2a1-5d6e-4f7g-8h9i-0j1k2l3m4n5o",
    name: "Sudaderas",
    description: "Sudaderas con capucha y sin capucha",
    bannerImageUrl: null,
    frontImageUrl: null,
    slug: "sudaderas",
    keywords: ["sudaderas", "hoodies", "abrigo"],
    createdAt: "2025-06-09T13:23:02.1982523",
    createdBy: "System",
    updatedAt: null,
    updatedBy: null,
    parentCategoryId: null,
    subcategories: [],
  },
  {
    id: "c9g4d3b2-6e7f-5g8h-9i0j-1k2l3m4n5o6p",
    name: "Accesorios",
    description: "Accesorios deportivos y complementos",
    bannerImageUrl: null,
    frontImageUrl: null,
    slug: "accesorios",
    keywords: ["accesorios", "gorras", "botellas", "bolsas"],
    createdAt: "2025-06-09T13:23:02.1982523",
    createdBy: "System",
    updatedAt: null,
    updatedBy: null,
    parentCategoryId: null,
    subcategories: [],
  },
  {
    id: "d0h5e4c3-7f8g-6h9i-0j1k-2l3m4n5o6p7q",
    name: "Pantalones",
    description: "Pantalones deportivos, leggings y shorts",
    bannerImageUrl: null,
    frontImageUrl: null,
    slug: "pantalones",
    keywords: ["pantalones", "leggings", "shorts", "deportivos"],
    createdAt: "2025-06-09T13:23:02.1982523",
    createdBy: "System",
    updatedAt: null,
    updatedBy: null,
    parentCategoryId: null,
    subcategories: [],
  },
]

// Datos de ejemplo para características
const features: FeatureDto[] = [
  { id: "f1", name: "Tejido ligero y transpirable", description: "Material que permite la ventilación" },
  { id: "f2", name: "Tecnología de secado rápido", description: "Se seca rápidamente después del ejercicio" },
  { id: "f3", name: "Costuras planas", description: "Evita rozaduras durante el ejercicio" },
  { id: "f4", name: "Logo VERZUS minimalista", description: "Diseño elegante y discreto" },
  { id: "f5", name: "Tejido de alta elasticidad", description: "Permite libertad de movimiento" },
  { id: "f6", name: "Control de humedad", description: "Mantiene la piel seca" },
  { id: "f7", name: "Estampado reflectante", description: "Mejora la visibilidad en condiciones de poca luz" },
  { id: "f8", name: "Algodón premium", description: "Material de alta calidad y suavidad" },
  { id: "f9", name: "Corte regular", description: "Ajuste cómodo y versátil" },
  { id: "f10", name: "Cuello redondo reforzado", description: "Mayor durabilidad en el cuello" },
]

// Datos de ejemplo para tallas
const sizes: SizeDto[] = [
  { id: "s1", name: "XS", description: "Extra pequeña" },
  { id: "s2", name: "S", description: "Pequeña" },
  { id: "s3", name: "M", description: "Mediana" },
  { id: "s4", name: "L", description: "Grande" },
  { id: "s5", name: "XL", description: "Extra grande" },
  { id: "s6", name: "Única", description: "Talla única" },
]

// Datos de ejemplo para colores
const colors: ColorDto[] = [
  { id: "c1", name: "Negro", hexCode: "#000000", description: "Color negro clásico" },
  { id: "c2", name: "Blanco", hexCode: "#FFFFFF", description: "Color blanco puro" },
  { id: "c3", name: "Gris", hexCode: "#808080", description: "Color gris neutro" },
  { id: "c4", name: "Azul", hexCode: "#0066CC", description: "Color azul vibrante" },
  { id: "c5", name: "Rojo", hexCode: "#CC0000", description: "Color rojo intenso" },
]

// Función helper para obtener objetos por ID
const getCategoryById = (id: string) => categories.find((c) => c.id === id)!
const getFeaturesByIds = (ids: string[]) => features.filter((f) => ids.includes(f.id))
const getSizesByIds = (ids: string[]) => sizes.filter((s) => ids.includes(s.id))
const getColorsByIds = (ids: string[]) => colors.filter((c) => ids.includes(c.id))

export const products: ProductDto[] = [
  // Camisetas
  {
    id: "vz-tshirt-01",
    name: "Camiseta VZ Performance",
    price: convertToCOP(39.99),
    discountPercentage: 15,
    freeShipping: true,
    mainImage: "/images/tshirt-performance.png",
    imageGallery: ["/images/tshirt-performance.png", "/images/tshirt-performance-back.png"],
    category: getCategoryById("cea1952b-dbbc-43ee-bb4e-c06320754fa0"),
    description:
      "Camiseta deportiva de alto rendimiento con tecnología de secado rápido. Diseñada para ofrecer máxima comodidad y libertad de movimiento durante tus entrenamientos más intensos.",
    features: getFeaturesByIds(["f1", "f2", "f3", "f4"]),
    sizes: getSizesByIds(["s2", "s3", "s4", "s5"]),
    colors: getColorsByIds(["c1", "c2", "c4"]),
    isNew: true,
    isBestSeller: null,
    stock: 50,
  },
  {
    id: "vz-tshirt-02",
    name: "Camiseta Training Pro",
    price: convertToCOP(42.99),
    discountPercentage: null,
    freeShipping: false,
    mainImage: "/images/tshirt-training.png",
    imageGallery: ["/images/tshirt-training.png", "/images/tshirt-training-back.png"],
    category: getCategoryById("cea1952b-dbbc-43ee-bb4e-c06320754fa0"),
    description:
      "Camiseta de entrenamiento profesional con tejido transpirable y diseño ergonómico. Perfecta para tus sesiones de entrenamiento más exigentes.",
    features: getFeaturesByIds(["f5", "f6", "f7"]),
    sizes: getSizesByIds(["s2", "s3", "s4", "s5"]),
    colors: getColorsByIds(["c1", "c3", "c5"]),
    isNew: null,
    isBestSeller: true,
    stock: 35,
  },
  {
    id: "vz-tshirt-03",
    name: "Camiseta Urban Street",
    price: convertToCOP(37.99),
    discountPercentage: 5,
    freeShipping: false,
    mainImage: "/images/tshirt-urban.png",
    imageGallery: ["/images/tshirt-urban.png"],
    category: getCategoryById("cea1952b-dbbc-43ee-bb4e-c06320754fa0"),
    description: "Camiseta de estilo urbano con diseño minimalista. Perfecta para el día a día con un toque VERZUS.",
    features: getFeaturesByIds(["f8", "f9", "f4", "f10"]),
    sizes: getSizesByIds(["s2", "s3", "s4", "s5"]),
    colors: getColorsByIds(["c1", "c2", "c3"]),
    isNew: null,
    isBestSeller: null,
    stock: 45,
  },

  // Sudaderas
  {
    id: "vz-hoodie-01",
    name: "Sudadera Urban Tech",
    price: convertToCOP(59.99),
    discountPercentage: 20,
    freeShipping: true,
    mainImage: "/images/hoodie.png",
    imageGallery: ["/images/hoodie.png"],
    category: getCategoryById("b8f3c2a1-5d6e-4f7g-8h9i-0j1k2l3m4n5o"),
    description:
      "Sudadera con capucha de estilo urbano y tecnología térmica. Perfecta para los días fríos sin renunciar al estilo VERZUS.",
    features: getFeaturesByIds(["f8", "f4"]),
    sizes: getSizesByIds(["s2", "s3", "s4", "s5"]),
    colors: getColorsByIds(["c1", "c3", "c4"]),
    isNew: null,
    isBestSeller: true,
    stock: 40,
  },

  // Accesorios
  {
    id: "vz-cap-01",
    name: "Gorra VERZUS Classic",
    price: convertToCOP(29.99),
    discountPercentage: 10,
    freeShipping: false,
    mainImage: "/images/cap.png",
    imageGallery: ["/images/cap.png"],
    category: getCategoryById("c9g4d3b2-6e7f-5g8h-9i0j-1k2l3m4n5o6p"),
    description:
      "Gorra clásica con el logo VERZUS bordado. Ajuste trasero para mayor comodidad y visera curvada para un estilo urbano.",
    features: getFeaturesByIds(["f8", "f4"]),
    sizes: getSizesByIds(["s6"]),
    colors: getColorsByIds(["c1", "c2", "c4"]),
    isNew: null,
    isBestSeller: null,
    stock: 60,
  },
  {
    id: "vz-shaker-01",
    name: "Shaker VZ Pro",
    price: convertToCOP(19.99),
    discountPercentage: null,
    freeShipping: true,
    mainImage: "/images/shaker.png",
    imageGallery: ["/images/shaker.png"],
    category: getCategoryById("c9g4d3b2-6e7f-5g8h-9i0j-1k2l3m4n5o6p"),
    description:
      "Shaker profesional con capacidad de 600ml. Incluye rejilla anti-grumos y cierre hermético para evitar derrames.",
    features: null,
    sizes: getSizesByIds(["s6"]),
    colors: getColorsByIds(["c1", "c4"]),
    isNew: null,
    isBestSeller: null,
    stock: 70,
  },

  // Leggings
  {
    id: "vz-leggings-01",
    name: "Leggings Performance",
    price: convertToCOP(49.99),
    discountPercentage: null,
    freeShipping: true,
    mainImage: "/images/leggings-performance.png",
    imageGallery: ["/images/leggings-performance.png", "/images/leggings-performance-back.png"],
    category: getCategoryById("d0h5e4c3-7f8g-6h9i-0j1k-2l3m4n5o6p7q"),
    description:
      "Leggings de alto rendimiento con tecnología de compresión. Diseñados para ofrecer soporte y libertad de movimiento durante tus entrenamientos más intensos.",
    features: getFeaturesByIds(["f5", "f6", "f3"]),
    sizes: getSizesByIds(["s1", "s2", "s3", "s4", "s5"]),
    colors: getColorsByIds(["c1", "c3", "c4"]),
    isNew: true,
    isBestSeller: null,
    stock: 40,
  },
  {
    id: "vz-leggings-02",
    name: "Leggings Seamless",
    price: convertToCOP(54.99),
    discountPercentage: 15,
    freeShipping: true,
    mainImage: "/images/leggings-seamless.png",
    imageGallery: ["/images/leggings-seamless.png", "/images/leggings-seamless-back.png"],
    category: getCategoryById("d0h5e4c3-7f8g-6h9i-0j1k-2l3m4n5o6p7q"),
    description:
      "Leggings sin costuras que ofrecen máxima comodidad y libertad de movimiento. Perfectos para yoga, pilates o uso diario.",
    features: getFeaturesByIds(["f1", "f2", "f5"]),
    sizes: getSizesByIds(["s1", "s2", "s3", "s4", "s5"]),
    colors: getColorsByIds(["c1", "c2", "c5"]),
    isNew: null,
    isBestSeller: true,
    stock: 35,
  },
]

// Función para obtener productos por categoría
export function getProductsByCategory(categoryName: string): ProductDto[] {
  if (categoryName === "Todos") {
    return products
  }
  return products.filter((product) => product.category.name === categoryName)
}

// Función para obtener un producto por ID
export function getProductById(id: string): ProductDto | undefined {
  return products.find((product) => product.id === id)
}

// Función para obtener productos destacados
export function getFeaturedProducts(limit = 4): ProductDto[] {
  const sortedProducts = [...products].sort((a, b) => {
    if (a.isBestSeller && !b.isBestSeller) return -1
    if (!a.isBestSeller && b.isBestSeller) return 1
    if (a.discountPercentage && !b.discountPercentage) return -1
    if (!a.discountPercentage && b.discountPercentage) return 1
    return 0
  })

  return sortedProducts.slice(0, limit)
}

// Función para obtener productos nuevos
export function getNewProducts(limit = 4): ProductDto[] {
  return products.filter((product) => product.isNew).slice(0, limit)
}

// Función para obtener productos con descuento
export function getDiscountedProducts(limit = 4): ProductDto[] {
  return products
    .filter((product) => product.discountPercentage && product.discountPercentage > 0)
    .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
    .slice(0, limit)
}

// Función para obtener productos de leggings
export function getLeggingsProducts(limit = 4): ProductDto[] {
  return products.filter((product) => product.name.toLowerCase().includes("legging")).slice(0, limit)
}

// Función para obtener productos más vendidos
export function getBestSellerProducts(limit = 4): ProductDto[] {
  return products.filter((product) => product.isBestSeller).slice(0, limit)
}

// Obtener categorías únicas
export function getCategories(): string[] {
  const categoryNames = new Set(products.map((product) => product.category.name))
  return ["Todos", ...Array.from(categoryNames)]
}

// Función para buscar productos
export function searchProducts(query: string): ProductDto[] {
  const searchTerm = query.toLowerCase().trim()

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      (product.features && product.features.some((feature) => feature.name.toLowerCase().includes(searchTerm)))
    )
  })
}

// Exportar datos auxiliares
export { categories, features, sizes, colors }
export type { ProductDto, CategoryDto, FeatureDto, SizeDto, ColorDto }
