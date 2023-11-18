import Image from "next/image";
import React from "react";

export default function Team() {
  const team = [
    {
      name: "Ryan Wilson",
      role: "Founder",
      img: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/team-1-370x406.jpg?t=2023-11-16T04%3A48%3A35.651Z",
    },

    {
      name: "Jill Peterson",
      role: "Garden Manager",
      img: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/team-2-370x406.jpg?t=2023-11-16T04%3A48%3A46.629Z",
    },

    {
      name: "Sam Robinson",
      role: "Farmyard Coordinator",
      img: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/sam%20robinson.jpg",
    },
  ];
  return (
    <div className="mx-auto mt-4 max-w-6xl p-6 sm:mt-8 md:mt-12">
      <h2 className="text-center font-mangaba  text-[40px] sm:text-[60px] md:text-[80px]">
        Our Team
      </h2>
      <ul className=" flex justify-center gap-4">
        {team.map((member, index) => (
          <li
            key={index}
            className="relative h-[406px] w-[370px] cursor-pointer grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={370}
              height={400}
              className="z-0 "
              layout="responsive"
            />

            <div className="z-1 absolute inset-0 flex flex-col justify-end px-8 pb-10 text-white">
              <h3 className="font-semibold capitalize">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
