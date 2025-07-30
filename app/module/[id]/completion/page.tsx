"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import CompletionScreen from "@/components/completion/completion-screen"
import { useEffect, useState } from "react"

export default function ModuleCompletionPage({ params }: { params: { id: string } }) {
  const { id: courseId } = params
  const router = useRouter()

  const [courseTitle, setCourseTitle] = useState("")
  const [tokensEarned, setTokensEarned] = useState(0)
  const [bonusTokens, setBonusTokens] = useState(0)
  const [score, setScore] = useState(90) // Dummy score for now, ideally from challenge results

  useEffect(() => {
    // Simulate fetching course title based on courseId
    const courses = {
      "react-typescript-advanced": "React & TypeScript Avanzado",
      "nodejs-apis-rest": "Node.js & APIs REST",
      "python-data-science": "Python Data Science",
      "devops-docker": "DevOps con Docker",
      "blockchain-solidity": "Desarrollo Blockchain con Solidity",
      "ux-ui-design": "Diseño UX/UI para Desarrolladores",
    } as { [key: string]: string }
    setCourseTitle(courses[courseId] || "Curso Desconocido")

    // Simulate tokens earned for completing a course
    const baseTokens = 200 // Base tokens for completing any course
    let calculatedBonusTokens = 0

    // Example: Award bonus tokens if score is above 85%
    if (score >= 85) {
      calculatedBonusTokens = 75
    }

    setTokensEarned(baseTokens)
    setBonusTokens(calculatedBonusTokens)
  }, [courseId, score])

  const completionData = {
    courseTitle: courseTitle,
    certificateImageUrl: /certificate-${courseId}.png, // Dynamic certificate image
    tokensEarned: tokensEarned,
    bonusTokens: bonusTokens,
    score: score,
  }

  const handleViewDashboard = () => {
    router.push("/progress") // Redirect to progress page as requested
  }

  const handleShareCertificate = () => {
    alert("¡Certificado compartido! (Funcionalidad de compartir no implementada)")
    // Implement actual share logic here
  }

  const handleDownloadCertificate = () => {
    alert("¡Certificado descargado! (Funcionalidad de descarga no implementada)")
    // Implement actual download logic here
  }

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href={/module/${courseId}/feedback/ai} className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <h1 className="text-white text-xl font-semibold">Curso Completado</h1>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <CompletionScreen
            {...completionData}
            onViewDashboard={handleViewDashboard}
            onShareCertificate={handleShareCertificate}
            onDownloadCertificate={handleDownloadCertificate}
          />
        </div>
      </main>
    </div>
  )
}
