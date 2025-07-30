"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Download, Trophy, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface CompletionScreenProps {
  courseTitle: string
  certificateImageUrl: string
  tokensEarned: number
  bonusTokens: number
  score: number
  onViewDashboard: () => void
  onShareCertificate: () => void
  onDownloadCertificate: () => void
}

export default function CompletionScreen({
  courseTitle,
  certificateImageUrl,
  tokensEarned,
  bonusTokens,
  score,
  onViewDashboard,
  onShareCertificate,
  onDownloadCertificate,
}: CompletionScreenProps) {
  useEffect(() => {
    // Update user's tokens and completed courses in localStorage
    const storedUser = localStorage.getItem("learnquest_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      const totalEarned = tokensEarned + bonusTokens
      user.totalTokens = (user.totalTokens || 0) + totalEarned

      // Mark course as completed and add to purchasedCourses if not already there
      if (!user.purchasedCourses) {
        user.purchasedCourses = []
      }
      const courseIndex = user.purchasedCourses.findIndex((c: any) => c.title === courseTitle)
      if (courseIndex !== -1) {
        user.purchasedCourses[courseIndex].isCompleted = true
        user.purchasedCourses[courseIndex].progress = 100
      } else {
        // If for some reason it's not in purchasedCourses (e.g., free course completed first time)
        user.purchasedCourses.push({
          id: courseTitle.toLowerCase().replace(/\s/g, "-"),
          title: courseTitle,
          progress: 100,
          isCompleted: true,
        })
      }

      user.completedCourses = (user.completedCourses || 0) + 1 // Increment completed courses count

      // Add activity to recentActivity
      if (!user.recentActivity) user.recentActivity = []
      user.recentActivity.unshift({
        title: `Completó el curso: ${courseTitle}`,
        time: "Ahora mismo",
        tokens: totalEarned,
        type: "completed",
      })

      localStorage.setItem("learnquest_user", JSON.stringify(user))
      localStorage.setItem("current_user_tokens", user.totalTokens.toString())
    }
  }, [courseTitle, tokensEarned, bonusTokens])

  const getStarRating = (score: number) => {
    const stars = Math.round(score / 20) // 100/20 = 5 stars
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < stars ? "text-golden-yellow" : "text-gray-300"}>
        ★
      </span>
    ))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 text-center shadow-lg rounded-lg bg-white">
      <CardContent className="flex flex-col items-center justify-center p-0">
        <Trophy className="h-20 w-20 text-mint-green mb-4" />
        <h2 className="text-4xl font-bold text-deep-blue mb-2">¡Curso Completado!</h2>
        <p className="text-lg text-dark-gray mb-6">
          Has completado exitosamente <span className="text-vibrant-purple font-semibold">{courseTitle}</span>
        </p>

        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Image src="/token-badge.png" alt="Token Badge" width={64} height={64} className="mb-2" />
            <span className="text-dark-gray text-sm">Token Badge</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-mint-green">+{tokensEarned}</span>
            <span className="text-dark-gray text-sm">Tokens Ganados</span>
          </div>
        </div>

        <div className="w-full border-t border-b border-gray-200 py-6 mb-8">
          <h3 className="text-xl font-semibold text-deep-blue mb-4">Certificado</h3>
          <div className="flex items-center justify-center gap-3 text-mint-green font-medium">
            <CheckCircle2 className="h-6 w-6" />
            <span>{courseTitle.replace("Curso de ", "")} Certification</span>
          </div>
          <Image
            src={certificateImageUrl || "/placeholder.svg"}
            alt="Certificate Preview"
            width={400}
            height={300}
            className="mt-4 rounded-lg shadow-md mx-auto"
          />
        </div>

        <h3 className="text-xl font-semibold text-deep-blue mb-4">Resumen de Logros</h3>
        <div className="grid grid-cols-3 gap-4 w-full mb-8">
          <Card className="p-4 flex flex-col items-center bg-light-gray">
            <span className="text-deep-blue text-sm">Completado</span>
            <span className="text-2xl font-bold text-deep-blue">100%</span>
          </Card>
          <Card className="p-4 flex flex-col items-center bg-light-gray">
            <span className="text-deep-blue text-sm">Puntuación</span>
            <span className="text-2xl font-bold text-deep-blue">{score}%</span>
          </Card>
          <Card className="p-4 flex flex-col items-center bg-light-gray">
            <span className="text-deep-blue text-sm">Calificación en estrellas</span>
            <div className="text-2xl">{getStarRating(score)}</div>
          </Card>
        </div>

        {bonusTokens > 0 && (
          <div className="bg-soft-green p-6 rounded-lg w-full mb-8">
            <h4 className="text-vibrant-purple font-semibold text-lg mb-2">¡Bonus por Excelencia!</h4>
            <p className="text-dark-gray text-sm mb-2">
              Por completar el curso con una puntuación superior al 85%, has ganado tokens adicionales.
            </p>
            <span className="text-4xl font-bold text-mint-green">+{bonusTokens} tokens bonus</span>
          </div>
        )}

        <p className="text-dark-gray text-sm mb-8">
          ¡Excelente trabajo! Continúa aprendiendo para desbloquear más recompensas y certificaciones.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <Button onClick={onViewDashboard} className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
            Ir a Mi Progreso
          </Button>
          <div className="flex gap-4 w-full">
            <Button
              onClick={onShareCertificate}
              variant="outline"
              className="flex-1 border-deep-blue text-deep-blue hover:bg-deep-blue/10 bg-transparent"
            >
              <Share2 className="h-4 w-4 mr-2" /> Compartir Certificado
            </Button>
            <Button
              onClick={onDownloadCertificate}
              variant="outline"
              className="flex-1 border-deep-blue text-deep-blue hover:bg-deep-blue/10 bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" /> Descargar Certificado
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
