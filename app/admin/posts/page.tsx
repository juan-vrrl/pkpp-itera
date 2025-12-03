import { redirect } from "next/navigation"
import Link from "next/link"
import { getSession } from "@/lib/session"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PostActions } from "@/components/admin/post-actions"
import { Plus, CalendarDays, Eye, Edit } from "lucide-react"

export default async function AdminPostsPage() {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 shadow-lg" data-aos="fade-down">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Postingan Berita</h1>
            <p className="text-yellow-100">Kelola Konten Berita</p>
          </div>
          <Button asChild className="bg-white text-red-600 hover:bg-gray-100 shadow-md">
            <Link href="/admin/posts/new">
              <Plus className="mr-2 h-4 w-4" />
              Postingan Baru
            </Link>
          </Button>
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-4" data-aos="fade-up">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500">
              <CardHeader className="bg-gradient-to-r from-yellow-50/50 to-red-50/50">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-xl text-gray-900 font-bold">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4 text-yellow-600" />
                        <span>{new Date(post.createdAt).toLocaleDateString('id-ID', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <Badge 
                        variant={post.published ? "default" : "secondary"}
                        className={post.published 
                          ? "bg-green-500 hover:bg-green-600 text-white" 
                          : "bg-gray-400 hover:bg-gray-500 text-white"
                        }
                      >
                        {post.published ? "Dipublikasikan" : "Draf"}
                      </Badge>
                    </div>
                  </div>
                  <PostActions post={post} />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt || "Tidak ada ringkasan"}</p>
                <div className="flex space-x-2">
                  <Button asChild size="sm" variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
                    <Link href={`/admin/posts/${post.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                  {post.published && (
                    <Button asChild size="sm" variant="outline" className="border-red-500 text-red-700 hover:bg-red-50">
                      <Link href={`/berita/${post.slug}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Lihat
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-t-4 border-t-yellow-500 shadow-lg" data-aos="fade-up">
          <CardContent className="text-center py-16 bg-gradient-to-br from-yellow-50/50 to-red-50/50">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="h-10 w-10 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Belum Ada Postingan</h2>
              <p className="text-gray-600 mb-8">Buat postingan blog pertama Anda untuk memulai berbagi konten.</p>
              <Button asChild className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white shadow-lg">
                <Link href="/admin/posts/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Buat Postingan Pertama
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
