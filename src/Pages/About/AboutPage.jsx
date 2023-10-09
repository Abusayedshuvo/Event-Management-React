import { Link } from "react-router-dom";
import About from "../../components/About/About";
import { Helmet } from "react-helmet-async";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="text-sm py-20 bg-slate-100 mb-16">
        <h2 className="text-5xl font-semibold text-center mb-10">About Us</h2>
        <div className="container mx-auto breadcrumbs text-center">
          <ul className="justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <About></About>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
};

export default AboutPage;
