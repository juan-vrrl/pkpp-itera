"use client"

import Link from "next/link"
import {Eye, Target, Lightbulb, Heart } from "lucide-react"

export default function VisiMisiPage() {
  const values = [
    {
      icon: Eye,
      title: "Inovasi",
      description: "Mendorong pemikiran kreatif dan solusi modern",
    },
    {
      icon: Heart,
      title: "Integritas",
      description: "Menjunjung tinggi nilai-nilai etika dan transparansi",
    },
    {
      icon: Lightbulb,
      title: "Keunggulan",
      description: "Komitmen terhadap standar kualitas tertinggi",
    },
    {
      icon: Target,
      title: "Kolaborasi",
      description: "Bekerja bersama untuk mencapai tujuan bersama",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight" data-aos="fade-down">
            Visi & Misi
          </h1>
          <p className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto" data-aos="fade-up">
            Panduan strategis menuju transformasi dan pencapaian excellence
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
            <span className="text-gray-600">Visi & Misi</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Visi & Misi Split Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Visi */}
          <div data-aos="fade-right">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-red-100 rounded-full opacity-40"></div>
              <div className="relative bg-white rounded-2xl border-2 border-red-200 p-10 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Visi</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Menjadi lembaga penjaminan mutu terdepan yang mendorong inovasi berkelanjutan dan transformasi
                  akademik menuju keunggulan global melalui pembelajaran yang adaptif, kurikulum yang relevan, dan
                  komitmen terhadap excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div data-aos="fade-left">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-100 rounded-full opacity-40"></div>
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border-2 border-red-300 p-10 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Misi</h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mengembangkan standar kurikulum yang inovatif dan relevan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Meningkatkan kualitas pembelajaran melalui riset dan best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Memastikan pemenuhan standar akreditasi internasional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Nilai-Nilai Inti</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prinsip fundamental yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-lg hover:bg-red-50 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="mb-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Tujuan Strategis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-200 rounded-full"></div>
                  Jangka Pendek
                </h3>
                <p className="text-red-50 leading-relaxed">
                  Meningkatkan efektivitas pembelajaran dan implementasi kurikulum yang responsif terhadap kebutuhan
                  industri dan masyarakat.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-200 rounded-full"></div>
                  Jangka Panjang
                </h3>
                <p className="text-red-50 leading-relaxed">
                  Menetapkan ITERA sebagai institusi dengan standar kualitas pendidikan yang diakui secara regional dan
                  internasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
