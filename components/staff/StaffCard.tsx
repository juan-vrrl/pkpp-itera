import Image from "next/image";

interface StaffMember {
  id: string;
  name: string;
  position: string;
  photo?: string;
}

interface StaffCardProps {
  member: StaffMember;
}

export function StaffCard({ member }: StaffCardProps) {
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
          className="w-full h-full rounded-full object-cover border-4 border-gray-200 hover:border-red-500 transition-border duration-300"
        />
      </div>
      <h4 className="font-semibold text-gray-900 text-sm mb-1">
        {member.name}
      </h4>
      <p className="text-gray-600 text-xs">{member.position}</p>
    </div>
  );
}
