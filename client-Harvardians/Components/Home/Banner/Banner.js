import { BsArrowRightShort } from "react-icons/bs";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

const Banner = () => {
  return (
    <div
      className=""
      style={{
        background: `url('https://lian-ng.envytheme.com/assets/images/banner/banner-bg-1.jp')`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        opacity: ''
      }}
    >
      <div className="max-w-7xl mx-auto p-10 grid lg:grid-cols-2 gap-5 ">
        <div className="flex justify-center items-center order-2 lg:order-1">
          <div>
            <p className="text-[#457b9d]">Welcome to Lian</p>
            <h2 className="text-3xl lg:text-6xl font-bold mb-5">
              A world-class education is applicable for building the future
            </h2>
            <PrimaryButton>
              <div className="flex justify-start items-center">
                <span>Read more</span>{" "}
                <BsArrowRightShort className="text-2xl" />
              </div>
            </PrimaryButton>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <img
            className="lg:h-[80vh]"
            src="https://lian-ng.envytheme.com/assets/images/banner/banner-img-1.jpg"
            alt="https://lian-ng.envytheme.com/assets/images/banner/banner-img-1.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
