import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductDetailsTableProps {
  materials?: string
  care?: string[]
  fit?: string
  origin?: string
  additionalInfo?: Record<string, string>
}

export default function ProductDetailsTable({
  materials = "95% Algodón, 5% Elastano",
  care = [
    "Lavar a máquina a máx. 30°C",
    "No usar blanqueador",
    "Planchar a temperatura media",
    "No lavar en seco",
    "Secar en tendedero",
  ],
  fit = "Regular fit",
  origin = "Fabricado en Colombia",
  additionalInfo = {
    Referencia: "VZ-2023-45",
    Temporada: "Primavera/Verano 2023",
    Colección: "Urban Performance",
  },
}: ProductDetailsTableProps) {
  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Detalles del producto</h2>

      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
          <TabsTrigger value="care">Cuidados</TabsTrigger>
          <TabsTrigger value="additional">Información adicional</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Materiales</h3>
              <p className="text-gray-700">{materials}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Ajuste</h3>
              <p className="text-gray-700">{fit}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Origen</h3>
              <p className="text-gray-700">{origin}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="care" className="pt-4">
          <div className="bg-gray-50 p-6 rounded-md">
            <h3 className="font-medium mb-4">Instrucciones de cuidado</h3>
            <ul className="space-y-2">
              {care.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 border border-yellow-200 bg-yellow-50 rounded-md">
              <p className="text-sm text-yellow-800">
                Para mantener la calidad y durabilidad de tu prenda VERZUS, te recomendamos seguir las instrucciones de
                cuidado indicadas en la etiqueta.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="additional" className="pt-4">
          <div className="overflow-hidden bg-gray-50 rounded-md">
            <table className="min-w-full">
              <tbody className="divide-y divide-gray-200">
                {Object.entries(additionalInfo).map(([key, value]) => (
                  <tr key={key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-100 w-1/3">
                      {key}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
