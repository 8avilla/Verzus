"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BoldPaymentButtonProps {
  orderId: string
  amount: string
  currency: string
  description: string
  customerEmail?: string
  customerName?: string
  isSubmitting?: boolean
}

export default function BoldPaymentButton({
  orderId,
  amount,
  currency,
  description,
  customerEmail,
  customerName,
  isSubmitting = false,
}: BoldPaymentButtonProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [isButtonRendered, setIsButtonRendered] = useState(false)
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  // Cargar el script de Bold
  useEffect(() => {
    if (!document.querySelector('script[src*="boldPaymentButton.js"]')) {
      const script = document.createElement("script")
      script.src = "https://checkout.bold.co/library/boldPaymentButton.js"
      script.async = true
      script.onload = () => setIsScriptLoaded(true)
      document.body.appendChild(script)
    } else {
      setIsScriptLoaded(true)
    }
  }, [])

  // Generar hash para la integridad
  async function generateHash(cadena: string): Promise<string> {
    const encodedText = new TextEncoder().encode(cadena)
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedText)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  }

  // Renderizar el botón de Bold
  useEffect(() => {
    if (isScriptLoaded && buttonContainerRef.current && !isSubmitting) {
      const renderButton = async () => {
        try {
          // En un entorno real, esta clave debería estar en el servidor
          // IMPORTANTE: Esta es solo para demostración
          const secretKey = "HlfLj_9MAFQafVU4uIMA6Q"

          const cadenaConcatenada = `${orderId}${amount}${currency}${secretKey}`
          const hash = await generateHash(cadenaConcatenada)

          // Limpiar el contenedor antes de añadir el nuevo script
          if (buttonContainerRef.current) {
            // Limpiar cualquier contenido previo
            buttonContainerRef.current.innerHTML = ""
          }

          // Crear nuevo script
          const script = document.createElement("script")
          scriptRef.current = script

          script.setAttribute("data-bold-button", "")
          script.setAttribute("data-order-id", orderId)
          script.setAttribute("data-currency", currency)
          script.setAttribute("data-amount", amount)
          script.setAttribute("data-api-key", "o7XN7WxQaXg017mpD3KGDUvhqRsKDaquFqNFfBC985s")
          script.setAttribute("data-integrity-signature", hash)
          script.setAttribute("data-description", description)

          // Añadir información del cliente si está disponible
          if (customerEmail) script.setAttribute("data-customer-email", customerEmail)
          if (customerName) script.setAttribute("data-customer-name", customerName)

          script.setAttribute("data-tax", "vat-19")
          script.setAttribute("data-redirection-url", `${window.location.origin}/checkout/response`)

          if (buttonContainerRef.current) {
            buttonContainerRef.current.appendChild(script)
            setIsButtonRendered(true)
          }
        } catch (error) {
          console.error("Error al renderizar el botón de Bold:", error)
        }
      }

      renderButton()
    }
  }, [isScriptLoaded, orderId, amount, currency, description, customerEmail, customerName, isSubmitting])

  return (
    <div className="w-full">
      {isSubmitting ? (
        <Button disabled className="w-full" size="lg">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Procesando...
        </Button>
      ) : (
        <div ref={buttonContainerRef} className="w-full">
          {!isScriptLoaded && (
            <Button disabled className="w-full" size="lg">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Cargando...
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
