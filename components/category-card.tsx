import Link from "next/link"

interface CategoryCardProps {
  name: string
  image: string
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <Link href={`/products?category=${name.toLowerCase()}`} className="group relative overflow-hidden">
      <div className="aspect-[4/3] bg-black">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
      </div>
    </Link>
  )
}
