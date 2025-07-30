"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Sparkles, BookOpen, Target, TrendingUp, Trophy, Clock, Calendar, Award, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProgressOverview() {
  const [userName, setUserName] = useState("Usuario LearnQuest")
  const [userTokens, setUserTokens] = useState(0)
  const [completedCourses, setCompletedCourses] = useState(0)
  const [consecutiveDays, setConsecutiveDays] = useState(0)
  const [averageScore, setAverageScore] = useState(0)

  useEffect(() => {
    // Simulate fetching user data
    const storedUser = localStorage.getItem("learnquest_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserName(user.name || "Usuario LearnQuest")
      setUserTokens(user.totalTokens || 0)
      setCompletedCourses(user.completedCourses || 0)
      // Dummy data for other stats if not in localStorage
      setConsecutiveDays(user.consecutiveDays || 7)
      setAverageScore(user.averageScore || 87)
    } else {
      // Default dummy data if no user in localStorage
      setUserName("Usuario LearnQuest")
      setUserTokens(1250)
      setCompletedCourses(4)
      setConsecutiveDays(7)
      setAverageScore(87)
    }
  }, [])

  const certificates = [
    {
      id: "react-typescript",
      title: "React & TypeScript Expert",
      date: "14/1/2024",
      score: 85,
    },
    {
      id: "nodejs-backend",
      title: "Node.js Backend Developer",
      date: "9/1/2024",
      score: 92,
    },
    {
      id: "python-data-science",
      title: "Python Data Science Fundamentals",
      date: "4/1/2024",
      score: 78,
    },
    {
      id: "devops-docker",
      title: "DevOps with Docker",
      date: "31/12/2023",
      score: 88,
    },
  ]

  const handleDownload = (certificateId: string) => {
    alert(`Descargando certificado: ${certificateId}`)
    // In a real application, you would trigger a file download here
  }

  const handleLogout = () => {
    localStorage.removeItem("learnquest_user")
    localStorage.removeItem("current_user_name")
    localStorage.removeItem("current_user_avatar")
    localStorage.removeItem("current_user_tokens")
    window.location.href = "/" // Redirect to home page after logout
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-deep-blue">Mi Progreso</h1>
        <p className="text-dark-gray md:text-xl/relaxed">Revisa tus logros y continúa tu jornada de aprendizaje</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          {/* Top Summary Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="bg-white shadow-md p-4 flex flex-col items-center text-center">
              <Sparkles className="h-8 w-8 text-golden-yellow mb-2" />
              <CardTitle className="text-2xl font-bold text-deep-blue">{userTokens}</CardTitle>
              <CardContent className="p-0 text-sm text-dark-gray">Tokens Totales</CardContent>
            </Card>
            <Card className="bg-white shadow-md p-4 flex flex-col items-center text-center">
              <BookOpen className="h-8 w-8 text-mint-green mb-2" />
              <CardTitle className="text-2xl font-bold text-deep-blue">{completedCourses}/12</CardTitle>
              <CardContent className="p-0 text-sm text-dark-gray">Cursos Completados</CardContent>
            </Card>
            <Card className="bg-white shadow-md p-4 flex flex-col items-center text-center">
              <Target className="h-8 w-8 text-deep-blue mb-2" />
              <CardTitle className="text-2xl font-bold text-deep-blue">{consecutiveDays}</CardTitle>
              <CardContent className="p-0 text-sm text-dark-gray">Días Consecutivos</CardContent>
            </Card>
            <Card className="bg-white shadow-md p-4 flex flex-col items-center text-center">
              <TrendingUp className="h-8 w-8 text-dark-green mb-2" />
              <CardTitle className="text-2xl font-bold text-deep-blue">{averageScore}%</CardTitle>
              <CardContent className="p-0 text-sm text-dark-gray">Puntuación Media</CardContent>
            </Card>
          </div>

          {/* General Progress */}
          <Card className="bg-white shadow-md p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-semibold text-deep-blue flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-deep-blue" /> Progreso General
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div>
                <div className="flex justify-between text-sm text-dark-gray mb-1">
                  <span>Cursos Completados</span>
                  <span>{Math.round((completedCourses / 12) * 100)}%</span>
                </div>
                <Progress
                  value={Math.round((completedCourses / 12) * 100)}
                  className="h-2 bg-soft-green"
                  indicatorClassName="bg-mint-green"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm text-dark-gray mb-1">
                  <span>Nivel Actual: Intermediate Developer</span>
                  <span>{Math.round((userTokens / 500) * 100)}%</span>
                </div>
                <Progress
                  value={Math.round((userTokens / 500) * 100)}
                  className="h-2 bg-soft-green"
                  indicatorClassName="bg-mint-green"
                />
                <p className="text-xs text-dark-gray mt-1">500 tokens para el siguiente nivel</p>
              </div>
            </CardContent>
          </Card>

          {/* Certificates Obtained */}
          <Card className="bg-white shadow-md p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-semibold text-deep-blue flex items-center gap-2">
                <Award className="h-6 w-6 text-deep-blue" /> Certificados Obtenidos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              {certificates.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between p-3 bg-soft-green rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-mint-green" />
                    <div>
                      <p className="font-medium text-deep-blue">{cert.title}</p>
                      <p className="text-sm text-dark-gray">
                        {cert.date} • Puntuación: {cert.score}%
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(cert.id)}
                    className="border-mint-green text-mint-green hover:bg-mint-green hover:text-white bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Congratulations Card */}
          <Card className="bg-white shadow-md p-6 text-center">
            <Trophy className="h-16 w-16 text-mint-green mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-deep-blue mb-2">¡Felicitaciones!</CardTitle>
            <CardContent className="p-0 space-y-2">
              <p className="text-dark-gray">
                Has completado {completedCourses} cursos y ganado {userTokens} tokens
              </p>
              <span className="inline-block bg-mint-green text-white text-sm font-semibold px-3 py-1 rounded-full">
                Intermediate Developer
              </span>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-white shadow-md p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-semibold text-deep-blue">Estadísticas Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3 text-dark-gray">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-deep-blue" />
                <span>Tiempo total</span>
                <span className="ml-auto font-semibold text-deep-blue">24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-deep-blue" />
                <span>Racha actual</span>
                <span className="ml-auto font-semibold text-deep-blue">{consecutiveDays} días</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-deep-blue" />
                <span>Mejor puntuación</span>
                <span className="ml-auto font-semibold text-deep-blue">{averageScore}%</span>
              </div>
            </CardContent>
          </Card>

          {/* What's Next Section */}
          <Card className="bg-white shadow-md p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-semibold text-deep-blue">¿Qué sigue?</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p className="text-dark-gray">¿Deseas explorar más módulos y continuar tu aprendizaje?</p>
              <Button asChild className="w-full bg-mint-green hover:bg-mint-green/90 text-white">
                <Link href="/suggested-courses">Sí, explorar más cursos</Link>
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="w-full border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white bg-transparent"
              >
                No, cerrar sesión
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
