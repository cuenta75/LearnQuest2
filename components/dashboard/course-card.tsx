"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PlayCircle, CheckCircle2 } from "lucide-react"

interface CourseCardProps {
  id: string
  image: string
  title: string
  progress: number
  isCompleted: boolean
}

export default function CourseCard({ id, image, title, progress, isCompleted }: CourseCardProps) {
  return (
    <Card className="relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={image || "/placeholder.svg"}
        width={400}
        height={225}
        alt={title}
        className={`w-full h-48 object-cover ${isCompleted ? "grayscale" : ""}`}
      />
      <CardHeader>
        <CardTitle className="text-deep-blue text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>Progreso: {progress}%</span>
          {isCompleted && <CheckCircle2 className="h-5 w-5 text-mint-green" />}
        </div>
        <Progress value={progress} className="w-full h-2.5" indicatorClassName="bg-mint-green" />
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white transition-colors"
          disabled={isCompleted}
        >
          <Link href={`/module/${id}`}>
            <PlayCircle className="mr-2 h-5 w-5" />
            {isCompleted ? "Completado" : "Continuar"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
