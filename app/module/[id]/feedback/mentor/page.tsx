"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import FeedbackMentor from "@/components/module/feedback-mentor"

export default function MentorFeedbackPage({ params }: { params: { id: string } }) {
  const { id: courseId } = params
  const router = useRouter()

  // Dummy data for mentor feedback
  const mentorFeedbackData = {
    mentorName: "Ana Rodríguez",
    mentorAvatar: "/mentor-ana-rodriguez.png",
    mentorTitle: "Diseñadora UX/UI Senior en TechSolutions",
    feedbackText:
      "¡Excelente trabajo en tu proyecto de diseño de aplicación! Has demostrado una gran comprensión de los principios de UX/UI. Me impresionó especialmente la claridad de tu flujo de usuario y la coherencia visual. Para futuras mejoras, te sugiero explorar más a fondo la investigación de usuarios para validar tus suposiciones y considerar cómo tu diseño podría adaptarse a diferentes tamaños de pantalla. ¡Sigue así!",
    rating: 4.5,
  }

  const handleCloseFeedback = () => {
    // Navigate to the completion page after mentor feedback
    router.push(`/module/${courseId}/completion`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href={`/module/${courseId}/feedback/ai`} className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <h1 className="text-white text-xl font-semibold">Feedback del Mentor</h1>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <FeedbackMentor {...mentorFeedbackData} onClose={handleCloseFeedback} />
        </div>
      </main>
    </div>
  )
}
