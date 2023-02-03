import React from "react";
import { Link } from "react-router-dom";
import complete from "../assets/images/Completed.png";

const Success = () => {
  return (
    <div className="h-[95vh] w-screen flex flex-col justify-center items-center ">
      <div className="">
        <img src={complete} alt="" className="mx-auto" />
        <h1 className="text-4xl font-semibold text-center mt-5">Completed</h1>
        <p className="text-center font-semibold text-sm mt-3">
          You have been successfully added to the wait-list.
        </p>
        <p className="my-16 font-semibold">
          You will be notified via email when the dashboard is ready. Thank you!
        </p>
      </div>
      <Link to="/" className="font-bold text-sm tracking-wider text-[#ff674d]">
        Return to Home page
      </Link>
    </div>
  );
};

export default Success;
