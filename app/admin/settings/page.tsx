import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"
import { AdminProfileForm } from "@/components/admin/admin-profile-form"
import { AdminPasswordForm } from "@/components/admin/admin-password-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Shield } from "lucide-react"

export default async function AdminSettingsPage() {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 shadow-lg" data-aos="fade-down">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Pengaturan</h1>
          <p className="text-yellow-100">Kelola Akun dan Preferensi</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
        <Card className="border-t-4 border-t-yellow-500 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-yellow-50/80 to-red-50/50">
            <CardTitle className="flex items-center space-x-2 text-gray-900">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <User className="h-5 w-5 text-yellow-600" />
              </div>
              <span>Informasi Profil</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <AdminProfileForm user={user} />
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-red-50/50 to-yellow-50/50">
            <CardTitle className="flex items-center space-x-2 text-gray-900">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-red-600" />
              </div>
              <span>Keamanan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <AdminPasswordForm />
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
