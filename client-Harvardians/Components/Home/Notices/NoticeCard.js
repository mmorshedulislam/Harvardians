import { format } from "date-fns";
import Link from "next/link";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

const NoticeCard = () => {
  const date = format(new Date(), "PP");
  return (
    <div>
      <div className="flex gap-x-2">
        <img
          className="w-1/2 lg:w-1/5"
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
