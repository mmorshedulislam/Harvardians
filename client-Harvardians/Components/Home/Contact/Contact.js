import { CiLocationOn } from "react-icons/ci";
import { BsFillEnvelopeFill, BsFacebook } from "react-icons/bs";
import { AiOutlinePhone, AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-5xl text-center font-bold">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] my-10">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59103.3516974368!2d91.79388153125!3d22.203646100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad1fbd60b52469%3A0xf2c5127498c552dd!2sHazrat%20Shah%20Mohsen%20Aulia%20(Rh.)%20College!5e0!3m2!1sen!2sbd!4v1679158048170!5m2!1sen!2sbd"
            style={{
              border: "0",
              width: "100%",
              height: "500px",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-[#172F41] text-white p-10 lg:p-20">
          <div>
            <h2 className="font-bold text-2xl">Get in Touch</h2>
            <p className="flex gap-x-2 my-6 items-center hover:text-red-600">
              <CiLocationOn className="text-2xl text-red-600" />
              <span>Chittagong, Bangladesh.</span>
            </p>
            <p className="flex gap-x-2 my-6 items-center hover:text-red-600">
              <BsFillEnvelopeFill className="text-2xl text-red-600" />
              <Link href={"mailto:morshed952640@gmail.com"}>
                morshed952640@gmail.com
              </Link>
            </p>
            <p className="flex gap-x-2 my-6 items-center hover:text-red-600">
              <AiOutlinePhone className="text-2xl text-red-600" />
              <span>
                <Link href={"tel:+88 01861952640"}>+88 01861952640</Link>
              </span>
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Follow Us</h2>
            <div className="flex gap-x-3 my-5">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
