"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface SizeGuideDialogProps {
  children: React.ReactNode
}

export default function SizeGuideDialog({ children }: SizeGuideDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Guía de tallas</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="cuerpo" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cuerpo">De cuerpo</TabsTrigger>
            <TabsTrigger value="prenda">De prenda</TabsTrigger>
          </TabsList>

          <TabsContent value="cuerpo" className="pt-4">
            <p className="text-sm text-gray-500 mb-4">Las medidas son aproximadas y pueden variar.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">Talla de la etiqueta</th>
                    <th className="border px-4 py-2 text-left">Equivalencias</th>
                    <th className="border px-4 py-2 text-left">Contorno del pecho</th>
                    <th className="border px-4 py-2 text-left">Contorno de la cintura</th>
                    <th className="border px-4 py-2 text-left">Altura de la persona</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">S</td>
                    <td className="border px-4 py-2">S</td>
                    <td className="border px-4 py-2 text-blue-600">90 - 94 cm</td>
                    <td className="border px-4 py-2 text-orange-600">90 - 94 cm</td>
                    <td className="border px-4 py-2">64 cm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2">M</td>
                    <td className="border px-4 py-2">M</td>
                    <td className="border px-4 py-2 text-blue-600">96 - 100 cm</td>
                    <td className="border px-4 py-2 text-orange-600">96 - 100 cm</td>
                    <td className="border px-4 py-2">68 cm</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">L</td>
                    <td className="border px-4 py-2">L</td>
                    <td className="border px-4 py-2 text-blue-600">105 - 110 cm</td>
                    <td className="border px-4 py-2 text-orange-600">105 - 110 cm</td>
                    <td className="border px-4 py-2">72 cm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2">XL</td>
                    <td className="border px-4 py-2">XL</td>
                    <td className="border px-4 py-2 text-blue-600">110 - 118 cm</td>
                    <td className="border px-4 py-2 text-orange-600">110 - 118 cm</td>
                    <td className="border px-4 py-2">75 cm</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">XXL</td>
                    <td className="border px-4 py-2">2XL</td>
                    <td className="border px-4 py-2 text-blue-600">116 - 120 cm</td>
                    <td className="border px-4 py-2 text-orange-600">116 - 120 cm</td>
                    <td className="border px-4 py-2">78 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Cómo tomar tus medidas corporales</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <img src="/images/measure-chest.png" alt="Medición del pecho" className="w-full" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-2">Contorno del pecho</h4>
                    <p className="text-sm text-gray-600">Mide la circunferencia sobre la parte más ancha del pecho.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <img src="/images/measure-waist.png" alt="Medición de la cintura" className="w-full" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-2">Contorno de la cintura</h4>
                    <p className="text-sm text-gray-600">
                      Mide la circunferencia sobre la parte más estrecha a la altura de la cintura.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <img src="/images/measure-height.png" alt="Medición de la altura" className="w-full" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-2">Altura de la persona</h4>
                    <p className="text-sm text-gray-600">Mide desde el suelo hasta el punto más alto de la cabeza.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="prenda" className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">Talla</th>
                    <th className="border px-4 py-2 text-left">Largo (cm)</th>
                    <th className="border px-4 py-2 text-left">Ancho (cm)</th>
                    <th className="border px-4 py-2 text-left">Manga (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border px-4 py-2 font-medium">S</td>
                    <td className="border px-4 py-2">68</td>
                    <td className="border px-4 py-2">48</td>
                    <td className="border px-4 py-2">19</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">M</td>
                    <td className="border px-4 py-2">70</td>
                    <td className="border px-4 py-2">51</td>
                    <td className="border px-4 py-2">20</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2 font-medium">L</td>
                    <td className="border px-4 py-2">72</td>
                    <td className="border px-4 py-2">54</td>
                    <td className="border px-4 py-2">21</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">XL</td>
                    <td className="border px-4 py-2">74</td>
                    <td className="border px-4 py-2">57</td>
                    <td className="border px-4 py-2">22</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2 font-medium">XXL</td>
                    <td className="border px-4 py-2">76</td>
                    <td className="border px-4 py-2">60</td>
                    <td className="border px-4 py-2">23</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">Consejos para elegir tu talla</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Si estás entre dos tallas, te recomendamos elegir la talla más grande.</li>
                <li>
                  Nuestras prendas tienen un ajuste regular. Si prefieres un look más holgado, considera una talla más.
                </li>
                <li>Ten en cuenta que algunos materiales pueden encogerse ligeramente después del primer lavado.</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
