"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import CompletionScreen from "@/components/completion/completion-screen"
import { useEffect, useState } from "react"

// Definimos el tipo completo de props que Next inyecta en App Router
interface Props {
  params: { id: string }
  searchParams: Record<string, string | string[] | undefined>
}

export default function ModuleCompletionPage({ params, searchParams }: Props) {
  const { id: courseId } = params
  const router = useRouter()

  const [courseTitle, setCourseTitle] = useState("")
  const [tokensEarned, setTokensEarned] = useState(0)
  const [bonusTokens, setBonusTokens] = useState(0)
  const [score, setScore] = useState(90) // Dummy score for now

  useEffect(() => {
    const courses: Record<string, string> = {
      "react-typescript-advanced": "React & TypeScript Avanzado",
      "nodejs-apis-rest": "Node.js & APIs REST",
      "python-data-science": "Python Data Science",
      "devops-docker": "DevOps con Docker",
      "blockchain-solidity": "Desarrollo Blockchain con Solidity",
      "ux-ui-design": "Diseño UX/UI para Desarrolladores",
    }
    setCourseTitle(courses[courseId] || "Curso Desconocido")

    const baseTokens = 200
    const calculatedBonusTokens = score >= 85 ? 75 : 0

    setTokensEarned(baseTokens)
    setBonusTokens(calculatedBonusTokens)
  }, [courseId, score])

  const completionData = {
    courseTitle,
    certificateImageUrl: `/certificate-${courseId}.png`,
    tokensEarned,
    bonusTokens,
    score,
  }

  const handleViewDashboard = () => {
    router.push("/progress")
  }

  const handleShareCertificate = () => {
    alert("¡Certificado compartido! (Funcionalidad no implementada)")
  }

  const handleDownloadCertificate = () => {
    alert("¡Certificado descargado! (Funcionalidad no implementada)")
  }

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href={`/module/${courseId}/feedback/ai`} className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image
              src="/learnquest-logo-horizontal-white.png"
              alt="LearnQuest Logo"
              width={150}
              height={32}
            />
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
