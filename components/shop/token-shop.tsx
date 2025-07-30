"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Coins } from "lucide-react"

export default function TokenShop() {
  const tokenPacks = [
    {
      name: "Paquete Inicial",
      tokens: 100,
      price: "€9.99",
      image: "/icon-starter-pack.png",
      description: "Ideal para empezar tu aventura en LearnQuest.",
    },
    {
      name: "Paquete de Crecimiento",
      tokens: 500,
      price: "€39.99",
      image: "/icon-growth-pack.png",
      description: "Perfecto para desbloquear varios módulos y proyectos.",
    },
    {
      name: "Paquete Pro",
      tokens: 1000,
      price: "€69.99",
      image: "/icon-pro-pack.png",
      description: "Acceso a contenido premium y mentorías exclusivas.",
    },
    {
      name: "Paquete Élite",
      tokens: 2500,
      price: "€149.99",
      image: "/icon-elite-pack.png",
      description: "La mejor opción para una experiencia de aprendizaje completa.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-deep-blue">Tienda de Tokens</h2>
            <p className="max-w-[900px] text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Consigue más tokens para desbloquear contenido exclusivo y acelerar tu aprendizaje.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-8">
          {tokenPacks.map((pack, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                alt={pack.name}
                className="aspect-square object-contain w-full p-4"
                height={150}
                src={pack.image || "/placeholder.svg"}
                width={150}
              />
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-deep-blue">{pack.name}</CardTitle>
                <CardDescription className="text-sm text-dark-gray">{pack.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between items-center">
                <div className="flex items-center gap-2 text-2xl font-bold text-mint-green mb-4">
                  <Coins className="h-6 w-6" />
                  {pack.tokens} Tokens
                </div>
                <Button className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
                  Comprar por {pack.price}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
