"use client";

import Link from "next/link";
import { StaffCard } from "@/components/staff";

interface StaffMember {
  id: string;
  name: string;
  position: string;
  photo?: string;
}

interface Department {
  id: string;
  name: string;
  staff: StaffMember[];
}

const departments: Department[] = [
  {
    id: "pusat",
    name: "PUSAT",
    staff: [
      {
        id: "1",
        name: "Dr. Nono Agus Santoso, S.Si., M.T",
        position: "Kepala Pusat Kurikulum dan Pengembangan Pembelajaran",
        photo: "/sdm/nono.jpg",
      },
    ],
  },
  {
    id: "kurikulum",
    name: "Kurikulum",
    staff: [
      {
        id: "2",
        name: "Rifka Noor Azizah, M.T.",
        position: "Koordinator Divisi Kurikulum",
        photo: "/sdm/rifka.jpg",
      },
      {
        id: "3",
        name: "Rizki Wulandari, S.T., M.Sc.",
        position: "Anggota Divisi Kurikulum",
        photo: "/sdm/rizki.jpg",
      },
            {
        id: "4",
        name: "Endo Pebri Dani Putra, S.TP., M.P.",
        position: "Anggota Divisi Kurikulum",
        photo: "/sdm/endo.jpg",
      },
      {
        id: "5",
        name: "Hersa Dwi Yanuarso, S.TP., M.P.",
        position: "Anggota Divisi Kurikulum",
        photo: "/sdm/hersa.jpg",
      },
      {
        id: "6",
        name: "Nova Asriana Ms. S.T., M.T",
        position: "Anggota Divisi Kurikulum",
        photo: "/sdm/nova.jpg",
      },
      {
        id: "7",
        name: "Dr. Erma Suryanti, M.Si.",
        position: "Anggota Divisi Kurikulum",
        photo: "/sdm/erma.jpg",
      },
      {
        id: "8",
        name: "Suci Wulandari, S.T., M.T.",
        position: "Anggota Divisi Kurikulum",
        photo: "/sdm/suci.jpg",
      }
    ],
  },
  {
    id: "pengembangan-pembelajaran",
    name: "Pengembangan Pembelajaran",
    staff: [
      {
        id: "9",
        name: "Fuji Lestari, M.Si.",
        position: "Koordinator Divisi Pengembangan Pembelajaran",
        photo: "/sdm/fuji.jpg",
      },
      {
        id: "10",
        name: "Alfiah Rizky Diana Putri, M.Eng.",
        position: "Anggota Divisi Pengembangan Pembelajaran",
        photo: "/sdm/alfiah.jpg",
      },
      {
        id: "11",
        name: "Putri Ayu Dwiyana, S.Pd., M.T.",
        position: "Anggota Divisi Pengembangan Pembelajaran",
        photo: "/sdm/putri.jpg",
      },
      {
        id: "12",
        name: "Hediyati Anisia Br Sinamo, S.P.W.K., M.P.W.K.",
        position: "Anggota Divisi Pengembangan Pembelajaran",
        photo: "/sdm/hediyati.jpg",
      },
      {
        id: "13",
        name: "Dr. Sn. Namuri Migo Tuwio, S.Sn., M.Sn.",
        position: "Anggota Divisi Pengembangan Pembelajaran",
        photo: "/sdm/namuri.jpg",
      },
      {
        id: "14",
        name: "Ira Safitri, M.Si.",
        position: "Anggota Divisi Pengembangan Pembelajaran",
        photo: "/sdm/ira.jpg",
      },
      {
        id: "15",
        name: "apt. Winni Nur Auli, S.Farm., M.S.Farm.",
        position: "Anggota Divisi Pengembangan Pembelajaran",
        photo: "/sdm/winni.jpg",
      },
      {
        id: "16",
        name: "Efa Maydhona Saputra, S.T., M.T.",
        position: "Anggota Divisi Pengembangan Pembelajaran",
        photo: "/sdm/efa.jpg",
      },
    ],
  },
];

export default function SDM() {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight"
          >
            Sumber Daya Manusia
          </h1>
          <p
            data-aos="fade-up"
            className="text-base md:text-lg text-red-100 text-pretty max-w-2xl mx-auto"
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
            <span className="text-gray-600">SDM</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro Section */}
        <div
          className="mb-16 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg border border-red-200 p-8"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-yellow-600 rounded-full"></div>
            Tim PKPP ITERA
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tim Pusat Kurikulum dan Pengembangan Pembelajaran terdiri dari
            profesional berpengalaman yang berkomitmen untuk meningkatkan
            kualitas pendidikan di Institut Teknologi Sumatera.
          </p>
        </div>

        {/* Leadership Section - Featured Card */}
        <div className="mb-20" data-aos="fade-up">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-2">
              Kepala Pusat
            </span>
            <h3 className="text-2xl font-bold text-gray-900">
              Pimpinan PKPP
            </h3>
          </div>
          <div
            className="relative bg-gradient-to-br from-white to-red-50 rounded-2xl border-2 border-red-200 p-12 shadow-lg max-w-md mx-auto"
            data-aos="zoom-in"
          >
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-red-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="relative">
              <StaffCard member={departments[0].staff[0]} />
            </div>
          </div>
        </div>

        {/* Departments Section - Card Grid Layout */}
        <div className="space-y-12" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-2">
              Tim Divisi
            </span>
            <h3 className="text-3xl font-bold text-gray-900">
              Divisi PKPP
            </h3>
          </div>

          {departments.slice(1).map((department, deptIndex) => (
            <div
              key={department.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={deptIndex * 100}
            >
              {/* Department Header */}
              <div className="bg-gradient-to-r from-red-600 to-yellow-600 px-8 py-6">
                <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-2 h-8 bg-white rounded-full"></div>
                  Divisi {department.name}
                </h4>
                <p className="text-red-100 mt-2">
                  {department.staff.length} anggota tim
                </p>
              </div>

              {/* Department Staff Grid */}
              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {department.staff.map((member, index) => (
                    <div
                      key={member.id}
                      data-aos="zoom-in"
                      data-aos-delay={index * 50}
                    >
                      <StaffCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 flex justify-center" data-aos="fade-up">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {departments.reduce((acc, dept) => acc + dept.staff.length, 0)}
            </div>
            <p className="text-blue-900 font-medium">Total Anggota</p>
          </div>
        </div>
      </div>
    </div>
  );
}
