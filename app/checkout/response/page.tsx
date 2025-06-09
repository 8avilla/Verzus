"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"

export default function PaymentResponsePage() {
  const { clearCart } = useCart()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"success" | "error" | "loading">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    // Procesar los parámetros de la URL para determinar el estado del pago
    const responseCode = searchParams.get("response_code")
    const responseMessage = searchParams.get("response_message")

    if (responseCode === "00") {
      setStatus("success")
      setMessage("¡Tu pago ha sido procesado con éxito! Recibirás un correo electrónico con los detalles de tu pedido.")
      // Limpiar el carrito cuando el pago es exitoso
      clearCart()
    } else if (responseCode) {
      setStatus("error")
      setMessage(responseMessage || "Ha ocurrido un error al procesar tu pago. Por favor, intenta nuevamente.")
    } else {
      // Si no hay parámetros, asumimos que es una carga directa de la página
      setStatus("success")
      setMessage("¡Gracias por tu compra! Recibirás un correo electrónico con los detalles de tu pedido.")
      clearCart()
    }
  }, [searchParams, clearCart])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center py-10">
        <div className="container max-w-md px-4 text-center">
          {status === "loading" ? (
            <div className="mb-6 inline-block rounded-full bg-gray-200 p-3">
              <svg
                className="h-6 w-6 animate-spin text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : status === "success" ? (
            <div className="mb-6 inline-block rounded-full bg-black p-3">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
          ) : (
            <div className="mb-6 inline-block rounded-full bg-red-500 p-3">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
          )}

          <h1 className="mb-4 text-2xl font-bold">
            {status === "loading" ? "Procesando..." : status === "success" ? "¡Pedido completado!" : "Error en el pago"}
          </h1>

          <p className="mb-8 text-gray-600">{message}</p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button asChild>
              <Link href="/">Volver a la tienda</Link>
            </Button>

            {status === "error" && (
              <Button variant="outline" asChild>
                <Link href="/checkout">Intentar nuevamente</Link>
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
