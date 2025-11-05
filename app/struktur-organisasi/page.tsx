"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StrukturOrganisasi() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-20 md:py-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight"
            data-aos="fade-down"
          >
            Struktur Organisasi
          </h1>
          <p
            className="text-xl md:text-2xl text-red-100 text-pretty max-w-2xl mx-auto"
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
                src="/struktur.png"
                alt="Struktur Organisasi PKPP"
                width={1000}
                height={700}
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Structure Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className="bg-white rounded-lg border border-gray-200 p-6 hover:border-red-300 hover:shadow-lg transition-all"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
              Garis Komando
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Garis komando (garis solid) menunjukkan hubungan hierarki langsung
              antara atasan dan bawahan, di mana perintah dan tanggung jawab
              mengalir dari atas ke bawah secara vertikal.
            </p>
          </div>

          <div
            className="bg-white rounded-lg border border-gray-200 p-6 hover:border-red-300 hover:shadow-lg transition-all"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-red-600 rounded-full"></div>
              Garis Koordinasi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Garis koordinasi (garis putus-putus) menunjukkan hubungan
              kolaboratif dan komunikasi horizontal antara unit-unit organisasi
              yang setara untuk saling mendukung pencapaian tujuan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
