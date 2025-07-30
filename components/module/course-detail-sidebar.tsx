"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, Clock, DollarSign, Code, Award, PlayCircle, FileText, Lightbulb } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CourseDetailSidebarProps {
  courseId: string
  instructor: {
    name: string
    avatar: string
    title: string
  }
  rating: number
  duration: string
  price: number
  studentsEnrolled: number
  requirements: string[]
  whatYouWillLearn: string[]
  curriculumModules: {
    id: string
    title: string
    type: "video" | "reading" | "challenge" | "sandbox"
    isCompleted: boolean
  }[]
}

export default function CourseDetailSidebar({
  courseId,
  instructor,
  rating,
  duration,
  price,
  studentsEnrolled,
  requirements,
  whatYouWillLearn,
  curriculumModules,
}: CourseDetailSidebarProps) {
  const getIconForLessonType = (type: "video" | "reading" | "challenge" | "sandbox") => {
    switch (type) {
      case "video":
        return <PlayCircle className="h-4 w-4 text-deep-blue" />
      case "reading":
        return <FileText className="h-4 w-4 text-deep-blue" />
      case "challenge":
        return <Code className="h-4 w-4 text-deep-blue" />
      case "sandbox":
        return <Award className="h-4 w-4 text-deep-blue" />
      default:
        return <Lightbulb className="h-4 w-4 text-deep-blue" />
    }
  }

  return (
    <Card className="bg-white shadow-lg sticky top-24">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-deep-blue">Detalles del Curso</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Instructor */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
            <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold text-deep-blue">{instructor.name}</p>
            <p className="text-sm text-dark-gray">{instructor.title}</p>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-dark-gray">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span>{rating.toFixed(1)} Calificación</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-deep-blue" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-deep-blue" />
            <span>{studentsEnrolled} Estudiantes</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span>{price === 0 ? "Gratis" : `$${price}`}</span>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Requisitos */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-deep-blue">Requisitos</h3>
          <ul className="list-disc list-inside space-y-2 text-dark-gray">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <Separator className="bg-gray-200" />

        {/* Lo que aprenderás (resumido) */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-deep-blue">Aprenderás</h3>
          <div className="flex flex-wrap gap-2">
            {whatYouWillLearn.slice(0, 3).map((point, index) => (
              <Badge key={index} variant="secondary" className="bg-light-gray text-deep-blue">
                {point.split(" ")[0]}...
              </Badge>
            ))}
            {whatYouWillLearn.length > 3 && (
              <Badge variant="secondary" className="bg-light-gray text-deep-blue">
                +{whatYouWillLearn.length - 3} más
              </Badge>
            )}
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Módulos del Curso (resumido) */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-deep-blue">Módulos</h3>
          <ul className="space-y-2">
            {curriculumModules.map((lesson) => (
              <li key={lesson.id} className="flex items-center gap-2 text-dark-gray">
                {getIconForLessonType(lesson.type)}
                <Link href={`/module/${courseId}/lesson/${lesson.id}`} className="hover:underline">
                  {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
