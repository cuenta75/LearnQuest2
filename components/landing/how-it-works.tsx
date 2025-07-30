import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle, Award } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">
              ¿Cómo funciona LearnQuest?
            </h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra plataforma está diseñada para un aprendizaje efectivo y gratificante.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center p-6 text-center bg-white shadow-md rounded-lg">
            <BookOpen className="h-12 w-12 text-mint-green mb-4" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deep-blue">Aprende a tu ritmo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-dark-gray">
                Accede a una amplia biblioteca de cursos interactivos y módulos de aprendizaje.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center bg-white shadow-md rounded-lg">
            <CheckCircle className="h-12 w-12 text-mint-green mb-4" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deep-blue">Practica con proyectos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-dark-gray">
                Aplica tus conocimientos en proyectos sandbox y recibe feedback personalizado.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center bg-white shadow-md rounded-lg">
            <Award className="h-12 w-12 text-mint-green mb-4" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deep-blue">Obtén certificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-dark-gray">
                Demuestra tus habilidades con certificaciones reconocidas por la industria.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
