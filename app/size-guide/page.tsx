import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SizeGuidePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">GUÍA DE TALLAS</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Encuentra la talla perfecta para ti con nuestras tablas de medidas detalladas.
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <Link href="/help" className="mb-8 inline-flex items-center text-sm font-medium">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Volver a Ayuda
              </Link>

              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">¿Cómo encontrar tu talla perfecta?</h2>
                  <p className="mt-2 text-gray-600">
                    Utiliza nuestras tablas de medidas para encontrar la talla que mejor se adapte a ti. Recuerda que
                    estas medidas son aproximadas y pueden variar ligeramente según el modelo y el diseño.
                  </p>
                </div>

                <Tabs defaultValue="camisetas" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="camisetas">Camisetas</TabsTrigger>
                    <TabsTrigger value="sudaderas">Sudaderas</TabsTrigger>
                    <TabsTrigger value="accesorios">Accesorios</TabsTrigger>
                  </TabsList>

                  {/* Camisetas */}
                  <TabsContent value="camisetas" className="mt-6">
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-4 text-xl font-medium">Medidas de cuerpo</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="border px-4 py-2 text-left">Talla</th>
                                <th className="border px-4 py-2 text-left">Pecho (cm)</th>
                                <th className="border px-4 py-2 text-left">Cintura (cm)</th>
                                <th className="border px-4 py-2 text-left">Cadera (cm)</th>
                                <th className="border px-4 py-2 text-left">Altura recomendada (cm)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">S</td>
                                <td className="border px-4 py-2">88-94</td>
                                <td className="border px-4 py-2">73-79</td>
                                <td className="border px-4 py-2">88-94</td>
                                <td className="border px-4 py-2">165-170</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">M</td>
                                <td className="border px-4 py-2">95-102</td>
                                <td className="border px-4 py-2">80-86</td>
                                <td className="border px-4 py-2">95-102</td>
                                <td className="border px-4 py-2">170-175</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">L</td>
                                <td className="border px-4 py-2">103-110</td>
                                <td className="border px-4 py-2">87-94</td>
                                <td className="border px-4 py-2">103-110</td>
                                <td className="border px-4 py-2">175-180</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">XL</td>
                                <td className="border px-4 py-2">111-118</td>
                                <td className="border px-4 py-2">95-102</td>
                                <td className="border px-4 py-2">111-118</td>
                                <td className="border px-4 py-2">180-185</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">XXL</td>
                                <td className="border px-4 py-2">119-126</td>
                                <td className="border px-4 py-2">103-110</td>
                                <td className="border px-4 py-2">119-126</td>
                                <td className="border px-4 py-2">185-190</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-medium">Medidas de prenda</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="border px-4 py-2 text-left">Talla</th>
                                <th className="border px-4 py-2 text-left">Largo (cm)</th>
                                <th className="border px-4 py-2 text-left">Ancho (cm)</th>
                                <th className="border px-4 py-2 text-left">Manga (cm)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">S</td>
                                <td className="border px-4 py-2">68</td>
                                <td className="border px-4 py-2">48</td>
                                <td className="border px-4 py-2">19</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">M</td>
                                <td className="border px-4 py-2">70</td>
                                <td className="border px-4 py-2">51</td>
                                <td className="border px-4 py-2">20</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">L</td>
                                <td className="border px-4 py-2">72</td>
                                <td className="border px-4 py-2">54</td>
                                <td className="border px-4 py-2">21</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">XL</td>
                                <td className="border px-4 py-2">74</td>
                                <td className="border px-4 py-2">57</td>
                                <td className="border px-4 py-2">22</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">XXL</td>
                                <td className="border px-4 py-2">76</td>
                                <td className="border px-4 py-2">60</td>
                                <td className="border px-4 py-2">23</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gray-100 p-6">
                        <h3 className="mb-4 text-xl font-medium">Cómo tomar tus medidas</h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                          <div className="flex">
                            <div className="w-24 flex-shrink-0">
                              <img src="/images/measure-chest.png" alt="Medición del pecho" className="w-full" />
                            </div>
                            <div className="ml-4">
                              <h4 className="font-medium mb-2">Contorno del pecho</h4>
                              <p className="text-sm text-gray-600">
                                Mide la circunferencia sobre la parte más ancha del pecho.
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <div className="w-24 flex-shrink-0">
                              <img src="/images/measure-waist.png" alt="Medición de la cintura" className="w-full" />
                            </div>
                            <div className="ml-4">
                              <h4 className="font-medium mb-2">Contorno de la cintura</h4>
                              <p className="text-sm text-gray-600">
                                Mide la circunferencia sobre la parte más estrecha a la altura de la cintura.
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <div className="w-24 flex-shrink-0">
                              <img src="/images/measure-height.png" alt="Medición de la altura" className="w-full" />
                            </div>
                            <div className="ml-4">
                              <h4 className="font-medium mb-2">Altura</h4>
                              <p className="text-sm text-gray-600">
                                Mide desde el suelo hasta el punto más alto de la cabeza.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Sudaderas */}
                  <TabsContent value="sudaderas" className="mt-6">
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-4 text-xl font-medium">Medidas de cuerpo</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="border px-4 py-2 text-left">Talla</th>
                                <th className="border px-4 py-2 text-left">Pecho (cm)</th>
                                <th className="border px-4 py-2 text-left">Cintura (cm)</th>
                                <th className="border px-4 py-2 text-left">Cadera (cm)</th>
                                <th className="border px-4 py-2 text-left">Altura recomendada (cm)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">S</td>
                                <td className="border px-4 py-2">88-94</td>
                                <td className="border px-4 py-2">73-79</td>
                                <td className="border px-4 py-2">88-94</td>
                                <td className="border px-4 py-2">165-170</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">M</td>
                                <td className="border px-4 py-2">95-102</td>
                                <td className="border px-4 py-2">80-86</td>
                                <td className="border px-4 py-2">95-102</td>
                                <td className="border px-4 py-2">170-175</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">L</td>
                                <td className="border px-4 py-2">103-110</td>
                                <td className="border px-4 py-2">87-94</td>
                                <td className="border px-4 py-2">103-110</td>
                                <td className="border px-4 py-2">175-180</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">XL</td>
                                <td className="border px-4 py-2">111-118</td>
                                <td className="border px-4 py-2">95-102</td>
                                <td className="border px-4 py-2">111-118</td>
                                <td className="border px-4 py-2">180-185</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">XXL</td>
                                <td className="border px-4 py-2">119-126</td>
                                <td className="border px-4 py-2">103-110</td>
                                <td className="border px-4 py-2">119-126</td>
                                <td className="border px-4 py-2">185-190</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-medium">Medidas de prenda</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="border px-4 py-2 text-left">Talla</th>
                                <th className="border px-4 py-2 text-left">Largo (cm)</th>
                                <th className="border px-4 py-2 text-left">Ancho (cm)</th>
                                <th className="border px-4 py-2 text-left">Manga (cm)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">S</td>
                                <td className="border px-4 py-2">68</td>
                                <td className="border px-4 py-2">52</td>
                                <td className="border px-4 py-2">60</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">M</td>
                                <td className="border px-4 py-2">70</td>
                                <td className="border px-4 py-2">55</td>
                                <td className="border px-4 py-2">62</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">L</td>
                                <td className="border px-4 py-2">72</td>
                                <td className="border px-4 py-2">58</td>
                                <td className="border px-4 py-2">64</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">XL</td>
                                <td className="border px-4 py-2">74</td>
                                <td className="border px-4 py-2">61</td>
                                <td className="border px-4 py-2">66</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">XXL</td>
                                <td className="border px-4 py-2">76</td>
                                <td className="border px-4 py-2">64</td>
                                <td className="border px-4 py-2">68</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Accesorios */}
                  <TabsContent value="accesorios" className="mt-6">
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-4 text-xl font-medium">Gorras</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="border px-4 py-2 text-left">Talla</th>
                                <th className="border px-4 py-2 text-left">Circunferencia de la cabeza (cm)</th>
                                <th className="border px-4 py-2 text-left">Equivalencia</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">S/M</td>
                                <td className="border px-4 py-2">54-56</td>
                                <td className="border px-4 py-2">Talla pequeña/mediana</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">L/XL</td>
                                <td className="border px-4 py-2">57-59</td>
                                <td className="border px-4 py-2">Talla grande/extra grande</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border px-4 py-2 font-medium">Ajustable</td>
                                <td className="border px-4 py-2">54-59</td>
                                <td className="border px-4 py-2">Talla única ajustable</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gray-100 p-6">
                        <h3 className="mb-4 text-xl font-medium">Cómo medir tu talla de gorra</h3>
                        <div className="flex">
                          <div className="w-24 flex-shrink-0">
                            <img src="/images/measure-head.png" alt="Medición de la cabeza" className="w-full" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-600">
                              Utiliza una cinta métrica flexible y mide la circunferencia de tu cabeza justo por encima
                              de las orejas y aproximadamente 1 cm por encima de las cejas. Esta medida te dará la
                              circunferencia de tu cabeza en centímetros.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-medium">Consejos para elegir tu talla</h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-600">
                    <li>Si estás entre dos tallas, te recomendamos elegir la talla más grande para mayor comodidad.</li>
                    <li>
                      Nuestras prendas están diseñadas con un ajuste regular. Si prefieres un ajuste más holgado,
                      considera elegir una talla más grande.
                    </li>
                    <li>
                      Ten en cuenta que algunos materiales pueden encogerse ligeramente después del primer lavado, por
                      lo que es importante seguir las instrucciones de cuidado.
                    </li>
                    <li>
                      Si tienes dudas sobre qué talla elegir, no dudes en contactarnos. Estaremos encantados de
                      ayudarte.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
