import { getSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { ProgramForm } from "@/components/admin/program-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function NewProgramPage() {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/admin/programs">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Link>
        </Button>
      </div>
      <ProgramForm />
    </div>
  )
}
