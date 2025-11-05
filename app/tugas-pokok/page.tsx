"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TUGAS_POKOK = [
  {
    id: 1,
    title: "Pengembangan Kurikulum",
    description:
      "Merancang dan mengembangkan kurikulum yang inovatif sesuai dengan perkembangan zaman dan kebutuhan industri.",
  },
  {
    id: 2,
    title: "Evaluasi Pembelajaran",
    description:
      "Melakukan evaluasi komprehensif terhadap proses dan hasil pembelajaran untuk memastikan kualitas pendidikan.",
  },
  {
    id: 3,
    title: "Inovasi Metode Pembelajaran",
    description:
      "Mengembangkan dan mengimplementasikan metode pembelajaran yang aktif, kreatif, dan efektif.",
  },
  {
    id: 4,
    title: "Pengembangan Kompetensi Dosen",
    description:
      "Fasilitasi peningkatan kompetensi pedagogis dan profesional para dosen melalui berbagai program pelatihan.",
  },
  {
    id: 5,
    title: "Penjaminan Mutu Pembelajaran",
    description:
      "Menjamin bahwa setiap proses pembelajaran memenuhi standar kualitas yang telah ditetapkan.",
  },
  {
    id: 6,
    title: "Integrasi Teknologi Pendidikan",
    description:
      "Mengintegrasikan teknologi terkini dalam pembelajaran untuk meningkatkan efektivitas dan efisiensi.",
  },
  {
    id: 7,
    title: "Riset Pembelajaran",
    description:
      "Melakukan riset mendalam tentang strategi pembelajaran dan pengaruhnya terhadap hasil belajar mahasiswa.",
  },
  {
    id: 8,
    title: "Kolaborasi Antar Program Studi",
    description:
      "Memfasilitasi kolaborasi lintas program studi untuk memperkuat sinergi pembelajaran.",
  },
  {
    id: 9,
    title: "Pengembangan Materi Pembelajaran",
    description:
      "Menyusun dan menyempurnakan materi pembelajaran yang relevan, akurat, dan mudah dipahami.",
  },
];

export default function TugasPokok() {

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
            Tugas Pokok
          </h1>
          <p
            className="text-xl md:text-2xl text-red-100 text-pretty max-w-2xl mx-auto"
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
      </div>
    </div>
  );
}
