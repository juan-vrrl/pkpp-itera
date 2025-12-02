"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { StaffCard } from "./StaffCard";

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

interface DepartmentAccordionProps {
  department: Department;
}

export function DepartmentAccordion({ department }: DepartmentAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-red-600 hover:bg-red-700 text-white px-6 py-4 transition-colors duration-200 hover:cursor-pointer"
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
