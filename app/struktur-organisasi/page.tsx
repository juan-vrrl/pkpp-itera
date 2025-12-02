"use client";

import Link from "next/link";
import Image from "next/image";

export default function StrukturOrganisasi() {

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
            Struktur Organisasi
          </h1>
          <p
            className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Hierarki dan tata kelola Pusat Kurikulum dan Pengembangan
            Pembelajaran (PKPP)
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
            <span className="text-gray-600">Struktur Organisasi</span>
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
              Organisasi PKPP
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Struktur organisasi PKPP dirancang untuk memastikan koordinasi
              yang efektif dan pengambilan keputusan yang tepat dalam mencapai
              misi peningkatan kualitas pembelajaran dan pengembangan akademik
              di institusi.
            </p>
          </div>
        </div>

        {/* Organization Structure Image */}
        <div className="mb-12" data-aos="zoom-in">
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow overflow-x-auto">
            <div className="flex justify-center">
              <Image
                src="/struktur-organisasi.jpg"
                alt="Struktur Organisasi PKPP"
                width={1000}
                height={700}
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-br from-yellow-50 via-red-50 to-orange-50 rounded-lg border-2 border-red-200 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Lihat Sumber Daya Manusia Kami
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Kenali tim dan staff yang bekerja di PKPP Institut Teknologi Sumatera
            </p>
            <Link
              href="/sdm"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sumber Daya Manusia
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
