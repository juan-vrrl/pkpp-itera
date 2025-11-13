"use client"

import Link from "next/link"
import Image from "next/image"
import { CalendarDays, ArrowRight, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  published: boolean
  featuredImage: string | null
  createdAt: string
  updatedAt: string
  author: {
    name: string | null
    email: string
  }
}

export default function BeritaPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [displayedItems, setDisplayedItems] = useState(4)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog")
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const loadMore = () => {
    setDisplayedItems((prev) => Math.min(prev + 3, posts.length))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat berita...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-red-600 hover:text-red-700 underline"
          >
            Coba lagi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight" data-aos="fade-down">
            Berita
          </h1>
          <p className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto" data-aos="fade-up">
            Berita Terkini Pusat Kurikulum dan Pengembangan Pembelajaran
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4" data-aos="flip-up">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-red-600 hover:text-red-700 font-medium transition-colors">
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Berita</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Newest Article */}
        {posts.length > 0 && (
          <Link href={`/berita/${posts[0].slug}`} className="mb-16 group cursor-pointer block" data-aos="zoom-in">
            <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-red-300 hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Newest Image Placeholder */}
                <div className="md:col-span-1 h-64 md:h-80 bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-yellow-200 transition-colors relative">
                  {posts[0].featuredImage ? (
                    <Image
                      src={posts[0].featuredImage}
                      alt={posts[0].title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <BookOpen className="w-16 h-16 text-red-400 opacity-40" />
                  )}
                </div>
                {/* Newest Content */}
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-4 py-2 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-4">
                      Terbaru
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {posts[0].excerpt || posts[0].content.substring(0, 150) + "..."}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4" />
                      {formatDate(posts[0].createdAt)}
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Articles Grid */}
        {posts.length > 1 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Berita Lainnya</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1, displayedItems).map((post, index) => (
                <Link
                  key={post.id}
                  href={`/berita/${post.slug}`}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col hover:cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-100 to-red-100 flex items-center justify-center group-hover:from-yellow-200 group-hover:to-red-200 transition-colors">
                    {post.featuredImage ? (
                      <Image src={post.featuredImage} alt={post.title} fill className="object-cover" />
                    ) : (
                      <BookOpen className="w-12 h-12 text-yellow-600 opacity-40" />
                    )}
                    {/* Accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                      {post.excerpt || post.content.substring(0, 100) + "..."}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {formatDate(post.createdAt)}
                      </div>
                      <div className="text-red-600 hover:text-red-700 transition-colors opacity-0 group-hover:opacity-100">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {displayedItems < posts.length && (
          <div className="flex justify-center" data-aos="fade-up">
            <button
              onClick={loadMore}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg hover:cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
