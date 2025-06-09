import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">ENVÍOS Y DEVOLUCIONES</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Información sobre nuestras políticas de envío, tiempos de entrega y proceso de devolución.
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <Link href="/help" className="mb-8 inline-flex items-center text-sm font-medium">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Volver a Ayuda
              </Link>

              <div className="space-y-12">
                {/* Envíos */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Envíos</h2>
                  <div className="space-y-6">
                    <div className="rounded-lg border border-gray-200 p-6">
                      <h3 className="mb-4 text-xl font-medium">Tiempos de entrega</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="border px-4 py-2 text-left">Destino</th>
                              <th className="border px-4 py-2 text-left">Tiempo estimado</th>
                              <th className="border px-4 py-2 text-left">Costo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white">
                              <td className="border px-4 py-2">Bogotá</td>
                              <td className="border px-4 py-2">1-2 días hábiles</td>
                              <td className="border px-4 py-2">Gratis en compras superiores a $150.000</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border px-4 py-2">Ciudades principales</td>
                              <td className="border px-4 py-2">2-3 días hábiles</td>
                              <td className="border px-4 py-2">Gratis en compras superiores a $200.000</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="border px-4 py-2">Resto de Colombia</td>
                              <td className="border px-4 py-2">3-5 días hábiles</td>
                              <td className="border px-4 py-2">Calculado en el checkout</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border px-4 py-2">Internacional</td>
                              <td className="border px-4 py-2">7-15 días hábiles</td>
                              <td className="border px-4 py-2">Calculado en el checkout</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>¿Cómo puedo hacer seguimiento a mi pedido?</AccordionTrigger>
                        <AccordionContent>
                          Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de guía y
                          las instrucciones para hacer seguimiento. También puedes consultar el estado de tu pedido en
                          tu cuenta de usuario o contactándonos directamente.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>¿Qué empresas de transporte utilizan?</AccordionTrigger>
                        <AccordionContent>
                          Trabajamos con las principales empresas de transporte en Colombia como Servientrega,
                          Coordinadora y Envia. Para envíos internacionales, utilizamos DHL y FedEx. La empresa asignada
                          dependerá de tu ubicación y la disponibilidad del servicio.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>¿Qué sucede si no estoy cuando llegue mi pedido?</AccordionTrigger>
                        <AccordionContent>
                          Si no te encuentras en el domicilio al momento de la entrega, la empresa de transporte dejará
                          una notificación y realizará un segundo intento de entrega. Si después de tres intentos no se
                          logra la entrega, el paquete será devuelto a nuestras instalaciones y nos pondremos en
                          contacto contigo para coordinar una nueva entrega.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Devoluciones */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Devoluciones</h2>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      En VERZUS queremos que estés completamente satisfecho con tu compra. Si por algún motivo no estás
                      conforme con tu producto, puedes devolverlo siguiendo nuestra política de devoluciones.
                    </p>

                    <div className="rounded-lg border border-gray-200 p-6">
                      <h3 className="mb-4 text-xl font-medium">Condiciones para devoluciones</h3>
                      <ul className="list-inside list-disc space-y-2 text-gray-600">
                        <li>El producto debe estar en su estado original, sin usar y con todas las etiquetas.</li>
                        <li>La devolución debe realizarse dentro de los 30 días posteriores a la compra.</li>
                        <li>Debes conservar el comprobante de compra o factura.</li>
                        <li>
                          Los productos personalizados o en promoción especial podrían no ser elegibles para devolución.
                        </li>
                      </ul>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>¿Cómo inicio un proceso de devolución?</AccordionTrigger>
                        <AccordionContent>
                          Para iniciar un proceso de devolución, debes contactarnos a través de nuestro formulario de
                          contacto o enviando un correo a devoluciones@verzus.co con el número de pedido y el motivo de
                          la devolución. Nuestro equipo te enviará las instrucciones para proceder con la devolución.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>¿Quién cubre los gastos de envío en una devolución?</AccordionTrigger>
                        <AccordionContent>
                          Los gastos de envío para devoluciones corren por cuenta del cliente, excepto en casos de
                          productos defectuosos o errores en el envío. En estos casos, VERZUS cubrirá los gastos de
                          envío para la devolución.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>¿Cuánto tiempo tarda el reembolso?</AccordionTrigger>
                        <AccordionContent>
                          Una vez recibido y verificado el producto devuelto, procesaremos el reembolso en un plazo de
                          5-10 días hábiles. El tiempo que tarde en reflejarse en tu cuenta dependerá de tu entidad
                          bancaria.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>¿Puedo cambiar mi producto por otro?</AccordionTrigger>
                        <AccordionContent>
                          Sí, puedes solicitar un cambio por otro producto de igual o mayor valor (en este caso,
                          deberías pagar la diferencia). El proceso es similar al de devolución, pero debes especificar
                          que deseas un cambio y proporcionar los detalles del producto que deseas recibir.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Garantía */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Garantía</h2>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Todos nuestros productos cuentan con garantía contra defectos de fabricación por un período de 90
                      días a partir de la fecha de compra.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>¿Qué cubre la garantía?</AccordionTrigger>
                        <AccordionContent>
                          La garantía cubre defectos de fabricación como costuras defectuosas, problemas con los cierres
                          o cremalleras, decoloración prematura y otros defectos que no sean resultado del uso normal o
                          inadecuado del producto.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>¿Qué no cubre la garantía?</AccordionTrigger>
                        <AccordionContent>
                          La garantía no cubre daños causados por uso inadecuado, accidentes, falta de cuidado,
                          alteraciones realizadas al producto, o desgaste normal por el uso.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>¿Cómo hago efectiva la garantía?</AccordionTrigger>
                        <AccordionContent>
                          Para hacer efectiva la garantía, debes contactarnos a través de nuestro formulario de contacto
                          o enviando un correo a garantia@verzus.co con el número de pedido, una descripción del
                          problema y fotos que muestren el defecto. Nuestro equipo evaluará el caso y te informará los
                          pasos a seguir.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
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
