import aboutImg from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-2 gap-8">
        <div className="img p-10">
          <img src={aboutImg} alt="" />
        </div>
        <div className="">
          <h2 className="text-5xl font-semibold">Our Story</h2>
          <p className="text-3xl">Crafting Moments, Creating Memories</p>
          <p>
            At Celebrate Hub, we believe in the magic of celebration. Our
            journey began with a simple idea: to transform events into
            unforgettable experiences. Guided by passion and a commitment to
            excellence, we take pride in curating moments that resonate with
            joy, love, and lasting memories.
          </p>
          <p>
            Our team is a collective of creative minds and meticulous planners,
            dedicated to turning your dreams into reality. From weddings that
            sparkle with romance to birthdays that burst with laughter, we are
            here to add the perfect touch to every occasion. Celebrate Hub is
            more than an event management company; we are storytellers, weaving
            narratives of happiness and celebration. Join us in crafting your
            special moments, because at the heart of every great event is an
            even greater story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
