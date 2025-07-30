import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-deep-blue to-mint-green text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Aprende, Crea y Crece con LearnQuest
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                La plataforma interactiva que te prepara para el futuro de la tecnología con proyectos reales y feedback
                de IA.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-white text-deep-blue hover:bg-gray-100 px-6 py-3 text-lg font-semibold">
                <Link href="/register">Empezar Gratis</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-deep-blue px-6 py-3 text-lg font-semibold bg-transparent"
              >
                <Link href="#courses">Explorar Cursos</Link>
              </Button>
            </div>
          </div>
          <Image
            alt="Personas colaborando en un entorno digital"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="400"
            src="/digital-collaboration.png"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
