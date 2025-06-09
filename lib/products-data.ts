import { convertToCOP } from "@/lib/utils"

export type Product = {
  id: string
  name: string
  price: number
  discountPercentage?: number
  freeShipping?: boolean
  image: string
  images?: string[]
  category: string
  description: string
  features?: string[]
  sizes?: string[]
  colors?: string[]
  isNew?: boolean
  isBestSeller?: boolean
  stock?: number
}

export const products: Product[] = [
  // Camisetas
  {
    id: "vz-tshirt-01",
    name: "Camiseta VZ Performance",
    price: convertToCOP(39.99),
    discountPercentage: 15,
    freeShipping: true,
    image: "/images/tshirt-performance.png",
    images: ["/images/tshirt-performance.png", "/images/tshirt-performance-back.png"],
    category: "Camisetas",
    description:
      "Camiseta deportiva de alto rendimiento con tecnología de secado rápido. Diseñada para ofrecer máxima comodidad y libertad de movimiento durante tus entrenamientos más intensos.",
    features: [
      "Tejido ligero y transpirable",
      "Tecnología de secado rápido",
      "Costuras planas para evitar rozaduras",
      "Logo VERZUS minimalista",
      "95% Poliéster, 5% Elastano",
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    stock: 50,
  },
  {
    id: "vz-tshirt-02",
    name: "Camiseta Training Pro",
    price: convertToCOP(42.99),
    discountPercentage: 0,
    freeShipping: false,
    image: "/images/tshirt-training.png",
    images: ["/images/tshirt-training.png", "/images/tshirt-training-back.png"],
    category: "Camisetas",
    description:
      "Camiseta de entrenamiento profesional con tejido transpirable y diseño ergonómico. Perfecta para tus sesiones de entrenamiento más exigentes.",
    features: [
      "Tejido de alta elasticidad",
      "Diseño ergonómico",
      "Control de humedad",
      "Estampado reflectante",
      "90% Poliéster, 10% Elastano",
    ],
    sizes: ["S", "M", "L", "XL"],
    isBestSeller: true,
    stock: 35,
  },
  {
    id: "vz-tshirt-03",
    name: "Camiseta Urban Street",
    price: convertToCOP(37.99),
    discountPercentage: 5,
    freeShipping: false,
    image: "/images/tshirt-urban.png",
    images: ["/images/tshirt-urban.png", "/images/tshirt-urban-back.jpg"],
    category: "Camisetas",
    description: "Camiseta de estilo urbano con diseño minimalista. Perfecta para el día a día con un toque VERZUS.",
    features: [
      "Algodón premium",
      "Corte regular",
      "Logo VERZUS bordado",
      "Cuello redondo reforzado",
      "100% Algodón orgánico",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 45,
  },
  {
    id: "vz-tshirt-04",
    name: "Camiseta Técnica Competición",
    price: convertToCOP(44.99),
    discountPercentage: 10,
    freeShipping: true,
    image: "/images/tshirt-competition.jpg",
    images: ["/images/tshirt-competition.jpg", "/images/tshirt-competition-back.jpg"],
    category: "Camisetas",
    description:
      "Camiseta técnica diseñada para competiciones. Ofrece máxima ligereza y ventilación para un rendimiento óptimo.",
    features: [
      "Ultra ligera (solo 95g)",
      "Paneles de ventilación estratégicos",
      "Tecnología anti-olor",
      "Costuras selladas",
      "88% Poliéster reciclado, 12% Elastano",
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    stock: 30,
  },

  // Sudaderas
  {
    id: "vz-hoodie-01",
    name: "Sudadera Urban Tech",
    price: convertToCOP(59.99),
    discountPercentage: 20,
    freeShipping: true,
    image: "/images/hoodie-urban.jpg",
    images: ["/images/hoodie-urban.jpg", "/images/hoodie-urban-back.jpg"],
    category: "Sudaderas",
    description:
      "Sudadera con capucha de estilo urbano y tecnología térmica. Perfecta para los días fríos sin renunciar al estilo VERZUS.",
    features: [
      "Tejido térmico interior",
      "Bolsillo canguro",
      "Capucha ajustable",
      "Puños y cintura elásticos",
      "80% Algodón, 20% Poliéster",
    ],
    sizes: ["S", "M", "L", "XL"],
    isBestSeller: true,
    stock: 40,
  },
  {
    id: "vz-hoodie-02",
    name: "Sudadera Performance",
    price: convertToCOP(64.99),
    discountPercentage: 0,
    freeShipping: true,
    image: "/images/hoodie-performance.jpg",
    images: ["/images/hoodie-performance.jpg", "/images/hoodie-performance-back.jpg"],
    category: "Sudaderas",
    description:
      "Sudadera de alto rendimiento con tejido técnico que mantiene el calor corporal. Diseño minimalista con detalles reflectantes.",
    features: [
      "Tecnología térmica avanzada",
      "Bolsillos con cremallera",
      "Detalles reflectantes",
      "Cremallera YKK de alta calidad",
      "92% Poliéster, 8% Elastano",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 25,
  },
  {
    id: "vz-hoodie-03",
    name: "Sudadera Oversize Signature",
    price: convertToCOP(69.99),
    discountPercentage: 15,
    freeShipping: true,
    image: "/images/hoodie-oversize.jpg",
    images: ["/images/hoodie-oversize.jpg", "/images/hoodie-oversize-back.jpg"],
    category: "Sudaderas",
    description:
      "Sudadera oversize con el logo signature de VERZUS. Diseño contemporáneo con un ajuste holgado para máxima comodidad.",
    features: [
      "Corte oversize",
      "Algodón de alta densidad",
      "Logo bordado en el pecho",
      "Acabados premium",
      "100% Algodón orgánico",
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    stock: 35,
  },

  // Accesorios
  {
    id: "vz-cap-01",
    name: "Gorra VERZUS Classic",
    price: convertToCOP(29.99),
    discountPercentage: 10,
    freeShipping: false,
    image: "/images/cap-classic.jpg",
    images: ["/images/cap-classic.jpg"],
    category: "Accesorios",
    description:
      "Gorra clásica con el logo VERZUS bordado. Ajuste trasero para mayor comodidad y visera curvada para un estilo urbano.",
    features: [
      "Algodón premium",
      "Ajuste trasero con hebilla metálica",
      "Visera curvada",
      "Logo bordado 3D",
      "100% Algodón",
    ],
    sizes: ["Única"],
    stock: 60,
  },
  {
    id: "vz-cap-02",
    name: "Gorra Urban Sport",
    price: convertToCOP(27.99),
    discountPercentage: 0,
    freeShipping: true,
    image: "/images/cap-urban.jpg",
    images: ["/images/cap-urban.jpg"],
    category: "Accesorios",
    description:
      "Gorra deportiva con tejido transpirable y ajuste snapback. Logo VERZUS en relieve para un estilo distintivo.",
    features: [
      "Tejido técnico transpirable",
      "Ajuste snapback",
      "Visera plana",
      "Logo en relieve",
      "85% Poliéster, 15% Elastano",
    ],
    sizes: ["Única"],
    isBestSeller: true,
    stock: 55,
  },
  {
    id: "vz-shaker-01",
    name: "Shaker VZ Pro",
    price: convertToCOP(19.99),
    discountPercentage: 0,
    freeShipping: true,
    image: "/images/shaker-bottle.jpg",
    images: ["/images/shaker-bottle.jpg"],
    category: "Accesorios",
    description:
      "Shaker profesional con capacidad de 600ml. Incluye rejilla anti-grumos y cierre hermético para evitar derrames.",
    features: [
      "Capacidad de 600ml",
      "Rejilla anti-grumos",
      "Cierre hermético",
      "Libre de BPA",
      "Material resistente a impactos",
    ],
    stock: 70,
  },
  {
    id: "vz-bag-01",
    name: "Bolsa Deportiva VERZUS",
    price: convertToCOP(49.99),
    discountPercentage: 25,
    freeShipping: true,
    image: "/images/gym-bag.jpg",
    images: ["/images/gym-bag.jpg"],
    category: "Accesorios",
    description:
      "Bolsa deportiva espaciosa y resistente. Perfecta para llevar todo tu equipo al gimnasio o a tus entrenamientos.",
    features: [
      "Capacidad de 40L",
      "Compartimento para zapatos",
      "Bolsillo para objetos húmedos",
      "Correa acolchada ajustable",
      "Material resistente al agua",
    ],
    isNew: true,
    stock: 20,
  },
  {
    id: "vz-bottle-01",
    name: "Botella Térmica VERZUS",
    price: convertToCOP(24.99),
    discountPercentage: 5,
    freeShipping: false,
    image: "/images/water-bottle.jpg",
    images: ["/images/water-bottle.jpg"],
    category: "Accesorios",
    description:
      "Botella térmica de acero inoxidable con doble pared. Mantiene tus bebidas frías hasta 24 horas o calientes hasta 12 horas.",
    features: ["Capacidad de 750ml", "Acero inoxidable 18/8", "Doble pared aislante", "Tapa hermética", "Libre de BPA"],
    stock: 40,
  },

  // Pantalones
  {
    id: "vz-pants-01",
    name: "Pantalón Training Pro",
    price: convertToCOP(54.99),
    discountPercentage: 0,
    freeShipping: true,
    image: "/images/pants-training.jpg",
    images: ["/images/pants-training.jpg", "/images/pants-training-side.jpg"],
    category: "Pantalones",
    description:
      "Pantalón deportivo de alto rendimiento. Diseñado para ofrecer máxima libertad de movimiento y comodidad durante tus entrenamientos.",
    features: [
      "Tejido elástico en 4 direcciones",
      "Bolsillos con cremallera",
      "Cintura elástica con cordón",
      "Paneles de ventilación",
      "88% Poliéster, 12% Elastano",
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    stock: 30,
  },
  {
    id: "vz-shorts-01",
    name: "Shorts Running Elite",
    price: convertToCOP(34.99),
    discountPercentage: 10,
    freeShipping: false,
    image: "/images/shorts-running.jpg",
    images: ["/images/shorts-running.jpg", "/images/shorts-running-side.jpg"],
    category: "Pantalones",
    description:
      "Shorts ligeros diseñados específicamente para running. Ofrecen máxima libertad de movimiento y ventilación.",
    features: [
      "Ultra ligeros",
      "Forro interior de malla",
      "Bolsillo trasero con cremallera",
      "Cintura elástica con cordón",
      "92% Poliéster reciclado, 8% Elastano",
    ],
    sizes: ["S", "M", "L", "XL"],
    isBestSeller: true,
    stock: 45,
  },
  // Leggings
  {
    id: "vz-leggings-01",
    name: "Leggings Performance",
    price: convertToCOP(49.99),
    discountPercentage: 0,
    freeShipping: true,
    image: "/images/leggings-performance.png",
    images: ["/images/leggings-performance.png", "/images/leggings-performance-back.png"],
    category: "Pantalones",
    description:
      "Leggings de alto rendimiento con tecnología de compresión. Diseñados para ofrecer soporte y libertad de movimiento durante tus entrenamientos más intensos.",
    features: [
      "Tejido de compresión",
      "Cintura alta para mayor soporte",
      "Bolsillo lateral para smartphone",
      "Costuras planas anti-rozaduras",
      "87% Poliamida, 13% Elastano",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    stock: 40,
  },
  {
    id: "vz-leggings-02",
    name: "Leggings Seamless",
    price: convertToCOP(54.99),
    discountPercentage: 15,
    freeShipping: true,
    image: "/images/leggings-seamless.png",
    images: ["/images/leggings-seamless.png", "/images/leggings-seamless-back.png"],
    category: "Pantalones",
    description:
      "Leggings sin costuras que ofrecen máxima comodidad y libertad de movimiento. Perfectos para yoga, pilates o uso diario.",
    features: [
      "Diseño sin costuras",
      "Cintura alta con efecto moldeador",
      "Tejido transpirable",
      "Secado rápido",
      "76% Poliamida, 24% Elastano",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    isBestSeller: true,
    stock: 35,
  },
  {
    id: "vz-leggings-03",
    name: "Leggings Sculpt",
    price: convertToCOP(59.99),
    discountPercentage: 10,
    freeShipping: true,
    image: "/images/leggings-sculpt.png",
    images: ["/images/leggings-sculpt.png", "/images/leggings-sculpt-back.png"],
    category: "Pantalones",
    description:
      "Leggings con tecnología de esculpido que realzan tu figura. Diseñados para entrenamientos de alta intensidad y uso diario.",
    features: [
      "Efecto push-up",
      "Cintura alta con banda ancha",
      "Tejido anti-celulitis",
      "Control de humedad",
      "82% Poliamida, 18% Elastano",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    stock: 30,
  },
  {
    id: "vz-leggings-04",
    name: "Leggings Energy",
    price: convertToCOP(44.99),
    discountPercentage: 0,
    freeShipping: false,
    image: "/images/leggings-energy.png",
    images: ["/images/leggings-energy.png", "/images/leggings-energy-back.png"],
    category: "Pantalones",
    description:
      "Leggings energizantes con tecnología de compresión gradual. Mejoran la circulación y reducen la fatiga muscular durante el ejercicio.",
    features: [
      "Compresión gradual",
      "Cintura media elástica",
      "Tejido ligero y transpirable",
      "Secado rápido",
      "90% Poliéster reciclado, 10% Elastano",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 45,
  },
]

// Función para obtener productos por categoría
export function getProductsByCategory(category: string): Product[] {
  if (category === "Todos") {
    return products
  }
  return products.filter((product) => product.category === category)
}

// Función para obtener un producto por ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Función para obtener productos destacados
export function getFeaturedProducts(limit = 4): Product[] {
  // Priorizar productos con descuento o marcados como bestseller
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
export function getNewProducts(limit = 4): Product[] {
  return products.filter((product) => product.isNew).slice(0, limit)
}

// Función para obtener productos con descuento
export function getDiscountedProducts(limit = 4): Product[] {
  return products
    .filter((product) => product.discountPercentage && product.discountPercentage > 0)
    .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
    .slice(0, limit)
}

// Función para obtener productos de leggings
export function getLeggingsProducts(limit = 4): Product[] {
  // Filtrar productos que sean leggings (podemos asumir que están en la categoría "Pantalones")
  // y que tengan "Leggings" en el nombre o descripción
  return products
    .filter(
      (product) =>
        product.category === "Pantalones" &&
        (product.name.toLowerCase().includes("legging") || product.description.toLowerCase().includes("legging")),
    )
    .slice(0, limit)
}

// Función para obtener productos más vendidos
export function getBestSellerProducts(limit = 4): Product[] {
  return products.filter((product) => product.isBestSeller).slice(0, limit)
}

// Obtener categorías únicas
export function getCategories(): string[] {
  const categories = new Set(products.map((product) => product.category))
  return ["Todos", ...Array.from(categories)]
}

// Función para buscar productos
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim()

  return products.filter((product) => {
    // Buscar en nombre, categoría y descripción
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      // Buscar en características si existen
      (product.features && product.features.some((feature) => feature.toLowerCase().includes(searchTerm)))
    )
  })
}
