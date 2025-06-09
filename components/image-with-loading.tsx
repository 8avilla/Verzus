"use client"

import { useState } from "react"

interface ImageWithLoadingProps {
  src: string
  alt: string
  className?: string
}

export default function ImageWithLoading({ src, alt, className }: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <svg
            className="h-6 w-6 animate-spin text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`h-full w-full object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className || ""}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
