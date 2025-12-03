import { getSession } from "@/lib/session"
import { redirect, notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { ProgramForm } from "@/components/admin/program-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function EditProgramPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  const { id } = await params
  const program = await prisma.program.findUnique({
    where: { id },
  })

  if (!program) {
    notFound()
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
      <ProgramForm program={program} isEditing />
    </div>
  )
}
