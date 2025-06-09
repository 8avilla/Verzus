"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Resetear el mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black py-20 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">CONTACTO</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta, sugerencia o
              colaboración.
            </p>
          </div>
        </section>

        {/* Información de contacto y formulario */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {/* Información de contacto */}
              <div className="space-y-8 lg:col-span-1">
                <div>
                  <h2 className="mb-6 text-2xl font-bold">INFORMACIÓN DE CONTACTO</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-black" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-gray-600">Calle 85 #11-53, Bogotá, Colombia</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="mr-3 h-5 w-5 text-black" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-gray-600">+57 601 123 4567</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="mr-3 h-5 w-5 text-black" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@verzus.co</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="mr-3 h-5 w-5 text-black" />
                      <div>
                        <p className="font-medium">Horario de atención</p>
                        <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sábados: 10:00 AM - 3:00 PM</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Mapa */}
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
                  <img src="/images/map.jpg" alt="Ubicación de VERZUS" className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Formulario de contacto */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-2xl font-bold">ENVÍANOS UN MENSAJE</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                  {isSuccess && (
                    <div className="mt-4 rounded-md bg-green-50 p-4 text-green-800">
                      Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="bg-gray-100 py-16">
          <div className="container px-4">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">PREGUNTAS FRECUENTES</h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cuál es el tiempo de entrega de los pedidos?</AccordionTrigger>
                  <AccordionContent>
                    Para pedidos en Bogotá, el tiempo de entrega es de 1-2 días hábiles. Para el resto de Colombia, el
                    tiempo estimado es de 3-5 días hábiles. Para envíos internacionales, el tiempo puede variar entre
                    7-15 días hábiles dependiendo del destino.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Cuál es la política de devoluciones?</AccordionTrigger>
                  <AccordionContent>
                    Aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté
                    en su estado original, sin usar y con todas las etiquetas. Los gastos de envío para devoluciones
                    corren por cuenta del cliente, excepto en casos de productos defectuosos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Cómo puedo saber mi talla correcta?</AccordionTrigger>
                  <AccordionContent>
                    Puedes consultar nuestra guía de tallas en la sección correspondiente de cada producto. Si tienes
                    dudas específicas sobre alguna prenda, no dudes en contactarnos antes de realizar tu compra.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Ofrecen envíos internacionales?</AccordionTrigger>
                  <AccordionContent>
                    Sí, realizamos envíos a varios países de Latinoamérica, Estados Unidos y Europa. Los costos y
                    tiempos de envío varían según el destino. Durante el proceso de checkout podrás ver las opciones
                    disponibles para tu ubicación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>¿Cómo puedo hacer seguimiento a mi pedido?</AccordionTrigger>
                  <AccordionContent>
                    Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de guía y las
                    instrucciones para hacer seguimiento. También puedes consultar el estado de tu pedido en tu cuenta
                    de usuario o contactándonos directamente.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
