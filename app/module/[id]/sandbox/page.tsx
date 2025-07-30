"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import SandboxUpload from "@/components/sandbox/sandbox-upload"

export default function ModuleSandboxPage({ params }: { params: { id: string } }) {
  const { id: courseId } = params
  const router = useRouter()

  // Dummy data for sandbox project
  const sandboxData = {
    projectId: "ux-ui-app-design",
    instructions:
      "Diseña una aplicación móvil o web completa (wireframes, prototipos y diseño visual) para resolver un problema específico que identifiques. Debes incluir al menos 5 pantallas principales y un flujo de usuario claro.",
    criteria: [
      "Claridad del problema y solución propuesta.",
      "Calidad del wireframing y prototipado.",
      "Estética y usabilidad del diseño visual.",
      "Coherencia en el flujo de usuario.",
      "Originalidad y creatividad.",
    ],
  }

  const handleProjectSubmit = () => {
    // After submission, navigate to AI feedback page
    router.push(`/module/${courseId}/feedback/ai`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href={`/module/${courseId}/lesson/3-3`} className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <h1 className="text-white text-xl font-semibold">Proyecto Sandbox</h1>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <SandboxUpload {...sandboxData} onProjectSubmit={handleProjectSubmit} />
        </div>
      </main>
    </div>
  )
}
