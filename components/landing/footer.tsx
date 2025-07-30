import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue text-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        {/* Columna 1: Logo y Descripción */}
        <div className="space-y-4">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <p className="text-gray-300">
            Empoderando a la próxima generación de profesionales tecnológicos a través del aprendizaje interactivo.
          </p>
          <div className="flex gap-4">
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Columna 2: Explorar */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Explorar</h3>
          <nav className="space-y-2 flex flex-col">
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#how-it-works">
              Cómo Funciona
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#courses">
              Cursos
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#sandbox">
              Sandbox
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#testimonials">
              Testimonios
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#blog">
              Blog
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#about-us">
              Nosotros
            </Link>
          </nav>
        </div>

        {/* Columna 3: Soporte y Contacto */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Soporte y Contacto</h3>
          <nav className="space-y-2 flex flex-col">
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              Preguntas Frecuentes
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              Ayuda
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              Contacto
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              Términos de Servicio
            </Link>
            <Link className="text-gray-300 hover:text-mint-green transition-colors" href="#">
              Política de Privacidad
            </Link>
          </nav>
          <p className="text-gray-300 mt-4">
            123 Calle del Saber, Ciudad del Conocimiento, CP 12345
            <br />
            info@learnquest.com
            <br />
            +1 (555) 123-4567
          </p>
        </div>
      </div>
      <div className="container text-center text-gray-400 mt-12 border-t border-gray-700 pt-8">
        © 2024 LearnQuest. Todos los derechos reservados.
      </div>
    </footer>
  )
}
