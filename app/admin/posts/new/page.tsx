import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"
import { PostForm } from "@/components/admin/post-form"

export default async function NewPostPage() {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Buat Berita Baru</h1>
        <p className="text-muted-foreground">Tulis dan publikasikan berita baru</p>
      </div>

      <PostForm />
    </div>
  )
}
