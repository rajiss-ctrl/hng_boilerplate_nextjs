import SuperAdminUserDetails from "~/components/common/SuperAdminUserDetails";
import SuperAdminUserTable from "~/components/common/SuperAdminUserTable";

export default function SuperAdminUserDetail() {
  return (
    <div className="w-[1142px] pl-[30px] pr-[120px]">
      <div className="pt-[24px]">
        <SuperAdminUserDetails />
      </div>
      <div className="pt-[32px]">
        <SuperAdminUserTable />
      </div>
    </div>
  );
}
