import { ArrowDown, Play } from "../../../assets/Icons/icons";
import woman from "../../../assets/images/woman.png";

const Video = () => {
  return (
    <section className="hidden md:block">
      <section className="flex justify-center container mx-auto">
        <div className="mb-5">
          <h1 className="text-[#FF674D] font-semibold">Learn more</h1>
          <span className="flex justify-center">
            <ArrowDown />
          </span>
        </div>
      </section>
      <div className="flex relative items-center justify-center container mx-auto">
        <img src={woman} alt="" className="text-center w-full" />
        <span className="absolute ">
          <a
            href="https://youtu.be/qYhkI2Gt3kU"
            className=""
            target="_blank"
          >
            <Play />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Video;
