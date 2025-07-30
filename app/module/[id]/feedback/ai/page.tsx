"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import FeedbackDisplay from "@/components/feedback/feedback-display"
import FeedbackLoading from "@/components/feedback/feedback-loading"

export default function AiFeedbackPage({ params }: { params: { id: string } }) {
  const { id: courseId } = params
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [feedbackData, setFeedbackData] = useState<any>(null)

  useEffect(() => {
    // Simulate AI feedback generation time
    const timer = setTimeout(() => {
      setFeedbackData({
        feedbackTitle: "Feedback de tu Proyecto UX/UI",
        feedbackSummary:
          "Tu diseño muestra una comprensión sólida de los principios de UX/UI. Hay áreas clave donde puedes mejorar para llevar tu proyecto al siguiente nivel.",
        strengths: [
          "Excelente claridad en la definición del problema y la solución propuesta.",
          "El flujo de usuario es intuitivo y fácil de seguir.",
          "Uso consistente de componentes y estilos visuales.",
          "La creatividad en la solución es notable.",
        ],
        areasForImprovement: [
          "Considera añadir más estados de error y carga para una experiencia de usuario más robusta.",
          "Algunos elementos visuales podrían beneficiarse de un mayor contraste para mejorar la accesibilidad.",
          "Explora la implementación de microinteracciones para enriquecer la experiencia.",
        ],
        suggestions: [
          "Realiza pruebas de usabilidad con usuarios reales para identificar puntos ciegos.",
          "Investiga sobre sistemas de diseño avanzados para escalar tu trabajo.",
          "Practica la creación de animaciones sutiles para guiar la atención del usuario.",
        ],
      })
      setIsLoading(false)
    }, 3000) // Simulate 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const handleCloseFeedback = () => {
    router.push(`/module/${courseId}/completion`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href={`/module/${courseId}/sandbox`} className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <h1 className="text-white text-xl font-semibold">Feedback de IA</h1>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          {isLoading ? <FeedbackLoading /> : <FeedbackDisplay {...feedbackData} onClose={handleCloseFeedback} />}
        </div>
      </main>
    </div>
  )
}
