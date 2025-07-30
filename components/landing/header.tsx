"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
          <span className="sr-only">LearnQuest</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#courses" className="text-sm font-medium text-white hover:text-mint-green transition-colors">
            Cursos
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-white hover:text-mint-green transition-colors">
            Testimonios
          </Link>
          <Link href="#blog" className="text-sm font-medium text-white hover:text-mint-green transition-colors">
            Blog
          </Link>
          <Link href="#about-us" className="text-sm font-medium text-white hover:text-mint-green transition-colors">
            Nosotros
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-header-blue bg-transparent"
            >
              Acceder
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent border-white text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <Link href="#courses" className="text-sm font-medium hover:text-mint-green transition-colors">
                  Cursos
                </Link>
                <Link href="#testimonials" className="text-sm font-medium hover:text-mint-green transition-colors">
                  Testimonios
                </Link>
                <Link href="#blog" className="text-sm font-medium hover:text-mint-green transition-colors">
                  Blog
                </Link>
                <Link href="#about-us" className="text-sm font-medium hover:text-mint-green transition-colors">
                  Nosotros
                </Link>
                <Link href="/login">
                  <Button className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white">Acceder</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
