"use client";

import Image from "next/image";

type UserDetail = {
  title: string;
  figure: string;
  prev_percentage: string;
  icon: string;
};

const user_details_card: UserDetail[] = [
  {
    title: "Total Users",
    figure: "4,000",
    prev_percentage: "+10% from last month",
    icon: "/superadmin-images/user-icon.svg",
  },
  {
    title: "Active Users",
    figure: "1500",
    prev_percentage: "+20% from last month",
    icon: "/superadmin-images/active-user.svg",
  },
  {
    title: "Deleted Users",
    figure: "2500",
    prev_percentage: "+150% from last month",
    icon: "/superadmin-images/deleted-user.svg",
  },
];

export default function SuperAdminUserDetails() {
  return (
    <main>
      <div className="flex gap-4">
        {user_details_card.map((detail, index) => (
          <div
            key={index}
            className="pt[28px] h-[134px] w-[320px] rounded-[12px] border-[rgba(203,213,225,1)] bg-[rgba(255,255,255,1)] px-[24px] pb-[28px] pt-[25.5px]"
            style={{ boxShadow: "0px 1px 18px 0px rgba(10, 57, 176, 0.12)" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-medium leading-[16.94px] text-[rgba(10,10,10,1)]">
                {detail.title}
              </h3>
              <Image
                className=""
                src={detail.icon}
                alt={detail.title || "User Icon"}
                width={24}
                height={24}
              />
            </div>
            <p className="text-[24px] font-semibold leading-[29.05px] text-[rgba(10,10,10,1)]">
              {detail.figure}
            </p>
            <p className="text-[rgba(82, 82, 82, 1)] text-[12px] font-normal leading-[14.52px]">
              {detail.prev_percentage}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
