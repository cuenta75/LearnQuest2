"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react"

interface ChallengeQuestionProps {
  question: string
  options: { id: string; text: string }[]
  correctAnswerId: string
  explanation: string
  onNext: (isCorrect: boolean) => void
  onPrevious: () => void
}

export default function ChallengeQuestion({
  question,
  options,
  correctAnswerId,
  explanation,
  onNext,
  onPrevious,
}: ChallengeQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    if (selectedOption === correctAnswerId) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
    setShowFeedback(true)
  }

  const handleContinue = () => {
    onNext(isCorrect)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-deep-blue">Desafío: {question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup onValueChange={setSelectedOption} disabled={showFeedback}>
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-lg bg-light-gray">
              <RadioGroupItem value={option.id} id={`option-${option.id}`} />
              <Label htmlFor={`option-${option.id}`} className="text-dark-gray cursor-pointer">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {!showFeedback && (
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white"
          >
            Verificar Respuesta
          </Button>
        )}

        {showFeedback && (
          <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            <div className="flex items-center gap-2 font-semibold mb-2">
              {isCorrect ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
              {isCorrect ? "¡Correcto!" : "Incorrecto"}
            </div>
            <p className="text-dark-gray">{explanation}</p>
            <Button onClick={handleContinue} className="mt-4 w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
              Continuar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex justify-between">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white bg-transparent"
            disabled={showFeedback && !isCorrect} // Disable previous if feedback is shown and answer is incorrect
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Regresar
          </Button>
          {showFeedback && isCorrect && (
            <Button onClick={handleContinue} className="bg-deep-blue hover:bg-deep-blue/90 text-white">
              Siguiente <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
