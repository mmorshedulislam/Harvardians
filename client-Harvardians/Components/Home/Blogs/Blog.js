import { AiOutlineCalendar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import format from "date-fns/format";
import Link from "next/link";

const Blog = ({ img }) => {
  const date = format(new Date(), "PPPP");

  return (
    <div>
      <img src={img?.img} alt="" />
      <p className="flex gap-x-2 items-center mt-2">
        <AiOutlineCalendar className="text-xl" />
        <span>{date}</span>
      </p>
      <h2 className="text-2xl font-semibold my-3">
        Lorem ipsum dolor sit amet...
      </h2>
      <p className="text-justify text-black-50">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        quidem repudiandae culpa doloremque aliquam aspernatur sed sapiente
        dolor ex corrupti.
      </p>
      <Link
        href={"/"}
        className="font-semibold tracking-wide mt-3 flex items-center"
      >
        <span>Find out more!</span> <BsArrowRightShort className="text-2xl" />
      </Link>
    </div>
  );
};

export default Blog;
