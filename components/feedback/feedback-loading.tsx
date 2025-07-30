import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Bot } from "lucide-react"

export default function FeedbackLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-gray p-4">
      <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg p-6 text-center">
        <CardHeader className="space-y-4">
          <Bot className="h-16 w-16 text-deep-blue mx-auto animate-bounce" />
          <CardTitle className="text-3xl font-bold text-deep-blue">Generando Feedback de IA...</CardTitle>
          <p className="text-dark-gray">Esto puede tardar unos segundos. ¡Gracias por tu paciencia!</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <Skeleton className="h-8 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="h-12 w-full" />
        </CardContent>
      </Card>
    </div>
  )
}
