"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const TUGAS_POKOK = [
  {
    id: 1,
    title: "Kepala Pusat",
    description:
      "Kepala Pusat bertugas mengatur dan mengkoordinasikan kegiatan Tim Pusat Kurikulum dan Pengembangan Pembelajaran Institut Teknologi Sumatera.",
  },
  {
    id: 2,
    title: "Anggota Divisi Kurikulum",
    description:
      "Anggota Divisi Kurikulum bertugas mengkoordinasikan semua kegiatan yang berkaitan dengan kurikulum Institut Teknologi Sumatera",
  },
  {
    id: 3,
    title: "Sekretaris Divisi Kurikulum",
    description:
      "Sekretaris Divisi Kurikulum bertugas membantu koordinator dalam mengatur dan mengkoordinasikan kegiatan kurikulum",
  },
  {
    id: 4,
    title: "Koordinator Divisi Pengembangan Pembelajaran",
    description:
      "Koordinator Divisi Pengembangan Pembelajaran bertugas membantu koordinator dalam mengatur dan mengkoordinasikan kegiatan pengembangan pembelajaran",
  },
  {
    id: 5,
    title: "Anggota Divisi Pengembangan Pembelajaran",
    description:
      "Anggota bertugas memonitoring dan mengevaluasi pelaksanaan kurikulum di lingkungan Itera, Merekomendasikan pengembangan pembelajaran yang ada di Itera, Membantu pimpinan dalam memonitoring kegiatan MBKM, Memonitoring sumber daya manusia dalam hal pembelajaran",
  },
];

export default function TugasPokok() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight"
            data-aos="fade-down"
          >
            Tugas Pokok
          </h1>
          <p
            className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Komitmen kami dalam mendukung keunggulan pembelajaran dan
            pengembangan akademik
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div
        className="bg-gray-50 border-b border-gray-200 px-6 py-4"
        data-aos="flip-up"
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
            <span className="text-gray-600">Tugas Pokok</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Intro Section */}
        <div className="mb-16" data-aos="fade-right">
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-red-600 rounded-full"></div>
              Daftar Tugas Pokok
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Berikut adalah tugas-tugas pokok yang menjadi fokus utama Pusat
              Kurikulum dan Pengembangan Pembelajaran (PKPP) dalam mendukung
              peningkatan kualitas pembelajaran di Institut Teknologi Sumatera.
            </p>
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TUGAS_POKOK.map((tugas, index) => (
            <div
              key={tugas.id}
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tugas.id}. {tugas.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {tugas.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-br from-yellow-50 via-red-50 to-orange-50 rounded-lg border-2 border-red-200 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Lihat Struktur Organisasi Kami
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Pelajari lebih lanjut tentang struktur tim dan organisasi Pusat Kurikulum dan Pengembangan Pembelajaran
            </p>
            <Link
              href="/struktur-organisasi"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Struktur Organisasi
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
