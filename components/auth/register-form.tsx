"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [occupation, setOccupation] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !lastName || !occupation || !email || !password || !confirmPassword) {
      setError("Por favor, completa todos los campos.")
      return
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.")
      return
    }

    // Simulate registration
    console.log("Registrando usuario:", { name, lastName, occupation, email, password })

    // Store dummy user data in localStorage
    const dummyUser = {
      name: `${name} ${lastName}`,
      email: email,
      occupation: occupation,
      totalTokens: 0, // New user starts with 0 tokens
      avatar: "/default-avatar.png",
      completedCourses: 0,
      recentActivity: [],
      role: "Estudiante",
      level: "Principiante",
      memberSince: new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long" }),
      lastActivity: "Ahora mismo",
      averageScore: 0,
      consecutiveDays: 0,
    }
    localStorage.setItem("learnquest_user", JSON.stringify(dummyUser))
    localStorage.setItem("current_user_name", dummyUser.name)
    localStorage.setItem("current_user_avatar", dummyUser.avatar)
    localStorage.setItem("current_user_tokens", dummyUser.totalTokens.toString())

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.")
    router.push("/dashboard") // Redirect to dashboard after successful registration
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-deep-blue">Registrarse</CardTitle>
        <CardDescription className="text-dark-gray">Crea tu cuenta de LearnQuest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Tu Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              id="lastName"
              placeholder="Tu Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="occupation">Ocupación</Label>
            <Input
              id="occupation"
              placeholder="Ej: Desarrollador, Diseñador"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
            />
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit" className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">
            Registrarse
          </Button>
        </form>
        <div className="text-center text-sm text-dark-gray">
          ¿Ya tienes una cuenta?{" "}
          <Link className="font-medium text-mint-green hover:underline" href="/login">
            Iniciar Sesión
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
