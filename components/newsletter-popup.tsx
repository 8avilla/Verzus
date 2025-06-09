"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    // Mostrar el popup después de 3 segundos (solo si no está suscrito)
    if (!subscribed) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [subscribed])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de suscripción
    setSubscribed(true)
    setOpen(false)
    // Aquí iría la lógica real para enviar el email a un servicio externo
    console.log("Subscribed with email:", email)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>¡Únete a nuestra comunidad!</DialogTitle>
          <DialogDescription>
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas y novedades.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <Input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Suscribirme</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
