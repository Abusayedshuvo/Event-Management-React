import aboutImg from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="relative col-span-2">
          <div className="img p-10">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="col-span-3 my-auto">
          <div className="ps-10 mt-10 md:mt-0">
            <h2 className="text-5xl font-semibold mb-5">Our Story</h2>
            <p className="text-3xl mb-5">Crafting Moments, Creating Memories</p>
            <p className="mb-3">
              At Celebrate Hub, we believe in the magic of celebration. Our
              journey began with a simple idea: to transform events into
              unforgettable experiences. Guided by passion and a commitment to
              excellence, we take pride in curating moments that resonate with
              joy, love, and lasting memories.
            </p>
            <p>
              Our team is a collective of creative minds and meticulous
              planners, dedicated to turning your dreams into reality. From
              weddings that sparkle with romance to birthdays that burst with
              laughter, we are here to add the perfect touch to every occasion.
              Celebrate Hub is more than an event management company; we are
              storytellers, weaving narratives of happiness and celebration.
              Join us in crafting your special moments, because at the heart of
              every great event is an even greater story.
            </p>
            <div className="mt-10">
              <button className="bg-[#f4a492] hover:bg-[#9accc9] text-white px-7 py-4 rounded-full ease-in-out duration-300">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
