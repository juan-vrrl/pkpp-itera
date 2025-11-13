"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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
        name: "Dosen Pembimbing Akademik A",
        position: "Kepala Pusat",
        photo: "/professional-male.jpg",
      },
      {
        id: "2",
        name: "Jasminartikel, S.Sos., M.T.",
        position: "Wakil Kepala Pusat",
        photo: "/professional-female.png",
      },
      {
        id: "3",
        name: "Maria Helvina Driyasa Sarletta, S.T., M.Sc.",
        position: "Wakil Kepala Pusat",
        photo: "/professional-female-hijab.jpg",
      },
    ],
  },
  {
    id: "bidang",
    name: "Bidang",
    staff: [
      {
        id: "4",
        name: "Dosen Pembimbing Akademik B",
        position: "Kepala Bidang",
        photo: "/professional-teamwork.png",
      },
      {
        id: "5",
        name: "Staff Member 1",
        position: "Staff",
        photo: "/professional-teamwork.png",
      },
    ],
  },
  {
    id: "adir",
    name: "ADIR",
    staff: [
      {
        id: "6",
        name: "Administrator 1",
        position: "Kepala ADIR",
        photo: "/professional-teamwork.png",
      },
      {
        id: "7",
        name: "Staff Member 2",
        position: "Staff",
        photo: "/professional-teamwork.png",
      },
    ],
  },
  {
    id: "balai",
    name: "Balai",
    staff: [
      {
        id: "8",
        name: "Balai Manager",
        position: "Kepala Balai",
        photo: "/professional-teamwork.png",
      },
      {
        id: "9",
        name: "Staff Member 3",
        position: "Staff",
        photo: "/professional-teamwork.png",
      },
    ],
  },
  {
    id: "admin",
    name: "ADMIN",
    staff: [
      {
        id: "10",
        name: "Admin Manager",
        position: "Kepala Admin",
        photo: "/professional-teamwork.png",
      },
      {
        id: "11",
        name: "Staff Member 4",
        position: "Staff",
        photo: "/professional-teamwork.png",
      },
    ],
  },
];

function StaffCard({ member }: { member: StaffMember }) {
  return (
    <div
      className="flex flex-col items-center text-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={
            member.photo ||
            "/placeholder.svg?height=200&width=200&query=professional"
          }
          alt={member.name}
          width={200}
          height={200}
          className="w-full h-full rounded-full object-cover border-4 border-gray-200"
        />
      </div>
      <h4 className="font-semibold text-gray-900 text-sm mb-1">
        {member.name}
      </h4>
      <p className="text-gray-600 text-xs">{member.position}</p>
    </div>
  );
}

function DepartmentAccordion({ department }: { department: Department }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-red-600 hover:bg-red-700 text-white px-6 py-4 transition-colors duration-200"
      >
        <span className="font-semibold text-lg">{department.name}</span>
        <ChevronDown
          size={24}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {department.staff.map((member, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                key={member.id}
              >
                <StaffCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SDM() {
  useEffect(() => {

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
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Leadership Section */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Anggota Pusat Kurikulum dan Pengembangan Pembelajaran
          </h3>
          <div
            className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm"
            data-aos="zoom-in"
          >
            <div className="flex justify-center mb-12">
              <StaffCard member={departments[0].staff[0]} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 md:px-12">
              {departments[0].staff.slice(1).map((member, index) => (
                <div
                  key={member.id}
                  className="flex justify-center"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <StaffCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Departments Accordion Section */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Departemen</h3>
          {departments.slice(1).map((department) => (
            <DepartmentAccordion key={department.id} department={department} />
          ))}
        </div>
      </div>
    </div>
  );
}
