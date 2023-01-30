import React from "react";

const Faq = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-gray-600 font-semibold">FAQ</h1>
      <section>
        <div className=" mx-auto px-5 bg-white max-w-screen-xl">
          <div className="flex flex-col items-center">
            <p className="text-neutral-500 text-xl mt-3">
              Frequenty asked questions
            </p>
          </div>
          <div className="grid gap-5  max-w-5xl mx-auto mt-8">
            <div className="py-5 border-black rounded-lg px-2 border-2">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
                  <span> Why should i use RateAm service?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  RateAm is a legitimate way to monetize your precious call
                  traffic. Because its an honest living it is also a sustainable
                  affiliate business model! Make money and have a clean
                  conscience!
                </p>
              </details>
            </div>
            <div className="py-5  border-black rounded-lg px-2 border-2">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
                  <span> What is thriftpay and how does it work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a variety of billing options, including monthly and
                  annual subscription plans, as well as pay-as-you-go pricing
                  for certain services. Payment is typically made through a
                  credit card or other secure online payment method.
                </p>
              </details>
            </div>
            <div className="py-5  border-black rounded-lg px-2 border-2">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
                  <span> What is ANPL?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>
            <div className="py-5  border-black rounded-lg px-2 border-2">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
                  <span>
                    {" "}
                    As an Enterprise Business, how can this service benefit me?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  To cancel your We subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
            <div className="py-5  border-black rounded-lg px-2 border-2">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
                  <span> How can i borrow airtime?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a free trial of its platform for a limited time.
                  During the trial period, you will have access to a limited set
                  of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
