import Link from "next/link";
import { Calendar, Target } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { id } from "date-fns/locale";

async function getPrograms() {
  return await prisma.program.findMany({
    orderBy: {
      dateStart: "asc",
    },
  });
}

export default async function ProgramKerja() {
  const programs = await getPrograms();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight"
            data-aos="fade-down"
          >
            Program Kerja
          </h1>
          <p
            className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Program Kerja Pusat Kurikulum dan Pengembangan Pembelajaran
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Program Kerja PKPP
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Berikut adalah daftar lengkap program kerja yang akan dilaksanakan
            oleh tim Pusat Kurikulum dan Pengembangan Pembelajaran (PKPP) dalam
            upaya peningkatan kualitas dan akreditasi institusi.
          </p>
        </div>

        {/* Programs Grid */}
        {programs.length === 0 ? (
          <div className="text-center py-12">
            <Target className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">
              Belum ada program kerja yang tersedia.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {programs.map((program, index) => {
              const isActive = new Date(program.dateEnd) >= new Date();
              const isSameDay =
                format(new Date(program.dateStart), "yyyy-MM-dd") ===
                format(new Date(program.dateEnd), "yyyy-MM-dd");

              return (
                <div
                  key={program.id}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 50}`}
                  className="bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all group overflow-hidden"
                >
                  {/* Left Accent Bar */}
                  <div className="flex">
                    <div
                      className={`w-2 ${
                        isActive
                          ? "bg-gradient-to-b from-green-500 to-green-600"
                          : "bg-gradient-to-b from-gray-400 to-gray-500"
                      }`}
                    ></div>
                    <div className="flex-1 p-6">
                      {/* Header with Date Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              isActive
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            <Calendar className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  isActive
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {isActive ? "Aktif" : "Selesai"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {isSameDay
                                  ? format(
                                      new Date(program.dateStart),
                                      "dd MMMM yyyy",
                                      { locale: id }
                                    )
                                  : `${format(
                                      new Date(program.dateStart),
                                      "dd MMMM yyyy",
                                      { locale: id }
                                    )} - ${format(
                                      new Date(program.dateEnd),
                                      "dd MMMM yyyy",
                                      { locale: id }
                                    )}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activity Description */}
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                          {program.activity}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Summary Stats */}
        {programs.length > 0 && (
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200"
              data-aos="fade-up"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {programs.length}
              </div>
              <p className="text-blue-900 font-medium">Total Program</p>
            </div>
            <div
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                {
                  programs.filter(
                    (p) => new Date(p.dateEnd) >= new Date()
                  ).length
                }
              </div>
              <p className="text-green-900 font-medium">Program Aktif</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
