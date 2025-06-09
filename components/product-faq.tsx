"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Search } from "lucide-react"

// Datos de ejemplo para preguntas frecuentes
const sampleFaqs = [
  {
    id: "faq-1",
    question: "¿Cómo es el tallaje de este producto?",
    answer:
      "Este producto tiene un tallaje regular. Recomendamos elegir tu talla habitual. Si estás entre dos tallas, te sugerimos elegir la talla mayor para un ajuste más cómodo.",
    date: "15/03/2023",
    author: "VERZUS Team",
  },
  {
    id: "faq-2",
    question: "¿El color es exactamente igual al de la foto?",
    answer:
      "Hacemos todo lo posible para que las fotos representen fielmente los colores reales del producto. Sin embargo, pueden existir ligeras variaciones debido a la configuración de tu pantalla. El color real es negro intenso con detalles en gris oscuro.",
    date: "02/04/2023",
    author: "VERZUS Team",
  },
  {
    id: "faq-3",
    question: "¿Este producto es resistente al agua?",
    answer:
      "Este producto no es completamente impermeable, pero cuenta con un tratamiento repelente al agua que protege contra salpicaduras y lluvia ligera. No se recomienda su uso en condiciones de lluvia intensa o inmersión en agua.",
    date: "18/04/2023",
    author: "VERZUS Team",
  },
  {
    id: "faq-4",
    question: "¿Puedo devolver el producto si no me queda bien?",
    answer:
      "Sí, ofrecemos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original con todas las etiquetas. Consulta nuestra política de devoluciones para más detalles.",
    date: "05/05/2023",
    author: "VERZUS Team",
  },
]

export default function ProductFAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAskForm, setShowAskForm] = useState(false)
  const [newQuestion, setNewQuestion] = useState("")

  // Filtrar preguntas basadas en la búsqueda
  const filteredFaqs = searchQuery
    ? sampleFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : sampleFaqs

  return (
    <div className="mt-12 border-t pt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
        <Button variant="outline" onClick={() => setShowAskForm(!showAskForm)} className="flex items-center">
          <MessageSquare className="mr-2 h-4 w-4" />
          Hacer una pregunta
        </Button>
      </div>

      {showAskForm && (
        <div className="mb-8 p-4 border rounded-md">
          <h3 className="font-medium mb-3">Tu pregunta sobre este producto</h3>
          <div className="space-y-4">
            <Input
              placeholder="Escribe tu pregunta aquí..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Tu pregunta será revisada por nuestro equipo y respondida en un plazo de 24-48 horas.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAskForm(false)}>
                Cancelar
              </Button>
              <Button>Enviar pregunta</Button>
            </div>
          </div>
        </div>
      )}

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Buscar en preguntas frecuentes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {filteredFaqs.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 mb-2">{faq.answer}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
                  <span>Respondido por: {faq.author}</span>
                  <span>{faq.date}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-md">
          <p className="text-gray-500">No se encontraron preguntas que coincidan con tu búsqueda.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("")
              setShowAskForm(true)
            }}
          >
            Haz una nueva pregunta
          </Button>
        </div>
      )}
    </div>
  )
}
