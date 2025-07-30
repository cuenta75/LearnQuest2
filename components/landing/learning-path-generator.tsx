import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Lightbulb, Rocket } from "lucide-react"

export default function LearningPathGenerator() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-soft-blue">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">
              Generador de Ruta de Aprendizaje Personalizada
            </h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Deja que nuestra IA diseñe el camino perfecto para tus objetivos profesionales.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center p-6 text-center bg-white shadow-md rounded-lg">
            <Brain className="h-12 w-12 text-vibrant-purple mb-4" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deep-blue">Análisis Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-dark-gray">
                Nuestra IA evalúa tus habilidades actuales y tus aspiraciones de carrera.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center bg-white shadow-md rounded-lg">
            <Lightbulb className="h-12 w-12 text-vibrant-purple mb-4" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deep-blue">Ruta Optimizada</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-dark-gray">
                Recibe un plan de estudios paso a paso con los cursos y proyectos más relevantes.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center bg-white shadow-md rounded-lg">
            <Rocket className="h-12 w-12 text-vibrant-purple mb-4" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deep-blue">Acelera tu Carrera</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-dark-gray">
                Sigue tu ruta personalizada y alcanza tus metas profesionales más rápido.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Button className="bg-vibrant-purple hover:bg-vibrant-purple/90 text-white px-8 py-3 text-lg font-semibold">
            Generar Mi Ruta Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
