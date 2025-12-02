"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { RichTextEditor } from "@/components/admin/rich-text-editor"
import { ImageUpload } from "@/components/admin/image-upload"
import { ArrowLeft, Save, Loader2 } from "lucide-react"
import { toast } from "react-toastify"

interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  published: boolean
  images: string[]
}

interface ImageFile {
  file?: File;
  preview: string;
  url?: string;
}

interface PostFormProps {
  post?: Post
}

export function PostForm({ post }: PostFormProps) {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    content: post?.content || "",
    excerpt: post?.excerpt || "",
    published: post?.published ?? true,
  })
  const [imageFiles, setImageFiles] = useState<ImageFile[]>(
    post?.images?.map(url => ({ preview: url, url })) || []
  )
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  // Warn user before leaving with unsaved changes
  useEffect(() => {
    const hasChanges = 
      formData.title !== (post?.title || "") ||
      formData.content !== (post?.content || "") ||
      imageFiles.length !== (post?.images?.length || 0)

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges) {
        e.preventDefault()
        return (e.returnValue = "")
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [formData, imageFiles, post])

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData({
      ...formData,
      title,
      slug: post ? formData.slug : generateSlug(title),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Step 1: Upload new images to Cloudinary
      const uploadedUrls: string[] = []
      const existingUrls: string[] = []
      
      for (const imageFile of imageFiles) {
        if (imageFile.file) {
          // New file - upload it
          const formData = new FormData()
          formData.append("file", imageFile.file)

          const uploadResponse = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          })

          if (!uploadResponse.ok) {
            throw new Error("Failed to upload image")
          }

          const uploadData = await uploadResponse.json()
          uploadedUrls.push(uploadData.url)
        } else if (imageFile.url) {
          // Existing image from database
          existingUrls.push(imageFile.url)
        }
      }

      const allImageUrls = [...existingUrls, ...uploadedUrls]

      // Step 2: Delete removed images if editing
      if (post?.images) {
        const removedImages = post.images.filter(
          (img) => !allImageUrls.includes(img)
        )
        
        for (const img of removedImages) {
          try {
            const publicId = img.split('/').slice(-2).join('/').split('.')[0]
            await fetch('/api/upload', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ publicId }),
            })
          } catch (error) {
            console.error('Failed to delete removed image:', error)
          }
        }
      }

      // Step 3: Create/update post with image URLs
      const url = post ? `/api/posts/${post.id}` : "/api/posts"
      const method = post ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          images: allImageUrls,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(post ? "Postingan berhasil diperbarui" : "Postingan baru berhasil dibuat")
        router.push("/admin/posts")
        router.refresh()
      } else {
        // If post creation failed, delete uploaded images
        for (const url of uploadedUrls) {
          try {
            const publicId = url.split('/').slice(-2).join('/').split('.')[0]
            await fetch('/api/upload', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ publicId }),
            })
          } catch (error) {
            console.error('Failed to cleanup uploaded image:', error)
          }
        }
        toast.error(data.error || "Gagal menyimpan postingan")
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleContentChange = (content: string) => {
    setFormData({
      ...formData,
      content,
    })
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/posts">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Daftar Berita
          </Link>
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Detail Berita</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Judul *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleTitleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="slug">Judul Singkat *</Label>
              <Input id="slug" name="slug" value={formData.slug} onChange={handleChange} required className="mt-1" />
              <p className="text-sm text-muted-foreground mt-1">
                Judul singkat digunakan dalam URL berita. Hanya huruf kecil, angka, dan disarankan menggunakan tanda hubung (-) untuk spasi. Contoh : &quot;judul-berita-saya&quot;.
              </p>
            </div>

            <div>
              <Label htmlFor="excerpt">Ringkasan</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="mt-1"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Ringkasan singkat yang ditampilkan dalam daftar berita. Biarkan kosong untuk menghasilkan secara otomatis.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gambar Berita</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label>Upload Gambar (Maks. 5 gambar)</Label>
              <div className="mt-2">
                <ImageUpload
                  value={imageFiles}
                  onChange={setImageFiles}
                  maxImages={5}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Gambar pertama akan digunakan sebagai gambar utama berita.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Konten</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="content">Konten Berita *</Label>
              <div className="mt-1">
                <RichTextEditor
                  content={formData.content}
                  onChange={handleContentChange}
                  placeholder="Tulis konten berita Anda di sini..."
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Gunakan toolbar di atas untuk memformat konten Anda dengan judul, daftar, tautan, dan lainnya.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Publishing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
              />
              <Label htmlFor="published">Publikasikan segera</Label>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Jika diaktifkan, berita akan langsung dipublikasikan dan terlihat oleh pengunjung situs web.
            </p>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/posts">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                {post ? "Update Post" : "Create Post"}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
