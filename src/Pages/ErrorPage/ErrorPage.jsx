import { Link } from "react-router-dom";
import img404 from "../../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="flex flex-col justify-center items-center h-screen">
        <img className="mx-auto" src={img404} alt="" />
        <p className="text-4xl font-semibold my-5">Oops!</p>
        <p>{`We're sorry,`}</p>
        <p>{`The page you were looking for doesn't exist anymore.`}</p>
        <Link to="/">
          <button className="bg-[#f4a492] hover:bg-[#9accc9] text-white px-7 py-4 rounded-full ease-in-out duration-300 mt-10">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
