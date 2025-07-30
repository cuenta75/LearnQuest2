"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Simulate authentication
    if (email && password) {
      let user = null
      const storedUser = localStorage.getItem("learnquest_user")

      if (storedUser) {
        user = JSON.parse(storedUser)
        // For demo, if email matches, assume it's the same user
        if (user.email !== email) {
          user = null // Treat as new user if email doesn't match
        }
      }

      if (!user) {
        // Create a new dummy user if not found or email doesn't match
        user = {
          name: "Usuario LearnQuest", // Default name
          email: email,
          totalTokens: 0, // New user starts with 0 tokens
          avatar: "/default-avatar.png",
          completedCourses: 0,
          recentActivity: [],
          role: "Estudiante",
          level: "Principiante",
          memberSince: "Enero 2024",
          lastActivity: "Ahora mismo",
          averageScore: 0,
          consecutiveDays: 0,
          purchasedCourses: [], // Initialize purchased courses
        }
      }

      localStorage.setItem("learnquest_user", JSON.stringify(user))
      localStorage.setItem("current_user_name", user.name)
      localStorage.setItem("current_user_avatar", user.avatar)
      localStorage.setItem("current_user_tokens", user.totalTokens.toString())

      router.push("/dashboard")
    } else {
      setError("Por favor, ingresa tu correo y contraseña.")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-deep-blue">Iniciar Sesión</CardTitle>
        <CardDescription className="text-dark-gray">Accede a tu cuenta de LearnQuest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit" className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
            Iniciar Sesión
          </Button>
        </form>
        <div className="text-center text-sm text-dark-gray">
          ¿No tienes una cuenta?{" "}
          <Link className="font-medium text-mint-green hover:underline" href="/register">
            Regístrate
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
