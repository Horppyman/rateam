import contact from "../../assets/images/Contact.png";

const Contact = () => {
  return (
    <section className="container mx-auto p-10">
      <div className="border-2 rounded-lg grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:p-10 p-5">
          <h1 className="text-4xl my-5 text-orange-500 font-bold">
            Get In Touch
          </h1>
          <p className="font-semibold mb-10">
            We are here for you! How can we help?
          </p>
          <form action="" method="">
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="w-full border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#40434a] outline-none  focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Go ahead, We are listening..."
                className="w-full resize-none border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
              ></textarea>
            </div>

            <button className="hover:shadow-form rounded-md bg-[#FF674D] py-3 px-8 text-base font-semibold text-white outline-none w-full">
              Submit
            </button>
          </form>
        </div>
        <div className="lg:pt-10 hidden  lg:flex justify-center items-center">
          <img src={contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
