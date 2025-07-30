"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react"

interface LessonVideoProps {
  lessonTitle: string
  videoUrl: string
  videoDuration: string
  onNext: () => void
  onPrevious: () => void
}

export default function LessonVideo({ lessonTitle, videoUrl, videoDuration, onNext, onPrevious }: LessonVideoProps) {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-deep-blue">Video: {lessonTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative w-full aspect-video bg-deep-blue flex items-center justify-center rounded-lg overflow-hidden">
          {videoUrl ? (
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex flex-col items-center text-white">
              <PlayCircle className="h-16 w-16 mb-2" />
              <p className="text-lg font-semibold">Video no disponible</p>
              <p className="text-sm text-gray-300">Duración: {videoDuration}</p>
            </div>
          )}
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
