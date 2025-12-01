"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "react-toastify"
import { Calendar, Save } from "lucide-react"

interface Program {
  id?: string
  dateStart: Date
  dateEnd: Date
  activity: string
}

interface ProgramFormProps {
  program?: Program
  isEditing?: boolean
}

export function ProgramForm({ program, isEditing = false }: ProgramFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    dateStart: program?.dateStart ? new Date(program.dateStart).toISOString().split("T")[0] : "",
    dateEnd: program?.dateEnd ? new Date(program.dateEnd).toISOString().split("T")[0] : "",
    activity: program?.activity || "",
  })

  const [sameDay, setSameDay] = useState(
    program ? new Date(program.dateStart).toISOString().split("T")[0] === new Date(program.dateEnd).toISOString().split("T")[0] : false
  )

  const handleStartDateChange = (value: string) => {
    setFormData({ ...formData, dateStart: value, dateEnd: sameDay ? value : formData.dateEnd })
  }

  const handleSameDayToggle = (checked: boolean) => {
    setSameDay(checked)
    if (checked && formData.dateStart) {
      setFormData({ ...formData, dateEnd: formData.dateStart })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const url = isEditing
        ? `/api/programs/${program?.id}`
        : "/api/programs"

      const response = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateStart: new Date(formData.dateStart),
          dateEnd: new Date(formData.dateEnd),
          activity: formData.activity,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to save program")
      }

      toast.success(isEditing ? "Program berhasil diperbarui" : "Program baru berhasil ditambahkan")

      router.push("/admin/programs")
      router.refresh()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Gagal menyimpan program")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="border-t-4 border-t-yellow-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-red-50">
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Calendar className="h-5 w-5 text-yellow-600" />
            {isEditing ? "Edit Program Kerja" : "Program Kerja Baru"}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="activity" className="text-gray-700 font-semibold">
              Nama Kegiatan <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="activity"
              placeholder="Masukkan nama kegiatan program..."
              value={formData.activity}
              onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
              required
              rows={3}
              className="resize-none"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameDay"
                checked={sameDay}
                onChange={(e) => handleSameDayToggle(e.target.checked)}
                className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
              <Label htmlFor="sameDay" className="text-gray-700 font-medium cursor-pointer">
                Program selesai di hari yang sama (1 hari)
              </Label>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dateStart" className="text-gray-700 font-semibold">
                  Tanggal Mulai <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dateStart"
                  type="date"
                  value={formData.dateStart}
                  onChange={(e) => handleStartDateChange(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateEnd" className="text-gray-700 font-semibold">
                  Tanggal Selesai <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dateEnd"
                  type="date"
                  value={formData.dateEnd}
                  onChange={(e) => setFormData({ ...formData, dateEnd: e.target.value })}
                  required
                  min={formData.dateStart}
                  disabled={sameDay}
                  className={sameDay ? "bg-gray-100 cursor-not-allowed" : ""}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700"
            >
              <Save className="mr-2 h-4 w-4" />
              {isSubmitting ? "Menyimpan..." : isEditing ? "Perbarui Program" : "Simpan Program"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isSubmitting}
            >
              Batal
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
