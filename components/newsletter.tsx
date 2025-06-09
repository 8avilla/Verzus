import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">ÚNETE A VERZUS</h2>
        <p className="mx-auto mb-8 max-w-2xl">
          Suscríbete para recibir noticias sobre nuevos lanzamientos, ofertas exclusivas y contenido inspirador.
        </p>
        <form className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Input
            type="email"
            placeholder="Tu email"
            className="border-white bg-transparent text-white placeholder:text-gray-400"
            required
          />
          <Button type="submit" className="bg-white text-black hover:bg-white/90">
            SUSCRIBIRSE
          </Button>
        </form>
      </div>
    </section>
  )
}
