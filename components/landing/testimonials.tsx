import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana García",
      role: "Desarrolladora Frontend",
      quote:
        "LearnQuest transformó mi carrera. Los proyectos prácticos y el feedback de los mentores fueron invaluables.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      role: "Analista de Datos",
      quote:
        "La plataforma es increíblemente completa. Pude aprender ciencia de datos desde cero y conseguir un gran trabajo.",
      rating: 5,
    },
    {
      name: "Sofía López",
      role: "Estudiante de Ingeniería",
      quote: "Los cursos son muy claros y fáciles de seguir. Me ayudaron a complementar mis estudios universitarios.",
      rating: 4,
    },
    {
      name: "Javier Pérez",
      role: "Emprendedor",
      quote:
        "Gracias a LearnQuest, pude desarrollar mi propia aplicación. La flexibilidad y el soporte son excelentes.",
      rating: 5,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">
              Lo que dicen nuestros estudiantes
            </h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Historias de éxito de nuestra comunidad.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col p-6 bg-light-gray shadow-md rounded-lg">
              <CardContent className="flex-1">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-golden-yellow fill-golden-yellow" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <CardDescription className="text-lg italic text-dark-gray mb-4">
                  &quot;{testimonial.quote}&quot;
                </CardDescription>
                <CardTitle className="text-md font-semibold text-deep-blue">{testimonial.name}</CardTitle>
                <p className="text-sm text-dark-gray">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
