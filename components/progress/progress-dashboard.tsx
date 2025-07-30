"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, BookOpen, Coins, Calendar, Award, CheckCircle, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function ProgressDashboard() {
  const [userProgress, setUserProgress] = useState({
    completedCourses: 0,
    totalTokens: 0,
    courses: [] as any[],
    achievements: [] as any[],
    recentActivity: [] as any[],
  })

  useEffect(() => {
    // Simular datos del usuario desde localStorage
    const storedUser = localStorage.getItem("learnquest_user")
    const storedTokens = localStorage.getItem("current_user_tokens")

    if (storedUser) {
      const user = JSON.parse(storedUser)
      const completedCourses = user.purchasedCourses?.filter((c: any) => c.isCompleted) || []

      setUserProgress({
        completedCourses: completedCourses.length,
        totalTokens: storedTokens ? Number.parseInt(storedTokens) : 150,
        courses: user.purchasedCourses || [
          { id: "1", title: "Python Data Science", progress: 100, isCompleted: true, completedDate: "2024-01-15" },
          { id: "2", title: "React & TypeScript Avanzado", progress: 75, isCompleted: false, completedDate: null },
          {
            id: "3",
            title: "Diseño UX/UI para Desarrolladores",
            progress: 45,
            isCompleted: false,
            completedDate: null,
          },
        ],
        achievements: [
          {
            id: 1,
            title: "Primer Curso Completado",
            description: "Completa tu primer curso",
            achieved: true,
            date: "2024-01-15",
          },
          {
            id: 2,
            title: "Coleccionista de Tokens",
            description: "Acumula 100 tokens",
            achieved: true,
            date: "2024-01-20",
          },
          {
            id: 3,
            title: "Estudiante Dedicado",
            description: "Estudia 7 días consecutivos",
            achieved: false,
            date: null,
          },
          {
            id: 4,
            title: "Experto en Múltiples Áreas",
            description: "Completa 3 cursos de diferentes categorías",
            achieved: false,
            date: null,
          },
        ],
        recentActivity: [
          { action: "Completó", course: "Python Data Science", date: "2024-01-15", tokens: 50 },
          { action: "Inició", course: "React & TypeScript Avanzado", date: "2024-01-10", tokens: 0 },
          { action: "Completó proyecto", course: "Diseño UX/UI para Desarrolladores", date: "2024-01-08", tokens: 25 },
        ],
      })
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Resumen General */}
      <Card className="bg-gradient-to-r from-deep-blue to-ocean-blue text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="h-6 w-6 text-golden-yellow" />
            Mi Progreso General
          </CardTitle>
          <CardDescription className="text-blue-100">Tu camino de aprendizaje en LearnQuest</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="bg-mint-green rounded-full p-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{userProgress.completedCourses}</p>
                  <p className="text-blue-100">Cursos Completados</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="bg-golden-yellow rounded-full p-3">
                  <Coins className="h-6 w-6 text-deep-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{userProgress.totalTokens}</p>
                  <p className="text-blue-100">Tokens Acumulados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progreso de Cursos */}
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Mis Cursos
            </h3>
            <div className="space-y-3">
              {userProgress.courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{course.title}</span>
                      {course.isCompleted && <CheckCircle className="h-4 w-4 text-mint-green" />}
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <span className="ml-4 text-sm font-medium">{course.progress}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Logros */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue flex items-center gap-2">
              <Award className="h-5 w-5 text-golden-yellow" />
              Logros Desbloqueados
            </CardTitle>
            <CardDescription>Reconocimientos por tu dedicación y progreso</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {userProgress.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.achieved ? "bg-mint-green/10 border-mint-green shadow-md" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`rounded-full p-2 ${achievement.achieved ? "bg-mint-green" : "bg-gray-300"}`}>
                    <Trophy className={`h-4 w-4 ${achievement.achieved ? "text-white" : "text-gray-500"}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${achievement.achieved ? "text-deep-blue" : "text-gray-500"}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${achievement.achieved ? "text-dark-gray" : "text-gray-400"}`}>
                      {achievement.description}
                    </p>
                    {achievement.achieved && achievement.date && (
                      <p className="text-xs text-mint-green mt-1">
                        Desbloqueado el {new Date(achievement.date).toLocaleDateString("es-ES")}
                      </p>
                    )}
                  </div>
                  {achievement.achieved && <CheckCircle className="h-5 w-5 text-mint-green" />}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actividad Reciente */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue flex items-center gap-2">
              <Clock className="h-5 w-5 text-ocean-blue" />
              Actividad Reciente
            </CardTitle>
            <CardDescription>Tus últimas acciones en la plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {userProgress.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div
                  className={`rounded-full p-2 ${activity.action === "Completó" ? "bg-mint-green" : "bg-ocean-blue"}`}
                >
                  {activity.action === "Completó" ? (
                    <CheckCircle className="h-4 w-4 text-white" />
                  ) : (
                    <BookOpen className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-deep-blue">
                    {activity.action} "{activity.course}"
                  </p>
                  <div className="flex items-center gap-2 text-sm text-dark-gray">
                    <Calendar className="h-3 w-3" />
                    {new Date(activity.date).toLocaleDateString("es-ES")}
                  </div>
                </div>
                {activity.tokens > 0 && (
                  <Badge className="bg-golden-yellow text-deep-blue">+{activity.tokens} tokens</Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
