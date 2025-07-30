"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PlayCircle, CheckCircle2, FileText, Code, Lightbulb, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface CourseContentSectionProps {
  courseId: string
  courseTitle: string
  courseDescription: string
  videoUrl: string
  videoDuration: string
  whatYouWillLearn: string
  learningPoints: string[]
  curriculumModules: {
    id: string
    title: string
    type: "video" | "reading" | "challenge" | "sandbox"
    isCompleted: boolean
  }[]
  certificationsAndEndorsements: {
    endorsedBy: string[]
    certificateName: string
    internationalRecognition: string
  }
  hasModuleStarted: boolean // New prop to indicate if module has started
  firstLessonId: string // New prop for the ID of the first lesson
}

export default function CourseContentSection({
  courseId,
  courseTitle,
  courseDescription,
  videoUrl,
  videoDuration,
  whatYouWillLearn,
  learningPoints,
  curriculumModules,
  certificationsAndEndorsements,
  hasModuleStarted,
  firstLessonId,
}: CourseContentSectionProps) {
  const completedLessons = curriculumModules.filter((lesson) => lesson.isCompleted).length
  const totalLessons = curriculumModules.length
  const courseProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  const getIconForLessonType = (type: "video" | "reading" | "challenge" | "sandbox") => {
    switch (type) {
      case "video":
        return <PlayCircle className="h-5 w-5 text-deep-blue" />
      case "reading":
        return <FileText className="h-5 w-5 text-deep-blue" />
      case "challenge":
        return <Code className="h-5 w-5 text-deep-blue" />
      case "sandbox":
        return <Award className="h-5 w-5 text-deep-blue" />
      default:
        return <Lightbulb className="h-5 w-5 text-deep-blue" />
    }
  }

  const getCompanyLogo = (companyName: string) => {
    switch (companyName.toLowerCase()) {
      case "meta":
        return "/logo-meta.png"
      case "google":
        return "/logo-google.png"
      case "microsoft":
        return "/logo-microsoft.png"
      case "ibm":
        return "/logo-ibm.png"
      case "oracle":
        return "/logo-oracle.png"
      case "docker":
        return "/logo-docker.png"
      case "kubernetes":
        return "/logo-kubernetes.png"
      default:
        return "/placeholder.svg"
    }
  }

  return (
    <div className="space-y-8">
      {/* Contenido del Curso */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-deep-blue">Contenido del Curso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Video Introductorio */}
          <div className="relative w-full aspect-video bg-deep-blue flex items-center justify-center rounded-lg overflow-hidden">
            {videoUrl ? (
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex flex-col items-center text-white">
                <PlayCircle className="h-16 w-16 mb-2" />
                <p className="text-lg font-semibold">Video Introductorio</p>
                <p className="text-sm text-gray-300">Duración: {videoDuration}</p>
              </div>
            )}
          </div>

          {/* Lo que aprenderás */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-deep-blue">Lo que aprenderás</h3>
            <p className="text-dark-gray">{whatYouWillLearn}</p>
            <ul className="list-disc list-inside space-y-2 text-dark-gray">
              {learningPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <Button asChild className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
            <Link href={`/module/${courseId}/lesson/${firstLessonId}`}>
              {hasModuleStarted ? "Continuar Módulo" : "Empezar Módulo"}
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Malla Curricular */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-deep-blue">Malla Curricular</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {curriculumModules.map((lesson, index) => (
              <div
                key={lesson.id}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  lesson.isCompleted ? "bg-soft-green" : "bg-light-gray"
                }`}
              >
                <div
                  className={`flex items-center justify-center h-8 w-8 rounded-full font-bold text-white ${
                    lesson.isCompleted ? "bg-mint-green" : "bg-deep-blue"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${lesson.isCompleted ? "text-mint-green" : "text-deep-blue"}`}>
                    {lesson.title}
                  </p>
                  <p className="text-sm text-dark-gray">
                    {lesson.type === "video" && "Video"}
                    {lesson.type === "reading" && "Lectura"}
                    {lesson.type === "challenge" && "Desafío"}
                    {lesson.type === "sandbox" && "Proyecto Sandbox"}
                  </p>
                </div>
                {lesson.isCompleted && <CheckCircle2 className="h-6 w-6 text-mint-green" />}
                {!lesson.isCompleted && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white bg-transparent"
                  >
                    <Link href={`/module/${courseId}/lesson/${lesson.id}`}>Iniciar</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-dark-gray">
              <span>Progreso del Curso</span>
              <span>{courseProgress}% Completado</span>
            </div>
            <Progress value={courseProgress} className="h-3 bg-soft-green" indicatorClassName="bg-mint-green" />
          </div>
        </CardContent>
      </Card>

      {/* Certificaciones y Avales */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-deep-blue">Certificaciones y Avales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-deep-blue mb-2">Avalado por:</h4>
              <div className="flex flex-wrap gap-2">
                {certificationsAndEndorsements.endorsedBy.map((company, index) => (
                  <Badge key={index} className="bg-light-gray text-deep-blue flex items-center gap-1">
                    <Image
                      src={getCompanyLogo(company) || "/placeholder.svg"}
                      alt={company}
                      width={20}
                      height={20}
                      className="grayscale opacity-75"
                    />
                    {company}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-deep-blue mb-2">Certificado que obtendrás:</h4>
              <div className="flex items-center gap-2 p-3 bg-soft-green rounded-lg">
                <Award className="h-6 w-6 text-mint-green" />
                <span className="font-medium text-deep-blue">{certificationsAndEndorsements.certificateName}</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-soft-blue rounded-lg flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-vibrant-purple" />
            <p className="text-dark-gray text-sm">{certificationsAndEndorsements.internationalRecognition}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
