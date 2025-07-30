"use client"

import { useState, useEffect } from "react"
import UserProfileCard from "@/components/profile/user-profile-card"
import CollaboratingCompanies from "@/components/profile/collaborating-companies"
import UserProfileHeader from "@/components/layout/user-profile-header" // Import the new header

export default function ProfilePage() {
  const [userName, setUserName] = useState("Usuario LearnQuest")
  const [userEmail, setUserEmail] = useState("usuario@example.com")
  const [userAvatar, setUserAvatar] = useState("/default-avatar.png")
  const [userBio, setUserBio] = useState("Entusiasta del aprendizaje y desarrollador en ciernes.")
  const [userTokens, setUserTokens] = useState(0)

  useEffect(() => {
    const storedUser = localStorage.getItem("learnquest_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserName(user.name || "Usuario LearnQuest")
      setUserEmail(user.email || "usuario@example.com")
      setUserAvatar(user.avatar || "/default-avatar.png")
      setUserBio(user.bio || "Entusiasta del aprendizaje y desarrollador en ciernes.")
      setUserTokens(user.totalTokens || 0)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <UserProfileHeader /> {/* Use the new header */}
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-deep-blue">Mi Perfil</h1>
            <p className="text-dark-gray md:text-xl/relaxed">Gestiona tu información personal y revisa tus logros.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <UserProfileCard
              name={userName}
              email={userEmail}
              avatar={userAvatar}
              bio={userBio}
              totalTokens={userTokens}
            />
            <CollaboratingCompanies />
          </div>
        </div>
      </main>
    </div>
  )
}
