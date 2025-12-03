import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Plus, Eye, Calendar} from "lucide-react";

export default async function AdminDashboardPage() {
  const user = await getSession();

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  const [totalPosts, publishedPosts, totalPrograms] =
    await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { published: true } }),
      prisma.program.count(),
    ]);

  const stats = {
    totalPosts,
    publishedPosts,
    draftPosts: totalPosts - publishedPosts,
    totalPrograms,
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 shadow-lg" data-aos="fade-down">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-yellow-100">
            Selamat datang kembali, {user.name || user.email}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
        <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Total Postingan
            </CardTitle>
            <div className="p-2 bg-yellow-100 rounded-lg">
              <FileText className="h-4 w-4 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {stats.totalPosts}
            </div>
            <p className="text-xs text-gray-500 mt-1">Semua postingan blog</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Dipublikasikan
            </CardTitle>
            <div className="p-2 bg-green-100 rounded-lg">
              <Eye className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {stats.publishedPosts}
            </div>
            <p className="text-xs text-gray-500 mt-1">Aktif di website</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Draf
            </CardTitle>
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {stats.draftPosts}
            </div>
            <p className="text-xs text-gray-500 mt-1">Belum dipublikasikan</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Total Program
            </CardTitle>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {stats.totalPrograms}
            </div>
            <p className="text-xs text-gray-500 mt-1">Semua program kerja</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-t-4 border-t-yellow-500 shadow-lg" data-aos="fade-up" data-aos-delay="200">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-red-50">
          <CardTitle className="text-xl font-bold text-gray-900">
            Aksi Cepat
          </CardTitle>
          <p className="text-sm text-gray-600">Kelola konten dan pesan Anda</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              asChild
              className="h-auto py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
            >
              <Link
                href="/admin/posts/new"
                className="flex flex-col items-center gap-2"
              >
                <Plus className="h-6 w-6" />
                <span className="font-semibold">Postingan Baru</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto py-4 border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50"
            >
              <Link
                href="/admin/posts"
                className="flex flex-col items-center gap-2"
              >
                <FileText className="h-6 w-6" />
                <span className="font-semibold">Kelola Postingan</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto py-4 border-2 border-purple-500 text-purple-700 hover:bg-purple-50"
            >
              <Link
                href="/admin/programs"
                className="flex flex-col items-center gap-2"
              >
                <Calendar className="h-6 w-6" />
                <span className="font-semibold">Kelola Program</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto py-4 border-2 border-gray-500 text-gray-700 hover:bg-gray-50"
            >
              <Link href="/berita" className="flex flex-col items-center gap-2">
                <Eye className="h-6 w-6" />
                <span className="font-semibold">Lihat Berita</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
