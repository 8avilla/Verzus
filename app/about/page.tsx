import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black py-20 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">SOBRE NOSOTROS</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Conoce la historia detrás de VERZUS y nuestra misión de inspirar a las personas a superar sus límites.
            </p>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight">NUESTRA HISTORIA</h2>
                <p className="mb-4 text-lg">
                  VERZUS nació en 2018 de la pasión de un grupo de atletas urbanos que no encontraban ropa que
                  representara su filosofía de vida: la constante superación personal y la actitud competitiva.
                </p>
                <p className="mb-4 text-lg">
                  Lo que comenzó como un pequeño proyecto en Bogotá, Colombia, rápidamente se convirtió en una marca
                  reconocida por su diseño minimalista, calidad superior y mensaje inspirador.
                </p>
                <p className="text-lg">
                  Hoy, VERZUS es mucho más que ropa deportiva: es un movimiento que inspira a las personas a desafiarse
                  a sí mismas y a vencer sus propios límites.
                </p>
              </div>
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img src="/images/about-history.jpg" alt="Historia de VERZUS" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-gray-100 py-16">
          <div className="container px-4">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">NUESTROS VALORES</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">SUPERACIÓN</h3>
                <p className="text-gray-600">
                  Creemos en el poder de superar los límites personales y en la mejora constante, tanto en el deporte
                  como en la vida.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">CALIDAD</h3>
                <p className="text-gray-600">
                  Nos comprometemos a ofrecer productos de la más alta calidad, diseñados para durar y rendir en las
                  condiciones más exigentes.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">PERSEVERANCIA</h3>
                <p className="text-gray-600">
                  Valoramos la constancia y la dedicación, entendiendo que los grandes logros requieren esfuerzo y
                  persistencia.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">COMUNIDAD</h3>
                <p className="text-gray-600">
                  Fomentamos un sentido de pertenencia y apoyo mutuo entre todos los que comparten nuestra pasión por el
                  deporte y la superación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="rounded-lg bg-black p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">NUESTRA MISIÓN</h3>
                <p className="mb-4 text-lg">
                  Inspirar a las personas a superar sus límites a través de productos deportivos de alta calidad que
                  combinan funcionalidad, estilo y un mensaje de superación personal.
                </p>
                <p className="text-lg">
                  Buscamos ser más que una marca de ropa: queremos ser el recordatorio diario de que cada persona tiene
                  el potencial de ser mejor que ayer.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-8">
                <h3 className="mb-4 text-2xl font-bold">NUESTRA VISIÓN</h3>
                <p className="mb-4 text-lg">
                  Convertirnos en la marca deportiva urbana líder en Latinoamérica, reconocida no solo por la calidad de
                  nuestros productos, sino por el impacto positivo que generamos en la vida de las personas.
                </p>
                <p className="text-lg">
                  Aspiramos a crear una comunidad global de individuos que se desafían constantemente a sí mismos y que
                  encuentran en VERZUS un aliado para alcanzar sus metas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="bg-gray-100 py-16">
          <div className="container px-4">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">NUESTRO EQUIPO</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/team-1.jpg"
                    alt="Carlos Mendoza - Fundador y CEO"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">Carlos Mendoza</h3>
                  <p className="mb-4 text-gray-500">Fundador y CEO</p>
                  <p className="text-gray-600">
                    Ex atleta profesional que decidió combinar su pasión por el deporte con su visión empresarial para
                    crear VERZUS.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/team-2.jpg"
                    alt="Laura Gómez - Directora de Diseño"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">Laura Gómez</h3>
                  <p className="mb-4 text-gray-500">Directora de Diseño</p>
                  <p className="text-gray-600">
                    Diseñadora con experiencia en grandes marcas deportivas, responsable del estilo minimalista y
                    funcional que caracteriza a VERZUS.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/team-3.jpg"
                    alt="Andrés Martínez - Director de Operaciones"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">Andrés Martínez</h3>
                  <p className="mb-4 text-gray-500">Director de Operaciones</p>
                  <p className="text-gray-600">
                    Experto en logística y cadena de suministro, garantiza que cada producto VERZUS cumpla con los más
                    altos estándares de calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">ÚNETE A NUESTRA COMUNIDAD</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Descubre nuestros productos y forma parte de una comunidad que busca constantemente la superación
              personal.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
                <Link href="/products">EXPLORAR PRODUCTOS</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
                asChild
              >
                <Link href="/contact">CONTÁCTANOS</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
