"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div className="relative h-[500px] overflow-hidden rounded-lg border border-gray-200">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${alt} - Imagen ${selectedImage + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-md border ${
                selectedImage === index ? "border-black" : "border-gray-200"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
