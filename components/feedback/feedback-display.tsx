"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"

interface FeedbackDisplayProps {
  feedbackTitle: string
  feedbackSummary: string
  strengths: string[]
  areasForImprovement: string[]
  suggestions: string[]
  onClose: () => void
}

export default function FeedbackDisplay({
  feedbackTitle,
  feedbackSummary,
  strengths,
  areasForImprovement,
  suggestions,
  onClose,
}: FeedbackDisplayProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-deep-blue">{feedbackTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-soft-blue rounded-lg flex items-center gap-3">
          <Lightbulb className="h-6 w-6 text-vibrant-purple" />
          <p className="text-dark-gray text-sm">{feedbackSummary}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-deep-blue flex items-center gap-2">
            <ThumbsUp className="h-6 w-6 text-green-600" /> Fortalezas
          </h3>
          <ul className="list-disc list-inside space-y-2 text-dark-gray">
            {strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-deep-blue flex items-center gap-2">
            <ThumbsDown className="h-6 w-6 text-red-600" /> Áreas de Mejora
          </h3>
          <ul className="list-disc list-inside space-y-2 text-dark-gray">
            {areasForImprovement.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-deep-blue flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-deep-blue" /> Sugerencias Adicionales
          </h3>
          <ul className="list-disc list-inside space-y-2 text-dark-gray">
            {suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <Button onClick={onClose} className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
          Entendido
        </Button>
      </CardContent>
    </Card>
  )
}
