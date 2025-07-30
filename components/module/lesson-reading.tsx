"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

interface LessonReadingProps {
  lessonTitle: string
  content: { type: "paragraph" | "image"; value: string }[]
  imageUrl?: string // Optional, for a main image if needed
  onNext: () => void
  onPrevious: () => void
}

export default function LessonReading({ lessonTitle, content, onNext, onPrevious }: LessonReadingProps) {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-deep-blue">Lectura: {lessonTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose max-w-none text-dark-gray">
          {content.map((block, index) => (
            <div key={index}>
              {block.type === "paragraph" && <p>{block.value}</p>}
              {block.type === "image" && (
                <Image
                  src={block.value || "/placeholder.svg"}
                  alt={`Imagen para ${lessonTitle}`}
                  width={800}
                  height={400}
                  className="rounded-lg my-4 object-cover w-full"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Regresar
          </Button>
          <Button onClick={onNext} className="bg-deep-blue hover:bg-deep-blue/90 text-white">
            Seguir <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
