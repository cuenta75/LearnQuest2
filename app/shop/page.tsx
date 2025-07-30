import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import CourseShop from "@/components/shop/course-shop" // Changed import to CourseShop

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <h1 className="text-white text-xl font-semibold">Tienda de Cursos</h1>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <CourseShop />
        </div>
      </main>
    </div>
  )
}
