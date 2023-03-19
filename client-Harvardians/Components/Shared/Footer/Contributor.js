import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";

const Contributor = () => {
  return (
    <>
      <h3 className="text-xl font-semibold">Contributed by</h3>
      <div className="grid grid-cols-[1fr_2fr] gap-2 mt-5">
        <img
          className="border-2 rounded-xl"
          src="/morshed.jpg"
          alt="Md Morshedul Islam"
        />
        <div>
          <h2 className="font-bold">Md Morshedul Islam</h2>
          <h3 className="font-semibold">Web Developer</h3>
          <p>HSC Batch - 2020</p>
        </div>
      </div>
      <p className="my-3 text-xl font-semibold">Find Me On</p>
      <div className="flex gap-x-3">
        <Link
          href={"http://morshed-portfolio.netlify.app/"}
          className="p-1 bg-white text-black rounded-full "
        >
          <TbWorldWww className="text-xl" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/m-morshedul-islam-100/"}
          className="p-1  bg-white text-black rounded-full"
        >
          <FaLinkedin className="text-xl" />
        </Link>
        <Link
          href={"https://github.com/mmorshedulislam"}
          className="p-1  bg-white text-black rounded-full"
        >
          <BsGithub className="text-xl" />
        </Link>
        <Link
          href={"https://facebook.com/mmorshedul.islam.100"}
          className="p-1  bg-white text-black rounded-full"
        >
          <BsFacebook className="text-xl" />
        </Link>
        <Link
          href={"https://wa.me/+8801861952640"}
          className="p-1  bg-white text-black rounded-full"
        >
          <FaWhatsapp className="text-xl" />
        </Link>
        <Link
          href={"https://www.instagram.com/dev_morshed"}
          className="p-1  bg-white text-black rounded-full"
        >
          <AiOutlineInstagram className="text-xl" />
        </Link>
      </div>
    </>
  );
};

export default Contributor;
