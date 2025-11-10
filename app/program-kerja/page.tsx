"use client"

import Link from "next/link"
import { ChevronDown, Target } from "lucide-react"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const PROGRAMS = [
  {
    id: "A",
    category: "Management Programs PKPP",
    icon: Target,
    color: "bg-blue-100 text-blue-600",
    items: [
      "Laporan Mingguan PKPP kepada Pimpinan Institusi (Rektor Pimpinan Akademik)",
      "Rapat Bulanan bersama tim internal PKPP untuk Perencanaan, Pelaksanaan, Evaluasi, Pengembangan, dan Perencanaan Program PKPP",
      "Rapat Koordinasi Bersama GFMF selama dua bulan sekali",
      "Rapat Triwulan Manajemen tingkat Unit dan Institusi",
    ],
  },
  {
    id: "B",
    category: "Sistem Pengamanan Mutu Interaksi",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
    items: [
      "Revisi Dokumen SPM Institusi Teknologi Sumatera",
      "Pengembangan dan Evaluasi Sistem dokumen SPM",
      "Audit Internal SPM bersama Tim Internal Jaminan Mutu Institusi",
      "Peningkatan Implementasi SPM pada GSMF dan Jaminan Mutu PAMP",
      "Pelatihan Gayer Manajemen dan indikator untuk data akademik ITEA dan Pengguna Institusi",
      "Koordinasi Forum Manajemen Mutu Institusi",
      "Workshop Penyusunan Laporan ITDA",
    ],
  },
  {
    id: "C",
    category: "Sistem Pengamanan Mutu Eksternal",
    icon: Target,
    color: "bg-green-100 text-green-600",
    items: [
      "Pengembangan Kerangka Manajemen Mutu Internal, Eksternal, Simulasi dan Visikasi Akreditasi Program Studi Penuh",
      "Pelatihan Penulisan Borang Akreditasi",
      "Pendampingan Penulisan Borang LED LAPS akreditasi diri pidah akreditasi",
      "Tim Persiapan diri penyusunan akreditasi PTs Institusi",
      "Persiapan ITEFIS dari program studi ditunjuk ke arah berdas Instruktur BAN PT",
    ],
  },
  {
    id: "D",
    category: "Audit Mutu Internal",
    icon: Target,
    color: "bg-orange-100 text-orange-600",
    items: [
      "Perencanaan dan Penyusunan Dokumen daftar IDA AMI",
      "Konsultasi AMI",
      "Koordinasi Follow Up Program dan Visi/Misi AMI",
    ],
  },
]

export default function ProgramKerja() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight" data-aos="fade-down">
            Program Kerja
          </h1>
          <p className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto" data-aos="fade-up">
            Program Kerja Pusat Kurikulum dan Pengembangan Pembelajaran
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div data-aos="flip-up" className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-red-600 hover:text-red-700 font-medium transition-colors">
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Program Kerja</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Intro Section */}
        <div
          className="mb-16 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg border border-red-200 p-8"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Kerja PKPP : </h2>
          <p className="text-gray-700 leading-relaxed">
            Berikut adalah daftar lengkap program kerja yang akan dilaksanakan oleh tim Pusat Kurikulum dan Pengembangan Pembelajaran (PKPP)
            dalam upaya peningkatan kualitas dan akreditasi institusi.
          </p>
        </div>

        {/* Programs Timeline */}
        <div className="space-y-6">
          {PROGRAMS.map((program, index) => {
            const Icon = program.icon
            const isExpanded = expandedItems.includes(program.id)

            return (
              <div key={program.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                {/* Program Header */}
                <div
                  className="flex items-start gap-4 p-6 bg-white rounded-t-lg border border-gray-200 cursor-pointer hover:border-red-300 transition-all group"
                  onClick={() => toggleItem(program.id)}
                >
                  {/* Left Accent Bar */}
                  <div className="w-1 h-full bg-gradient-to-b from-red-500 to-yellow-500 rounded-full min-h-16"></div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${program.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          <span className="inline-block w-8 h-8 rounded bg-red-100 text-red-600 font-bold text-center mr-3">
                            {program.id}
                          </span>
                          {program.category}
                        </h3>
                        <p className="text-sm text-gray-600">{program.items.length} kegiatan</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 mt-1 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Program Items */}
                {isExpanded && (
                  <div className="bg-gradient-to-b from-gray-50 to-white border border-t-0 border-gray-200 rounded-b-lg p-6">
                    <ol className="space-y-3">
                      {program.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-4">
                          <span className="text-red-600 font-semibold flex-shrink-0 w-6">{itemIndex + 1}.</span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200"
            data-aos="fade-up"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">{PROGRAMS.length}</div>
            <p className="text-blue-900 font-medium">Kategori Program</p>
          </div>
          <div
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {PROGRAMS.reduce((acc, p) => acc + p.items.length, 0)}
            </div>
            <p className="text-purple-900 font-medium">Total Kegiatan</p>
          </div>
        </div>
      </div>
    </div>
  )
}
