import RegisterForm from "@/components/auth/register-form"
import Image from "next/image"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-header-blue p-4">
      <div className="mb-8">
        <Link className="flex items-center gap-2" href="/">
          <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={200} height={40} />
          <span className="sr-only">LearnQuest</span>
        </Link>
      </div>
      <RegisterForm />
    </div>
  )
}
