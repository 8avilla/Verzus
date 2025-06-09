// Función para generar un ID de orden único
export function generateOrderId(): string {
  const timestamp = Date.now()
  const randomPart = Math.floor(Math.random() * 10000)
  return `VERZUS-${timestamp}-${randomPart}`
}

// Función para formatear el monto para Bold (sin decimales para COP)
export function formatAmountForBold(amount: number): string {
  // Bold espera el monto como string sin decimales para COP
  return Math.round(amount).toString()
}
