import AboutUs from "../../assets/images/About.png";
import CEO from "./Components/CEO";
import WhatIsRateAm from "./Components/WhatIsRateAm";
import WhatWeDo from "./Components/WhatWeDo";
const About = () => {
  return (
    <section className="container mx-auto font-semibold">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
        <div className="col-span-1 ">
          <div className="lg:mt-10 px-5">
            <h1 className="text-5xl font-bold lg:pt-10">About Us</h1>
            <h1 className="mt-5 font-bold md:text-lg">What is RateAm?</h1>
            <p className="leading-8 md:leading-9 md:text-lg">
              RateAm is an idea whose time has come. Amount the many features of
              this product, rating your call experience is certainly the
              highlight. we believe the world is evolving from "Quality of
              Service" to "Quality of Experience" and creating a fun way of
              registering these experiences with the use of emojis/smileys or
              User Generated Contents (pics/videos) will drive significant user
              activity and resonate with different audiences and Business
              community.{" "}
            </p>
          </div>
        </div>
        <div className="col-span-1 ">
          <img src={AboutUs} alt="" />
        </div>
      </div>
      <div className="px-5">
        <h1 className="mt-5 font-semibold md:text-lg">
          Why you should use RateAm?
        </h1>
        <p className="leading-8 md:leading-9 md:text-lg">
          RateAm is one app with several functions. People use it to express and
          communicate their experiences, make connections and discover old and
          new friends who share similar or different experiences around
          networks, grow wealth and run their businesses.
        </p>
      </div>
      <div className="px-5">
        <h1 className="mt-5 font-semibold md:text-lg">Why should you care?</h1>
        <p className="leading-8 md:leading-9 md:text-lg">
          Ever sat down and thought about how many calls you make and receive
          daily? Now multiply that by 356days. Ever imagined monetizing all that
          traffic by multiplying by lets say $1? What if there was a way you
          could see the various network experiences from different areas and
          build friendships doing so.
        </p>
      </div>
      <section className="mt-10">
        <WhatIsRateAm />
        <CEO />
        <WhatWeDo />
      </section>
    </section>
  );
};

export default About;
