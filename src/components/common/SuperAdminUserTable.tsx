import Image from "next/image";

export default function SuperAdminUserTable() {
  return (
    <div>
      <nav className="flex items-center justify-between pl-[52px]">
        <div className="">
          <h2 className="text-[28px] font-semibold leading-[33.89px] text-[rgba(10,10,10,1)]">
            Users
          </h2>
          <p className="py-[10px] text-[16px] font-normal leading-[19.36px] text-[rgba(10,10,10,1)]">
            Manage Users & Track Activity
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="flex w-[88px] items-center gap-[10px] rounded-sm border-[0.5px] border-[rgba(203,213,225,1)] px-[10px] py-[8px]">
            <Image
              className=""
              src="/superadmin-images/filter-icon.svg"
              alt="filter"
              width={20}
              height={20}
            />
            <span className="text-[16px] font-normal leading-[19.36px] text-[rgba(82,82,82,1)]">
              Filter
            </span>
          </button>

          <button className="flex w-[151px] items-center gap-[8px] rounded-[6px] bg-[rgba(249,115,22,1)] px-[16px] py-[8px] text-[rgba(255,255,255,1)]">
            <Image
              className=""
              src={"/superadmin-images/add-new-user.svg"}
              alt="new user"
              width={16}
              height={16}
            />

            <span className="text-[14px] font-medium leading-[24pxx]">
              Add New user
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
