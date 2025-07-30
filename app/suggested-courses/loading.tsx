import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Skeleton className="h-8 w-32" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-[250px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
