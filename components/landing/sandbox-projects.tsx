import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function SandboxProjects() {
  const projects = [
    {
      title: "Desarrollo Web Fullstack",
      description: "Crea una aplicación de comercio electrónico completa con React y Node.js.",
      image: "/e-commerce-project-preview.png",
    },
    {
      title: "Análisis de Datos con Python",
      description: "Realiza un análisis exploratorio de datos y visualizaciones con Pandas y Matplotlib.",
      image: "/data-analysis-preview.png",
    },
    {
      title: "Autenticación de Usuarios",
      description: "Implementa un sistema de autenticación seguro con JWT y bases de datos.",
      image: "/authentication-project-preview.png",
    },
    {
      title: "APIs RESTful con Express",
      description: "Diseña y construye una API RESTful robusta para una aplicación de gestión de tareas.",
      image: "/restful-api-preview.png",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">Proyectos Sandbox</h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aplica tus conocimientos en entornos de desarrollo reales y recibe feedback.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                alt={project.title}
                className="aspect-video object-cover w-full"
                height={300}
                src={project.image || "/placeholder.svg"}
                width={500}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-deep-blue">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dark-gray">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
