import React from "react";

const Partnership = () => {
  return (
    <>
      <div className="px-3">
        <h1 className="md:text-xl text-lg font-semibold bg-[#E7E7FF] rounded p-3">
          Partnership
        </h1>
        <div className="border  shadow-md text-gray-400  px-5 my-5">
          <h1 className="text-3xl font-bold my-4">RateAm for Bank SMEs</h1>
          <p className="font-normal my-4">
            Banks, when SMEs open accounts with our financial partners they
            automatically get customized ads that connects their <br />{" "}
            businesses targeted to daily mobile phone users. <br /> How it
            works_ These ads are to be run once a month and the SME must always
            have a minimum balance of N2k or fund the <br /> account every month
            with 2k
          </p>
        </div>
        {/* second card */}
        <div className="border  shadow-md   px-5 my-5">
          <h1 className="text-3xl font-bold my-4">
            RateAm for Network providers
          </h1>
          <p className="font-medium my-5">
            Although operators have monitored performance from when the first
            networks were built, there still often remains a disconnect between{" "}
            <br />
            their technical engineering tests and the typical experience of
            everyday users. Full 360 degree appreciation of any network's total{" "}
            <br />
            range of relative strength and weakness thus required input by or
            feedback from crowds of users: crowdsourcing big data.
          </p>

          <button
            type="button"
            class="text-white bg-[#7776BC] text-xl px-3 mr-2 mb-5 py-1"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Partnership;
