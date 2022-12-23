import { Globe } from "../../../assets/Icons/icons";

const OrangeGlobe = () => {
  return (
    <div className="bg-[#FF674D] mt-16 text-white ">
      <div className="flex items-center pt-10 justify-center">
        <Globe />
      </div>
      <div className="text-center">
        <p className="md:leading-9 leading-7 px-2 md:px-0 tracking-wide text-xs md:text-base">
          We want to give telecom users a voice. A means to share their network
          experiences and get the attention of their providers. <br />
          Our mission is to be the new leader in mobile advertising in Nigeria
          and beyond. We aim to create high visibility <br />
          for brands among the affluent smartphone users with data connectivity.
        </p>
      </div>
      <div className="h-28"></div>
    </div>
  );
};

export default OrangeGlobe;
