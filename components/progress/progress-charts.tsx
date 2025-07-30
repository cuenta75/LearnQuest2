"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart } from "lucide-react"

export default function ProgressCharts() {
  // Dummy data for charts
  const courseProgress = [
    { name: "Módulo 1", progress: 90 },
    { name: "Módulo 2", progress: 75 },
    { name: "Módulo 3", progress: 60 },
    { name: "Módulo 4", progress: 85 },
    { name: "Módulo 5", progress: 95 },
  ]

  const tokensEarned = [
    { month: "Ene", tokens: 120 },
    { month: "Feb", tokens: 150 },
    { month: "Mar", tokens: 130 },
    { month: "Abr", tokens: 180 },
    { month: "May", tokens: 200 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-white shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-deep-blue">Progreso del Curso</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full flex items-center justify-center bg-light-gray rounded-md">
            <BarChart className="h-16 w-16 text-dark-gray" />
            <p className="text-dark-gray ml-2">Gráfico de progreso de cursos (Placeholder)</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-deep-blue">Tokens Ganados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full flex items-center justify-center bg-light-gray rounded-md">
            <LineChart className="h-16 w-16 text-dark-gray" />
            <p className="text-dark-gray ml-2">Gráfico de tokens ganados (Placeholder)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
