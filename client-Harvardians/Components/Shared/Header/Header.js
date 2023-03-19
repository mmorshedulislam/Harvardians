import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto p-1">
      <div className="flex items-center justify-between">
        <img className="w-20 h-20 bg-white rounded-xl" src="/smac.png" alt="" />
        <div className="flex gap-x-5">
          <Link href={"/notices"}>Notices</Link>
          <Link href={"/"}>Gallery</Link>
        </div>
        <div className="flex item-center justify-center gap-x-2">
          <PrimaryButton>
            <Link href={"/"} className="">
              Admission
            </Link>
          </PrimaryButton>
          <img
            className="w-10 h-10 bg-white rounded-full"
            src="https://lh3.googleusercontent.com/ogw/AAEL6sidKwuK3aTA2uoaUGjhSY7UHxuuRAbt8_sGL1waAA=s32-c-mo"
            alt="User"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
