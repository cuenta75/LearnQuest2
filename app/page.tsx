import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import HowItWorks from "@/components/landing/how-it-works"
import CourseCatalog from "@/components/landing/course-catalog"
import SandboxProjects from "@/components/landing/sandbox-projects"
import Testimonials from "@/components/landing/testimonials"
import BlogSection from "@/components/landing/blog-section"
import AboutUs from "@/components/landing/about-us" // Re-added AboutUs
import Footer from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <CourseCatalog />
        <SandboxProjects />
        <Testimonials />
        <BlogSection />
        <AboutUs /> {/* Re-added AboutUs */}
      </main>
      <Footer />
    </div>
  )
}
