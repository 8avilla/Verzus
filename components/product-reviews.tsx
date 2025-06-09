"use client"

import { useState } from "react"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

// Datos de ejemplo para reseñas
const sampleReviews = [
  {
    id: 1,
    author: "Carlos M.",
    rating: 5,
    date: "15/04/2023",
    comment:
      "Excelente calidad, el material es muy cómodo y la talla es perfecta. Definitivamente compraré más productos.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    author: "Laura G.",
    rating: 4,
    date: "03/03/2023",
    comment:
      "Muy buena prenda, el diseño es minimalista y elegante. Solo le quito una estrella porque tardó un poco más en llegar de lo esperado.",
    helpful: 5,
    verified: true,
  },
  {
    id: 3,
    author: "Miguel A.",
    rating: 5,
    date: "22/02/2023",
    comment: "La sudadera es increíble, muy abrigada y el acabado es de primera. Recomendado 100%.",
    helpful: 8,
    verified: true,
  },
]

// Componente para mostrar estrellas de calificación
function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  )
}

export default function ProductReviews() {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" })

  // Calcular estadísticas de reseñas
  const averageRating = sampleReviews.reduce((acc, review) => acc + review.rating, 0) / sampleReviews.length
  const ratingCounts = [0, 0, 0, 0, 0]
  sampleReviews.forEach((review) => {
    ratingCounts[review.rating - 1]++
  })

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Opiniones de clientes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Resumen de calificaciones */}
        <div className="col-span-1">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
            <div className="mt-2">
              <RatingStars rating={Math.round(averageRating)} />
            </div>
            <div className="text-sm text-gray-500 mt-1">Basado en {sampleReviews.length} opiniones</div>
          </div>

          <div className="mt-6 space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center">
                <span className="w-8 text-sm text-gray-600">{star} ★</span>
                <Progress value={(ratingCounts[star - 1] / sampleReviews.length) * 100} className="h-2 flex-1 mx-2" />
                <span className="w-8 text-right text-sm text-gray-600">{ratingCounts[star - 1]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de reseñas */}
        <div className="col-span-2">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="font-medium">Reseñas verificadas</h3>
            <Button variant="outline" onClick={() => setShowReviewForm(!showReviewForm)}>
              Escribir una reseña
            </Button>
          </div>

          {showReviewForm && (
            <div className="mb-8 p-4 border rounded-md">
              <h4 className="font-medium mb-3">Tu opinión</h4>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="mr-2">Calificación:</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setNewReview({ ...newReview, rating: star })}>
                        <Star
                          className={`h-5 w-5 ${
                            star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  placeholder="Comparte tu experiencia con este producto..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full"
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                  Cancelar
                </Button>
                <Button>Enviar reseña</Button>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {sampleReviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <RatingStars rating={review.rating} />
                      <span className="ml-2 text-sm font-medium">{review.author}</span>
                      {review.verified && (
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                          Compra verificada
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">{review.comment}</p>
                <div className="mt-3 flex items-center">
                  <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Útil ({review.helpful})
                  </button>
                  <button className="flex items-center text-xs text-gray-500 hover:text-gray-700 ml-4">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Responder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
