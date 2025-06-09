import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">PREGUNTAS FRECUENTES</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Respuestas a las preguntas más comunes sobre nuestros productos, pedidos y servicios.
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

              <Tabs defaultValue="pedidos" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
                  <TabsTrigger value="productos">Productos</TabsTrigger>
                  <TabsTrigger value="pagos">Pagos</TabsTrigger>
                  <TabsTrigger value="cuenta">Mi cuenta</TabsTrigger>
                </TabsList>

                {/* Pedidos */}
                <TabsContent value="pedidos" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>¿Cómo puedo realizar un seguimiento de mi pedido?</AccordionTrigger>
                      <AccordionContent>
                        Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de guía y
                        las instrucciones para hacer seguimiento. También puedes consultar el estado de tu pedido en tu
                        cuenta de usuario en la sección "Mis pedidos" o contactándonos directamente.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>¿Cuánto tiempo tarda en llegar mi pedido?</AccordionTrigger>
                      <AccordionContent>
                        Los tiempos de entrega varían según tu ubicación:
                        <ul className="list-inside list-disc space-y-1 pt-2">
                          <li>Bogotá: 1-2 días hábiles</li>
                          <li>Ciudades principales: 2-3 días hábiles</li>
                          <li>Resto de Colombia: 3-5 días hábiles</li>
                          <li>Internacional: 7-15 días hábiles</li>
                        </ul>
                        Estos tiempos son estimados y pueden variar según la disponibilidad de los productos y factores
                        externos como condiciones climáticas o situaciones excepcionales.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>¿Puedo modificar o cancelar mi pedido?</AccordionTrigger>
                      <AccordionContent>
                        Puedes modificar o cancelar tu pedido dentro de las primeras 2 horas después de realizarlo,
                        contactándonos a través de nuestro formulario de contacto o enviando un correo a
                        pedidos@verzus.co con el número de pedido y los cambios que deseas realizar. Una vez que el
                        pedido entre en proceso de preparación, no será posible realizar modificaciones o cancelaciones.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        ¿Qué hago si mi pedido llega incompleto o con productos dañados?
                      </AccordionTrigger>
                      <AccordionContent>
                        Si tu pedido llega incompleto o con productos dañados, debes notificarnos dentro de las 48 horas
                        siguientes a la recepción del pedido. Puedes hacerlo a través de nuestro formulario de contacto
                        o enviando un correo a soporte@verzus.co con el número de pedido, una descripción del problema y
                        fotos que muestren el estado de los productos. Nuestro equipo evaluará el caso y te ofrecerá una
                        solución lo antes posible.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                {/* Productos */}
                <TabsContent value="productos" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>¿Cómo puedo saber mi talla correcta?</AccordionTrigger>
                      <AccordionContent>
                        Puedes consultar nuestra guía de tallas en la sección correspondiente de cada producto o en
                        nuestra página de Guía de Tallas. Si tienes dudas específicas sobre alguna prenda, no dudes en
                        contactarnos antes de realizar tu compra.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>¿De qué materiales están hechos sus productos?</AccordionTrigger>
                      <AccordionContent>
                        Utilizamos materiales de alta calidad seleccionados específicamente para cada tipo de prenda.
                        Nuestras camisetas suelen estar fabricadas con mezclas de algodón y poliéster para garantizar
                        comodidad y durabilidad. Las sudaderas utilizan materiales térmicos y transpirables. La
                        composición exacta de cada producto se detalla en su descripción.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>¿Cómo debo cuidar mis prendas VERZUS?</AccordionTrigger>
                      <AccordionContent>
                        Recomendamos lavar nuestras prendas a máquina con agua fría, en ciclo suave y con colores
                        similares. No uses blanqueadores ni suavizantes. Seca a baja temperatura o al aire libre. Para
                        mantener los estampados en buen estado, te sugerimos lavar las prendas al revés y no planchar
                        directamente sobre ellos. Cada producto incluye instrucciones específicas de cuidado en su
                        etiqueta.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>¿Sus productos son sostenibles?</AccordionTrigger>
                      <AccordionContent>
                        En VERZUS estamos comprometidos con la sostenibilidad y trabajamos constantemente para mejorar
                        nuestros procesos y materiales. Actualmente, estamos incorporando materiales reciclados y
                        orgánicos en algunas de nuestras líneas, y utilizamos empaques biodegradables para nuestros
                        envíos. Puedes encontrar más información sobre nuestras iniciativas sostenibles en nuestra
                        sección de Sostenibilidad.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                {/* Pagos */}
                <TabsContent value="pagos" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>¿Qué métodos de pago aceptan?</AccordionTrigger>
                      <AccordionContent>
                        Aceptamos múltiples métodos de pago para tu comodidad: tarjetas de crédito y débito (Visa,
                        Mastercard, American Express), PSE, efectivo en puntos de pago (Efecty, Baloto), y PayU. Para
                        compras internacionales, aceptamos PayPal y tarjetas de crédito internacionales.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>¿Es seguro comprar en su tienda online?</AccordionTrigger>
                      <AccordionContent>
                        Sí, todas nuestras transacciones son 100% seguras. Utilizamos tecnología de encriptación SSL
                        para proteger tus datos personales y financieros. Además, trabajamos con PayU, una plataforma de
                        pagos reconocida que cumple con los más altos estándares de seguridad en el procesamiento de
                        pagos en línea.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>¿Cuándo se realiza el cargo a mi tarjeta?</AccordionTrigger>
                      <AccordionContent>
                        El cargo a tu tarjeta se realiza inmediatamente después de confirmar tu pedido. Si por algún
                        motivo no podemos completar tu pedido (por ejemplo, si un producto no está disponible), te
                        notificaremos y procederemos con el reembolso correspondiente en un plazo de 5-10 días hábiles.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>¿Ofrecen opciones de pago a plazos?</AccordionTrigger>
                      <AccordionContent>
                        Sí, ofrecemos opciones de pago a plazos a través de tarjetas de crédito. Las cuotas disponibles
                        dependerán de tu entidad bancaria. Durante el proceso de checkout, podrás ver las opciones
                        disponibles para tu tarjeta. También estamos trabajando para implementar otras alternativas de
                        financiamiento en el futuro.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                {/* Mi cuenta */}
                <TabsContent value="cuenta" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>¿Cómo puedo crear una cuenta?</AccordionTrigger>
                      <AccordionContent>
                        Puedes crear una cuenta haciendo clic en el icono de usuario en la parte superior derecha de
                        nuestra página y seleccionando "Crear cuenta". También puedes crear una cuenta durante el
                        proceso de checkout. Solo necesitas proporcionar tu nombre, correo electrónico y crear una
                        contraseña.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>¿Qué beneficios tiene crear una cuenta?</AccordionTrigger>
                      <AccordionContent>
                        Crear una cuenta te permite:
                        <ul className="list-inside list-disc space-y-1 pt-2">
                          <li>Guardar tus direcciones de envío para futuras compras</li>
                          <li>Ver el historial de tus pedidos</li>
                          <li>Hacer seguimiento a tus pedidos actuales</li>
                          <li>Guardar productos en tu lista de deseos</li>
                          <li>Acceder a promociones exclusivas para usuarios registrados</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>¿Cómo puedo recuperar mi contraseña?</AccordionTrigger>
                      <AccordionContent>
                        Si olvidaste tu contraseña, puedes restablecerla haciendo clic en "¿Olvidaste tu contraseña?" en
                        la página de inicio de sesión. Te enviaremos un correo electrónico con un enlace para crear una
                        nueva contraseña. Si no recibes el correo, revisa tu carpeta de spam o contáctanos para
                        asistencia.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>¿Cómo puedo actualizar mis datos personales?</AccordionTrigger>
                      <AccordionContent>
                        Puedes actualizar tus datos personales iniciando sesión en tu cuenta y accediendo a la sección
                        "Mi perfil" o "Configuración de cuenta". Allí podrás modificar tu información personal, cambiar
                        tu contraseña y gestionar tus direcciones de envío.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
