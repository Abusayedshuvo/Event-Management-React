import PropTypes from "prop-types";

import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ slider }) => {
  const { title, subtitle, btn, bgImg } = slider;
  return (
    <>
      <SwiperSlide>
        <div
          className="slide-1 h-screen bg-no-repeat bg-cover flex justify-center items-center bg-blend-overlay	"
          style={{
            background: `rgb(0 0 0 / 70%) url(${bgImg}) no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-center space-y-5 text-white">
            <h2 className="text-4xl lg:text-7xl font-medium">{title}</h2>
            <p className="text-2xl lg:text-4xl">{subtitle}</p>
            <button className="bg-[#f4a492] hover:bg-[#9accc9] text-white px-7 py-4 rounded-full ease-in-out duration-300">
              {btn}
            </button>
          </div>
        </div>
      </SwiperSlide>
    </>
  );
};

Slider.propTypes = {
  slider: PropTypes.object,
};

export default Slider;
