"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowLeft, Loader2, BookOpen } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

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

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notFoundError, setNotFoundError] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })

    async function fetchPost() {
      if (!slug) return

      try {
        setLoading(true)
        const response = await fetch(`/api/blog/${slug}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.status === 404) {
          setNotFoundError(true)
          return
        }

        if (!response.ok) {
          throw new Error("Failed to fetch post")
        }

        const data = await response.json()
        setPost(data)
      } catch (err) {
        console.error("Error fetching post:", err)
        setError("Failed to load blog post")
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (notFoundError) {
    notFound()
  }

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-red-600" />
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
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/berita">Kembali ke Berita</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (!post) {
    return null
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight" data-aos="fade-down">
            Detail Berita
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
            <Link href="/berita" className="text-red-600 hover:text-red-700 font-medium transition-colors">
              Berita
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 rounded-lg overflow-hidden border border-gray-200 shadow-lg" data-aos="zoom-in">
          <div className="relative h-80 md:h-96 bg-gradient-to-br from-yellow-100 to-red-100 flex items-center justify-center">
                    {post.featuredImage ? (
                      <Image src={post.featuredImage} alt={post.title} fill className="object-cover" />
                    ) : (
                      <BookOpen className="w-12 h-12 text-yellow-600 opacity-40" />
                    )}
          </div>
        </div>

        <div className="mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">{post.title}</h1>
          {post.excerpt && <p className="text-xl text-gray-600 text-pretty leading-relaxed">{post.excerpt}</p>}
        </div>

        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between pb-8 mb-12 border-b border-gray-200"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 md:mb-0">
            <CalendarDays className="h-4 w-4 text-red-600" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-fit border-red-200 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
          >
            <Link href="/berita">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Berita
            </Link>
          </Button>
        </div>

        <article
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-red-600 prose-a:hover:text-red-700 prose-strong:text-gray-900 prose-strong:font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <footer className="mt-16 pt-12 border-t border-gray-200" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
            <Button
              asChild
              variant="outline"
              className="border-red-200 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
            >
              <Link href="/berita">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Berita
              </Link>
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}
