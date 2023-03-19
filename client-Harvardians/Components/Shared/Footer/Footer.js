import Link from "next/link";
import Contributor from "./Contributor";
import SiteMap from "./SiteMap";
import UsefulLinks from "./UsefulLinks";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


const Footer = () => {
  return (
    <div className="bg-[#172f41] text-white">
      <div className="max-w-7xl mx-auto p-5 lg:p-10">
        <div className="grid lg:grid-cols-4 gap-6">
          <div>
            <Link href="/">
              <img
                className="w-20 h-20 bg-white rounded-xl"
                src="/smac.png"
                alt=""
              />
            </Link>
            <p className="text-justify text-sm my-3">
              Lorem ipsum dolor sit amet consec tetur adipi sicing elit. Vero
              voluptas animi, velit corrupti fugit! Ten etur animi susci pit,
              reiciendis ad cons ectetur fugit.
            </p>
            <p className="my-3 text-xl font-semibold">Follow Us</p>
            <div className="flex gap-x-3">
              <Link
                href={"http://morshed-portfolio.netlify.app/"}
                className="p-1 bg-white text-black"
              >
                <TbWorldWww className="text-xl" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/m-morshedul-islam-100/"}
                className="p-1  bg-white text-black"
              >
                <FaLinkedin className="text-xl" />
              </Link>
              <Link
                href={"https://github.com/mmorshedulislam"}
                className="p-1  bg-white text-black"
              >
                <BsGithub className="text-xl" />
              </Link>
              <Link
                href={"https://facebook.com/mmorshedul.islam.100"}
                className="p-1  bg-white text-black"
              >
                <BsFacebook className="text-xl" />
              </Link>
              <Link
                href={"https://www.instagram.com/dev_morshed"}
                className="p-1  bg-white text-black"
              >
                <AiOutlineInstagram className="text-xl" />
              </Link>
            </div>
          </div>
          <div>
            <UsefulLinks />
          </div>
          <div>
            <SiteMap />
          </div>
          <div>
            <Contributor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
