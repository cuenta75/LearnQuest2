import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Tendencias Tecnológicas 2024: Lo que Debes Saber",
      description: "Explora las innovaciones que están moldeando el futuro de la tecnología.",
      image: "/blog-tech-trends.png",
      date: "15 de Julio, 2024",
    },
    {
      title: "Guía Completa de React Hooks para Principiantes",
      description: "Domina los Hooks de React y escribe componentes más limpios y funcionales.",
      image: "/blog-react-hooks.png",
      date: "10 de Julio, 2024",
    },
    {
      title: "El Futuro de la Ciencia de Datos: IA y Big Data",
      description:
        "Descubre cómo la inteligencia artificial está revolucionando el análisis de grandes volúmenes de datos.",
      image: "/blog-data-science.png",
      date: "5 de Julio, 2024",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray" id="blog">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">Nuestro Blog</h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mantente al día con las últimas noticias, tutoriales y análisis del mundo tech.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                alt={post.title}
                className="aspect-video object-cover w-full"
                height={200}
                src={post.image || "/placeholder.svg"}
                width={300}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-deep-blue">{post.title}</CardTitle>
                <CardDescription className="text-sm text-dark-gray">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-dark-gray mb-4">{post.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-mint-green text-mint-green hover:bg-mint-green hover:text-white bg-transparent"
                >
                  Leer Más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="#" className="text-mint-green hover:underline font-semibold">
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}
