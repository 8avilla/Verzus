import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = "COP"): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Función para convertir precios de USD a COP (tasa aproximada)
export function convertToCOP(usdAmount: number): number {
  const exchangeRate = 3800 // Tasa aproximada USD a COP
  return Math.round(usdAmount * exchangeRate)
}
