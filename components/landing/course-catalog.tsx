import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Star, Users } from "lucide-react"

export default function CourseCatalog() {
  const courses = [
    {
      title: "Desarrollo Web con React y TypeScript",
      description: "Aprende a construir aplicaciones web modernas y escalables.",
      image: "/web-development-course.png",
      icon: <BookOpen className="h-5 w-5 text-mint-green" />,
      rating: 4.8,
      students: "15K",
    },
    {
      title: "Ciencia de Datos con Python",
      description: "Domina el análisis de datos, machine learning y visualización.",
      image: "/data-science-course.png",
      icon: <BookOpen className="h-5 w-5 text-mint-green" />,
      rating: 4.7,
      students: "12K",
    },
    {
      title: "Desarrollo de Apps Móviles con React Native",
      description: "Crea aplicaciones nativas para iOS y Android con una sola base de código.",
      image: "/mobile-app-development.png",
      icon: <BookOpen className="h-5 w-5 text-mint-green" />,
      rating: 4.9,
      students: "10K",
    },
    {
      title: "Cloud Computing con AWS",
      description: "Explora los servicios de la nube de Amazon Web Services y despliega aplicaciones.",
      image: "/cloud-computing-course.png",
      icon: <BookOpen className="h-5 w-5 text-mint-green" />,
      rating: 4.6,
      students: "8K",
    },
    {
      title: "Ciberseguridad Esencial",
      description: "Protege sistemas y datos de amenazas cibernéticas con las mejores prácticas.",
      image: "/cybersecurity-course.png",
      icon: <BookOpen className="h-5 w-5 text-mint-green" />,
      rating: 4.7,
      students: "9K",
    },
    {
      title: "Inteligencia Artificial y Machine Learning",
      description: "Introduce los fundamentos de la IA y construye modelos de aprendizaje automático.",
      image: "/ai-ml-course.png",
      icon: <BookOpen className="h-5 w-5 text-mint-green" />,
      rating: 4.8,
      students: "11K",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray" id="courses">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">
              Explora Nuestro Catálogo de Cursos
            </h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sumérgete en una amplia variedad de temas, desde desarrollo web hasta inteligencia artificial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                alt={course.title}
                className="aspect-video object-cover w-full"
                height={225}
                src={course.image || "/placeholder.svg"}
                width={400}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-deep-blue">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <CardDescription className="text-dark-gray mb-4">{course.description}</CardDescription>
                <div className="flex items-center justify-between text-sm text-dark-gray mb-4">
                  <div className="flex items-center gap-1">
                    {course.icon}
                    <span>Módulos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-golden-yellow" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-deep-blue" />
                    <span>{course.students} estudiantes</span>
                  </div>
                </div>
                <Button className="w-full bg-mint-green hover:bg-mint-green/90 text-white">Ver Curso</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
