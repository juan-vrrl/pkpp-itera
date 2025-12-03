import { getSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageActions } from "@/components/admin/message-actions"
import { Mail, Calendar, Building } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

export default async function MessagesPage() {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  const messages = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  })

  const unreadCount = messages.filter((message) => !message.isRead).length

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 shadow-lg" data-aos="fade-down">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Pesan</h1>
          <div className="flex items-center gap-4 text-yellow-100">
            <span>{messages.length} total pesan</span>
            {unreadCount > 0 && (
              <>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  {unreadCount} belum dibaca
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {messages.length === 0 ? (
        <Card className="border-t-4 border-t-yellow-500 shadow-lg" data-aos="fade-up">
          <CardContent className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-yellow-50/50 to-red-50/50">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Mail className="h-10 w-10 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Belum Ada Pesan</h3>
            <p className="text-gray-600 text-center max-w-md">
              Ketika pengunjung mengirim pesan melalui formulir kontak, mereka akan muncul di sini.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4" data-aos="fade-up">
          {messages.map((message) => (
            <Card 
              key={message.id} 
              className={`hover:shadow-lg transition-shadow ${
                !message.isRead 
                  ? "border-l-4 border-l-red-500 bg-red-50/30" 
                  : "border-l-4 border-l-gray-300"
              }`}
            >
              <CardHeader className={!message.isRead ? "bg-gradient-to-r from-red-50/50 to-yellow-50/30" : "bg-gray-50/50"}>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg font-bold text-gray-900">{message.name}</CardTitle>
                      {!message.isRead && (
                        <Badge className="bg-red-500 hover:bg-red-600 text-white">
                          Baru
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4 text-yellow-600" />
                        <span>{message.email}</span>
                      </div>
                      {message.company && (
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4 text-yellow-600" />
                          <span>{message.company}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-yellow-600" />
                        <span>{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</span>
                      </div>
                    </div>
                  </div>
                  <MessageActions message={message} />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{message.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
