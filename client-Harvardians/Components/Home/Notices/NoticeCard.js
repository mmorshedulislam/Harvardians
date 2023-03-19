import { format } from "date-fns";
import Link from "next/link";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

const NoticeCard = () => {
  const date = format(new Date(), "PP");
  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr] gap-x-5">
        <img
          src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
          alt=""
        />
        <div>
          <Link href={"/"} className="text-xl lg:text-2xl font-semibold">
            HSC Result has been published...
          </Link>
          <p>{date}</p>
          <Link href={"/"}>
            <PrimaryButton>Details</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
