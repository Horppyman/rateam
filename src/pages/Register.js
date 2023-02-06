import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/rate-am.png";

const Register = () => {
  return (
    <div className="flex bg-white h-screen">
      <div className="w-full p-5  lg:w-1/2">
        <a href="/" className="flex items-center order-2 lg:order-1">
          <img src={logo} className=" mr-3 h-7" alt="" />
        </a>
        {/* start */}
        <div className="max-w-lg flex items-center mx-auto my-auto">
          <div className="grow">
            <p className="text-2xl font-extrabold tracking-wide mt-5 text-center">
              Lets Get Started{" "}
            </p>

            <form action="" className="mt-5 mb-10">
              <div className="flex flex-col space-y-3">
                <label for="fullName">
                  <p className="font-medium text-slate-700 pb-2">Full Name</p>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter your full name"
                  />
                </label>
                <label for="businessName">
                  <p className="font-medium text-slate-700 pb-2">
                    Business Name
                  </p>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter your business name"
                  />
                </label>
                <label for="email">
                  <p className="font-medium text-slate-700 pb-2">Email</p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter email address"
                  />
                </label>
                <label for="password">
                  <p className="font-medium text-slate-700 pb-2">Password</p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter your password"
                  />
                </label>
                <div className="flex flex-row justify-between">
                  <div>
                    <label for="remember" className="">
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 mr-2 border-slate-200 focus:bg-indigo-600"
                      />
                      Remember me
                    </label>
                  </div>
                </div>
                <button className="w-full py-3 font-medium text-white bg-[#ff674d] hover:bg-[#ff674d] rounded-lg border-[#ff674d] hover:shadow inline-flex space-x-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Sign up</span>
                </button>
                <p className="text-center  font-bold">Or</p>
                <a
                  href="#"
                  className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                >
                  <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                  <Link
                    to="/login"
                    className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold"
                  >
                    Sign in with Google
                  </Link>
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* end */}
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div
          className={`h-full object-cover register`}
          //   style={{ backgroundImage: "../assets/images/login.png" }}
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
