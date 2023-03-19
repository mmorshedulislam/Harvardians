import PrimaryButton from "../../Shared/Buttons/PrimaryButton";
import { BsArrowRightShort } from "react-icons/bs";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 lg:p-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="border-solid border-[16px] border-red-700">
          <div className="relative">
            <div className="absolute top-[10] left-[10] border-[10px]">
              <img
                className=""
                src="https://lian-ng.envytheme.com/assets/images/about-img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-xl text-red-500">About our university</h5>
          <h2 className="text-5xl font-bold">
            Our education system inspires the next generation
          </h2>
          <p className="text-justify my-4">
            Curabitur aliquet quam id dui posuere blandit. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum
            congue leo eget malesuada. Pellentesque in ipsum id orci porta
            dapibus. Proin eget tortor risus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit.
          </p>
          <PrimaryButton>
            <div className="flex justify-start items-center">
              <span>Find out more!</span> <BsArrowRightShort className="text-2xl" />
            </div>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default About;
