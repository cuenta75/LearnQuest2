"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ShoppingCart, Clock, BarChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Coins } from "lucide-react"

interface DashboardCourseCardProps {
  id: string
  image: string
  category: string
  difficulty: string
  title: string
  description: string
  instructor: string
  approvedBy: string[]
  duration: string
  practicePercentage: number
  priceTokens?: number
}

export default function DashboardCourseCard({
  id,
  image,
  category,
  difficulty,
  title,
  description,
  instructor,
  approvedBy,
  duration,
  practicePercentage,
  priceTokens,
}: DashboardCourseCardProps) {
  const [userTokens, setUserTokens] = useState(0)
  const [isPurchased, setIsPurchased] = useState(priceTokens === undefined)

  useEffect(() => {
    const storedTokens = localStorage.getItem("current_user_tokens")
    if (storedTokens) {
      setUserTokens(Number.parseInt(storedTokens))
    }
    const storedUser = localStorage.getItem("learnquest_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.purchasedCourses && user.purchasedCourses.some((c: any) => c.id === id)) {
        setIsPurchased(true)
      }
    }
  }, [id])

  const handlePurchase = () => {
    if (priceTokens && userTokens >= priceTokens) {
      const newTokens = userTokens - priceTokens
      setUserTokens(newTokens)
      localStorage.setItem("current_user_tokens", newTokens.toString())
      setIsPurchased(true)

      const storedUser = localStorage.getItem("learnquest_user")
      if (storedUser) {
        const user = JSON.parse(storedUser)
        if (!user.purchasedCourses) {
          user.purchasedCourses = []
        }
        user.purchasedCourses.push({ id: id, title: title, progress: 0, isCompleted: false })
        localStorage.setItem("learnquest_user", JSON.stringify(user))
      }
      alert(`¡Felicidades! Has comprado "${title}".`)
    } else if (priceTokens) {
      alert(`No tienes suficientes tokens para comprar "${title}". Necesitas ${priceTokens - userTokens} tokens más.`)
    }
  }

  const getCompanyLogo = (companyName: string) => {
    const logoMap: { [key: string]: string } = {
      meta: "/logo-meta.png",
      google: "/logo-google.png",
      ibm: "/logo-ibm.png",
      oracle: "/logo-oracle.png",
      docker: "/logo-docker.png",
      kubernetes: "/logo-kubernetes.png",
      ethereum: "/logo-ethereum.png",
      adobe: "/logo-adobe.png",
      figma: "/logo-figma.png",
      datainsights: "/logo-datainsights.png",
      netflix: "/logo-netflix.png",
      shopify: "/logo-shopify.png",
      stripe: "/logo-stripe.png",
      slack: "/logo-slack.png",
      zoom: "/logo-zoom.png",
      dropbox: "/logo-dropbox.png",
      github: "/logo-github.png",
      gitlab: "/logo-gitlab.png",
      mongodb: "/logo-mongodb.png",
      redis: "/logo-redis.png",
      postgresql: "/logo-postgresql.png",
      react: "/logo-react.png",
      vue: "/logo-vue.png",
      angular: "/logo-angular.png",
      typescript: "/logo-typescript.png",
      python: "/logo-python.png",
      javascript: "/logo-javascript.png",
    }
    return logoMap[companyName.toLowerCase()] || "/placeholder.svg"
  }

  const getCourseIcon = (courseTitle: string) => {
    if (courseTitle.includes("React") || courseTitle.includes("TypeScript")) {
      return "/icon-react-typescript.png"
    } else if (courseTitle.includes("Python") || courseTitle.includes("Data Science")) {
      return "/icon-python-data-science.png"
    } else if (courseTitle.includes("Node.js") || courseTitle.includes("API")) {
      return "/icon-nodejs-api.png"
    } else if (courseTitle.includes("DevOps") || courseTitle.includes("Docker")) {
      return "/icon-devops-docker.png"
    } else if (courseTitle.includes("Blockchain") || courseTitle.includes("Solidity")) {
      return "/icon-blockchain-solidity.png"
    } else if (courseTitle.includes("UX") || courseTitle.includes("UI") || courseTitle.includes("Diseño")) {
      return "/icon-ux-ui-design.png"
    }
    return "/placeholder.svg"
  }

  return (
    <Card className="relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          width={400}
          height={225}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Icono del curso en la esquina superior izquierda */}
        <div className="absolute top-2 left-2 bg-white/90 rounded-full p-2 shadow-md">
          <Image
            src={getCourseIcon(title) || "/placeholder.svg"}
            width={24}
            height={24}
            alt={`${title} icon`}
            className="w-6 h-6"
          />
        </div>
        <Badge
          className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold ${
            category === "Frontend"
              ? "bg-mint-green text-white"
              : category === "Backend"
                ? "bg-deep-blue text-white"
                : category === "Data Science"
                  ? "bg-vibrant-purple text-white"
                  : category === "DevOps"
                    ? "bg-ocean-blue text-white"
                    : category === "Blockchain"
                      ? "bg-rose-pink text-white"
                      : category === "Diseño"
                        ? "bg-lime-green text-white"
                        : "bg-gray-500 text-white"
          }`}
        >
          {category}
        </Badge>
        <Badge
          className={`absolute bottom-2 left-2 px-2 py-1 text-xs font-semibold ${
            difficulty === "Avanzado"
              ? "bg-red-500 text-white"
              : difficulty === "Intermedio"
                ? "bg-orange-500 text-white"
                : "bg-green-500 text-white"
          }`}
        >
          {difficulty}
        </Badge>
        {priceTokens && !isPurchased && (
          <Badge className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-golden-yellow text-deep-blue flex items-center gap-1">
            <Coins className="h-3 w-3" />
            {priceTokens} tokens
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-deep-blue text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 text-sm text-dark-gray">
        <p className="line-clamp-2">{description}</p>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-deep-blue" />
          <span>{instructor}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Avalado por:</span>
          <div className="flex items-center gap-1">
            {approvedBy.slice(0, 3).map((company, index) => (
              <Image
                key={index}
                src={getCompanyLogo(company) || "/placeholder.svg"}
                alt={company}
                width={20}
                height={20}
                className="h-5 w-5 object-contain grayscale opacity-75 hover:opacity-100 transition-opacity"
              />
            ))}
            {approvedBy.length > 3 && <span className="text-xs text-muted-foreground">+{approvedBy.length - 3}</span>}
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-deep-blue" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="h-3 w-3 text-deep-blue" />
            <span>{practicePercentage}% práctica</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {isPurchased ? (
          <Button asChild className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white transition-colors">
            <Link href={`/module/${id}`}>Ver Módulo</Link>
          </Button>
        ) : (
          <Button
            onClick={handlePurchase}
            className="w-full bg-light-gray text-deep-blue hover:bg-light-gray/80 transition-colors"
            disabled={priceTokens && userTokens < priceTokens}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {priceTokens ? `Requiere ${priceTokens} tokens` : "Comprar Curso"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
