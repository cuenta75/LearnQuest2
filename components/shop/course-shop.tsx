"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, BookOpen, Star } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface PurchasableCourse {
  id: string
  title: string
  description: string
  image: string
  priceTokens: number
  rating: number
  modules: number
}

export default function CourseShop() {
  const [userTokens, setUserTokens] = useState(0)
  const [purchaseMessage, setPurchaseMessage] = useState<{ type: "success" | "error"; message: string } | null>(null)

  useEffect(() => {
    const storedTokens = localStorage.getItem("current_user_tokens")
    if (storedTokens) {
      setUserTokens(Number.parseInt(storedTokens))
    }
  }, [])

  const courses: PurchasableCourse[] = [
    {
      id: "ai-ml-advanced",
      title: "IA y ML Avanzado con TensorFlow",
      description: "Profundiza en redes neuronales, aprendizaje profundo y visión por computadora.",
      image: "/course-ai-ml-advanced.png",
      priceTokens: 2500,
      rating: 4.9,
      modules: 10,
    },
    {
      id: "software-arch",
      title: "Arquitectura de Software Empresarial",
      description: "Diseña sistemas escalables y robustos para grandes organizaciones.",
      image: "/course-software-arch.png",
      priceTokens: 2000,
      rating: 4.7,
      modules: 8,
    },
    {
      id: "ux-ui-design",
      title: "Diseño UX/UI para Desarrolladores",
      description: "Crea interfaces de usuario intuitivas y experiencias de usuario excepcionales.",
      image: "/ux-ui-design.png",
      priceTokens: 1800,
      rating: 4.6,
      modules: 7,
    },
    {
      id: "blockchain-dev",
      title: "Desarrollo Blockchain con Solidity",
      description: "Construye contratos inteligentes y aplicaciones descentralizadas en Ethereum.",
      image: "/blockchain-dev.png",
      priceTokens: 3000,
      rating: 4.9,
      modules: 12,
    },
  ]

  const handlePurchase = (course: PurchasableCourse) => {
    if (userTokens >= course.priceTokens) {
      const newTokens = userTokens - course.priceTokens
      setUserTokens(newTokens)
      localStorage.setItem("current_user_tokens", newTokens.toString())
      setPurchaseMessage({ type: "success", message: `¡Felicidades! Has comprado "${course.title}".` })

      // Simulate adding course to user's completed/in-progress list
      const storedUser = localStorage.getItem("learnquest_user")
      if (storedUser) {
        const user = JSON.parse(storedUser)
        // Add course to a dummy 'purchasedCourses' array for demonstration
        if (!user.purchasedCourses) {
          user.purchasedCourses = []
        }
        user.purchasedCourses.push({ id: course.id, title: course.title, progress: 0, isCompleted: false })
        localStorage.setItem("learnquest_user", JSON.stringify(user))
      }
    } else {
      setPurchaseMessage({
        type: "error",
        message: `No tienes suficientes tokens para comprar "${course.title}". Necesitas ${course.priceTokens - userTokens} tokens más.`,
      })
    }
    setTimeout(() => setPurchaseMessage(null), 5000) // Clear message after 5 seconds
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-deep-blue">Tienda de Cursos</h1>
        <p className="text-dark-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-2">
          Canjea tus tokens por cursos premium y desbloquea nuevas habilidades.
        </p>
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-golden-yellow mt-4">
          <Coins className="h-7 w-7" />
          <span>Tus Tokens: {userTokens}</span>
        </div>
      </div>

      {purchaseMessage && (
        <div
          className={`p-4 rounded-lg mb-6 text-center font-medium ${
            purchaseMessage.type === "success" ? "bg-soft-green text-mint-green" : "bg-red-100 text-red-600"
          }`}
        >
          {purchaseMessage.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={course.image || "/placeholder.svg"}
              width={400}
              height={225}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-deep-blue text-xl">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-2">
              <p className="text-dark-gray text-sm">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-deep-blue" />
                  <span>{course.modules} Módulos</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-golden-yellow" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-golden-yellow">
                <Coins className="h-6 w-6" />
                <span>{course.priceTokens} Tokens</span>
              </div>
              <Button
                onClick={() => handlePurchase(course)}
                className="w-full bg-mint-green hover:bg-mint-green/90 text-white"
                disabled={userTokens < course.priceTokens}
              >
                {userTokens >= course.priceTokens ? "Comprar Curso" : "Tokens Insuficientes"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
