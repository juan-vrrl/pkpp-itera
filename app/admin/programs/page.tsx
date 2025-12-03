import { getSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgramActions } from "@/components/admin/program-actions"
import { Calendar, Plus, Clock } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { id } from "date-fns/locale"

export default async function ProgramsPage() {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  const programs = await prisma.program.findMany({
    orderBy: { dateStart: "desc" },
  })

  const formatDate = (date: Date) => {
    return format(new Date(date), "dd MMMM yyyy", { locale: id })
  }

  const isActive = (dateEnd: Date) => {
    return new Date(dateEnd) >= new Date()
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 shadow-lg" data-aos="fade-down">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Program Kerja</h1>
            <p className="text-yellow-100">{programs.length} total program</p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-white text-yellow-600 hover:bg-yellow-50 font-semibold"
          >
            <Link href="/admin/programs/new">
              <Plus className="mr-2 h-5 w-5" />
              Program Baru
            </Link>
          </Button>
        </div>
      </div>

      {programs.length === 0 ? (
        <Card className="border-t-4 border-t-yellow-500 shadow-lg" data-aos="fade-up">
          <CardContent className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-yellow-50/50 to-red-50/50">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="h-10 w-10 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Belum Ada Program</h3>
            <p className="text-gray-600 text-center max-w-md mb-6">
              Mulai tambahkan program kerja untuk mengelola kegiatan dan jadwal Anda.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700"
            >
              <Link href="/admin/programs/new">
                <Plus className="mr-2 h-5 w-5" />
                Buat Program Pertama
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4" data-aos="fade-up">
          {programs.map((program) => {
            const active = isActive(program.dateEnd)
            return (
              <Card 
                key={program.id} 
                className={`hover:shadow-lg transition-shadow ${
                  active
                    ? "border-l-4 border-l-green-500" 
                    : "border-l-4 border-l-gray-300"
                }`}
              >
                <CardHeader className={active ? "bg-gradient-to-r from-green-50/50 to-yellow-50/30" : "bg-gray-50/50"}>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg font-bold text-gray-900">
                          {program.activity}
                        </CardTitle>
                        {active && (
                          <span className="px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">
                            Aktif
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-yellow-600" />
                          <span>Mulai: {formatDate(program.dateStart)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-red-600" />
                          <span>Selesai: {formatDate(program.dateEnd)}</span>
                        </div>
                      </div>
                    </div>
                    <ProgramActions program={program} />
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
