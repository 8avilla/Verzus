export const departamentos = [
  { id: "ANT", nombre: "Antioquia" },
  { id: "ATL", nombre: "Atlántico" },
  { id: "BOG", nombre: "Bogotá D.C." },
  { id: "BOL", nombre: "Bolívar" },
  { id: "BOY", nombre: "Boyacá" },
  { id: "CAL", nombre: "Caldas" },
  { id: "CAQ", nombre: "Caquetá" },
  { id: "CAU", nombre: "Cauca" },
  { id: "CES", nombre: "Cesar" },
  { id: "COR", nombre: "Córdoba" },
  { id: "CUN", nombre: "Cundinamarca" },
  { id: "CHO", nombre: "Chocó" },
  { id: "HUI", nombre: "Huila" },
  { id: "LAG", nombre: "La Guajira" },
  { id: "MAG", nombre: "Magdalena" },
  { id: "MET", nombre: "Meta" },
  { id: "NAR", nombre: "Nariño" },
  { id: "NSA", nombre: "Norte de Santander" },
  { id: "QUI", nombre: "Quindío" },
  { id: "RIS", nombre: "Risaralda" },
  { id: "SAN", nombre: "Santander" },
  { id: "SUC", nombre: "Sucre" },
  { id: "TOL", nombre: "Tolima" },
  { id: "VAC", nombre: "Valle del Cauca" },
  { id: "ARA", nombre: "Arauca" },
  { id: "CAS", nombre: "Casanare" },
  { id: "PUT", nombre: "Putumayo" },
  { id: "AMA", nombre: "Amazonas" },
  { id: "GUA", nombre: "Guainía" },
  { id: "GUV", nombre: "Guaviare" },
  { id: "VAU", nombre: "Vaupés" },
  { id: "VIC", nombre: "Vichada" },
  { id: "SAP", nombre: "San Andrés y Providencia" },
]

export const municipiosPorDepartamento: Record<string, { id: string; nombre: string }[]> = {
  ANT: [
    { id: "MED", nombre: "Medellín" },
    { id: "ENV", nombre: "Envigado" },
    { id: "BEL", nombre: "Bello" },
    { id: "ITG", nombre: "Itagüí" },
    { id: "RNG", nombre: "Rionegro" },
  ],
  ATL: [
    { id: "BAR", nombre: "Barranquilla" },
    { id: "SOL", nombre: "Soledad" },
    { id: "MAL", nombre: "Malambo" },
    { id: "PUE", nombre: "Puerto Colombia" },
  ],
  BOG: [{ id: "BOG", nombre: "Bogotá D.C." }],
  BOL: [
    { id: "CTG", nombre: "Cartagena" },
    { id: "MAG", nombre: "Magangué" },
    { id: "TUR", nombre: "Turbaco" },
  ],
  BOY: [
    { id: "TUN", nombre: "Tunja" },
    { id: "DUI", nombre: "Duitama" },
    { id: "SOG", nombre: "Sogamoso" },
  ],
  CAL: [
    { id: "MAN", nombre: "Manizales" },
    { id: "CHI", nombre: "Chinchiná" },
  ],
  CAQ: [
    { id: "FLO", nombre: "Florencia" },
    { id: "BEL", nombre: "Belén de los Andaquíes" },
  ],
  CAU: [
    { id: "POP", nombre: "Popayán" },
    { id: "SAN", nombre: "Santander de Quilichao" },
  ],
  CES: [
    { id: "VAL", nombre: "Valledupar" },
    { id: "AGU", nombre: "Aguachica" },
  ],
  COR: [
    { id: "MON", nombre: "Montería" },
    { id: "CER", nombre: "Cereté" },
  ],
  CUN: [
    { id: "CHI", nombre: "Chía" },
    { id: "ZIP", nombre: "Zipaquirá" },
    { id: "FAC", nombre: "Facatativá" },
    { id: "SOP", nombre: "Sopo" },
    { id: "CAJ", nombre: "Cajicá" },
  ],
  CHO: [
    { id: "QUI", nombre: "Quibdó" },
    { id: "IST", nombre: "Istmina" },
  ],
  HUI: [
    { id: "NEI", nombre: "Neiva" },
    { id: "PIT", nombre: "Pitalito" },
  ],
  LAG: [
    { id: "RIO", nombre: "Riohacha" },
    { id: "MAI", nombre: "Maicao" },
  ],
  MAG: [
    { id: "SMA", nombre: "Santa Marta" },
    { id: "CIE", nombre: "Ciénaga" },
  ],
  MET: [
    { id: "VIL", nombre: "Villavicencio" },
    { id: "ACA", nombre: "Acacías" },
  ],
  NAR: [
    { id: "PAS", nombre: "Pasto" },
    { id: "TUM", nombre: "Tumaco" },
  ],
  NSA: [
    { id: "CUC", nombre: "Cúcuta" },
    { id: "OCN", nombre: "Ocaña" },
  ],
  QUI: [
    { id: "ARM", nombre: "Armenia" },
    { id: "CAL", nombre: "Calarcá" },
  ],
  RIS: [
    { id: "PER", nombre: "Pereira" },
    { id: "DOS", nombre: "Dosquebradas" },
  ],
  SAN: [
    { id: "BUC", nombre: "Bucaramanga" },
    { id: "FLO", nombre: "Floridablanca" },
    { id: "GIR", nombre: "Girón" },
  ],
  SUC: [
    { id: "SIN", nombre: "Sincelejo" },
    { id: "COV", nombre: "Corozal" },
  ],
  TOL: [
    { id: "IBA", nombre: "Ibagué" },
    { id: "ESP", nombre: "Espinal" },
  ],
  VAC: [
    { id: "CAL", nombre: "Cali" },
    { id: "PAL", nombre: "Palmira" },
    { id: "BUE", nombre: "Buenaventura" },
    { id: "TUL", nombre: "Tuluá" },
  ],
  ARA: [
    { id: "ARA", nombre: "Arauca" },
    { id: "SAR", nombre: "Saravena" },
  ],
  CAS: [
    { id: "YOP", nombre: "Yopal" },
    { id: "AGU", nombre: "Aguazul" },
  ],
  PUT: [
    { id: "MOC", nombre: "Mocoa" },
    { id: "PTO", nombre: "Puerto Asís" },
  ],
  AMA: [
    { id: "LET", nombre: "Leticia" },
    { id: "PTO", nombre: "Puerto Nariño" },
  ],
  GUA: [{ id: "INI", nombre: "Inírida" }],
  GUV: [{ id: "SJG", nombre: "San José del Guaviare" }],
  VAU: [{ id: "MIT", nombre: "Mitú" }],
  VIC: [{ id: "PTC", nombre: "Puerto Carreño" }],
  SAP: [
    { id: "SAN", nombre: "San Andrés" },
    { id: "PRO", nombre: "Providencia" },
  ],
}
