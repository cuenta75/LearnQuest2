"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Star, Users } from "lucide-react"
import { useState } from "react"

interface CourseCardProps {
  image: string
  title: string
  duration: string
  practicePercentage: number
  rating: number
  students: string
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, duration, practicePercentage, rating, students }) => (
  <Card className="relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <Image
      src={image || "/placeholder.svg"}
      width={400}
      height={225}
      alt={title}
      className={`w-full h-48 object-cover`}
    />
    <CardHeader>
      <CardTitle className="text-deep-blue text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
        <div className="flex items-center gap-1">
          <BookOpen className="h-4 w-4 text-mint-green" />
          <span>Duración: {duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-golden-yellow" />
          <span>{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4 text-deep-blue" />
          <span>{students}</span>
        </div>
      </div>
      <div className="w-full bg-light-gray rounded-full h-2.5">
        <div className="bg-mint-green h-2.5 rounded-full" style={{ width: `${practicePercentage}%` }}></div>
      </div>
      <p className="text-sm text-muted-foreground mt-1">Práctica: {practicePercentage}%</p>
    </CardContent>
    <CardFooter>
      <Button
        asChild
        variant="outline"
        className="w-full border-mint-green text-mint-green hover:bg-mint-green hover:text-white transition-colors bg-transparent"
      >
        <Link href="#">Ver más</Link>
      </Button>
    </CardFooter>
  </Card>
)

export default function SuggestedCoursesPage() {
  const allCourses = [
    {
      id: "web-dev",
      image: "/web-development-course.png",
      title: "Desarrollo Web Fullstack",
      duration: "4 semanas",
      practicePercentage: 85,
      rating: 4.8,
      students: "15K",
    },
    {
      id: "data-science",
      image: "/data-science-course.png",
      title: "Ciencia de Datos con Python",
      duration: "6 semanas",
      practicePercentage: 90,
      rating: 4.7,
      students: "12K",
    },
    {
      id: "mobile-apps",
      image: "/mobile-app-development.png",
      title: "Desarrollo de Apps Móviles",
      duration: "5 semanas",
      practicePercentage: 80,
      rating: 4.9,
      students: "10K",
    },
    {
      id: "cloud-basics",
      image: "/cloud-computing-course.png",
      title: "Fundamentos de Cloud Computing",
      duration: "3 semanas",
      practicePercentage: 75,
      rating: 4.6,
      students: "8K",
    },
    {
      id: "cybersecurity",
      image: "/cybersecurity-course.png",
      title: "Ciberseguridad Esencial",
      duration: "4 semanas",
      practicePercentage: 88,
      rating: 4.7,
      students: "9K",
    },
    {
      id: "ai-ml",
      image: "/ai-ml-course.png",
      title: "Introducción a IA y ML",
      duration: "5 semanas",
      practicePercentage: 92,
      rating: 4.8,
      students: "11K",
    },
    {
      id: "english-pro",
      image: "/english-course.png",
      title: "Inglés para Profesionales Tech",
      duration: "8 semanas",
      practicePercentage: 70,
      rating: 4.5,
      students: "7K",
    },
    {
      id: "communication-skills",
      image: "/communication-course.png",
      title: "Habilidades de Comunicación Efectiva",
      duration: "3 semanas",
      practicePercentage: 60,
      rating: 4.2,
      students: "5K",
    },
    {
      id: "psychology-intro",
      image: "/psychology-course.png",
      title: "Introducción a la Psicología Cognitiva",
      duration: "4 semanas",
      practicePercentage: 50,
      rating: 4.0,
      students: "4K",
    },
    {
      id: "math-for-data",
      image: "/math-course.png",
      title: "Matemáticas para Ciencia de Datos",
      duration: "6 semanas",
      practicePercentage: 70,
      rating: 4.3,
      students: "6K",
    },
    {
      id: "history-tech",
      image: "/history-course.png",
      title: "Historia de la Tecnología",
      duration: "2 semanas",
      practicePercentage: 40,
      rating: 3.9,
      students: "3K",
    },
    {
      id: "ux-ui-design",
      image: "/ux-ui-design.png",
      title: "Diseño UX/UI para Desarrolladores",
      duration: "4 semanas",
      practicePercentage: 78,
      rating: 4.6,
      students: "9K",
    },
    {
      id: "blockchain-dev",
      image: "/blockchain-dev.png",
      title: "Desarrollo Blockchain con Solidity",
      duration: "7 semanas",
      practicePercentage: 95,
      rating: 4.9,
      students: "6K",
    },
    {
      id: "software-arch",
      image: "/course-software-arch.png",
      title: "Arquitectura de Software Empresarial",
      duration: "6 semanas",
      practicePercentage: 88,
      rating: 4.7,
      students: "8K",
    },
    {
      id: "advanced-ai-ml",
      image: "/course-ai-ml-advanced.png",
      title: "IA y ML Avanzado con TensorFlow",
      duration: "8 semanas",
      practicePercentage: 93,
      rating: 4.9,
      students: "7.5K",
    },
  ]

  const [visibleCourses, setVisibleCourses] = useState(6) // Show initial 6 courses
  const showMoreCourses = () => {
    setVisibleCourses((prev) => prev + 6) // Show 6 more courses
  }

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-deep-blue">
              Cursos Sugeridos para Ti
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Basado en tu progreso y preferencias, aquí tienes algunas recomendaciones.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allCourses.slice(0, visibleCourses).map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          {visibleCourses < allCourses.length && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={showMoreCourses}
                className="bg-deep-blue hover:bg-deep-blue/90 text-white px-8 py-3 text-lg font-semibold"
              >
                Ver más sugerencias
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
