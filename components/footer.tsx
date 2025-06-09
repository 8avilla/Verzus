import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-8">
              <Image
                src="/images/verzus-logo.png"
                alt="Logo Verzus"
                width={120}
                height={32}
                className="h-full w-auto"
              />
            </div>
            <p className="text-sm text-gray-600">
              Marca deportiva urbana que promueve la superación personal y la actitud competitiva.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold">COMPRAR</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-black">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/category/camisetas" className="text-gray-600 hover:text-black">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link href="/category/sudaderas" className="text-gray-600 hover:text-black">
                  Sudaderas
                </Link>
              </li>
              <li>
                <Link href="/category/accesorios" className="text-gray-600 hover:text-black">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold">EMPRESA</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-black">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black">
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold">AYUDA</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black">
                  Envíos y devoluciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-black">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-black">
                  Guía de tallas
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 md:flex-row md:space-y-0">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} VERZUS. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link href="https://instagram.com" className="text-gray-600 hover:text-black">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" className="text-gray-600 hover:text-black">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://facebook.com" className="text-gray-600 hover:text-black">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
