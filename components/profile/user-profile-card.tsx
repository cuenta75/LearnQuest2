"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { Coins, BookOpen, Target, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function UserProfileCard() {
  const [userName, setUserName] = useState("Usuario LearnQuest")
  const [userEmail, setUserEmail] = useState("usuario@learnquest.com")
  const [userBio, setUserBio] = useState("Entusiasta del desarrollo web y la inteligencia artificial.")
  const [userAvatar, setUserAvatar] = useState("/default-avatar.png")
  const [userRole, setUserRole] = useState("Estudiante")
  const [userLevel, setUserLevel] = useState("Intermediate Developer")
  const [memberSince, setMemberSince] = useState("Enero 2024")
  const [lastActivity, setLastActivity] = useState("Hace 2 horas")
  const [totalTokens, setTotalTokens] = useState(0)
  const [completedCourses, setCompletedCourses] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)
  const [averageScore, setAverageScore] = useState(0)

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = localStorage.getItem("learnquest_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserName(user.name || "Usuario LearnQuest")
      setUserEmail(user.email || "usuario@learnquest.com")
      setUserBio(user.bio || "Entusiasta del desarrollo web y la inteligencia artificial.")
      setUserAvatar(user.avatar || "/default-avatar.png")
      setUserRole(user.role || "Estudiante")
      setUserLevel(user.level || "Principiante")
      setMemberSince(user.memberSince || "Enero 2024")
      setLastActivity(user.lastActivity || "Hace 2 horas")
      setTotalTokens(user.totalTokens || 0)
      setCompletedCourses(user.completedCourses || 0)
      setCurrentStreak(user.consecutiveDays || 0)
      setAverageScore(user.averageScore || 0)
    }
  }, [])

  // No editing functionality as per image reference
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg">
      <CardContent className="space-y-6 p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
            {/* Camera icon for avatar upload - only if editing was enabled */}
            {/* <Label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 bg-mint-green text-white rounded-full p-2 cursor-pointer hover:bg-mint-green/90"
            >
              <Camera className="h-4 w-4" />
              <Input id="avatar-upload" type="file" className="hidden" onChange={handleAvatarChange} />
            </Label> */}
          </div>
          <h2 className="text-xl font-semibold text-deep-blue">{userName}</h2>
          <div className="flex items-center gap-2">
            <Badge className="bg-mint-green text-white">{userRole}</Badge>
            <Badge className="bg-deep-blue text-white">{userLevel}</Badge>
          </div>
          <div className="flex gap-4 text-sm text-dark-gray">
            <span>Miembro desde {memberSince}</span>
            <span>Última actividad {lastActivity}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-deep-blue">Estadísticas Rápidas</h3>
          <div className="grid grid-cols-2 gap-4 text-dark-gray">
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-golden-yellow" />
              <span>Tokens totales</span>
              <span className="ml-auto font-semibold text-deep-blue">{totalTokens}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-mint-green" />
              <span>Cursos completados</span>
              <span className="ml-auto font-semibold text-deep-blue">{completedCourses}/12</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-deep-blue" />
              <span>Racha actual</span>
              <span className="ml-auto font-semibold text-deep-blue">{currentStreak} días</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-dark-green" />
              <span>Puntuación media</span>
              <span className="ml-auto font-semibold text-deep-blue">{averageScore}%</span>
            </div>
          </div>
        </div>

        {/* Removed editable fields as per image reference */}
        {/* Removed Save/Cancel/Edit buttons as per image reference */}
      </CardContent>
    </Card>
  )
}
