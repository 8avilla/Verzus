import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">POLÍTICA DE PRIVACIDAD</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Información sobre cómo protegemos tus datos y respetamos tu privacidad.
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <Link href="/help" className="mb-8 inline-flex items-center text-sm font-medium">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Volver a Ayuda
              </Link>

              <div className="prose prose-lg max-w-none">
                <p>
                  <strong>Última actualización:</strong> 1 de junio de 2023
                </p>

                <h2>1. Introducción</h2>
                <p>
                  En VERZUS (en adelante, "nosotros", "nuestro" o "la empresa") nos comprometemos a proteger tu
                  privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos
                  tu información personal cuando utilizas nuestro sitio web y servicios.
                </p>
                <p>
                  Al utilizar nuestro sitio web y servicios, aceptas las prácticas descritas en esta Política de
                  Privacidad. Te recomendamos leer detenidamente este documento para comprender cómo tratamos tu
                  información personal.
                </p>

                <h2>2. Información que recopilamos</h2>
                <p>Podemos recopilar los siguientes tipos de información:</p>
                <h3>2.1 Información personal</h3>
                <ul>
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Dirección postal</li>
                  <li>Información de pago (procesada de forma segura a través de nuestros proveedores de pago)</li>
                  <li>Fecha de nacimiento</li>
                </ul>

                <h3>2.2 Información de uso</h3>
                <ul>
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Productos visualizados o buscados</li>
                  <li>Historial de compras</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>

                <h2>3. Cómo utilizamos tu información</h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul>
                  <li>Procesar y gestionar tus pedidos</li>
                  <li>Proporcionarte información sobre el estado de tus pedidos</li>
                  <li>Mejorar nuestros productos y servicios</li>
                  <li>Personalizar tu experiencia en nuestro sitio web</li>
                  <li>Enviarte comunicaciones de marketing (si has dado tu consentimiento)</li>
                  <li>Prevenir fraudes y proteger la seguridad de nuestro sitio web</li>
                  <li>Cumplir con nuestras obligaciones legales</li>
                </ul>

                <h2>4. Base legal para el tratamiento</h2>
                <p>Procesamos tu información personal basándonos en las siguientes bases legales:</p>
                <ul>
                  <li>
                    Ejecución de un contrato: cuando es necesario para cumplir con nuestras obligaciones contractuales
                    contigo.
                  </li>
                  <li>Consentimiento: cuando has dado tu consentimiento explícito para el tratamiento de tus datos.</li>
                  <li>
                    Interés legítimo: cuando el tratamiento es necesario para nuestros intereses legítimos y no
                    prevalecen tus derechos y libertades.
                  </li>
                  <li>Obligación legal: cuando es necesario para cumplir con nuestras obligaciones legales.</li>
                </ul>

                <h2>5. Compartir información</h2>
                <p>Podemos compartir tu información personal con:</p>
                <ul>
                  <li>
                    Proveedores de servicios que nos ayudan a operar nuestro negocio (procesadores de pago, servicios de
                    envío, etc.)
                  </li>
                  <li>Autoridades públicas cuando sea requerido por ley</li>
                  <li>Asesores profesionales como abogados, contadores y auditores</li>
                </ul>
                <p>No vendemos ni alquilamos tu información personal a terceros con fines de marketing.</p>

                <h2>6. Seguridad de la información</h2>
                <p>
                  Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger tu
                  información personal contra acceso no autorizado, destrucción o alteración. Estas medidas incluyen:
                </p>
                <ul>
                  <li>Encriptación SSL para la transmisión de datos sensibles</li>
                  <li>Acceso restringido a la información personal</li>
                  <li>Monitoreo regular de nuestros sistemas para detectar posibles vulnerabilidades</li>
                  <li>Formación en privacidad y seguridad para nuestros empleados</li>
                </ul>

                <h2>7. Conservación de datos</h2>
                <p>
                  Conservamos tu información personal durante el tiempo necesario para cumplir con los fines para los
                  que fue recopilada, incluido el cumplimiento de requisitos legales, contables o de informes.
                </p>
                <p>
                  Para determinar el período de conservación adecuado, consideramos la cantidad, naturaleza y
                  sensibilidad de la información personal, el riesgo potencial de daño por uso o divulgación no
                  autorizados, los fines para los que procesamos la información y si podemos lograr esos fines a través
                  de otros medios.
                </p>

                <h2>8. Tus derechos</h2>
                <p>
                  Dependiendo de tu ubicación, puedes tener los siguientes derechos con respecto a tu información
                  personal:
                </p>
                <ul>
                  <li>Derecho de acceso: solicitar una copia de la información que tenemos sobre ti.</li>
                  <li>Derecho de rectificación: solicitar la corrección de información inexacta o incompleta.</li>
                  <li>Derecho de supresión: solicitar la eliminación de tu información personal.</li>
                  <li>
                    Derecho a la limitación del tratamiento: solicitar la restricción del procesamiento de tu
                    información.
                  </li>
                  <li>
                    Derecho a la portabilidad de los datos: solicitar la transferencia de tu información a otra
                    organización.
                  </li>
                  <li>Derecho de oposición: oponerte al procesamiento de tu información personal.</li>
                  <li>
                    Derecho a retirar el consentimiento: retirar cualquier consentimiento que hayas proporcionado
                    previamente.
                  </li>
                </ul>
                <p>
                  Para ejercer cualquiera de estos derechos, por favor contáctanos a través de los datos proporcionados
                  en la sección "Contacto" de esta política.
                </p>

                <h2>9. Cookies y tecnologías similares</h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar
                  cómo se utiliza y personalizar el contenido. Puedes gestionar tus preferencias de cookies a través de
                  la configuración de tu navegador.
                </p>
                <p>Para más información sobre cómo utilizamos las cookies, consulta nuestra Política de Cookies.</p>

                <h2>10. Enlaces a sitios de terceros</h2>
                <p>
                  Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las
                  prácticas de privacidad o el contenido de estos sitios. Te recomendamos revisar las políticas de
                  privacidad de cualquier sitio que visites.
                </p>

                <h2>11. Cambios en esta política</h2>
                <p>
                  Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras
                  prácticas o por otros motivos operativos, legales o regulatorios. Te notificaremos cualquier cambio
                  material publicando la nueva Política de Privacidad en esta página y, cuando sea apropiado, te lo
                  notificaremos por correo electrónico.
                </p>

                <h2>12. Contacto</h2>
                <p>
                  Si tienes preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo tratamos tu
                  información personal, puedes contactarnos a:
                </p>
                <p>
                  <strong>Correo electrónico:</strong> privacidad@verzus.co
                  <br />
                  <strong>Dirección postal:</strong> Calle 85 #11-53, Bogotá, Colombia
                  <br />
                  <strong>Teléfono:</strong> +57 601 123 4567
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
