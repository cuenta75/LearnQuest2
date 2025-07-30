"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Download, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CertificateList() {
  const certificates = [
    {
      title: "Certificación de Desarrollador Fullstack",
      date: "15 de Julio, 2023",
      image: "/certificate-fullstack.png",
      category: "Desarrollo Web",
      verified: true,
    },
    {
      title: "Certificación en Ciencia de Datos",
      date: "20 de Junio, 2023",
      image: "/certificate-python-data-science-new.png",
      category: "Data Science",
      verified: true,
    },
    {
      title: "Certificación en React & TypeScript Avanzado",
      date: "10 de Mayo, 2023",
      image: "/certificate-react-typescript-advanced-new.png",
      category: "Frontend",
      verified: true,
    },
    {
      title: "Certificación en DevOps con Docker",
      date: "25 de Abril, 2023",
      image: "/certificate-devops-docker-new.png",
      category: "DevOps",
      verified: true,
    },
    {
      title: "Certificación en UX/UI Design",
      date: "15 de Marzo, 2023",
      image: "/certificate-ux-ui-design-new.png",
      category: "Diseño",
      verified: true,
    },
    {
      title: "Certificación en Blockchain con Solidity",
      date: "28 de Febrero, 2023",
      image: "/certificate-blockchain-solidity-new.png",
      category: "Blockchain",
      verified: true,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-mint-green text-white"
      case "Data Science":
        return "bg-vibrant-purple text-white"
      case "DevOps":
        return "bg-ocean-blue text-white"
      case "Diseño":
        return "bg-lime-green text-white"
      case "Blockchain":
        return "bg-rose-pink text-white"
      default:
        return "bg-deep-blue text-white"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-deep-blue mb-2">Mis Certificaciones</h2>
        <p className="text-dark-gray">Certificados oficiales de tus logros académicos</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <Image
                alt={certificate.title}
                className="aspect-video object-cover w-full"
                height={200}
                src={certificate.image || "/placeholder.svg"}
                width={300}
              />
              <div className="absolute top-2 left-2">
                <Badge className={getCategoryColor(certificate.category)}>{certificate.category}</Badge>
              </div>
              {certificate.verified && (
                <div className="absolute top-2 right-2 bg-mint-green rounded-full p-1">
                  <Award className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-deep-blue line-clamp-2">{certificate.title}</CardTitle>
              <CardDescription className="text-sm text-dark-gray flex items-center gap-2">
                <span>{certificate.date}</span>
                {certificate.verified && (
                  <Badge variant="outline" className="text-xs border-mint-green text-mint-green">
                    Verificado
                  </Badge>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-mint-green text-mint-green hover:bg-mint-green hover:text-white bg-transparent transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar Certificado
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
