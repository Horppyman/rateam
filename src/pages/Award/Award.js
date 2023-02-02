import React from "react";
import Banner from "./Component/Banner";

const Award = () => {
  return (
    <div className="container mx-auto">
      <div className="flex my-10 items-center px-5 lg:px-0 md:mx-5 mx-2">
        <h1 className="lg:text-4xl md:text-2xl text-sm sm:text-base flex-shrink-0 ">
          Telecom CX Choice Network Award
        </h1>
        <div className="h-6 w-full bg-gray-300 lg:mx-10 mx-5"></div>
      </div>
      <>
        <div className="container min-h-[77vh] mx-auto md:px-16 my-10 px-4">
          <div className="shadow-lg p-5 border ">
            <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 my-10 px-5">
              {/* first */}
              <div className="lg:w-56">
                <select
                  id="countries"
                  className="bg-gray-100 border border-gray-300  appearance-none md:text-lg text-red-600 rounded-lg outline-none block w-full p-2.5 "
                >
                  <option selected>Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Morroco">Morroco</option>
                </select>
              </div>
              {/* second */}
              <div className="lg:w-56">
                <select
                  id="countries"
                  className="bg-gray-100 border border-gray-300  appearance-none md:text-lg text-red-600 rounded-lg outline-none block w-full p-2.5 "
                >
                  <option selected>2022</option>
                  <option value="One Week">2023</option>
                </select>
              </div>
              {/* third */}
              <div className="lg:w-56">
                <button className="px-6 py-3 bg-[#ff674d] text-white rounded">
                  See result
                </button>
              </div>
            </div>
            <section className="my-10">
              <Banner />
            </section>
          </div>
        </div>
        <section className="h-64"></section>
      </>
    </div>
  );
};

export default Award;
