"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, Coins, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function UserProfileHeader() {
  const [userName, setUserName] = useState("Usuario")
  const [userAvatar, setUserAvatar] = useState("/default-avatar.png")
  const [userTokens, setUserTokens] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("learnquest_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserName(user.name || "Usuario")
      setUserAvatar(user.avatar || "/default-avatar.png")
      setUserTokens(user.totalTokens || 0)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("learnquest_user")
    localStorage.removeItem("current_user_name")
    localStorage.removeItem("current_user_avatar")
    localStorage.removeItem("current_user_tokens")
    window.location.href = "/" // Redirect to home page after logout
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo and Back Arrow on the left */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-white hover:bg-white/10">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Volver</span>
          </Button>
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
        </div>

        {/* User Avatar, Tokens, and Dropdown on the right */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Coins className="h-5 w-5 text-mint-green" />
            <span>{userTokens}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-auto pr-2 pl-1 flex items-center gap-2 text-white hover:bg-white/10"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
                  <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium sr-only">{userName.split(" ")[0]}</span> {/* Screen reader only */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  Mi Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/progress" className="w-full">
                  Mi Progreso
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu (Hamburger) on the right */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden bg-transparent border-white text-white" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <Link className="font-medium text-deep-blue hover:text-mint-green transition-colors" href="/dashboard">
                  Dashboard
                </Link>
                <Link className="font-medium text-deep-blue hover:text-mint-green transition-colors" href="/profile">
                  Mi Perfil
                </Link>
                <Link className="font-medium text-deep-blue hover:text-mint-green transition-colors" href="/progress">
                  Mi Progreso
                </Link>
                <Link className="font-medium text-deep-blue hover:text-mint-green transition-colors" href="/shop">
                  Comprar Cursos
                </Link>
                <Link className="font-medium text-deep-blue hover:text-mint-green transition-colors" href="/sandbox/1">
                  Sandbox
                </Link>
                <Link
                  className="font-medium text-deep-blue hover:text-mint-green transition-colors"
                  href="/suggested-courses"
                >
                  Cursos
                </Link>
                <Button onClick={handleLogout} className="bg-deep-blue hover:bg-deep-blue/90 text-white">
                  Cerrar Sesión
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
