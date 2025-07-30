import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Lightbulb, Handshake, Gem, Zap } from "lucide-react"

export default function AboutUs() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-mint-green" />,
      title: "Innovación Constante",
      description: "Nos mantenemos a la vanguardia de la tecnología para ofrecerte el contenido más relevante.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-mint-green" />,
      title: "Comunidad y Colaboración",
      description: "Fomentamos un entorno de apoyo donde los estudiantes aprenden y crecen juntos.",
    },
    {
      icon: <Gem className="h-8 w-8 text-mint-green" />,
      title: "Calidad Educativa",
      description: "Comprometidos con la excelencia en cada curso y recurso que ofrecemos.",
    },
    {
      icon: <Zap className="h-8 w-8 text-mint-green" />,
      title: "Aprendizaje Práctico",
      description: "Creemos en 'aprender haciendo', con proyectos y desafíos que te preparan para el mundo real.",
    },
  ]

  const teamMembers = [
    {
      name: "Elena Rodríguez",
      title: "CEO & Co-fundadora",
      image: "/director-elena.png",
      description: "Visionaria detrás de LearnQuest, con más de 15 años en educación tecnológica.",
    },
    {
      name: "Ricardo Gómez",
      title: "CTO & Co-fundador",
      image: "/director-ricardo.png",
      description: "Experto en desarrollo de plataformas e infraestructura escalable.",
    },
    {
      name: "Sofía Vargas",
      title: "Directora de Contenido",
      image: "/director-sofia.png",
      description: "Líder en diseño curricular y metodologías de aprendizaje innovadoras.",
    },
    {
      name: "Carlos Mendoza",
      title: "Director de Operaciones",
      image: "/director-carlos.png",
      description: "Responsable de la eficiencia operativa y la experiencia del usuario.",
    },
    {
      name: "Laura Pérez",
      title: "Jefa de Marketing",
      image: "/director-laura-perez.png",
      description: "Estratega de crecimiento y comunicación, apasionada por conectar con la comunidad.",
    },
    {
      name: "David Sánchez",
      title: "Líder de Experiencia de Usuario",
      image: "/director-david.png",
      description: "Diseñador centrado en crear interfaces intuitivas y atractivas.",
    },
    {
      name: "Sara Jiménez",
      title: "Gerente de Comunidad",
      image: "/director-sara.png",
      description: "Constructora de puentes entre estudiantes y mentores, fomentando el aprendizaje colaborativo.",
    },
    {
      name: "Ana Torres",
      title: "Especialista en IA Educativa",
      image: "/director-ana.png",
      description: "Investigadora y desarrolladora de las herramientas de IA que personalizan tu aprendizaje.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="about-us">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">Quiénes Somos</h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra misión es empoderar a la próxima generación de innovadores tecnológicos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="People collaborating in a digital environment"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height={400}
            src="/digital-collaboration.png"
            width={600}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-deep-blue">Nuestra Historia</h3>
              <p className="text-dark-gray">
                LearnQuest nació de la pasión por la educación y la tecnología. Fundada por un equipo de expertos de la
                industria, nuestra plataforma busca democratizar el acceso a la educación de alta calidad en tecnología,
                preparando a los estudiantes para los desafíos del futuro.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-deep-blue">Nuestra Visión</h3>
              <p className="text-dark-gray">
                Ser la plataforma líder mundial en educación tecnológica, reconocida por su innovación, calidad y el
                impacto positivo en las carreras de nuestros estudiantes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl text-deep-blue">Nuestros Valores</h3>
          <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Principios que guían todo lo que hacemos.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center bg-light-gray shadow-md rounded-lg">
              <div className="mb-4">{value.icon}</div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-deep-blue">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dark-gray">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Removed "Conoce a Nuestro Equipo" section as per previous instruction to remove "conoce a nuestro equipo" */}
      </div>
    </section>
  )
}
