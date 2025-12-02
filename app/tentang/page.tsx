"use client";

import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TentangPage() {
  const router = useRouter();

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
            Tentang Kami
          </h1>
          <p
            className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Membangun masa depan melalui inovasi, dedikasi, dan komitmen
            terhadap keunggulan
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
            <span className="text-gray-600">Tentang</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Overview Section */}
        <div className="mb-16" data-aos="fade-right">
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                Pusat Kurikulum Dan Pengembangan Pembelajaran
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pusat Kurikulum dan Pengembangan Pembelajaran (PKPP) Itera
                adalah Pusat di bawah Lembaga Penjaminan Mutu dan Pengembangan
                Pembelajaran (LPMPP) Institut Teknologi Sumatera yang
                bertanggung jawab untuk mengembangkan, mengelola, dan
                mengevaluasi kurikulum universitas serta berbagai kegiatan
                pembelajaran. Pusat Kurikulum dan Pengembangan Pembelajaran
                berperan penting dalam merumuskan kurikulum baru berbasis
                teknologi seperti AI, mengadopsi standar internasional, dan
                menjajaki kerja sama dengan perguruan tinggi lain untuk
                meningkatkan mutu pendidikan.
              </p>
            </div>

            <div
              className="bg-red-50 rounded-lg border border-red-200 p-8"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-red-600" />
                Fungsi & Peran
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fungsi Pusat Kurikulum dan Pengembangan Pembelajaran (PKPP)
                adalah bertanggung jawab dalam pengelolaan kurikulum dan inovasi
                pembelajaran guna meningkatkan kualitas pendidikan.
              </p>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        {/* <div className="mb-16" data-aos="zoom-in-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-red-600" />
            Dokumen Resmi
          </h2>

          <div className="space-y-3">
            {[2024, 2023, 2022, 2021].map((year) => (
              <div
                key={year}
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-red-300 hover:bg-red-50 transition-all duration-200 flex items-center justify-between"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      SK Rektor Tim PKPP {year}
                    </p>
                    <p className="text-sm text-gray-500">
                      Surat Keputusan Resmi
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm group-hover:translate-x-1 duration-200"
                >
                  Download
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 md:p-12 text-white text-center"
          data-aos="flip-up"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ingin Tahu Lebih Lanjut?
          </h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih detail tentang PKPP ITERA.
          </p>
          <button
            onClick={() => router.push(`/#kontak`)}
            className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors hover:cursor-pointer"
          >
            Hubungi Kami
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
