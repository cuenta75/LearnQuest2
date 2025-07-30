import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CollaboratingCompanies() {
  const companies = [
    { name: "Google", logo: "/logo-google.png" },
    { name: "Microsoft", logo: "/logo-microsoft.png" },
    { name: "Amazon", logo: "/logo-amazon.png" },
    { name: "Meta", logo: "/logo-meta.png" },
    { name: "Apple", logo: "/logo-apple.png" },
    { name: "Netflix", logo: "/logo-netflix.png" },
    { name: "Spotify", logo: "/logo-spotify.png" },
    { name: "Uber", logo: "/logo-uber.png" },
    { name: "Airbnb", logo: "/logo-airbnb.png" },
    { name: "Tesla", logo: "/logo-tesla.png" },
  ]

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-deep-blue">Empresas donde puedes trabajar</CardTitle>
        <p className="text-dark-gray">Basado en tus habilidades y cursos completados</p>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 py-6">
        {companies.map((company, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-md hover:bg-light-gray transition-colors">
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={32}
              height={32}
              objectFit="contain"
              className="grayscale opacity-75 hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-deep-blue font-medium">{company.name}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
