"use client"

import { CardFooter } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import ChallengeQuestion from "@/components/challenge/challenge-question"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function ChallengePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(false)

  const questions = [
    {
      question: "¿Cuál es el propósito principal de React.js?",
      options: [
        "Construir bases de datos",
        "Crear interfaces de usuario interactivas",
        "Diseñar gráficos 3D",
        "Gestionar servidores backend",
      ],
      correctAnswer: "Crear interfaces de usuario interactivas",
    },
    {
      question: "¿Qué hook de React se utiliza para manejar el estado en componentes funcionales?",
      options: ["useEffect", "useContext", "useState", "useReducer"],
      correctAnswer: "useState",
    },
    {
      question: "¿Qué es JSX en React?",
      options: [
        "Un lenguaje de programación",
        "Una extensión de sintaxis para JavaScript que permite escribir HTML en React",
        "Una base de datos NoSQL",
        "Un framework CSS",
      ],
      correctAnswer: "Una extensión de sintaxis para JavaScript que permite escribir HTML en React",
    },
  ]

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1)
    }
    // Move to the next question after a short delay to show feedback
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      } else {
        setChallengeCompleted(true)
      }
    }, 1500)
  }

  if (challengeCompleted) {
    // Redirect to feedback page after challenge completion
    // In a real app, you'd pass the score and challenge ID to the feedback page
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-light-gray p-4">
        <Card className="w-full max-w-md text-center p-6 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-deep-blue">¡Desafío Completado!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-dark-gray">
              Has respondido {score} de {questions.length} preguntas correctamente.
            </p>
            <p className="text-xl font-semibold text-mint-green">¡Excelente trabajo!</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button asChild className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
              <Link href={`/feedback/1?ai=true`}>Obtener Feedback de IA</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white bg-transparent"
            >
              <Link href="/dashboard">Volver al Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <div className="text-white font-semibold">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <ChallengeQuestion
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          onAnswer={handleAnswer}
        />
      </main>
    </div>
  )
}
