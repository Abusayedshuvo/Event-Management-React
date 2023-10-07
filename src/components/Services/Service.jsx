import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = ({ service }) => {
  const { id, name, image, price, shortDescription, buttonText } = service;
  return (
    <div>
      <img src={image} alt="" />
      <div className="bg-slate-100 p-5 space-y-4">
        <p className="text-[#f4a492] text-2xl font-semibold">{price}</p>
        <h2 className="font-semibold text-lg"> {name} </h2>
        <p>{shortDescription}</p>
        <div>
          <Link to={`/services/${id}`}>
            <button className="text-[#f4a492] hover:text-[#9accc9] font-semibold flex justify-center items-center gap-3">
              {buttonText}
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
