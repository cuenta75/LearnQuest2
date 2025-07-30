"use client"

import ProgressDashboard from "@/components/progress/progress-dashboard"
import CertificateList from "@/components/progress/certificate-list"
import UserProfileHeader from "@/components/layout/user-profile-header" // Import the new header

export default function ProgressPage() {
  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <UserProfileHeader /> {/* Use the new header */}
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-deep-blue">Mi Progreso</h1>
            <p className="text-dark-gray md:text-xl/relaxed">
              Revisa tus cursos completados, progreso y certificaciones.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ProgressDashboard />
            <CertificateList />
          </div>
        </div>
      </main>
    </div>
  )
}
