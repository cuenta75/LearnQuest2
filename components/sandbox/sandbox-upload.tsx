"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, Loader2, CheckCircle2, FileText, ListChecks } from "lucide-react"

interface SandboxUploadProps {
  projectId: string
  instructions: string
  criteria: string[]
  onProjectSubmit: () => void
}

export default function SandboxUpload({ projectId, instructions, criteria, onProjectSubmit }: SandboxUploadProps) {
  const [projectDescription, setProjectDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [textInput, setTextInput] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Proyecto enviado:", { projectDescription, file, textInput })
    setIsLoading(false)
    setIsSubmitted(true)
    onProjectSubmit()
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-deep-blue">Entrega tu Proyecto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-deep-blue flex items-center gap-2">
            <FileText className="h-6 w-6" /> Descripción del Proyecto
          </h3>
          <p className="text-dark-gray">{instructions}</p> {/* Displaying the project description/instructions */}
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-description" className="text-dark-gray">
            Tu Descripción del Proyecto
          </Label>
          <Textarea
            id="project-description"
            placeholder="Describe tu implementación, decisiones técnicas y cualquier desafío que hayas enfrentado..."
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            rows={5}
            className="min-h-[120px] resize-none border-deep-blue focus-visible:ring-deep-blue"
            disabled={isSubmitted}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-deep-blue flex items-center gap-2">
            <ListChecks className="h-6 w-6" /> Criterios de Evaluación
          </h3>
          <ul className="list-disc list-inside space-y-2 text-dark-gray">
            {criteria.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {!isSubmitted ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-deep-blue">Archivos del proyecto</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg h-full">
                  <Upload className="h-12 w-12 text-gray-400 mb-3" />
                  <p className="text-dark-gray text-center mb-3">Arrastra archivos aquí o haz clic para seleccionar</p>
                  <Label htmlFor="file-upload" className="sr-only">
                    Seleccionar archivos
                  </Label>
                  <Input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    className="file:text-deep-blue file:bg-light-gray file:border-deep-blue file:hover:bg-deep-blue file:hover:text-white cursor-pointer"
                    disabled={isSubmitted}
                  />
                  {file && <p className="text-sm text-dark-gray mt-2">Archivo seleccionado: {file.name}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="text-input" className="text-dark-gray">
                  O pega tu código/texto aquí
                </Label>
                <Textarea
                  id="text-input"
                  placeholder={`Pega tu código o texto aquí. Por ejemplo:\n\nfunction greet(name) {\n  return "Hola, " + name + "!";\n}\n\nconsole.log(greet("Mundo"));`}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  rows={8}
                  className="min-h-[120px] resize-none border-deep-blue focus-visible:ring-deep-blue"
                  disabled={isSubmitted}
                />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isLoading || (!file && textInput.trim() === "" && projectDescription.trim() === "")}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Upload className="h-5 w-5 mr-2" /> Entregar Proyecto
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 bg-green-100 rounded-lg text-green-700">
            <CheckCircle2 className="h-16 w-16 mb-4" />
            <p className="text-2xl font-bold">¡Proyecto Enviado!</p>
            <p className="text-dark-gray mt-2">
              Tu proyecto ha sido entregado exitosamente. Recibirás feedback pronto.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
