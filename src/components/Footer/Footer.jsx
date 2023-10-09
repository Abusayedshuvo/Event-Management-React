import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaCaretRight,
} from "react-icons/fa6";
import moment from "moment/moment";

const Footer = () => {
  return (
    <div
      className="bg-slate-100 py-20 px-4 lg:px-0"
      data-aos="fade-up"
      data-aos-duration="2200"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl text-[#f4a492] font-semibold mb-5">
              Celebrate Hub
            </p>
            <p>
              At Celebrate Hub, we believe in the magic of celebration. Our
              journey began with a simple idea: to transform events into
              unforgettable experiences. Guided by passion and a commitment to
              excellence, we take pride in curating moments that resonate with
              joy, love, and lasting memories.
            </p>

            <div className="social pt-8 flex gap-5">
              <a
                className="bg-[#9accc9] hover:bg-[#f4a492] text-white p-3 text-center rounded-full"
                href="#"
              >
                <FaFacebookF />
              </a>
              <a
                className="bg-[#9accc9] hover:bg-[#f4a492] text-white p-3 text-center rounded-full"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="bg-[#9accc9] hover:bg-[#f4a492] text-white p-3 text-center rounded-full"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="bg-[#9accc9] hover:bg-[#f4a492] text-white p-3 text-center rounded-full"
                href="#"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
            <div className="md:ps-20">
              <p className="text-2xl font-semibold mb-7">Company Info</p>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="flex gap-2 hover:text-[#f4a492]  items-center"
                  >
                    <FaCaretRight />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex gap-2 hover:text-[#f4a492]  items-center"
                  >
                    <FaCaretRight />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="flex gap-2 hover:text-[#f4a492]  items-center"
                  >
                    <FaCaretRight />
                    <span>Blog</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold mb-7">Contact Us</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <FaPhone />
                <a href="tel:+018123456789">+018123456789</a>
              </div>
              <div className="flex gap-3">
                <FaPhone />
                <a href="tel:+018123456789">+018123456789</a>
              </div>
              <div className="flex gap-3">
                <FaEnvelope />
                <a href="mailto: yourmail@gmail.com">yourmail@gmail.com</a>
              </div>
              <div className="flex gap-3">
                <FaEnvelope />
                <a href="mailto: yourmail@gmail.com">yourmail@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <p className="text-center">
          Copyright ©{moment().format("yyyy")} <b> Celebrate Hub </b> All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
