import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Desarrollo Web Fullstack",
      description: "Certifícate en las tecnologías más demandadas para construir aplicaciones completas.",
    },
    {
      title: "Ciencia de Datos y Machine Learning",
      description: "Domina el análisis de datos, la creación de modelos y la inteligencia artificial.",
    },
    {
      title: "Ciberseguridad Avanzada",
      description: "Conviértete en un experto en protección de sistemas y redes contra amenazas.",
    },
    {
      title: "DevOps y Cloud Computing",
      description: "Aprende a automatizar el despliegue y la gestión de aplicaciones en la nube.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">
              Certificaciones Reconocidas
            </h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Valida tus habilidades con credenciales que impulsarán tu carrera.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col p-6 bg-white shadow-md rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-16 w-16 text-golden-yellow" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-deep-blue">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-dark-gray">{cert.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
