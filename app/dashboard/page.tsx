"use client"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import DashboardCourseCard from "@/components/dashboard/dashboard-course-card"
import UserProfileHeader from "@/components/layout/user-profile-header" // Import the new header

export default function DashboardPage() {
  const [userName, setUserName] = useState("Usuario LearnQuest")
  const [userTokens, setUserTokens] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("learnquest_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserName(user.name || "Usuario LearnQuest")
      setUserTokens(user.totalTokens || 0)
    }
  }, [])

  const courses = [
    {
      id: "react-typescript-advanced",
      image: "/web-development-course.png",
      category: "Frontend",
      difficulty: "Avanzado",
      title: "React & TypeScript Avanzado",
      description: "Domina React con TypeScript para crear aplicaciones web modernas y escalables.",
      instructor: "Dr. Carlos Mendoza",
      approvedBy: ["Meta", "Google"],
      duration: "4 semanas",
      practicePercentage: 85,
      priceTokens: undefined, // GRATIS
    },
    {
      id: "nodejs-apis-rest",
      image: "/nodejs-apis-course.png",
      category: "Backend",
      difficulty: "Intermedio",
      title: "Node.js & APIs REST",
      description: "Construye APIs robustas y escalables con Node.js, Express y mejores prácticas.",
      instructor: "Ing. Ana Rodríguez",
      approvedBy: ["IBM", "Oracle"],
      duration: "5 semanas",
      practicePercentage: 90,
      priceTokens: 150,
    },
    {
      id: "python-data-science",
      image: "/data-science-course.png",
      category: "Data Science",
      difficulty: "Principiante",
      title: "Python Data Science",
      description: "Análisis de datos y machine learning con Python, pandas, numpy y scikit-learn.",
      instructor: "Dr. Miguel Torres",
      approvedBy: ["Google", "IBM"],
      duration: "6 semanas",
      practicePercentage: 80,
      priceTokens: undefined, // GRATIS
    },
    {
      id: "devops-docker",
      image: "/devops-docker-course.png",
      category: "DevOps",
      difficulty: "Intermedio",
      title: "DevOps con Docker",
      description: "Containerización y despliegue continuo con Docker, Kubernetes y herramientas CI/CD.",
      instructor: "Ing. Roberto Silva",
      approvedBy: ["Docker", "Kubernetes"],
      duration: "4 semanas",
      practicePercentage: 75,
      priceTokens: 200,
    },
    {
      id: "blockchain-solidity",
      image: "/blockchain-dev.png",
      category: "Blockchain",
      difficulty: "Avanzado",
      title: "Desarrollo Blockchain con Solidity",
      description: "Construye contratos inteligentes y aplicaciones descentralizadas en Ethereum.",
      instructor: "Dr. Elena Vargas",
      approvedBy: ["Ethereum"],
      duration: "7 semanas",
      practicePercentage: 95,
      priceTokens: 300,
    },
    {
      id: "ux-ui-design",
      image: "/ux-ui-design.png",
      category: "Diseño",
      difficulty: "Principiante",
      title: "Diseño UX/UI para Desarrolladores",
      description: "Crea interfaces de usuario intuitivas y experiencias de usuario excepcionales.",
      instructor: "Lic. Sofía Pérez",
      approvedBy: ["Adobe", "Figma"],
      duration: "4 semanas",
      practicePercentage: 78,
      priceTokens: undefined, // GRATIS
    },
  ]

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      {/* Use the new UserProfileHeader for dashboard */}
      <UserProfileHeader />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-deep-blue">
              ¡Bienvenido de vuelta, {userName.split(" ")[0]}!
            </h1>
            <p className="text-dark-gray md:text-xl/relaxed">
              Continúa tu journey de aprendizaje y desbloquea nuevas habilidades.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-gray" />
            <Input
              type="text"
              placeholder="Buscar cursos o módulos..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-deep-blue focus:border-deep-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Courses Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => (
              <DashboardCourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
