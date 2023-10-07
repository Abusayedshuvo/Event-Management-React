import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import Slider from "./Slider";

const Banner = () => {
  const sliderData = [
    {
      title: "Celebrate Love in Style",
      subtitle: "Unforgettable Weddings, Anniversaries, and Engagements",
      btn: "Plan My Special Day",
      bgImg: "https://i.ibb.co/bgMXnQr/silder-1.jpg",
    },
    {
      title: "Joyful Milestones, Memorable Moments",
      subtitle: "Birthdays, Retirements, and Baby Showers Done Right",
      btn: "Create Lasting Memories",
      bgImg: "https://i.ibb.co/Jz45n6b/slider-2.jpg",
    },
    {
      title: "Life's Best Moments, Your Way",
      subtitle: "Tailored Events for Every Occasion",
      btn: "Start Planning Now",
      bgImg: "https://i.ibb.co/Fwc7ZVn/slider-3.jpg",
    },
  ];

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {sliderData.map((slider, index) => (
          <SwiperSlide key={index}>
            <Slider slider={slider}></Slider>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
