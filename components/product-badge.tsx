import { cn } from "@/lib/utils"

interface ProductBadgeProps {
  type: "discount" | "free-shipping"
  value?: number
  className?: string
}

export default function ProductBadge({ type, value, className }: ProductBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        type === "discount" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700",
        className,
      )}
    >
      {type === "discount" && value ? `-${value}%` : "Envío gratis"}
    </div>
  )
}
