"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface FeedbackMentorProps {
  mentorName: string
  mentorAvatar: string
  mentorTitle: string
  feedbackText: string
  rating: number
  onClose: () => void
}

export default function FeedbackMentor({
  mentorName,
  mentorAvatar,
  mentorTitle,
  feedbackText,
  rating,
  onClose,
}: FeedbackMentorProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-deep-blue">Feedback de tu Mentor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={mentorAvatar || "/placeholder.svg"} alt={mentorName} />
            <AvatarFallback>{mentorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold text-deep-blue">{mentorName}</h3>
          <p className="text-dark-gray text-sm">{mentorTitle}</p>
        </div>

        <div className="space-y-4">
          <p className="text-dark-gray text-lg leading-relaxed">{feedbackText}</p>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-6 w-6 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            ))}
            <span className="text-dark-gray text-sm ml-2">({rating.toFixed(1)}/5 estrellas)</span>
          </div>
        </div>

        <Button onClick={onClose} className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
          Entendido
        </Button>
      </CardContent>
    </Card>
  )
}
