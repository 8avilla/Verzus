"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  maxPreset?: number
}

export default function QuantitySelector({ value, onChange, maxPreset = 12 }: QuantitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Generar opciones de cantidad
  const options = Array.from({ length: maxPreset }, (_, i) => i + 1)

  // Formatear texto de unidades (singular/plural)
  const formatUnits = (num: number) => (num === 1 ? "unidad" : "unidades")

  // Manejar clic fuera del dropdown para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          Cantidad: {value} {formatUnits(value)}
        </span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto py-1">
            {options.map((num) => (
              <li key={num}>
                <button
                  type="button"
                  className={`w-full px-4 py-2 text-left text-sm ${
                    value === num ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    onChange(num)
                    setIsOpen(false)
                  }}
                >
                  {num} {formatUnits(num)}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                className={`w-full px-4 py-2 text-left text-sm ${
                  value > maxPreset ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  // Si ya es mayor que maxPreset, incrementar en 1
                  // Si no, establecer a maxPreset + 1
                  onChange(value > maxPreset ? value + 1 : maxPreset + 1)
                  setIsOpen(false)
                }}
              >
                Más de {maxPreset} {formatUnits(maxPreset)}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
