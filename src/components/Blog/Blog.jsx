import moment from "moment";
import { FaUserLarge, FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-5xl font-semibold text-center mb-10">Latest Blog</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative">
          <img src="https://i.ibb.co/FnLgZhj/06.jpg" alt="" />
          <p className="text-2xl font-semibold my-5">
            5 Ideas for Fun Family Activities
          </p>
          <p>
            {` Looking for some fun family activities to enjoy together? Check out
            these five ideas that are sure to create lasting memories. From
            exploring nature to getting creative with arts and crafts, there's
            something for everyone to enjoy.`}
          </p>
          <div className="mt-5 flex justify-between">
            <span className="flex gap-2 items-center">
              <FaUserLarge className="text-[#f4a492]" /> Abusayed Shuvo
            </span>
            <span className="flex gap-2 items-center">
              <FaClock className="text-[#f4a492]" />{" "}
              {moment().format("MMMM D, YYYY")}
            </span>
          </div>
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/84d4k8J/05.jpg" alt="" />
          <p className="text-2xl font-semibold my-5">Best Event Ticket Deals</p>
          <p>
            {` Looking for the best event ticket deals? Look no further than
            Eventchamp! We've rounded up the top deals on tickets to the hottest
            concerts, festivals, and sporting events. Don't miss out on your
            chance to save big on your next big night out!`}
          </p>
          <div className="mt-5 flex justify-between">
            <span className="flex gap-2 items-center">
              <FaUserLarge className="text-[#f4a492]" /> Abusayed Shuvo
            </span>
            <span className="flex gap-2 items-center">
              <FaClock className="text-[#f4a492]" />{" "}
              {moment().format("MMMM D, YYYY")}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          className="font-semibold text-[#f4a492] hover:text-[#9accc9] border-2 px-6 py-3"
          to="/blog"
        >
          All Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blog;
