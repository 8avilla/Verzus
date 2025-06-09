import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">AYUDA</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Encuentra respuestas a tus preguntas y soluciones a tus inquietudes.
            </p>
          </div>
        </section>

        {/* Categorías de ayuda */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/shipping"
                className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-black hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Envíos y devoluciones</h3>
                <p className="mb-4 text-gray-600">
                  Información sobre nuestras políticas de envío, tiempos de entrega y proceso de devolución.
                </p>
                <span className="flex items-center text-sm font-medium text-black">
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/faq"
                className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-black hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Preguntas frecuentes</h3>
                <p className="mb-4 text-gray-600">
                  Respuestas a las preguntas más comunes sobre nuestros productos, pedidos y servicios.
                </p>
                <span className="flex items-center text-sm font-medium text-black">
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/size-guide"
                className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-black hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Guía de tallas</h3>
                <p className="mb-4 text-gray-600">
                  Encuentra la talla perfecta para ti con nuestras tablas de medidas detalladas.
                </p>
                <span className="flex items-center text-sm font-medium text-black">
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/privacy"
                className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-black hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Política de privacidad</h3>
                <p className="mb-4 text-gray-600">
                  Información sobre cómo protegemos tus datos y respetamos tu privacidad.
                </p>
                <span className="flex items-center text-sm font-medium text-black">
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-black hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Contacto</h3>
                <p className="mb-4 text-gray-600">
                  ¿No encuentras lo que buscas? Ponte en contacto con nuestro equipo de atención al cliente.
                </p>
                <span className="flex items-center text-sm font-medium text-black">
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
