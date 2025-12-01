"use client";

import Link from "next/link";
import { Eye, Target, Lightbulb, Heart } from "lucide-react";

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
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight"
            data-aos="fade-down"
          >
            Visi & Misi
          </h1>
          <p
            className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Panduan strategis menuju transformasi dan pencapaian excellence
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div
        data-aos="flip-up"
        className="bg-gray-50 border-b border-gray-200 px-6 py-4"
      >
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
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
                  “Menjadi pusat unggulan dalam pengembangan kurikulum berdampak
                  dan pembelajaran inovatif berstandar internasional yang
                  berakar pada potensi dan kearifan lokal Sumatera untuk
                  menghasilkan lulusan berdaya saing global.”
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
                    <span>
                      Mengembangkan kurikulum berdampak yang relevan dengan
                      kebutuhan industri, masyarakat, dan pembangunan
                      berkelanjutan, khususnya di wilayah Sumatera.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mendorong internasionalisasi kurikulum melalui adopsi
                      standar global, kolaborasi institusi luar negeri, dan
                      pengakuan internasional.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mengembangkan model dan strategi pembelajaran inovatif
                      berbasis teknologi, case-based learning, project-based
                      learning, dan experiential learning.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Memfasilitasi peningkatan kompetensi pendidik dalam
                      pengembangan kurikulum, asesmen pembelajaran, dan metode
                      pengajaran modern.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mengintegrasikan potensi sumber daya alam, sosial, dan
                      budaya Sumatera dalam pengembangan kurikulum dan
                      pembelajaran kontekstual.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mendukung kebijakan Merdeka Belajar dan kebijakan
                      pendidikan nasional melalui penguatan kualitas
                      pembelajaran yang adaptif dan transformatif.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
