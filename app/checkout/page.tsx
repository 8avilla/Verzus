"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronDown, ChevronUp, Truck, User, MapPin, Check, CreditCard } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { formatCurrency } from "@/lib/utils"
import { departamentos, municipiosPorDepartamento } from "@/lib/colombia-data"
import BoldPaymentButton from "@/components/bold-payment-button-fixed"

// Componente para secciones colapsables
function CollapsibleSection({
  title,
  icon,
  children,
  isOpen,
  onToggle,
  isCompleted = false,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  isCompleted?: boolean
}) {
  return (
    <div className="rounded-lg border border-gray-200">
      <button type="button" className="flex w-full items-center justify-between p-4 text-left" onClick={onToggle}>
        <div className="flex items-center">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            {isCompleted ? <Check className="h-4 w-4 text-green-600" /> : icon}
          </div>
          <span className="text-lg font-medium">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && <div className="border-t p-4">{children}</div>}
    </div>
  )
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [selectedDepartamento, setSelectedDepartamento] = useState("")
  const [municipios, setMunicipios] = useState<{ id: string; nombre: string }[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  // Estados para las secciones colapsables
  const [openSection, setOpenSection] = useState<"contact" | "shipping" | "payment">("contact")
  const [completedSections, setCompletedSections] = useState<{
    contact: boolean
    shipping: boolean
    payment: boolean
  }>({
    contact: false,
    shipping: false,
    payment: false,
  })

  // Estado para guardar datos del cliente
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    departamento: "",
    municipio: "",
    country: "CO", // Por defecto Colombia
    saveInfo: true,
    notes: "", // Añadimos campo para notas adicionales
  })

  // Actualizar municipios cuando cambia el departamento
  useEffect(() => {
    if (selectedDepartamento) {
      setMunicipios(municipiosPorDepartamento[selectedDepartamento] || [])
      setCustomerData((prev) => ({ ...prev, departamento: selectedDepartamento, municipio: "" }))
    } else {
      setMunicipios([])
    }
  }, [selectedDepartamento])

  // Calcular si hay envío gratis para todos los productos
  const allItemsWithFreeShipping = items.length > 0 && items.every((item) => item.freeShipping)
  const shippingCost = allItemsWithFreeShipping ? 0 : 4.99
  const totalWithShipping = total + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target

    // Para el teléfono, solo permitir números
    if (id === "phone" && value) {
      const numericValue = value.replace(/\D/g, "")
      setCustomerData((prev) => ({ ...prev, [id]: numericValue }))
    } else {
      setCustomerData((prev) => ({ ...prev, [id]: value }))
    }
  }

  const handleDepartamentoChange = (value: string) => {
    setSelectedDepartamento(value)
  }

  const handleMunicipioChange = (value: string) => {
    setCustomerData((prev) => ({ ...prev, municipio: value }))
  }

  // Validar sección de contacto
  const validateContactSection = () => {
    const { firstName, lastName, email, phone } = customerData
    return firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && phone.trim() !== ""
  }

  // Validar sección de envío
  const validateShippingSection = () => {
    const { address, departamento, municipio } = customerData
    return address.trim() !== "" && departamento.trim() !== "" && municipio.trim() !== ""
  }

  // Manejar la finalización de una sección
  const handleSectionComplete = (section: "contact" | "shipping" | "payment") => {
    if (section === "contact" && validateContactSection()) {
      setCompletedSections((prev) => ({ ...prev, contact: true }))
      setOpenSection("shipping")
    } else if (section === "shipping" && validateShippingSection()) {
      setCompletedSections((prev) => ({ ...prev, shipping: true }))
      setOpenSection("payment")
    }
  }

  // Generar mensaje para WhatsApp
  // const generateWhatsAppMessage = () => {
  //   const { firstName, lastName, email, phone, address, departamento, municipio, notes } = customerData

  //   // Obtener el nombre del departamento
  //   const deptoName = departamentos.find((d) => d.id === departamento)?.nombre || departamento

  //   let message = `*NUEVO PEDIDO - VERZUS*\n\n`
  //   message += `*Información del cliente:*\n`
  //   message += `Nombre: ${firstName} ${lastName}\n`
  //   message += `Email: ${email}\n`
  //   message += `Teléfono: ${phone}\n\n`

  //   message += `*Dirección de envío:*\n`
  //   message += `${address}\n`
  //   message += `${municipio}, ${deptoName}\n\n`

  //   message += `*Productos:*\n`

  //   items.forEach((item) => {
  //     const finalPrice = item.discountPercentage
  //       ? item.price - item.price * (item.discountPercentage / 100)
  //       : item.price

  //     message += `- ${item.name}${item.size ? ` (Talla: ${item.size})` : ""} x ${item.quantity} = ${formatCurrency(finalPrice * item.quantity)}\n`
  //   })

  //   message += `\n*Subtotal:* ${formatCurrency(total)}\n`
  //   message += `*Envío:* ${allItemsWithFreeShipping ? "Gratis" : formatCurrency(shippingCost)}\n`
  //   message += `*Total:* ${formatCurrency(totalWithShipping)}\n`

  //   if (notes) {
  //     message += `\n*Notas adicionales:*\n${notes}\n`
  //   }

  //   return encodeURIComponent(message)
  // }

  // // Manejar el envío del pedido a WhatsApp
  // const handleSendToWhatsApp = () => {
  //   setIsSubmitting(true)

  //   // Simular un pequeño retraso para mostrar el estado de carga
  //   setTimeout(() => {
  //     const whatsappNumber = "573002493031"
  //     const message = generateWhatsAppMessage()
  //     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  //     // Abrir WhatsApp en una nueva pestaña
  //     window.open(whatsappUrl, "_blank")

  //     // Marcar como completado y limpiar el carrito
  //     setIsComplete(true)
  //     clearCart()
  //     setIsSubmitting(false)
  //   }, 1000)
  // }

  if (isComplete) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />

        <main className="flex flex-1 flex-col items-center justify-center py-10">
          <div className="container max-w-md px-4 text-center">
            <div className="mb-6 rounded-full bg-black p-3 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mb-4 text-2xl font-bold">¡Pedido enviado!</h1>
            <p className="mb-8 text-gray-600">
              Tu pedido ha sido enviado a nuestro WhatsApp. Nos pondremos en contacto contigo pronto para confirmar los
              detalles y coordinar el pago.
            </p>
            <Button asChild>
              <Link href="/">Volver a la tienda</Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Volver a la tienda
            </Link>
            <h1 className="text-2xl font-bold">Finalizar compra</h1>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Formulario de checkout */}
            <div className="lg:col-span-2">
              <form ref={formRef} className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Información de contacto */}
                <CollapsibleSection
                  title="Información de contacto"
                  icon={<User className="h-4 w-4" />}
                  isOpen={openSection === "contact"}
                  onToggle={() => setOpenSection("contact")}
                  isCompleted={completedSections.contact}
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" required value={customerData.firstName} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellidos</Label>
                        <Input id="lastName" required value={customerData.lastName} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={customerData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <div className="flex">
                          <div className="flex items-center border rounded-l-md border-r-0 bg-gray-50 px-3">
                            <div className="mr-2 h-4 w-6 overflow-hidden">
                              <img
                                src="https://flagcdn.com/w20/co.png"
                                alt="Colombia"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="text-sm">+57</span>
                          </div>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={customerData.phone}
                            onChange={handleInputChange}
                            className="rounded-l-none"
                            placeholder="3002493031"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        onClick={() => handleSectionComplete("contact")}
                        disabled={!validateContactSection()}
                      >
                        Continuar a envío
                      </Button>
                    </div>
                  </div>
                </CollapsibleSection>

                {/* Dirección de envío */}
                <CollapsibleSection
                  title="Dirección de envío"
                  icon={<MapPin className="h-4 w-4" />}
                  isOpen={openSection === "shipping"}
                  onToggle={() => setOpenSection("shipping")}
                  isCompleted={completedSections.shipping}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" required value={customerData.address} onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="departamento">Departamento</Label>
                        <Select value={selectedDepartamento} onValueChange={handleDepartamentoChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            {departamentos.map((depto) => (
                              <SelectItem key={depto.id} value={depto.id}>
                                {depto.nombre}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="municipio">Municipio</Label>
                        <Select
                          value={customerData.municipio}
                          onValueChange={handleMunicipioChange}
                          disabled={!selectedDepartamento}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un municipio" />
                          </SelectTrigger>
                          <SelectContent>
                            {municipios.map((muni) => (
                              <SelectItem key={muni.id} value={muni.nombre}>
                                {muni.nombre}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="saveInfo"
                        checked={customerData.saveInfo}
                        onCheckedChange={(checked) =>
                          setCustomerData((prev) => ({ ...prev, saveInfo: checked as boolean }))
                        }
                      />
                      <Label htmlFor="saveInfo" className="text-sm">
                        Guardar esta información para la próxima compra
                      </Label>
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setOpenSection("contact")}>
                        Volver
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleSectionComplete("shipping")}
                        disabled={!validateShippingSection()}
                      >
                        Continuar a pago
                      </Button>
                    </div>
                  </div>
                </CollapsibleSection>

                {/* Método de pago y finalización */}
                <CollapsibleSection
                  title="Método de pago"
                  icon={<CreditCard className="h-4 w-4" />}
                  isOpen={openSection === "payment"}
                  onToggle={() => setOpenSection("payment")}
                  isCompleted={completedSections.payment}
                >
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="/images/bold-logo.png" alt="Bold Commerce" className="h-8 w-auto" />
                          <span className="ml-2 font-medium">Pago seguro con Bold</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Procesamos pagos de forma segura con Bold Commerce. Aceptamos tarjetas de crédito, débito y
                        otros métodos de pago.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setOpenSection("shipping")}>
                        Volver
                      </Button>

                      <div className="w-full max-w-xs ml-auto">
                        <BoldPaymentButton
                          orderId={`VERZUS-${Date.now()}`}
                          amount={totalWithShipping.toString()}
                          currency="COP"
                          description={`Pedido VERZUS - ${items.length} productos`}
                          customerEmail={customerData.email}
                          customerName={`${customerData.firstName} ${customerData.lastName}`}
                          isSubmitting={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>
              </form>
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6 rounded-lg border p-6">
                <h2 className="text-xl font-medium">Resumen del pedido</h2>

                <div className="max-h-80 space-y-4 overflow-y-auto">
                  {items.map((item) => {
                    const finalPrice = item.discountPercentage
                      ? item.price - item.price * (item.discountPercentage / 100)
                      : item.price

                    return (
                      <div key={`${item.id}-${item.size}`} className="flex items-start">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          {item.size && <p className="mt-1 text-xs text-gray-500">Talla: {item.size}</p>}
                          <div className="mt-1">
                            {item.discountPercentage ? (
                              <div className="flex items-center gap-2">
                                <p className="text-xs text-gray-500 line-through">{formatCurrency(item.price)}</p>
                                <p className="text-sm font-medium">{formatCurrency(finalPrice)}</p>
                                <span className="text-xs font-medium text-green-600">
                                  {item.discountPercentage}% OFF
                                </span>
                              </div>
                            ) : (
                              <p className="text-sm font-medium">{formatCurrency(item.price)}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{formatCurrency(total)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <span>Envío</span>
                      {allItemsWithFreeShipping && (
                        <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                          Gratis
                        </span>
                      )}
                    </div>
                    <span>{allItemsWithFreeShipping ? "Gratis" : formatCurrency(shippingCost)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-lg">{formatCurrency(totalWithShipping)}</span>
                  </div>
                </div>

                <div className="rounded-md bg-gray-50 p-3">
                  <div className="flex items-center">
                    <Truck className="mr-2 h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-600">
                      Entrega estimada: <span className="font-medium">3-5 días hábiles</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
