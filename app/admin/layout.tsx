import type React from "react"
import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"
import { AdminNavigation } from "@/components/admin/admin-navigation"
import AOSInit from "@/components/AOSInit"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getSession()

  // Allow access to login page without authentication
  if (!user) {
    return <>{children}</>
  }

  // Redirect non-admin users
  if (user.role !== "ADMIN") {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-red-50/30">
      <AOSInit />
      <AdminNavigation user={user} />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
