import { Skeleton } from "@/components/ui/skeleton"

export default function LoginLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-gray p-4">
      <div className="mb-8">
        <Skeleton className="h-10 w-48" />
      </div>
      <div className="w-full max-w-md mx-auto bg-white shadow-lg p-8 rounded-lg space-y-6">
        <div className="text-center space-y-2">
          <Skeleton className="h-8 w-3/4 mx-auto" />
          <Skeleton className="h-5 w-1/2 mx-auto" />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="text-center text-sm">
          <Skeleton className="h-4 w-2/3 mx-auto" />
        </div>
      </div>
    </div>
  )
}
