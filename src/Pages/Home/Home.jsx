import { Helmet } from "react-helmet-async";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Services from "../../components/Services/Services";
import Banner from "./../../components/Banner/Banner";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Assignment 9 | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Blog></Blog>
    </>
  );
};

export default Home;
